<template>
	<pageCP>
	<view>
		<canvas style="width: 750rpx; height: 1334rpx;margin: auto;" canvas-id="shareImg"></canvas>
		<view class="buttonFrame">
<!-- 			<view class="button" style="background-color: #FF930C;" @click="copy">
				<image class="icon" src="/static/shareIcon0.png"></image>
				<view class="text">复制口令</view>
			</view> -->
			<view class="button" style="background-color: #F4301A;" @click="share">
				<image class="icon" src="/static/shareIcon1.png"></image>
				<view class="text">保存海报</view>
			</view>
		</view>
	</view>
	</pageCP>
</template>

<script>
	import allpage from '@/mixin/allPage'
	import QR from "@/static/wxqrcode.js" // 二维码生成器  
	export default {
		mixins:[allpage],
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
				url:this.$api.prePage().pro_url,
				code:"A1B2C3",
				icon:'',
				coupond:'',
				frame:'',
				logo:'',
				productImg:this.$api.prePage().header_img,
				productPic:'',
				oldPrice:this.$api.prePage().commodity_price,
				qrcode:'',
				title:this.$api.prePage().product_name,
				price:this.$api.prePage().post_coupon,
				couponprice:this.$api.prePage().coupon_face_value
			};
		},
		methods:{
			// drawText(ctx, text, x, y, maxWidth, lineHeight) {
			//     let canvas = ctx.canvas;
			//     let arrText = text.split('');
			//     let line = '';
			//     for (let n = 0; n < arrText.length; n++) {
			//         let testLine = line + arrText[n];
			// 		ctx.
			//         let metrics = ctx.measureText(testLine);
			//         let testWidth = metrics.width;
			//         if (testWidth > maxWidth && n > 0) {
			//             ctx.fillText(line, x, y);
			//             line = arrText[n];
			//             y += lineHeight;
			//          } else {
			//             line = testLine;
			//          }
			//     }
			//     ctx.fillText(line, x, y);
			// },
			drawCA(){
				let _this = this;
				
				if(!this.icon){return}
				if(!this.coupond){return}
				if(!this.frame){return}
				if(!this.logo){return}
				if(!this.productPic){return}
				try{
					const context = uni.createCanvasContext('shareImg')
							context.setFillStyle('#fff')
							context.fillRect(0,0,750*_this.rpx, 1334*_this.rpx)
							context.setFillStyle('#000')
							// context.setStrokeStyle('#000')
							context.setFontSize('40rpx')
							context.scale(2, 2)
							context.setTextBaseline("top")
							if(_this.title.length>18){
								context.fillText(_this.title.substr(0,18), 32*_this.rpx, 18*_this.rpx);
								context.fillText(_this.title.substr(19,_this.title.length-1), 18*_this.rpx, 50*_this.rpx);
							}else{
								context.fillText(_this.title, 32*_this.rpx, 18*_this.rpx);
							}
							
							context.scale(0.5, 0.5)
							//券后价
							// context.setStrokeStyle('rgba(228,70,84,1)')
							context.setFillStyle('rgba(228,70,84,1)')
							context.setFontSize('34rpx')
							context.scale(2, 2)
							context.fillText("券后价", 15*_this.rpx, 94*_this.rpx);
							context.setFillStyle('#DB001B')
							context.setFontSize('36rpx')
							context.fillText("￥", 70*_this.rpx, 96*_this.rpx);
							context.setFillStyle('#DB001B')
							context.setFontSize('60rpx')
							context.fillText(_this.price, 90*_this.rpx, 96*_this.rpx);
							context.scale(0.5, 0.5)
							context.drawImage(_this.icon, 22*_this.rpx,45*_this.rpx,40*_this.rpx, 41*_this.rpx)
							//优惠券
							context.drawImage(_this.coupond, 516*_this.rpx,176*_this.rpx,210*_this.rpx, 53*_this.rpx)
							
							context.setFillStyle('#fff')
							context.setFontSize('12rpx')
							context.fillText("￥", 539*_this.rpx, 190*_this.rpx);
							context.setFillStyle('#fff')
							context.setFontSize('33rpx')
							context.fillText(_this.couponprice, 560*_this.rpx, 190*_this.rpx);
							context.setFillStyle('#fff')
							context.setFontSize('20rpx')
							context.fillText("优惠券", 587*_this.rpx, 190*_this.rpx);
							context.setFillStyle('#fff')
							context.setFontSize('20rpx')
							context.fillText("领", 679*_this.rpx, 190*_this.rpx);
							
							//原价
							context.setFillStyle('#A7A6A6')
							context.setFontSize('24rpx')
							context.fillText("原价", 31*_this.rpx, 240*_this.rpx);
							context.setFillStyle('#A7A6A6')
							context.setFontSize('24rpx')
							context.fillText("￥"+_this.oldPrice, 82*_this.rpx, 240*_this.rpx);
							context.drawImage(_this.productPic, 24*_this.rpx,316*_this.rpx,700*_this.rpx, 700*_this.rpx)
							context.drawImage(_this.frame, 24*_this.rpx,316*_this.rpx,700*_this.rpx, 700*_this.rpx)
							context.drawImage(_this.qrcode, 540*_this.rpx,1072*_this.rpx,189*_this.rpx, 189*_this.rpx)
							context.drawImage(_this.logo, 240*_this.rpx,1103*_this.rpx,247*_this.rpx, 64*_this.rpx)
							context.scale(2, 2)
							context.setFillStyle('#fff')
							context.setFontSize('36rpx')
							context.fillText("券后价", 523*0.5*_this.rpx, 857*0.5*_this.rpx);
							context.setFillStyle('#fff')
							context.setFontSize('60rpx')
							context.fillText("￥"+_this.price, 526*0.5*_this.rpx, 909*0.5*_this.rpx);
							context.scale(0.5, 0.5)
							context.setFillStyle('#666666')
							context.setFontSize('20rpx')
							context.fillText("长按图片，扫码领取优惠券", 248*_this.rpx, 1205*_this.rpx);
							
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
		justify-content: center;
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
