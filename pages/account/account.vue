<template>
	<view>
		<view class="top">
			<view class="money">￥0.00</view>
			<view class="title">我的账户余额</view>
		</view>
		<view class="bar">
			<view class="item">
				<view class="title">提现中</view>
				<view class="money">￥0.00</view>
			</view>
			<view class="item">
				<view class="title">本月结算预估</view>
				<view class="money">￥0.00</view>
			</view>
			<view class="item" style="border-right: 0;">
				<view class="title">本月付款预估</view>
				<view class="money">￥0.00</view>
			</view>
		</view>
		<view class="go">前往提现</view>
		<view class="dsc">每月28号计算上月收入最低提现额度为9.00元</view>
		<view class="recommend">为您推荐</view>
		<view class="bottom">
			<view class="text">今日区块币涨幅+0.0291%</view>
			<view class="text">今日区块币价格8.91197521/个</view>
			<view class="change">赶快去兑换吧！</view>
		</view>
	</view>
</template>

<script>
	import allpage from '@/mixin/allPage'
	export default {
		mixins:[allpage],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: #f7f7f7;
	}
	.top{
		width: 750rpx;
		height: 314rpx;
		background-image: url('~@/static/bg.png');
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		.money{
			font-size: 54rpx;
			color: #fff;
			font-weight: bold;
		}
		.title{
			font-size: 22rpx;
			color: #fff;
			font-weight: bold;
			margin-top: 32rpx;
		}
	}
	.bar{
		width:750rpx;
		background-color: #fff;
		height:144rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.item{
			height: 100%;
			flex-grow: 1;
			flex-shrink: 0;
			border-right: 1px solid #ddd;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.title{
				font-size: 26rpx;
			}
			.money{
				font-size: 30rpx;
				color: #df5459;
				font-weight: bold;
				margin-top: 20rpx;
			}
		}
	}
	.go{
		width: 676rpx;
		height: 90rpx;
		line-height: 90rpx;
		text-align: center;
		background-image: url('~@/static/bg.png');
		color: #fff;
		font-weight: bold;
		margin: auto;
		margin-top: 70rpx;
		font-size: 30rpx;
		border-radius: 90rpx;
	}
	.dsc{
		width:290rpx;
		font-size: 28rpx;
		margin: auto;
		margin-top: 70rpx;
		line-height: 50rpx;
		color: #868686;
	}
	.recommend{
		font-size: 32rpx;
		font-weight: bold;
		color: #868686;
		width: 100%;
		text-align: center;
		margin-top: 88rpx;
		padding-bottom: 30rpx;
	}
	.bottom{
		width: 750rpx;
		background-color: #fff;
		padding-bottom: 38rpx;
		.text{
			font-size: 26rpx;
			color: #9a9a9a;
			padding-top: 38rpx;
			text-align: center;
		}
		.change{
			width: 676rpx;
			height: 90rpx;
			line-height: 90rpx;
			text-align: center;
			background-image: url('~@/static/bg.png');
			color: #fff;
			font-weight: bold;
			margin: auto;
			margin-top: 40rpx;
			font-size: 30rpx;
		}
	}
</style>
