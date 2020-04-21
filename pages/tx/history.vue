<template>
	<pageCP>
	<view class="container">
		<view class="noHistory">
			<image class="noHistoryPic" src="/static/txNoHistory.png"></image>
			<view class="noHistoryDsc">您当前没有提现记录</view>
		</view>
		<view class="point">
			<view class="list">
				<view class="label hl">提现金额</view>
				<view class="value hl">￥600.00</view>
			</view>
			<view class="list">
				<view class="label">提现时间</view>
				<view class="value">2019-02-23 15:18:20</view>
			</view>
			<view class="list">
				<view class="label">提现状态</view>
				<view class="value">待审核</view>
			</view>
			<view class="list">
				<view class="label">提现方式</view>
				<view class="value">支付宝</view>
			</view>
		</view>
	</view>
	</pageCP>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.container{
		width:750rpx;
		.noHistory{
			position: fixed;
			top:0;
			bottom: 0;
			left:0;
			width:750rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.noHistoryPic{
				width:515rpx;
				height:382rpx;
				position: relative;
				right: 30rpx;
			}
			.noHistoryDsc{
				margin-top: 74rpx;
				font-size:35rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(153,153,153,1);
			}
		}
		.point{
			width:653rpx;
			height:246rpx;
			background-color: #fff;
			box-shadow:0px 7px 11px 2px rgba(198,198,198,0.3), 0px 1px 0px 0px rgba(131, 131, 131, 0.35);
			padding: 37rpx 35rpx 0 29rpx;
			margin: auto;
			margin-top: 35rpx;
			.list{
				width:100%;
				display: flex;
				justify-content: space-around;
				align-items: center;
				margin-bottom: 27rpx;
				.label{
					font-size:28rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(123,123,123,1);
					&.hl{
						color:rgba(37,37,37,1);
					}
				}
				.value{
					font-size:28rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(123,123,123,1);
					&.hl{
						color:rgba(255,180,0,1);
					}
				}
			}
		}
	}
</style>
