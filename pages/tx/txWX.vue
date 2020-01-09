<template>
	<view class="container">
		<view class="top">
			<view class="point">
				<view class="label">微信号</view>
				<input placeholder="请输入微信号"/>
			</view>
		</view>
		<view class="bottom">
			<view class="point">
				<view class="label">提现金额</view>
				<input placeholder="请输入提现金额"/>
			</view>
			<view class="total">当前可提现123，456.89元，<text class="red">全部提现</text></view>
			<view class="confirm">提交</view>
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

<style lang="scss">
	.container{
		width:750rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: fixed;
		top:0;
		left:0;
		bottom:0;
		.point{
			width:100%;
			height: 97rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px solid rgba(241,242,246,1);
			.label{
				font-size:28rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(34,34,34,1);
				flex-shrink: 0;
			}
			input{
				text-align: right;
				flex-grow: 1;
				font-size:28rpx;
				font-family:PingFang SC;
				font-weight:500;
			}
		}
		.top{
			width:750rpx;
			padding: 0 37rpx;
			background-color: #fff;
			flex-shrink: 0;
		}
		.bottom{
			width: 750rpx;
			margin-top: 19rpx;
			flex-grow: 1;
			padding: 0 37rpx;
			position: relative;
			.total{
				font-size:22rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(153,153,153,1);
				margin-top: 30rpx;
				text-align: right;
				.red{
					color:#FF7785;
				}
			}
			.confirm{
				width:625rpx;
				height:83rpx;
				background:rgba(239,65,83,1);
				border-radius:42rpx;
				position: absolute;
				left: 63rpx;
				bottom:134rpx;
				line-height: 83rpx;
				text-align: center;
				font-size:28rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(255,255,255,1);
			}
		}
	}
</style>
