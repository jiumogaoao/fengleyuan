<template>
	<view class="content">
		<view class="readOnly" v-if="readOnly"></view>
		<block v-if="step==0">
			<view class="list">
				<view class="row b-b" key="b0s1">
					<text class="tit">商户名称</text>
					<input class="input" type="text" placeholder="请输入营业执照上的公司全称" placeholder-class="placeholder" v-model="business_name"/>
				</view>
				<view class="row b-b" key="b1s1">
					<text class="tit">商户分类</text>
					<picker @change="bindPickerChange" :value="typeIndex" :range="typeList" range-key="name">
						<view :class="typeIndex||typeIndex==0?'input':'placeholder'">{{typeIndex||typeIndex==0?typeList[typeIndex].name:'点击选择'}}</view>
					</picker>
				</view>
				<view class="row b-b" key="b2s1">
					<text class="tit">社会信用代码</text>
					<input class="input" type="text" placeholder="请输入营业执照得信用代码" placeholder-class="placeholder" v-model="credit_code"/>
				</view>
				<view class="picRow" key="b3s1">
					<view class="tit">营业执照照片</view>
					<view class="picList">
						<image class="pic" :src="business_license?business_license:'/static/uploadPIC.png'" @click="uploadPIC"></image>
					</view>
				</view>
			
			</view>
			<button class="add-btn" @click="next">下一步</button>
		</block>
		<block v-if="step==1">
			<view class="list">
				<view class="row b-b" key="b0s2">
					<text class="tit">所在地址</text>
					<picker mode="multiSelector" :range="optionList" range-key="name" @columnchange="placeChange" @change="placeChange2" @cancel="placeCancel">
						<view :class="{placeholder:!province&&!city&&!area,input:province||city||area}" v-if="!province&&!city&&!area">省-市-区</view>
						<view class="input" v-else>{{province||'--'}} {{city||'--'}} {{area||'--'}}</view>
					</picker>
				</view>
				<view class="row b-b" key="b1s2">
					<text class="tit">详细地址</text>
					<input class="input" type="text" placeholder="如:街道/小区/门牌号" placeholder-class="placeholder" v-model="address"/>
				</view>
				<view class="row b-b" key="b2s2">
					<text class="tit">联系电话</text>
					<input class="input" placeholder="请输入联系电话" placeholder-class="placeholder" v-model="phone" type="number"/>
				</view>
			
			</view>
			<button class="add-btn" @click="next2" v-if="readOnly">下一步</button>
			<button class="add-btn" @click="next2" v-else>提交申请</button>
			<view class="bottomText">
				<view class="dsc">点击“确认申请”后，即表示已阅读并同意</view>
				<view class="low">《法律条款与隐私政策》</view>
			</view>
		</block>
		<block v-if="step==2">
			<view class="list">
				<view class="row b-b" key="b0s3">
					<text class="tit">客户联系人</text>
					<input class="input" type="text" placeholder="默认为当前用户" placeholder-class="placeholder" v-model="contacts"/>
				</view>
				<view class="row b-b" key="b1s3">
					<text class="tit">客服联系电话</text>
					<input class="input" placeholder="请输入联系电话" placeholder-class="placeholder" v-model="customer" type="number"/>
				</view>
				<view class="areaRow b-b" key="b2s3">
					<view class="tit">商品介绍</view>
					<textarea placeholder="请在此输入您的商家介绍(400字内)" v-model="introduction"></textarea>
				</view>
			</view>
			<button class="add-btn" v-if="readOnly">审核中</button>
			<button class="add-btn" @click="confirm" v-else>确定</button>
		</block>
	</view>
</template>

<script>
	import allpage from '@/mixin/allPage'
	import simpleAddress from "@/components/simple-address/simple-address.nvue"
	import cityJSON from "@/static/city_code.json"
	import {postFetch} from '@/util/request_UT.js'
	export default {
		mixins:[allpage],
		comments:{
			simpleAddress
		},
		data() {
			return {
				step:0,
				typeList:[],
				optionProvince:cityJSON,
				optionCity:cityJSON[0].city,
				optionArea:cityJSON[0].city[0].area,
				business_name:this.$store.state.userST.business_name||'',
				business_class:this.$store.state.userST.business_class||'',
				credit_code	:this.$store.state.userST.credit_code||'',
				business_license:this.$store.state.userST.business_license||'',
				province:this.$store.state.userST.province||'',
				city:this.$store.state.userST.city||'',
				area: this.$store.state.userST.area||'',
				address:this.$store.state.userST.address||'',
				phone:this.$store.state.userST.phone||'',
				contacts:this.$store.state.userST.contacts||'',
				customer:this.$store.state.userST.customer||'',
				introduction:this.$store.state.userST.introduction||'',
				typeIndex:null,
				readOnly:0
			}
		},
		computed:{
			optionList(){
				return [this.optionProvince,this.optionCity,this.optionArea]
			}
		},
		onLoad(option){
			let _this = this;
			if(option.edit){
				uni.setNavigationBarTitle({
					title:'商家信息管理'
				})
			}else if(option.type==1){
				_this.readOnly=1
				uni.setNavigationBarTitle({
					title:'商家信息'
				})
			}
			postFetch('index.php/index/business/business_class',{id:this.$store.state.userST.id,user_token:this.$store.state.userST.user_tooken},false,function(res){
							if(res.data.status!==200){
								uni.showToast({
									title:res.data.msg,
									icon:'none'
								})
							}else{
								_this.$set(_this,"typeList",res.data.data)
								if(_this.$store.state.userST.business_class){
									res.data.data.map(function(v,i){
										if(_this.$store.state.userST.business_class==v.id){
											_this.typeIndex = i
										}
									})
								}
							}	
						})
			
		},
		methods: {
			bindPickerChange(e){
				console.log('placeChange',e.detail)
				this.business_class=this.typeList[Number(e.detail.value)].id
				this.typeIndex=Number(e.detail.value)
			},
			uploadPIC(){
				let _this = this;
				uni.chooseImage({
					count:1,
					sizeType:'compressed',
					success:function(e){
						plus.zip.compressImage(  
						                  {  
						                    src: e.tempFilePaths[0],  
						                    dst: "_doc/a.jpg",  
						                    overwrite: true,  
						                    width: '1024px',  
						                    height:'768px',  
						                    format: 'jpg',  
						                    quality: 70  
						                  },  
						                  function(e2) {  
						                    var reader = new plus.io.FileReader();  
						                        reader.onloadend = function (e3) {  
													console.log("e3.target.result",e3.target.result)
						                            _this.business_license = e3.target.result;//base64图片                           
						                        };  
						                    reader.readAsDataURL(e2.target);  
						                  },  
						                  function(err) {  
						                    plus.nativeUI.alert('未知错误！',function() {  
						                    });  
						                  }  
						                );  
					},
					fail:function(){

					}
				})
			},
			placeChange(e){
				let _this = this;
				console.log('placeChange',e.detail)
				if(e.detail.column==0){
					_this.$set(_this,'optionCity',_this.optionProvince[e.detail.value].city)
					_this.$set(_this,'optionArea',_this.optionProvince[e.detail.value].city[0].area)
				}else if(e.detail.column==1){
					_this.$set(_this,'optionArea',_this.optionCity[e.detail.value].area)
				}
			},
			placeChange2(e){
				console.log('placeChange2',e.detail)
				this.province=this.optionProvince[e.detail.value[0]].name
				this.city=this.optionCity[e.detail.value[1]].name
				this.area=this.optionArea[e.detail.value[2]].name
			},
			placeCancel(e){
				console.log('placeCancel',e.detail)
			},
			//提交
			confirm(){
				let _this=this;
				postFetch('index.php/index/business/updata_business',{
					id:this.$store.state.userST.id,
					user_token:this.$store.state.userST.user_tooken,
						business_name:this.business_name,
						business_class:this.business_class,
						credit_code:this.credit_code,
						business_license:this.business_license,
						province:this.province,
						area: this.area,
						city:this.city,
						address:this.address,
						phone:this.phone,
						customer:this.customer,
						contacts:this.contacts,
						introduction:this.introduction
					},false,function(res){
						if(res.data.status != 200){
							uni.showToast({
								title:res.data.msg,
								icon:'none'
							})
						}else{
							uni.showToast({
								title:'提交成功，请耐心等待审核',
								icon:'none'
							})
							_this.$store.dispatch('userST/setBusiness',{is_examine:0,..._this});
							uni.navigateBack()
						}
				})
			},
			next(){
				if(!this.business_name){
					uni.showToast({
						title:'请填写商户名称',
						icon:'none'
					})
					return;
				}
				if(!this.business_class&&this.business_class != 0){
					uni.showToast({
						title:'请选择商户分类',
						icon:'none'
					})
					return;
				}
				if(!this.credit_code){
					uni.showToast({
						title:'请填写信用代码',
						icon:'none'
					})
					return;
				}
				if(!this.business_license){
					uni.showToast({
						title:'请上传营业执照',
						icon:'none'
					})
					return;
				}
				this.step = 1
			},
			next2(){
				if(!this.province||!this.city||!this.area){
					uni.showToast({
						title:'请选择地区',
						icon:'none'
					})
					return
				}
				if(!this.address){
					uni.showToast({
						title:'请填写详细地址',
						icon:'none'
					})
					return
				}
				if(!this.phone){
					uni.showToast({
						title:'请填写联系电话',
						icon:'none'
					})
					return
				}
				this.step = 2
			}
		}
	}
</script>

<style lang="scss">
	page{
		background: $page-color-base;
		padding-top: 16upx;
	}
	.readOnly{
		width:750rpx;
		position: absolute;
		top:0;
		left: 0;
		height: 800rpx;
		z-index: 99999;
	}
	.b-t:after{
		border: 0 !important;
	}
	.list{
		width:750rpx;
		background-color: #fff;
		margin-top: 19rpx;
		padding: 0 25rpx 38rpx 48rpx;
	}
	.row{
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		height: 77upx;
		.tit{
			flex-shrink: 0;
			width: 177rpx;
			font-size:26rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(34,34,34,1);
		}
		.addressLabel{
			font-size:26rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(34,34,34,1);
			margin:0 20rpx;
		}
		.input{
			flex: 1;
			font-size:26rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(34,34,34,1);
			text-align: right;
		}
		.placeholder{
			font-size:26rpx;
			font-family:PingFang SC;
			font-weight:500;
		}
		.icon-shouhuodizhi{
			font-size: 36upx;
			color: $font-color-light;
		}
	}
	.default-row{
		margin-top: 16upx;
		.tit{
			flex: 1;
		}
		switch{
			transform: translateX(16upx) scale(.9);
		}
	}
	// <view class="picRow">
	// 			<view class="tit">营业执照照片</view>
	// 			<image class="pic" src="/static/uploadPIC.png"></image>
	// 		</view>
	.picRow{
		width: 100%;
		padding: 35rpx 0 19rpx 0;
		.tit{
			font-size:26rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(34,34,34,1);
		}
		.picList{
			margin-top: 15rpx;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			.pic{
				width:167rpx;
				height:167rpx;
			}
		}
	}
	.areaRow{
		width: 100%;
		padding: 35rpx 0 19rpx 0;
		border-bottom: 1px solid #E4E7ED;
		.tit{
			font-size:26rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(34,34,34,1);
		}
		textarea{
			margin-top: 10rpx;
			font-size:26rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(34,34,34,1);
			height: 150rpx;
		}
	}
	.add-btn{
		width:625rpx;
		height:83rpx;
		background:rgba(250,197,35,1);
		border-radius:42rpx;
		font-size:28rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(255,255,255,1);
		line-height:83rpx;
		text-align: center;
		position: fixed;
		left: 63rpx;
		bottom:132rpx;
	}
	.bottomText{
		width: 750rpx;
		position: fixed;
		left: 0;
		bottom:47rpx;
		.dsc{
			font-size:23rpx;
			font-family:PingFang SC;
			font-weight:400;
			color:rgba(153,153,153,1);
			text-align: center;
		}
		.low{
			font-size:23rpx;
			font-family:PingFang SC;
			font-weight:400;
			color:#222222;
			text-align: center;
			margin-top: 10rpx;
		}
	}
</style>