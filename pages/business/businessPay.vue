<template>
	<view class="container">
		<image class="bg" src="/static/businessPay.png" mode="widthFix"></image>
		<view class="centerFrame">
			<view class="point">
				<image class="icon" src="/static/businessPay0.png"></image>
				<view class="right">
					<view class="title">支付成功可立即开启店家功能</view>
					<view class="dsc">支持商家创业和个人创业</view>
				</view>
			</view>
			<view class="point">
				<image class="icon" src="/static/businessPay1.png"></image>
				<view class="right">
					<view class="title">提供商家会员服务</view>
					<view class="dsc">立刻开通商品上传销售功能</view>
				</view>
			</view>
			<view class="point">
				<image class="icon" src="/static/businessPay2.png"></image>
				<view class="right">
					<view class="title">营销更多灵活丰富化</view>
					<view class="dsc">助您开发新顾客，促成交，赢取更多资源</view>
				</view>
			</view>
		</view>
		<view class="next" @click="togglePop">立即开通商家功能</view>
		<view class="popFrame" v-if="pop" @click="togglePop">
			<view class="pop" @click.stop="stopEvent">
				<view class="popTop">
					<!-- <view class="cancel" @click="togglePop">取消</view> -->
					请选择支付方式
				</view>
				<view class="payPrice"><text class="priceTip">￥ </text>800.00</view>
				<view class="payDsc">蜜蜂天堂线上商家（1年，有效期内可以随时续费）</view>
				<view class="popList" @click="togglePayType(0)">
					<view class="popListFrame">
						<view class="popLeft">
							<image class="icon" src="/static/zfb.png"></image>
							<view class="title">支付宝支付</view>
						</view>
						<image class="choose" :src="payType==0?'/static/regestIcon2.png':'/static/regestIcon3.png'"></image>
					</view>
				</view>
				<view class="popList" @click="togglePayType(1)">
					<view class="popListFrame">
						<view class="popLeft">
							<image class="icon" src="/static/wx.png"></image>
							<view class="title">微信支付</view>
						</view>
						<image class="choose" :src="payType==1?'/static/regestIcon2.png':'/static/regestIcon3.png'"></image>
					</view>
				</view>
				<view class="button" @click="submit">确认</view>
			</view>
		</view>
		<view class="popFrame" v-if="popSuccess" @click="togglePopSuccess">
			<view class="pop" @click.stop="stopEvent">
				<view class="popTop">
					<!-- <view class="cancel" @click="togglePop">取消</view> -->
					支付完成
				</view>
				<image class="paySuccessPic" src="/static/paySuccess.png"></image>
				
				<view class="button" @click="go">提交商家资料</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pop:false,
				payType:0,
				popSuccess:false
			};
		},
		methods:{
			togglePop(){
				this.pop = !this.pop
			},
			togglePopSuccess(){
				this.popSuccess = !this.popSuccess
			},
			togglePayType(num){
				this.payType = num
			},
			stopEvent(){},
			submit(){
				this.togglePop()
				this.togglePopSuccess()
			},
			go(){}
		}
	}
</script>

<style lang="scss">
	.container{
		position: relative;
		.bg{
			width:750rpx;
		}
		.centerFrame{
			width:692rpx;
			height: 568rpx;
			background-color: #fff;
			border-radius:7rpx;
			position: absolute;
			top:520rpx;
			left: 29rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			.point{
				margin-top: 94rpx;
				display: flex;
				align-items: center;
				width:459rpx;
				.icon{
					width:54rpx;
					height:54rpx;
				}
				.right{
					margin-left: 33rpx;
					.title{
						font-size:28rpx;
						font-family:PingFang SC;
						font-weight:800;
						color:rgba(51,51,51,1);
					}
					.dsc{
						font-size:20rpx;
						font-family:PingFang SC;
						font-weight:500;
						color:rgba(51,51,51,1);
						margin-top: 9rpx;
					}
				}
			}
		}
		.next{
			width:685rpx;
			height:68rpx;
			background:rgba(241,161,39,1);
			box-shadow:0px 7rpx 2rpx 0px rgba(82,52,19,0.21);
			border-radius:24rpx;
			font-size:24rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(255,255,255,1);
			line-height: 68rpx;
			text-align: center;
			position: absolute;
			top:1232rpx;
			left: 32rpx;
		}
		.popFrame{
			position: fixed;
			top:0;
			bottom:0;
			width:750rpx;
			left: 0;
			background-color: rgba(0,0,0,0.3);
			.pop{
				background-color: #fff;
				width: 750rpx;
				padding-bottom: 30rpx;
				position:absolute;
				bottom:0;
				left: 0;
				.popTop{
					width:100%;
					border-bottom: 1px solid rgba(153,153,153,0.4);
					height: 100rpx;
					text-align: center;
					line-height: 100rpx;
					font-size:29rpx;
					font-family:PingFang SC;
					font-weight:bold;
					color:rgba(0,0,0,1);
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
				.payPrice{
					font-size:70rpx;
					font-family:PingFang SC;
					font-weight:bold;
					color:rgba(255,57,43,1);
					margin-top: 60rpx;
					text-align: center;
					.priceTip{
						font-size:39rpx;
					}
				}
				.payDsc{
					font-size:29rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(0,0,0,1);
					opacity:0.6;
					margin-top: 47rpx;
					text-align: center;
					margin-bottom: 24rpx;
				}
				.popList{
					width:100%;
					padding: 0 42rpx;
					height: 85rpx;
					.popListFrame{
						display: flex;
						align-items: center;
						justify-content: space-between;
						border-bottom: 1px solid rgba(241,242,246,1);
						width: 100%;
						height: 100%;
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
				.paySuccessPic{
					width:318rpx;
					height: 324rpx;
					margin: auto;
					margin-top: 126rpx;
					margin-bottom: 140rpx;
					display: block;
				}
			}
		}
	}
	
</style>
