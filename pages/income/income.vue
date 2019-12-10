<template>
	<view>
		<view class="top">
			<view class="topTop">
				<view class="topLeft">
					<view class="title">账户乐币余额</view>
					<view class="bigMoney">123.45</view>
				</view>
				<view class="topRight">
					<view class="iconfont">&#xe62a;</view>
					<view class="detail">账单明细</view>
				</view>
			</view>
			<view class="topBottom">
				<view class="item">
					<view class="title">累计获得乐币</view>
					<view class="money">546.12</view>
				</view>
				<view class="item">
					<view class="title">未结算乐币</view>
					<view class="money">9.18</view>
				</view>
				<view class="item">
					<view class="title">月均获得乐币</view>
					<view class="money">45.11</view>
				</view>
			</view>
		</view>
		<view class="bar">
			<view class="item">
				<view class="title">每日</view>
				<view class="line hl"></view>
			</view>
			<view class="item">
				<view class="title">每周</view>
				<view class="line"></view>
			</view>
			<view class="item" style="border-right: 0;">
				<view class="title">每月</view>
				<view class="line"></view>
			</view>
		</view>
		<view class="listHead">
			<view class="item" style="margin-left: 57rpx;">
				<view class="iconfont">&#xe697;</view>
				<view class="title">日期</view>
			</view>
			<view class="item" style="margin-left: 292rpx;">
				<view class="iconfont">&#xe606;</view>
				<view class="title">累计获得</view>
			</view>
		</view>
		<view class="listFrame">
			<view class="list">
				<view class="date">10-25</view>
				<view class="money">12.34乐币</view>
			</view>
		</view>
		<view class="listFrame">
			<view class="list">
				<view class="date">10-25</view>
				<view class="money">12.34乐币</view>
			</view>
		</view>
		<view class="listFrame">
			<view class="list">
				<view class="date">10-25</view>
				<view class="money">12.34乐币</view>
			</view>
		</view>
		<view class="listFrame">
			<view class="list">
				<view class="date">10-25</view>
				<view class="money">12.34乐币</view>
			</view>
		</view>
		<view class="listFrame">
			<view class="list">
				<view class="date">10-25</view>
				<view class="money">12.34乐币</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
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
		height: 380rpx;
		background-image: linear-gradient(to top right, #D33D34, #EC6548);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding-top: 60rpx;
		.topTop{
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.topLeft{
				margin-left: 36rpx;
				.title{
					font-size: 23rpx;
					color: #fff;
				}
				.bigMoney{
					font-size: 44rpx;
					color: #fff;
					font-weight: bold;
					margin-top: 33rpx;
				}
			}
			.topRight{
				margin-right: 58rpx;
				width:193rpx;
				height:47rpx;
				background-color: #fff;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 47rpx;
				.iconfont{
					color: #D33D34;
				}
				.detail{
					font-size: 25rpx;
					color: #D33D34;
					margin-left: 13rpx;
				}
			}
		}
		.topBottom{
			display: flex;
			justify-content: space-between;
			width: 100%;
			margin-top: 30rpx;
			.item{
				display: flex;
				flex-direction: column;
				align-items: center;
				flex-grow: 1;
				.title{
					font-size: 23rpx;
					color: #fff;
				}
				.money{
					font-size: 28rpx;
					color: #fff;
					margin-top: 28rpx;
				}
			}
		}
	}
	.bar{
		width:750rpx;
		background-color: #fff;
		height:82rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.item{
			height: 100%;
			flex-grow: 1;
			flex-shrink: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;
			.title{
				font-size: 28rpx;
			}
			.line{
				width:34rpx;
				height: 4rpx;
				background-color: #333;
				position: absolute;
				bottom:0;
				display: none;
			}
			.hl{
				display: block;
			}
		}
	}
	.listHead{
		width:750rpx;
		height: 82rpx;
		display: flex;
		align-items: center;
		.item{
			display: flex;
			align-items: center;
			.iconfont{
				font-size: 27rpx;
				color: #333333;
			}
			.title{
				font-size: 27rpx;
				color: #333333;
				margin-left: 10rpx;
			}
		}
	}
	.listFrame{
		width:712rpx;
		background-color: #fff;
		margin: auto;
		.list{
			width: 631rpx;
			height: 99rpx;
			margin: auto;
			border-bottom: 1px solid #ddd;
			display: flex;
			align-items: center;
			.date{
				font-size: 25rpx;
				width: 376rpx;
				color: #333;
				font-weight: bold;
			}
			.money{
				font-size: 25rpx;
				color: #FF5500;
				font-weight: bold;
			}
		}
	}
</style>
