<template>
	<pageCP>
	<view class="content">
		<view class="list">
			<view class="row b-b">
				<text class="tit">商品名称<text class="must">*</text></text>
				<input class="input" type="text" placeholder="请输入商品名称" placeholder-class="placeholder" v-model="title"/>
			</view>
			<view class="row b-b">
				<text class="tit">快递费用<text class="must">*</text></text>
				<input class="input" type="number" placeholder="请输入快递费用" placeholder-class="placeholder" v-model="brief"/>
			</view>
			<view class="areaRow b-b">
				<view class="tit">商品简介</view>
				<textarea placeholder="请输入商品的简介(100字内)" v-model="desc"></textarea>
			</view>
			<view class="row b-b">
				<text class="tit">商品保障<text class="must">*</text><text class="tdes">（可多选）</text></text>
				<view class="input" @click="toggleSalePop">点击选择商品保障</view>
			</view>
			<view class="row b-b">
				<text class="tit">下架时间<text class="must">*</text></text>
				<input class="input" type="number" placeholder="请输入下架时间,YYYY-MM-DD hh:mm:ss " placeholder-class="placeholder" v-model="endtime"/>
			</view>
			<view class="picRow">
				<view class="tit">商品主图<text class="must">*</text><text class="tdes">（可多选）</text></view>
				<view class="dsc">建议尺寸540*520px，图片大小不超过1M。</view>
				<view class="picList">
					<view class="newPicFrame" v-if="thumb_url.length" v-for="(v,i) in thumb_url" :key="i">
						<image :src="v" class="newPic"></image>
						<image class="removePic" src="/static/removePic.png" @click="removePic(i,'thumb_url')"></image>
					</view>
					<image class="pic" src="/static/uploadGoodPic.png" @click="uploadPIC('thumb_url')"></image>
				</view>
			</view>
			<view class="picRow">
				<view class="tit">商品详情页<text class="must">*</text><text class="tdes">（可多选）</text></view>
				<view class="picList">
					<view class="newPicFrame" v-if="img_url.length" v-for="(v,i) in img_url" :key="i">
						<image :src="v" class="newPic"></image>
						<image class="removePic" src="/static/removePic.png" @click="removePic(i,'img_url')"></image>
					</view>
					<image class="pic" src="/static/uploadDetailPic.png" @click="uploadPIC('img_url')"></image>
				</view>
			</view>
		</view>
		<view style="width:750rpx;height:200rpx"></view>
		<button class="add-btn" @click="confirm">下一步</button>
		<view class="popFrame" v-if="salePop" @click="toggleSalePop">
			<view class="pop" @click.stop="stopPrevent">
				<view class="popTop">
					<!-- <view class="cancel" @click="togglePop">取消</view> -->
					商品保障
				</view>
				<view class="popList" v-if="selguarantee.length" v-for="(v,i) in selguarantee" :key="i">
					<view class="popLeft">
						<view class="title">{{v.centent}}</view>
					</view>
					<image class="choose" :src="guarantee[v.id]?'/static/selected.png':'/static/select.png'" @click="toggleSelguarantee(v.id)"></image>
				</view>
				<view class="button" @click="toggleSalePop">完成</view>
			</view>
		</view>
	</view>
	</pageCP>
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
				salePop:false,
				selguarantee:[],
				title:'',//标题
				brief:'',//邮价（否）
				desc:'',//产品简述（否）
				classid:'',//分类id（是int）
				thumb_url:[],//封面图（数组形式）
				img_url:[],//详情图（数组形式）
				desc:'',//商品简介
				guarantee:{},
				edit:false,
				endtime:'',
				c_list:[]
			}
		},
		computed:{
			
		},
		onLoad(option){
			let _this=this;
			if(option.edit){
				this.edit=option.edit
				uni.setNavigationBarTitle({
					title:'商品修改'
				})
				// let p=this.$api.prePage()
				// this.title=p.title;
				postFetch('index.php/index/selfgoods/edit',{id:this.$store.state.userST.id,user_token:this.$store.state.userST.user_tooken,pid:option.edit},false,function(res){
					console.log('edit',res)
					_this.title=res.data.p_list.title
					_this.brief=res.data.p_list.brief
					_this.desc=res.data.p_list.desc
					_this.class_id=res.data.p_list.class_id
					_this.$set(_this,"thumb_url",res.data.p_list.thumb_url)
					_this.$set(_this,"img_url",res.data.p_list.img_url)
					_this.$set(_this.guarantee,res.data.p_list.guarantee,1)
					_this.$set(_this,"c_list",res.data.c_list)
				})
			}
			postFetch('index.php/index/selfgoods/selguarantee',{id:this.$store.state.userST.id,user_token:this.$store.state.userST.user_tooken},false,function(res){
				if(res.statusCode !== 200){
					uni.showToast({
						title:res.errMsg,
						icon:'none'
					})
				}else{
					_this.$set(_this,'selguarantee',res.data)
				}
			})
		},
		methods: {
			removePic(i,type){
				let newA=[]
				this[type].map(function(v,vi){if(i!=vi){
					newA.push(v)
				}})
				this.$set(this,type,newA)
			},
			confirm(){
				let _this=this;
				if(!this.title){
					uni.showToast({
						title:'请输入商品名称'
					})
					return false;
				}
				if(!this.brief&&this.brief!==0){
					uni.showToast({
						title:'请输入快递费用'
					})
					return false;
				}
				let guaranteeSelected=0;
				for (let item in this.guarantee) {
				  if(_this.guarantee[item]){
					  guaranteeSelected++
				  }
				}
				if(!guaranteeSelected){
					uni.showToast({
						title:'请选择商品保障'
					})
					return false;
				}
				if(!this.thumb_url.length){
					uni.showToast({
						title:'请上传商品主图'
					})
					return false;
				}
				if(!this.img_url.length){
					uni.showToast({
						title:'请上传商品详情图'
					})
					return false;
				}
				if(!this.endtime){
					uni.showToast({
						title:'请输入下架时间'
					})
					return false;
				}
				uni.navigateTo({
					url:'/pages/business/upLoadSKU'
				})
				
				
			},
			toggleSelguarantee(id){
				if(this.guarantee[id]){
					this.$set(this.guarantee,id,null)
				}else{
					this.$set(this.guarantee,id,1)
				}
			},
			toggleSalePop(){
				this.salePop = !this.salePop
			},
			stopPrevent(){},
			uploadPIC(id){
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
						                    format: 'jpg',  
						                    quality: 70  
						                  },  
						                  function(e2) {  
						                    var reader = new plus.io.FileReader();  
						                        reader.onloadend = function (e3) {  
													console.log("e3.target.result",e3.target.result)
						                            _this[id].push(e3.target.result);//base64图片                           
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
			}
		}
	}
</script>

<style lang="scss">
	page{
		background: $page-color-base;
		padding-top: 16upx;
	}
	.b-t:after{
		border: 0 !important;
	}
	.list{
		width:750rpx;
		background-color: #fff;
		margin-top: 19rpx;
		padding: 0 25rpx 38rpx 48rpx;
		.must{
			font-size:28rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:#FE1818;
		}
		.tdes{
			font-size:28rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:#999999;
		}
	}
	.row{
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		height: 77upx;
		.tit{
			flex-shrink: 0;
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
	.picRow{
		width: 100%;
		padding: 35rpx 0 19rpx 0;
		.tit{
			font-size:26rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(34,34,34,1);
		}
		.dsc{
			font-size:21rpx;
			font-family:PingFang SC;
			color:rgba(153,153,153,1);
			opacity:0.6;
			margin-top: 10rpx;
		}
		.picList{
			margin-top: 15rpx;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			// <view class="newPicFrame">
			// 	<image src="/static/found0.png"></image>
			// 	<image class="removePic" src="/static/removePic.png"></image>
			// </view>
			.newPicFrame{
				width:167rpx;
				height:167rpx;
				margin-right: 10rpx;
				position: relative;
				.newPic{
					width:167rpx;
					height:167rpx;
				}
				.removePic{
					width:24rpx;
					height:24rpx;
					position: absolute;
					right:-12rpx;
					top:-12rpx;
				}
			}
			.pic{
				width:167rpx;
				height:167rpx;
			}
		}
	}
	// <view class="areaRow b-b">
	// 	<view class="tit">商品简介</view>
	// 	<textarea placeholder="请输入商品的简介(100字内)"></textarea>
	// </view>
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
		z-index: 3;
	}
	.popFrame{
		position: fixed;
		top:0;
		bottom:0;
		width:750rpx;
		left: 0;
		background-color: rgba(0,0,0,0.3);
		z-index: 4;
		.pop{
			background-color: #fff;
			width: 750rpx;
			padding: 30rpx 42rpx;
			position:absolute;
			bottom:0;
			left: 0;
			.popTop{
				width:100%;
				height: 100rpx;
				text-align: center;
				line-height: 100rpx;
				font-size:35rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(34,34,34,1);
				position: relative;
				.cancel{
					font-size:29rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(34,34,34,1);
					position: absolute;
					left:0;
					top:0;
				}
			}
			.popList{
				width:100%;
				height: 85rpx;
				border-bottom: 1px solid rgba(241,242,246,1);
				display: flex;
				align-items: center;
				justify-content: space-between;
				.popLeft{
					display: flex;
					align-items: center;
					.icon{
						width:42rpx;
						height: 42rpx;
						margin-right: 17rpx;
					}
					.title{
						font-size:29rpx;
						font-family:PingFang SC;
						font-weight:500;
						color:rgba(34,34,34,1);
					}
				}
				.choose{
					width:35rpx;
					height:35rpx;
				}
			}
			.button{
				width:625rpx;
				height: 69rpx;
				background:linear-gradient(-90deg,rgba(221,141,69,1) 0%,rgba(250,197,35,1) 99%);
				border-radius:35rpx;
				line-height: 69rpx;
				text-align: center;
				font-size:35rpx;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(255,255,255,1);
				margin: auto;
				margin-top: 110rpx;
			}
		}
	}
</style>