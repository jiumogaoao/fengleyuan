<template>
	<view>
		<canvas style="width: 574rpx; height: 1019rpx;margin: auto;" canvas-id="shareImg"></canvas>
		<view class="buttonFrame">
<!-- 			<view class="button" style="background-color: #FF930C;" @click="copy">
				<image class="icon" src="/static/shareIcon0.png"></image>
				<view class="text">复制口令</view>
			</view> -->
			<view class="button" style="background-color: #F4301A;" @click="share">
				<image class="icon" src="/static/shareIcon1.png"></image>
				<view class="text">分享海报</view>
			</view>
		</view>
	</view>
</template>

<script>
	import QR from "@/static/wxqrcode.js" // 二维码生成器  
	export default {
		
		onReady(){
			let _this=this;
			uni.showLoading({
				title:'正在生产分享图'
			})
			this.qrcode = QR.createQrCodeImg(_this.url, {  
			     size: parseInt(189*_this.rpx)//二维码大小  
			})

					uni.downloadFile({
						url:'https://www.paradisebee.com/coupon.png',
					    success: function (res) {
							_this.coupond = res.tempFilePath
							_this.drawCA()
					    }
					})
					uni.downloadFile({
						url:'https://www.paradisebee.com/productIcon03.png',
					    success: function (res) {
							_this.icon = res.tempFilePath
							_this.drawCA()
					    }
					})
					uni.downloadFile({
						url:'https://www.paradisebee.com/productFrame.png',
					    success: function (res) {
							_this.frame = res.tempFilePath
							_this.drawCA()
					    }
					})
					uni.downloadFile({
						url:'https://www.paradisebee.com/canvasLogo.png',
					    success: function (res) {
							_this.logo = res.tempFilePath
							_this.drawCA()
					    }
					})
					uni.downloadFile({
						url:_this.productImg,
					    success: function (res) {
							_this.productPic = res.tempFilePath
							_this.drawCA()
					    }
					})
			
		},
		data() {
			return {
				url:"https://www.paradisebee.com/pages/regest/regest?id=A1B2C3D4",
				code:"A1B2C3",
				icon:'',
				coupond:'',
				frame:'',
				logo:'',
				productImg:'',
				productPic:'',
				qrcode:'',
				title:'',
				price:'',
				couponprice:''
			};
		},
		methods:{
			drawText(ctx, text, x, y, maxWidth, lineHeight) {
			    let canvas = ctx.canvas;
			    let arrText = text.split('');
			    let line = '';
			    for (let n = 0; n < arrText.length; n++) {
			        let testLine = line + arrText[n];
			        let metrics = ctx.measureText(testLine);
			        let testWidth = metrics.width;
			        if (testWidth > maxWidth && n > 0) {
			            ctx.fillText(line, x, y);
			            line = arrText[n];
			            y += lineHeight;
			         } else {
			            line = testLine;
			         }
			    }
			    ctx.fillText(line, x, y);
			},
			drawCA(){
				let _this = this;
				if(!this.icon){return}
				if(!this.coupond){return}
				if(!this.frame){return}
				if(!this.logo){return}
				if(!this.productPic){return}
				try{
					const context = uni.createCanvasContext('shareImg')
							console.log(res.tempFilePath)
					context.drawImage(res.tempFilePath, 0,0,750*_this.rpx, 1334*_this.rpx)
							context.fillStyle('#fff')
							context.fillRect(0,0,750*_this.rpx, 1334*_this.rpx)
							context.fillStyle('rgba(0,0,0,0)')
							context.setStrokeStyle('#000')
							context.setFontSize(36*_this.rpx)
							_this.drawText(context,"nbsp;nbsp;nbsp;"+_this.title,29*_this.rpx,44*_this.rpx,666*_this.rpx,94*_this.rpx)
							//券后价
							context.setStrokeStyle('#E44654')
							context.setFontSize(34*_this.rpx)
							_this.fillText("券后价", 31*_this.rpx, 188*_this.rpx);
							context.setStrokeStyle('#DB001B')
							context.setFontSize(36*_this.rpx)
							_this.fillText("￥", 139*_this.rpx, 193*_this.rpx);
							context.setStrokeStyle('#DB001B')
							context.setFontSize(60*_this.rpx)
							_this.fillText(_this.price, 163*_this.rpx, 174*_this.rpx);
							context.drawImage(_this.icon, 22*_this.rpx,45*_this.rpx,40*_this.rpx, 41*_this.rpx)
							//优惠券
							context.drawImage(_this.coupond, 516*_this.rpx,176*_this.rpx,210*_this.rpx, 53*_this.rpx)
							context.setStrokeStyle('#fff')
							context.setFontSize(12*_this.rpx)
							_this.fillText("￥", 539*_this.rpx, 190*_this.rpx);
							context.setStrokeStyle('#fff')
							context.setFontSize(33*_this.rpx)
							_this.fillText(_this.couponprice, 547*_this.rpx, 190*_this.rpx);
							context.setStrokeStyle('#fff')
							context.setFontSize(20*_this.rpx)
							_this.fillText("优惠券", 587*_this.rpx, 193*_this.rpx);
							context.setStrokeStyle('#fff')
							context.setFontSize(20*_this.rpx)
							_this.fillText("领", 679*_this.rpx, 193*_this.rpx);
							//原价
							context.setStrokeStyle('#fff')
							context.setFontSize(20*_this.rpx)
							_this.fillText("领", 679*_this.rpx, 193*_this.rpx);
							context.drawImage(_this.productPic, 24*_this.rpx,316*_this.rpx,700*_this.rpx, 700*_this.rpx)
							context.drawImage(_this.frame, 24*_this.rpx,316*_this.rpx,700*_this.rpx, 700*_this.rpx)
							context.drawImage(_this.qrcode, 540*_this.rpx,1072*_this.rpx,189*_this.rpx, 189*_this.rpx)
					        context.draw()
							uni.hideLoading()
	
				}catch(e){
					console.log('canvasError',e)
				}
			},
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
