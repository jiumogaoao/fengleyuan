<template>
	<view class="content">
		<view class="readOnly" v-if="readOnly"></view>
			<view class="list">
				<view class="row b-b" key="b0s1">
					<text class="tit">姓名</text>
					<input class="input" type="text" placeholder="请输入您的姓名" placeholder-class="placeholder"/>
				</view>
				<view class="row b-b" key="b0s1">
					<text class="tit">身份证</text>
					<input class="input" type="text" placeholder="请输入您的身份证号码" placeholder-class="placeholder"/>
				</view>
				<view class="picRow" key="b3s1">
					<view class="tit">上传身份证照片（正面/反面/手持身份证照片）</view>
					<view class="picList">
						<image class="pic" :src="pic0?pic0:'/static/shelf0.png'" @click="uploadPIC(0)"></image>
						<image class="pic" :src="pic1?pic1:'/static/shelf1.png'" @click="uploadPIC(1)"></image>
						<image class="pic" :src="pic2?pic2:'/static/shelf2.png'" @click="uploadPIC(2)"></image>
					</view>
				</view>
			
			</view>
			<button class="add-btn" @click="next">提交申请</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				readOnly:false,
				pic0:'',
				pic1:'',
				pic2:''
			};
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
						                            _this['pic'+num] = e3.target.result;//base64图片                           
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
