<template>
	<pageCP>
	<view class="content">
		<view class="readOnly" v-if="readOnly"></view>
			<view class="list">
				<view class="row b-b" key="b0s1">
					<text class="tit">姓名</text>
					<input class="input" type="text" placeholder="请输入您的姓名" placeholder-class="placeholder" v-model="business_name"/>
				</view>
				<view class="row b-b" key="b0s2">
					<text class="tit">手机号</text>
					<input class="input" type="number" placeholder="请输入手机号码" placeholder-class="placeholder" v-model="phone"/>
				</view>
				<view class="row b-b" key="b0s3">
					<text class="tit">身份证</text>
					<input class="input" type="text" placeholder="请输入您的身份证号码" placeholder-class="placeholder" v-model="credit_code"/>
				</view>
				<view class="picRow" key="b3s1">
					<view class="tit">上传身份证照片（正面/反面/手持身份证照片）</view>
					<view class="picList">
						<image class="pic" :src="business_license[0]?business_license[0]:'/static/shelf0.png'" @click="uploadPIC(0)"></image>
						<image class="pic" :src="business_license[1]?business_license[1]:'/static/shelf1.png'" @click="uploadPIC(1)"></image>
						<image class="pic" :src="business_license[2]?business_license[2]:'/static/shelf2.png'" @click="uploadPIC(2)"></image>
					</view>
				</view>
			
			</view>
			<button class="add-btn" @click="next">提交申请</button>
	</view>
	</pageCP>
</template>

<script>
	import {postFetch} from '@/util/request_UT.js'
	export default {
		data() {
			return {
				readOnly:false,
				business_name:this.$store.state.userST.business_name||'',
				credit_code:this.$store.state.userST.credit_code||'',
				business_license:this.$store.state.userST.business_license||[],
				phone:this.$store.state.userST.phone
			};
		},
		onLoad(){
			let _this = this;
			if(option.edit){
				uni.setNavigationBarTitle({
					title:'个人创业信息管理'
				})
			}else if(option.type==1){
				_this.readOnly=1
				uni.setNavigationBarTitle({
					title:'个人创业信息'
				})
			}
		},
		methods:{
			uploadPIC(num){
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
													_this.$set(_this.business_license,num,e3.target.result)//base64图片                    
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
			next(){
				let _this=this;
				if(!this.business_name){
					uni.showToast({
						title:'请输入姓名',
						icon:'none'
					})
					return;
				}
				if(!this.phone){
					uni.showToast({
						title:'请输入手机号码',
						icon:'none'
					})
					return;
				}
				if(!this.credit_code){
					uni.showToast({
						title:'请输入身份证',
						icon:'none'
					})
					return;
				}
				if(!this.business_license[0]){
					uni.showToast({
						title:'请上传手持身份证',
						icon:'none'
					})
					return;
				}
				if(!this.business_license[1]){
					uni.showToast({
						title:'请上传反面身份证照片',
						icon:'none'
					})
					return;
				}
				if(!this.business_license[2]){
					uni.showToast({
						title:'请上传正面身份证照片',
						icon:'none'
					})
					return;
				}
				postFetch('index.php/index/business/updata_business',{
					id:this.$store.state.userST.id,
					user_token:this.$store.state.userST.user_tooken,
						business_name:this.business_name,
						credit_code:this.credit_code,
						business_license:this.business_license,
						phone:this.phone,
						ispersonal:1
					},false,function(res){
						console.log('updata_business',res)
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
							_this.$store.dispatch('userST/setBusiness',{ispersonal:1,is_examine:-2,..._this});
							uni.navigateBack({delta: 2})
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
			margin-top: 56rpx;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			.pic{
				width:167rpx;
				height:167rpx;
				margin-left: 24rpx;
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
