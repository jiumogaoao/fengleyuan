<template>
	<view>
		<canvas style="width: 574rpx; height: 1019rpx;margin: auto;" canvas-id="shareImg"></canvas>
		<view class="buttonFrame">
			<view class="button" style="background-color: #FF930C;" @click="copy">
				<image class="icon" src="/static/shareIcon0.png"></image>
				<view class="text">复制口令</view>
			</view>
			<view class="button" style="background-color: #F4301A;" @click="share">
				<image class="icon" src="/static/shareIcon1.png"></image>
				<view class="text">分享海报</view>
			</view>
		</view>
	</view>
</template>

<script>
	import QR from "@/static/wxqrcode.js" // 二维码生成器  
	import {postFetch} from '@/util/request_UT.js'
	export default {
		
		onReady(){
			let _this=this;
			postFetch('index.php/index/index/invite_url',{invite:_this.code},false,function(res){
				_this.url=res.data.url
				let img = QR.createQrCodeImg(_this.url, {
				     size: parseInt(206*_this.rpx)//二维码大小  
				})
				
					try{
						const context = uni.createCanvasContext('shareImg')
						uni.downloadFile({
							url:'https://www.paradisebee.com/shareBG.png',
						    success: function (res) {
								console.log(res.tempFilePath)
						context.drawImage(res.tempFilePath, 0,0,574*_this.rpx, 1019*_this.rpx)
						        // context.restore()
								context.setStrokeStyle('#333')
								context.setFontSize(25*_this.rpx)
								context.fillText('邀请码：'+_this.code, 186*_this.rpx, 699*_this.rpx)
								context.drawImage(img, 178*_this.rpx,713*_this.rpx,206*_this.rpx, 206*_this.rpx)
						        context.draw()
								uni.hideLoading()
						    }
						})
					}catch(e){
						console.log('canvasError',e)
					}
			})
			uni.showLoading({
				title:'正在生产分享图'
			})
			
			
			
		},
		data() {
			return {
				url:"",
				code:this.$store.state.userST.invitation
			};
		},
		methods:{
			copy(){
				let _this = this;
				uni.setClipboardData({
				    data: _this.url,
				    success: function () {
				        uni.showToast({
				        	title:'分享码已复制',
							icon:'none'
				        })
				    }
				});
			},
			share(){
				uni.canvasToTempFilePath({
				  x: 0,
				  y: 0,
				  width: 574*this.rpx,
				  height: 1019*this.rpx,
				  destWidth: 574*this.rpx,
				  destHeight: 1019*this.rpx,
				  canvasId: 'shareImg',
				  success: function(res) {
				    console.log('canvasPath',res.tempFilePath)
					uni.saveImageToPhotosAlbum({
					            filePath: res.tempFilePath,
					            success: function () {
					                uni.showToast({
					                	title:'分享图片已保存到相册',
										icon:'none'
					                })
					            }
					        });
				  } 
				})
			}
		},
		computed:{
			rpx:function(){
				let res=uni.getSystemInfoSync()
				return res.windowWidth/750;
			}
		}
	}
</script>

<style lang="scss">
	.buttonFrame{
		margin: auto;
		margin-top: 108rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width:633rpx;
		padding-bottom: 74rpx;
		.button{
			width:307rpx;
			height:74rpx;
			border-radius:37rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			.icon{
				width:35rpx;
				height:35rpx;
				margin-right: 10rpx;
			}
			.text{
				font-size:31rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(255,255,255,1);
			}
		}
	}
</style>
