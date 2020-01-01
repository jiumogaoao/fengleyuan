<template>
	<view class="content">
		<image class="topBG" src="/static/businessBG.png"></image>
		<view class="top">
			<image class="avartar" src="/static/missing-face.png"></image>
			<view class="info">
				<view class="title"><text>蜜蜂天堂自营商城</text><image class="level" src="/static/businessLevel.png"></image></view>
				<view class="type">线上商家</view>
			</view>
			<view class="right">
				<view class="price"><text class="priceTip">￥</text>2020<text class="xs">.12</text></view>
				<view class="out">提现</view>
			</view>
		</view>
		<view class="center">
			<view class="point">
				<view class="number" style="color:#DF3132;">￥18，238.00</view>
				<view class="text">累计订单金额</view>
			</view>
			<view class="point">
				<view class="number" style="color:#55A8FF;">2019</view>
				<view class="text">累计订单数</view>
			</view>
			<view class="point">
				<view class="number" style="color:#2FC0B6;">￥2020.11</view>
				<view class="text">待结算金额</view>
			</view>
		</view>
		<view class="bottom">
			<view class="bottomTitle">店铺管理</view>
			<view class="list">
				<view class="point" @click="go('/pages/goodManage/goodManage')">
					<image class="nav" src="/static/business0.png"></image>
					<view class="title">商品管理</view>
					<view class="dsc">商品添加、删除、上下架</view>
					<view class="line"></view>
				</view>
				<view class="point" @click="go('/pages/order/order')">
					<image class="nav" src="/static/business1.png"></image>
					<view class="title">订单管理</view>
					<view class="dsc">上传物流单号、展示物流信息</view>
				</view>
				<view class="point" @click="go('/pages/business/business?edit=1')">
					<image class="nav" src="/static/business2.png"></image>
					<view class="title">商家信息</view>
					<view class="dsc">管理和修改商家注册信息</view>
					<view class="line"></view>
				</view>
				<view class="point" @click="go('/pages/fans/fans')">
					<image class="nav" src="/static/business3.png"></image>
					<view class="title">分享粉丝</view>
					<view class="dsc">分享给您的忠实粉丝</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import allpage from '@/mixin/allPage'

	export default {
		mixins:[allpage],
		comments:{
			
		},
		data() {
			return {
				
			}
		},
		computed:{
			
		},
		onLoad(option){
			
		},
		methods: {
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
		background: $page-color-base;
	}
	.topBG{
		width:750rpx;
		height: 330rpx;
	}
	.top{
		width:669rpx;
		height: 169rpx;
		background:rgba(255,255,255,1);
		position: relative;
		box-shadow:0px 1rpx 14rpx 0rpx rgba(182,182,182,0.3);
		border-radius:7rpx;
		margin: auto;
		margin-top: -111rpx;
		padding: 0 38rpx;
		display: flex;
		z-index: 2;
		.avartar{
			width:78rpx;
			height:78rpx;
			border-radius: 78rpx;
			margin-top: 38rpx;
			flex-shrink: 0;
		}
		.info{
			margin-left: 19rpx;
			margin-top: 44rpx;
			flex-shrink: 0;
			.title{
				font-size:25rpx;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(51,51,51,1);
				.level{
					width:29rpx;
					height:39rpx;
					margin-left: 17rpx;
				}
			}
			.type{
				display: block;
				margin-top: 20rpx;
				border: 1px solid #358EF2;
				border-radius:3rpx;
				padding: 5rpx 10rpx;
				font-size:21rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(53,142,242,1);
				width: fit-content;
			}
		}
		.right{
			margin-left: 47rpx;
			margin-top: 48rpx;
			.price{
				font-size:62rpx;
				font-family:PingFang SC;
				font-weight:800;
				color:rgba(239,30,99,1);
				.priceTip{
					font-size:35rpx;
				}
				.xs{
					font-size:35rpx;
				}
			}
			.out{
				width:97rpx;
				height:35rpx;
				background:rgba(245,145,31,1);
				border-radius:13rpx;
				margin: auto;
				margin-top: 22rpx;
				font-size:21rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(255,255,255,1);
				text-align-last: center;
				line-height: 35rpx;
			}
		}
	}
	.center{
		width:750rpx;
		height:151rpx;
		background:rgba(255,255,255,1);
		border-radius:7rpx;
		margin-top: 19rpx;
		display: flex;
		align-items: center;
		.point{
			width:33.3%;
			height: 100%;
			flex-grow: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.number{
				font-size:22rpx;
				font-family:PingFang SC;
				font-weight:bold;
			}
			.text{
				font-size:21rpx;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(85,85,85,1);
				margin-top: 15rpx;
			}
		}
	}
	.bottom{
		width:750rpx;
		background:rgba(255,255,255,1);
		border-radius:7rpx;
		margin-top: 19rpx;
		padding: 26rpx 33rpx;
		.bottomTitle{
			font-size:32rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(119,119,119,1);
		}
		.list{
			margin-top: 24rpx;
			width:100%;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.point{
				width:50%;
				height: 250rpx;
				position: relative;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				.nav{
					width:96rpx;
					height:96rpx;
				}
				.title{
					font-size:26rpx;
					font-family:PingFang SC;
					font-weight:bold;
					color:rgba(85,85,85,1);
					margin-top: 19rpx;
				}
				.dsc{
					font-size:20rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(153,153,153,1);
					margin-top: 14rpx;
				}
				.line{
					width:1px;
					height: 120rpx;
					background-color: #DFDFDF;
					position: absolute;
					top:65rpx;
					right:0;
				}
			}
		}
	}
</style>