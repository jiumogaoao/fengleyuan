<template>
	<pageCP>
	<view>
		<view class="top" @click="go('/pages/address/address')">
			<view class="left">
				<view class="info">
					<view class="area">广东广州市天河区</view>
					<view class="place">东圃镇新塘大街5号</view>
					<view class="infoTop">
						<view class="name">谢文东</view>
						<view class="phone">18654659826</view>
					</view>
				</view>
			</view>
			<image src="/static/right.png" class="right"></image>
			<image src="/static/mall.png" class="mailBottom"></image>
		</view>
		<view class="goodList">
			<view class="goodListTitle">蜜蜂天堂自营商城</view>
			<view class="goodListCenter">
				<view class="goodListLeft">
					<image src="/static/found1.png"></image>
					<image src="/static/found1.png"></image>
					<image src="/static/found1.png"></image>
				</view>
				<view class="goodListRight" @click="toggleShoppingList">
					<view class="total">共4件</view>
					<image class="rightDeg" src="/static/right.png"></image>
				</view>
			</view>
			<view class="goodListBottom">
				<view class="goodListBottomLeft">配送</view>
				<view class="goodListBottomRight">普通配送</view>
			</view>
		</view>
		<view class="otherList">
			<view class="point" @click="toggleCouponPop">
				<view class="label">优惠券<text class="border">已选推荐优惠</text></view>
				<view class="value">
					<text>优惠￥30.00</text>
					<image class="rightDag" src="/static/right.png"></image>
				</view>
			</view>
			<view class="point" style="margin-top:24rpx;"  @click="toggleMTPop">
				<view class="label"><text>蜜糖（共</text><image class="mt" src="/static/productIcon02.png"/><text class="yellow">123.56</text><text>,可抵扣</text><text class="red">￥123.56</text><text>）</text></view>
				<view class="value">
					<text>已使用折扣</text>
					<image class="rightDag" src="/static/right.png"></image>
				</view>
			</view>
		</view>
		<view class="countList">
			<view class="point">
				<view class="label">商品金额</view>
				<view class="value">￥1234.56</view>
			</view>
			<view class="point red">
				<view class="label">运费（总重：12.345kg）</view>
				<view class="value">+￥0.00</view>
			</view>
			<view class="point red">
				<view class="label">优惠券</view>
				<view class="value">-￥30.00</view>
			</view>
		</view>
<!-- 		<view class="list">
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
		</view> -->
		<!-- <view class="dscFrame">
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
		</view> -->
		<view class="foot">
			<view class="left">合计：<text class="red">￥ 1095</text><text class="oldPrice">￥2011.11</text></view>
			<view class="pay"  @click="togglePop">立即付款</view>
		</view>
		<view class="popFrame" v-if="pop">
			<view class="pop">
				<view class="popTop">
					<!-- <view class="cancel" @click="togglePop">取消</view> -->
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
		<view class="popFrame" v-if="couponPop" @click="toggleCouponPop">
			<view class="pop" @click.stop="stopPrevent">
				<view class="popTop">
					<!-- <view class="cancel" @click="togglePop">取消</view> -->
					优惠券
				</view>
				<view class="popList">
					<view class="popLeft">
						<view class="title">无门槛50优惠券</view>
					</view>
					<image class="choose" src="/static/regestIcon3.png"></image>
				</view>
				<view class="popList">
					<view class="popLeft">
						<view class="title">无门槛50优惠券</view>
					</view>
					<image class="choose" src="/static/regestIcon2.png"></image>
				</view>
				<view class="popList">
					<view class="popLeft">
						<view class="title">冬季商城满300减30</view>
					</view>
					<image class="choose" src="/static/regestIcon3.png"></image>
				</view>
				<view class="button" @click="toggleCouponPop">完成</view>
			</view>
		</view>
		<view class="popFrame" v-if="mtPop" @click="toggleMTPop">
			<view class="pop" @click.stop="stopPrevent">
				<view class="popTop">
					<!-- <view class="cancel" @click="togglePop">取消</view> -->
					蜜糖
				</view>
				<view class="popList">
					<view class="popLeft">
						<view class="title">使用蜜糖折扣</view>
					</view>
					<image class="choose" src="/static/regestIcon3.png"></image>
				</view>
				<view class="popList">
					<view class="popLeft">
						<view class="title">不使用蜜糖折扣</view>
					</view>
					<image class="choose" src="/static/regestIcon2.png"></image>
				</view>
				<view class="button" @click="toggleMTPop">完成</view>
			</view>
		</view>
		<view class="shoppingListPopFrame" v-if="showShoppingList" @click.stop="toggleShoppingList">
			<view class="shoppingListPop"  @click.stop="stopPrevent">
				<view class="shoppingListTop">
					<view class="shoppingListTitle">商品清单</view>
					<view class="shoppingListTotal">共3件</view>
				</view>
				<view class="shoppingPoint">
					<image class="shoppingImg" src="/static/found0.png"></image>
					<view class="shoppingRight">
						<view class="shoppingTitle">恒源祥2019春季长袖白色t袖 新款春装宽 松百搭衣冬季保暖长袖时尚潮流 07214…</view>
						<view class="shoppingDsc">全羊绒，哥弟2019秋冬新款100%，纯山羊绒衫…</view>
						<view class="shoppingBottom">
							<view class="shoppingPrice"><text class="priceTip">￥</text>1234.56<text class="oldPrice">￥2000.11</text></view>
							<view class="shoppingCount">x1</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
	</pageCP>
</template>

<script>
	import allpage from '@/mixin/allPage'
	export default {
		mixins:[allpage],
		data() {
			return {
				pop:false,
				showShoppingList:false,
				couponPop:false,
				mtPop:false
			}
		},
		onLoad(option){

		},
		methods: {
			togglePop(){
				this.pop = !this.pop
			},
			toggleCouponPop(){
				this.couponPop = !this.couponPop
			},
			toggleMTPop(){
				this.mtPop = !this.mtPop
			},
			stopPrevent(){},
			toggleShoppingList(){
				this.showShoppingList = !this.showShoppingList
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
		height:192rpx;
		background-color:#fff;
		display:flex;
		justify-content:space-between;
		align-items:center;
		position: relative;
		padding: 24rpx 34rpx 49rpx 33rpx;
		border-radius:21rpx;
		overflow: hidden;
		.left{
			display: flex;
			align-items: center;
			.info{
				.infoTop{
					display: flex;
					align-items: center;
					margin-top: 19rpx;
					.name{
						font-size:24rpx;
						font-family:PingFang SC;
						font-weight:500;
						color:rgba(51,51,51,1);
						margin-right: 14rpx;
					}
					.phone{
						font-size:24rpx;
						font-family:PingFang SC;
						font-weight:500;
						color:rgba(51,51,51,1);
					}
				}
				.place{
					font-size:32rpx;
					font-family:PingFang SC;
					font-weight:800;
					color:rgba(51,51,51,1);
					margin-top: 26rpx;
				}
				.area{
					font-size:24rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(51,51,51,1);
				}
			}
		}
		.right{
			width:21rpx;
			height:21rpx;
		}
		.mailBottom{
			width: 750rpx;
			height: 7rpx;
			position: absolute;
			left: 0;
			bottom:0;
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
		background-color: #fff;
		.left{
			flex-grow: 1;
			padding: 35rpx 47rpx;
			font-size:28rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(102,102,102,1);
			.red{
				font-size:46rpx;
				font-family:PingFang SC;
				font-weight:800;
				color:rgba(254,70,70,1);
			}
			.oldPrice{
				margin-left: 20rpx;
				font-size:25rpx;
				font-family:PingFang SC;
				font-weight:500;
				text-decoration:line-through;
				color:rgba(153,153,153,1);
				opacity:0.8;
			}
		}
		.pay{
			flex-shrink: 0;
			height: 94rpx;
			width:217rpx;
			background:#FE4646;
			line-height: 94rpx;
			text-align: center;
			font-size:28rpx;
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
	.goodList{
		width:750rpx;
		margin-top: 28rpx;
		border-radius: 21rpx;
		background-color: #fff;
		padding: 49rpx 34rpx 37rpx 33rpx;
		.goodListTitle{
			font-size:24rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(51,51,51,1);
		}
		.goodListCenter{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 44rpx;
			.goodListLeft{
				display: flex;
				image{
					width:131rpx;
					height:131rpx;
					margin-right: 14rpx;
				}
			}
			.goodListRight{
				display: flex;
				.total{
					font-size:24rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(51,51,51,1);
					margin-right: 22rpx;
				}
				.rightDeg{
					width:11rpx;
					height:23rpx;
				}
			}
		}
		.goodListBottom{
			margin-top: 58rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.goodListBottomLeft{
				font-size:24rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(51,51,51,1);
			}
			.goodListBottomRight{
				font-size:24rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(153,153,153,1);
			}
		}
	}
	.otherList{
		width:750rpx;
		margin-top: 28rpx;
		border-radius: 21rpx;
		background-color: #fff;
		padding: 39rpx 34rpx 39rpx 33rpx;
		.point{
			display: flex;
			align-items: center;
			justify-content: space-between;
			.label{
				font-size:24rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(51,51,51,1);
				.mt{
					width:22rpx;
					height:22rpx;
				}
				.border{
					border:1px solid rgba(255,54,44,1);
					border-radius:4rpx;
					font-size:18rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(250,28,0,1);
				}
				.yellow{
					color: #FFC600;
				}
				.red{
					color:#FA1C00;
				}
			}
			.value{
				display: flex;
				font-size:24rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(51,51,51,1);
				.rightDag{
					width:11rpx;
					height:23rpx;
				}
			}
		}
	}
	.countList{
		width:750rpx;
		margin-top: 28rpx;
		border-radius: 21rpx;
		background-color: #fff;
		padding: 39rpx 34rpx 39rpx 33rpx;
		.point{
			display: flex;
			justify-content: space-between;
			align-items: center;
			.label{
				font-size:24rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(51,51,51,1);
			}
			.value{
				font-size:24rpx;
				font-family:PingFang SC;
				font-weight:800;
				color:rgba(36,36,36,1);
			}
			&.red{
				margin-top: 23rpx;
				.value{
					font-size:24rpx;
					font-family:PingFang SC;
					font-weight:800;
					color:rgba(250,28,0,1);
				}
			}
		}
	}
	.shoppingListPopFrame{
		position: fixed;
		top:0;
		left: 0;
		bottom:0;
		width: 750rpx;
		background-color: rgba(0,0,0,0.5);
		.shoppingListPop{
			position: absolute;
			left:0;
			bottom:0;
			width:750rpx;
			min-height: 75%;
			background-color: #fff;
			padding: 70rpx 34rpx;
			.shoppingListTop{
				display: flex;
				align-items: center;
				justify-content: space-between;
				.shoppingListTitle{
					font-size:35rpx;
					font-family:PingFang SC;
					font-weight:bold;
					color:rgba(52,52,52,1);
				}
				.shoppingListTotal{
					font-size:25rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(153,153,153,1);
				}
			}
			.shoppingPoint{
				width:100%;
				padding: 32rpx 0 50rpx 0;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1px solid rgba(236,236,236,1);
				.shoppingImg{
					width:189rpx;
					height:189rpx;
					flex-shrink: 0;
				}
				.shoppingRight{
					margin-left: 27rpx;
					flex-grow: 1;
					.shoppingTitle{
						width:453rpx;
						height:68rpx;
						font-size:25rpx;
						font-family:PingFang SC;
						font-weight:500;
						color:rgba(51,51,51,1);
						line-height:39rpx;
						overflow: hidden;
						-webkit-line-clamp:2;
						display: -webkit-box;
						-webkit-box-orient:vertical;
						text-overflow: ellipsis;
					}
					.shoppingDsc{
						font-size:21rpx;
						font-family:PingFang SC;
						font-weight:500;
						color:rgba(51,51,51,1);
						opacity:0.6;
						margin-top: 20rpx;
					}
					.shoppingBottom{
						display: flex;
						margin-top: 34rpx;
						justify-content: space-between;
						.shoppingPrice{
							font-size:46rpx;
							font-family:PingFang SC;
							font-weight:800;
							color:rgba(254,70,70,1);
							.priceTip{
								font-size:28rpx;
								font-family:PingFang SC;
								font-weight:500;
								color:rgba(254,70,70,1);
							}
							.oldPrice{
								font-size:25rpx;
								font-family:PingFang SC;
								font-weight:500;
								text-decoration:line-through;
								color:rgba(153,153,153,1);
								opacity:0.8;
								margin-left: 24rpx;
							}
						}
						.shoppingCount{
							font-size:21rpx;
							font-family:PingFang SC;
							font-weight:800;
							color:rgba(51,51,51,1);
						}
					}
				}
			}
		}
	}
</style>
