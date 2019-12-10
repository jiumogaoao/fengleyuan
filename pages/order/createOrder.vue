<template>
	<view>
		<view class="top">
			<view class="productList">
				<image src="/static/orderProductPic.png"></image>
				<view class="info">
					<view class="name">四合院北极保暖四件套原生实惠装</view>
					<view class="type">
						<view class="sku">会员类型：A套餐</view>
						<view class="count">x1</view>
					</view>
					<view class="price">￥365</view>
				</view>
			</view>
			<view class="totalFramr">
				<view class="label">支付总额</view>
				<view class="price">￥365</view>
			</view>
		</view>
		<view class="list" @click="go('/pages/editPlace/editPlace')">
			<view class="point">
				<view class="label">收货人</view>
				<view class="valueFrame">
					<view class="value">谢文东</view>
					<image src="/static/right.png" class="right"></image>
				</view>
			</view>
			<view class="point">
				<view class="label">手机号</view>
				<view class="valueFrame">
					<view class="value">15698485637</view>
					<image src="/static/right.png" class="right"></image>
				</view>
			</view>
			<view class="point">
				<view class="label">选择地区</view>
				<view class="valueFrame">
					<view class="value">广东省-广州市-天河区</view>
					<image src="/static/right.png" class="right"></image>
				</view>
			</view>
			<view class="point">
				<view class="label">详细地址</view>
				<view class="valueFrame">
					<view class="value">广东省广州市天河区东圃镇新塘大街5号</view>
					<image src="/static/right.png" class="right"></image>
				</view>
			</view>
		</view>
		<view class="list">
			<view class="point" @click="togglePop">
				<view class="label">支付方式</view>
				<view class="valueFrame">
					<image src="/static/wx.png" class="wxIcon"></image>
					<view class="text">微信</view>
					<image src="/static/right.png" class="right"></image>
				</view>
			</view>
		</view>
		<view class="foot">
			<view class="left">需付款<text class="price">￥365</text></view>
			<view class="pay">立即付款</view>
		</view>
		<!-- 地址 -->
		<!-- <navigator url="/pages/address/address?source=1" class="address-section">
			<view class="order-content">
				<text class="yticon icon-shouhuodizhi"></text>
				<view class="cen">
					<view class="top">
						<text class="name">{{addressData.name}}</text>
						<text class="mobile">{{addressData.mobile}}</text>
					</view>
					<text class="address">{{addressData.address}} {{addressData.area}}</text>
				</view>
				<text class="yticon icon-you"></text>
			</view>

			<image class="a-bg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAAFCAYAAAAaAWmiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Rjk3RjkzMjM2NzMxMTFFOUI4RkU4OEZGMDcxQzgzOEYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Rjk3RjkzMjQ2NzMxMTFFOUI4RkU4OEZGMDcxQzgzOEYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGOTdGOTMyMTY3MzExMUU5QjhGRTg4RkYwNzFDODM4RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGOTdGOTMyMjY3MzExMUU5QjhGRTg4RkYwNzFDODM4RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrEOZlQAAAiuSURBVHjazJp7bFvV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"></image>
		</navigator> -->

		<!-- <view class="goods-section">
			<view class="g-header b-b">
				<image class="logo" src="http://duoduo.qibukj.cn/./Upload/Images/20190321/201903211727515.png"></image>
				<text class="name">西城小店铺</text>
			</view> -->
			<!-- 商品列表 -->
			<!-- <view class="g-item">
				<image src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=756705744,3505936868&fm=11&gp=0.jpg"></image>
				<view class="right">
					<text class="title clamp">古黛妃 短袖t恤女夏装2019新款</text>
					<text class="spec">春装款 L</text>
					<view class="price-box">
						<text class="price">￥17.8</text>
						<text class="number">x 1</text>
					</view>
				</view>
			</view>
			<view class="g-item">
				<image src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg"></image>
				<view class="right">
					<text class="title clamp">韩版于是洞洞拖鞋 夏季浴室防滑简约居家【新人专享，限选意见】</text>
					<text class="spec">春装款 L</text>
					<view class="price-box">
						<text class="price">￥17.8</text>
						<text class="number">x 1</text>
					</view>
				</view>
			</view>
		</view> -->

		<!-- 优惠明细 -->
		<!-- <view class="yt-list">
			<view class="yt-list-cell b-b" @click="toggleMask('show')">
				<view class="cell-icon">
					券
				</view>
				<text class="cell-tit clamp">优惠券</text>
				<text class="cell-tip active">
					选择优惠券
				</text>
				<text class="cell-more wanjia wanjia-gengduo-d"></text>
			</view>
			<view class="yt-list-cell b-b">
				<view class="cell-icon hb">
					减
				</view>
				<text class="cell-tit clamp">商家促销</text>
				<text class="cell-tip disabled">暂无可用优惠</text>
			</view>
		</view> -->
		<!-- 金额明细 -->
		<!-- <view class="yt-list">
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">商品金额</text>
				<text class="cell-tip">￥179.88</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">优惠金额</text>
				<text class="cell-tip red">-￥35</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">运费</text>
				<text class="cell-tip">免运费</text>
			</view>
			<view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">备注</text>
				<input class="desc" type="text" v-model="desc" placeholder="请填写备注信息" placeholder-class="placeholder" />
			</view>
		</view> -->
		
		<!-- 底部 -->
		<!-- <view class="footer">
			<view class="price-content">
				<text>实付款</text>
				<text class="price-tip">￥</text>
				<text class="price">475</text>
			</view>
			<text class="submit" @click="submit">提交订单</text>
		</view> -->
		
		<!-- 优惠券面板 -->
		<!-- <view class="mask" :class="maskState===0 ? 'none' : maskState===1 ? 'show' : ''" @click="toggleMask">
			<view class="mask-content" @click.stop.prevent="stopPrevent"> -->
				<!-- 优惠券页面，仿mt -->
		<!-- 		<view class="coupon-item" v-for="(item,index) in couponList" :key="index">
					<view class="con">
						<view class="left">
							<text class="title">{{item.title}}</text>
							<text class="time">有效期至2019-06-30</text>
						</view>
						<view class="right">
							<text class="price">{{item.price}}</text>
							<text>满30可用</text>
						</view>
						
						<view class="circle l"></view>
						<view class="circle r"></view>
					</view>
					<text class="tips">限新用户使用</text>
				</view>
			</view>
		</view> -->
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
				// maskState: 0, //优惠券面板显示状态
				// desc: '', //备注
				// payType: 1, //1微信 2支付宝
				// couponList: [
				// 	{
				// 		title: '新用户专享优惠券',
				// 		price: 5,
				// 	},
				// 	{
				// 		title: '庆五一发一波优惠券',
				// 		price: 10,
				// 	},
				// 	{
				// 		title: '优惠券优惠券优惠券优惠券',
				// 		price: 15,
				// 	}
				// ],
				// addressData: {
				// 	name: '许小星',
				// 	mobile: '13853989563',
				// 	addressName: '金九大道',
				// 	address: '山东省济南市历城区',
				// 	area: '149号',
				// 	default: false,
				// }
			}
		},
		onLoad(option){
			//商品数据
			//let data = JSON.parse(option.data);
			//console.log(data);
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
			//显示优惠券面板
			// toggleMask(type){
			// 	let timer = type === 'show' ? 10 : 300;
			// 	let	state = type === 'show' ? 1 : 0;
			// 	this.maskState = 2;
			// 	setTimeout(()=>{
			// 		this.maskState = state;
			// 	}, timer)
			// },
			// numberChange(data) {
			// 	this.number = data.number;
			// },
			// changePayType(type){
			// 	this.payType = type;
			// },
			// submit(){
			// 	uni.redirectTo({
			// 		url: '/pages/money/pay'
			// 	})
			// },
			// stopPrevent(){}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #f5f6f8;
	}
	.top{
		width:750rpx;
		padding: 0 48rpx 0 26rpx;
		margin-top: 20rpx;
		background-color: #fff;
		.productList{
			width: 100%;
			height: 191rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			image{
				width:150rpx;
				height: 150rpx;
				margin-right: 20rpx;
				flex-shrink: 0;
			}
			.info{
				flex-grow: 1;
				.name{
					font-size:26rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(34,34,34,1);
				}
				.type{
					width: 100%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-top: 22rpx;
					.sku{
						font-size:23rpx;
						font-family:PingFang SC;
						font-weight:500;
						color:rgba(153,153,153,1);
					}
					.count{
						font-size:23rpx;
						font-family:PingFang SC;
						font-weight:500;
						color:rgba(153,153,153,1);
					}
				}
				.price{
					font-size:23rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(153,153,153,1);
					width: 100%;
					text-align: right;
					margin-top: 43rpx;
				}
			}
		}
		.totalFramr{
			width: 100%;
			height: 68rpx;
			border-top:1px solid rgba(241,242,246,1);
			display: flex;
			align-items: center;
			justify-content: space-between;
			.label{
				font-size:23rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(0,0,0,1);
			}
			.price{
				width:86rpx;
				height:26rpx;
				font-size:35rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(219,0,27,1);
			}
		}
	}
	.list{
		width:750rpx;
		padding: 0 48rpx 0 26rpx;
		margin-top: 20rpx;
		background-color: #fff;
		.point{
			width: 100%;
			height: 78rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #f5f6f8;
			.label{
				font-size:26rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(34,34,34,1);
			}
			.valueFrame{
				display: flex;
				align-items: center;
				flex-shrink: 0;
				.value{
					font-size:26rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(153,153,153,1);
					margin-right: 30rpx;
					flex-shrink: 0;
				}
				.right{
					width:21rpx;
					height: 21rpx;
					flex-shrink: 0;
				}
				.text{
					font-size:26rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(34,34,34,1);
					margin-right: 18rpx;
				}
				.wxIcon{
					width:42rpx;
					height: 42rpx;
					margin-right: 18rpx;
				}
			}
		}
	}
	.foot{
		width:750rpx;
		height:94rpx;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		left:0;
		bottom:0;
		.left{
			font-size:26rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(34,34,34,1);
			margin-left: 47rpx;
			.price{
				font-size:35rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(219,0,27,1);
			}
		}
		.pay{
			width:277rpx;
			height:94rpx;
			background:linear-gradient(-90deg,rgba(221,141,69,1) 0%,rgba(250,197,35,1) 100%);
			font-size:35rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(255,255,255,1);
			text-align: center;
			line-height: 94rpx;
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
