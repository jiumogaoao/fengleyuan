<template>
	<view>
		<view class="top" @click="go('/pages/address/address')">
			<view class="left">
				<image src="/static/submitOrder2.png" class="placeIcon"></image>
				<view class="info">
					<view class="infoTop">
						<view class="name">谢文东</view>
						<view class="phone">18654659826</view>
					</view>
					<view class="place">广州市天河区东圃镇新塘大街5号</view>
				</view>
			</view>
			<image src="/static/right.png" class="right"></image>
		</view>
		<view class="list">
			<view class="point">
				<image class="productIcon" src="/static/orderProductPic.png"></image>
				<view class="right">
					<view class="name">四合院北极保暖四件套原生实惠装...</view>
					<view class="bottom">
						<view class="buttomTop">
							<view class="sku">A套餐</view>
							<view class="countFrame">
								<image class="sub" src="/static/submitOrder4.png"></image>
								<input/>
								<image class="add" src="/static/submitOrder3.png"></image>
							</view>
						</view>
						<view class="price">￥365</view>
					</view>
				</view>
			</view>
			<view class="point">
				<image class="productIcon" src="/static/orderProductPic.png"></image>
				<view class="right">
					<view class="name">四合院北极保暖四件套原生实惠装...</view>
					<view class="bottom">
						<view class="buttomTop">
							<view class="sku">A套餐</view>
							<view class="countFrame">
								<image class="sub" src="/static/submitOrder4.png"></image>
								<input/>
								<image class="add" src="/static/submitOrder3.png"></image>
							</view>
						</view>
						<view class="price">￥365</view>
					</view>
				</view>
			</view>
			<view class="point">
				<image class="productIcon" src="/static/orderProductPic.png"></image>
				<view class="right">
					<view class="name">四合院北极保暖四件套原生实惠装...</view>
					<view class="bottom">
						<view class="buttomTop">
							<view class="sku">A套餐</view>
							<view class="countFrame">
								<image class="sub" src="/static/submitOrder4.png"></image>
								<input/>
								<image class="add" src="/static/submitOrder3.png"></image>
							</view>
						</view>
						<view class="price">￥365</view>
					</view>
				</view>
			</view>
		</view>
		<view class="dscFrame">
			<view class="label">备注</view>
			<input placeholder="请填写备注信息"/>
		</view>
		<view class="payFrame">
			<view class="label">支付方式</view>
			<view class="jump" @click="togglePop">
				<image class="jumpIcon" src="/static/submitOrder6.png"></image>
				<view class="jumpLabel">微信</view>
				<image class="jumpDeg" src="/static/right.png"></image>
			</view>
		</view>
		<view class="foot">
			<view class="left">实付款：<text class="red">￥ 1095</text></view>
			<view class="pay">立即付款</view>
		</view>
		<view class="popFrame" v-if="pop">
			<view class="pop">
				<view class="popTop">
					<view class="cancel" @click="togglePop">取消</view>
					请选择支付方式
				</view>
				<view class="popList">
					<view class="popLeft">
						<image class="icon" src="/static/zfb.png"></image>
						<view class="title">支付宝支付</view>
					</view>
					<image class="choose" src="/static/regestIcon3.png"></image>
				</view>
				<view class="popList">
					<view class="popLeft">
						<image class="icon" src="/static/wx.png"></image>
						<view class="title">微信支付</view>
					</view>
					<image class="choose" src="/static/regestIcon2.png"></image>
				</view>
				<view class="button" @click="togglePop">确认</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pop:false
			}
		},
		onLoad(option){

		},
		methods: {
			togglePop(){
				this.pop = !this.pop
			},
			go(url){
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #f5f6f8;
	}
	.top{
		width:750rpx;
		height:111rpx;
		background-color:#fff;
		margin-top:19.44rpx;
		display:flex;
		justify-content:space-between;
		align-items:center;
		padding: 24rpx 40rpx 24rpx 20rpx;
		.left{
			display: flex;
			align-items: center;
			.placeIcon{
				width:41.67rpx;
				height:41.67rpx;
				margin-right: 27rpx;
			}
			.info{
				.infoTop{
					display: flex;
					align-items: center;
					.name{
						font-size:26rpx;
						font-family:PingFang SC;
						font-weight:500;
						color:rgba(34,34,34,1);
						margin-right: 36rpx;
					}
					.phone{
						font-size:20rpx;
						font-family:PingFang SC;
						font-weight:500;
						color:rgba(153,153,153,1);
					}
				}
				.place{
					font-size:20rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(153,153,153,1);
					margin-top: 18rpx;
				}
			}
		}
		.right{
			width:21rpx;
			height:21rpx;
		}
	}
	.list{
		width:750rpx;
		background-color: #fff;
		padding: 0 18rpx 0 48rpx;
		margin-top: 20rpx;
		.point{
			width: 100%;
			padding: 19rpx 0;
			display: flex;
			border-bottom: 1px solid rgba(241,242,246,1);
			.productIcon{
				width:150rpx;
				height:150rpx;
				flex-shrink: 0;
				margin-right: 20rpx;
			}
			.right{
				flex-grow: 1;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.name{
					font-size:26rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(34,34,34,1);
				}
				.bottom{
					width:100%;
					.buttomTop{
						width:100%;
						display: flex;
						justify-content: space-between;
						.sku{
							font-size:23rpx;
							font-family:PingFang SC;
							font-weight:500;
							color:rgba(153,153,153,1);
						}
						.countFrame{
							display: flex;
							align-items: center;
							.sub,.add{
								width:28rpx;
								height:28rpx;
							}
							input{
								width:56rpx;
								height:28rpx;
								background:rgba(241,241,241,1);
								border-radius:7rpx;
								margin: 0 14rpx;
							}
						}
					}
					.price{
						font-size:23rpx;
						font-family:PingFang SC;
						font-weight:500;
						color:rgba(153,153,153,1);
					}
				}
			}
		}
		.point.last{
			border: 0;
		}
	}
	.dscFrame{
		width: 750rpx;
		height: 83rpx;
		background-color: #fff;
		margin-top: 21rpx;
		padding: 0 47rpx;
		display: flex;
		align-items: center;
		.label{
			font-size:26rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(34,34,34,1);
			flex-shrink: 0;
		}
		input{
			margin-left: 123rpx;
			flex-grow: 1;
			font-size:26rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(153,153,153,1);
		}
	}
	.payFrame{
		width:750rpx;
		height:83rpx;
		background-color: #fff;
		margin-top: 20rpx;
		padding: 0 19rpx 0 47rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.label{
			font-size:26rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(34,34,34,1);
		}
		.jump{
			display: flex;
			align-items: center;
			.jumpIcon{
				width:42rpx;
				height:42rpx;
				margin-right: 18rpx;
			}
			.jumpLabel{
				font-size:26rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(34,34,34,1);
				margin-right: 26rpx;
			}
			.jumpDeg{
				width:21rpx;
				height:21rpx;
			}
		}
	}
	.foot{
		width:750rpx;
		position: fixed;
		left:0;
		bottom:0;
		height: 94rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.left{
			flex-grow: 1;
			padding: 35rpx 47rpx;
			font-size:26rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(34,34,34,1);
			.red{
				font-size:35rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(219,0,27,1);
			}
		}
		.pay{
			flex-shrink: 0;
			height: 94rpx;
			width:277rpx;
			background:linear-gradient(-90deg,rgba(221,141,69,1) 0%,rgba(250,197,35,1) 100%);
			line-height: 94rpx;
			text-align: center;
			font-size:35rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(255,255,255,1);
		}
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
	// page {
	// 	background: $page-color-base;
	// 	padding-bottom: 100upx;
	// }

	// .address-section {
	// 	padding: 30upx 0;
	// 	background: #fff;
	// 	position: relative;

	// 	.order-content {
	// 		display: flex;
	// 		align-items: center;
	// 	}

	// 	.icon-shouhuodizhi {
	// 		flex-shrink: 0;
	// 		display: flex;
	// 		align-items: center;
	// 		justify-content: center;
	// 		width: 90upx;
	// 		color: #888;
	// 		font-size: 44upx;
	// 	}

	// 	.cen {
	// 		display: flex;
	// 		flex-direction: column;
	// 		flex: 1;
	// 		font-size: 28upx;
	// 		color: $font-color-dark;
	// 	}

	// 	.name {
	// 		font-size: 34upx;
	// 		margin-right: 24upx;
	// 	}

	// 	.address {
	// 		margin-top: 16upx;
	// 		margin-right: 20upx;
	// 		color: $font-color-light;
	// 	}

	// 	.icon-you {
	// 		font-size: 32upx;
	// 		color: $font-color-light;
	// 		margin-right: 30upx;
	// 	}

	// 	.a-bg {
	// 		position: absolute;
	// 		left: 0;
	// 		bottom: 0;
	// 		display: block;
	// 		width: 100%;
	// 		height: 5upx;
	// 	}
	// }

	// .goods-section {
	// 	margin-top: 16upx;
	// 	background: #fff;
	// 	padding-bottom: 1px;

	// 	.g-header {
	// 		display: flex;
	// 		align-items: center;
	// 		height: 84upx;
	// 		padding: 0 30upx;
	// 		position: relative;
	// 	}

	// 	.logo {
	// 		display: block;
	// 		width: 50upx;
	// 		height: 50upx;
	// 		border-radius: 100px;
	// 	}

	// 	.name {
	// 		font-size: 30upx;
	// 		color: $font-color-base;
	// 		margin-left: 24upx;
	// 	}

	// 	.g-item {
	// 		display: flex;
	// 		margin: 20upx 30upx;

	// 		image {
	// 			flex-shrink: 0;
	// 			display: block;
	// 			width: 140upx;
	// 			height: 140upx;
	// 			border-radius: 4upx;
	// 		}

	// 		.right {
	// 			flex: 1;
	// 			padding-left: 24upx;
	// 			overflow: hidden;
	// 		}

	// 		.title {
	// 			font-size: 30upx;
	// 			color: $font-color-dark;
	// 		}

	// 		.spec {
	// 			font-size: 26upx;
	// 			color: $font-color-light;
	// 		}

	// 		.price-box {
	// 			display: flex;
	// 			align-items: center;
	// 			font-size: 32upx;
	// 			color: $font-color-dark;
	// 			padding-top: 10upx;

	// 			.price {
	// 				margin-bottom: 4upx;
	// 			}
	// 			.number{
	// 				font-size: 26upx;
	// 				color: $font-color-base;
	// 				margin-left: 20upx;
	// 			}
	// 		}

	// 		.step-box {
	// 			position: relative;
	// 		}
	// 	}
	// }
	// .yt-list {
	// 	margin-top: 16upx;
	// 	background: #fff;
	// }

	// .yt-list-cell {
	// 	display: flex;
	// 	align-items: center;
	// 	padding: 10upx 30upx 10upx 40upx;
	// 	line-height: 70upx;
	// 	position: relative;

	// 	&.cell-hover {
	// 		background: #fafafa;
	// 	}

	// 	&.b-b:after {
	// 		left: 30upx;
	// 	}

	// 	.cell-icon {
	// 		height: 32upx;
	// 		width: 32upx;
	// 		font-size: 22upx;
	// 		color: #fff;
	// 		text-align: center;
	// 		line-height: 32upx;
	// 		background: #f85e52;
	// 		border-radius: 4upx;
	// 		margin-right: 12upx;

	// 		&.hb {
	// 			background: #ffaa0e;
	// 		}

	// 		&.lpk {
	// 			background: #3ab54a;
	// 		}

	// 	}

	// 	.cell-more {
	// 		align-self: center;
	// 		font-size: 24upx;
	// 		color: $font-color-light;
	// 		margin-left: 8upx;
	// 		margin-right: -10upx;
	// 	}

	// 	.cell-tit {
	// 		flex: 1;
	// 		font-size: 26upx;
	// 		color: $font-color-light;
	// 		margin-right: 10upx;
	// 	}

	// 	.cell-tip {
	// 		font-size: 26upx;
	// 		color: $font-color-dark;

	// 		&.disabled {
	// 			color: $font-color-light;
	// 		}

	// 		&.active {
	// 			color: $base-color;
	// 		}
	// 		&.red{
	// 			color: $base-color;
	// 		}
	// 	}

	// 	&.desc-cell {
	// 		.cell-tit {
	// 			max-width: 90upx;
	// 		}
	// 	}

	// 	.desc {
	// 		flex: 1;
	// 		font-size: $font-base;
	// 		color: $font-color-dark;
	// 	}
	// }
	
	/* 支付列表 */
	// .pay-list{
	// 	padding-left: 40upx;
	// 	margin-top: 16upx;
	// 	background: #fff;
	// 	.pay-item{
	// 		display: flex;
	// 		align-items: center;
	// 		padding-right: 20upx;
	// 		line-height: 1;
	// 		height: 110upx;	
	// 		position: relative;
	// 	}
	// 	.icon-weixinzhifu{
	// 		width: 80upx;
	// 		font-size: 40upx;
	// 		color: #6BCC03;
	// 	}
	// 	.icon-alipay{
	// 		width: 80upx;
	// 		font-size: 40upx;
	// 		color: #06B4FD;
	// 	}
	// 	.icon-xuanzhong2{
	// 		display: flex;
	// 		align-items: center;
	// 		justify-content: center;
	// 		width: 60upx;
	// 		height: 60upx;
	// 		font-size: 40upx;
	// 		color: $base-color;
	// 	}
	// 	.tit{
	// 		font-size: 32upx;
	// 		color: $font-color-dark;
	// 		flex: 1;
	// 	}
	// }
	
	// .footer{
	// 	position: fixed;
	// 	left: 0;
	// 	bottom: 0;
	// 	z-index: 995;
	// 	display: flex;
	// 	align-items: center;
	// 	width: 100%;
	// 	height: 90upx;
	// 	justify-content: space-between;
	// 	font-size: 30upx;
	// 	background-color: #fff;
	// 	z-index: 998;
	// 	color: $font-color-base;
	// 	box-shadow: 0 -1px 5px rgba(0,0,0,.1);
	// 	.price-content{
	// 		padding-left: 30upx;
	// 	}
	// 	.price-tip{
	// 		color: $base-color;
	// 		margin-left: 8upx;
	// 	}
	// 	.price{
	// 		font-size: 36upx;
	// 		color: $base-color;
	// 	}
	// 	.submit{
	// 		display:flex;
	// 		align-items:center;
	// 		justify-content: center;
	// 		width: 280upx;
	// 		height: 100%;
	// 		color: #fff;
	// 		font-size: 32upx;
	// 		background-color: $base-color;
	// 	}
	// }
	
	/* 优惠券面板 */
	// .mask{
	// 	display: flex;
	// 	align-items: flex-end;
	// 	position: fixed;
	// 	left: 0;
	// 	top: var(--window-top);
	// 	bottom: 0;
	// 	width: 100%;
	// 	background: rgba(0,0,0,0);
	// 	z-index: 9995;
	// 	transition: .3s;
		
	// 	.mask-content{
	// 		width: 100%;
	// 		min-height: 30vh;
	// 		max-height: 70vh;
	// 		background: #f3f3f3;
	// 		transform: translateY(100%);
	// 		transition: .3s;
	// 		overflow-y:scroll;
	// 	}
	// 	&.none{
	// 		display: none;
	// 	}
	// 	&.show{
	// 		background: rgba(0,0,0,.4);
			
	// 		.mask-content{
	// 			transform: translateY(0);
	// 		}
	// 	}
	// }

	/* 优惠券列表 */
	// .coupon-item{
	// 	display: flex;
	// 	flex-direction: column;
	// 	margin: 20upx 24upx;
	// 	background: #fff;
	// 	.con{
	// 		display: flex;
	// 		align-items: center;
	// 		position: relative;
	// 		height: 120upx;
	// 		padding: 0 30upx;
	// 		&:after{
	// 			position: absolute;
	// 			left: 0;
	// 			bottom: 0;
	// 			content: '';
	// 			width: 100%;
	// 			height: 0;
	// 			border-bottom: 1px dashed #f3f3f3;
	// 			transform: scaleY(50%);
	// 		}
	// 	}
	// 	.left{
	// 		display: flex;
	// 		flex-direction: column;
	// 		justify-content: center;
	// 		flex: 1;
	// 		overflow: hidden;
	// 		height: 100upx;
	// 	}
	// 	.title{
	// 		font-size: 32upx;
	// 		color: $font-color-dark;
	// 		margin-bottom: 10upx;
	// 	}
	// 	.time{
	// 		font-size: 24upx;
	// 		color: $font-color-light;
	// 	}
	// 	.right{
	// 		display: flex;
	// 		flex-direction: column;
	// 		justify-content: center;
	// 		align-items: center;
	// 		font-size: 26upx;
	// 		color: $font-color-base;
	// 		height: 100upx;
	// 	}
	// 	.price{
	// 		font-size: 44upx;
	// 		color: $base-color;
	// 		&:before{
	// 			content: '￥';
	// 			font-size: 34upx;
	// 		}
	// 	}
	// 	.tips{
	// 		font-size: 24upx;
	// 		color: $font-color-light;
	// 		line-height: 60upx;
	// 		padding-left: 30upx;
	// 	}
	// 	.circle{
	// 		position: absolute;
	// 		left: -6upx;
	// 		bottom: -10upx;
	// 		z-index: 10;
	// 		width: 20upx;
	// 		height: 20upx;
	// 		background: #f3f3f3;
	// 		border-radius: 100px;
	// 		&.r{
	// 			left: auto;
	// 			right: -6upx;
	// 		}
	// 	}
	// }

</style>
