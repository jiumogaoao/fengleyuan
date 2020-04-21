<template>
	<pageCP>
	<view class="container">
		<view class="top">
			<view class="price">456.<text class="smallPrice">89元</text></view>
			<view class="dsc">提现成功</view>
		</view>
		<view class="center">
			<view class="centerTitle">处理进度</view>
			<view class="list">
				<image src="/static/txSuccess.png" class="leftPic"></image>
				<view class="listRight">
					<view class="point">
						<view class="label">456.89元提现申请已提交</view>
						<view class="date">02-01 17:02</view>
					</view>
					<view class="point">
						<view class="label">456.89元提现申请已提交</view>
						<view class="date">02-01 17:02</view>
					</view>
					<view class="point">
						<view class="label">456.89元提现申请已提交</view>
						<view class="date">02-01 17:02</view>
					</view>
				</view>
			</view>
		</view>
		<view class="bottom">
			<view class="list">
				<view class="label">到账方式</view>
				<view class="value">微信</view>
			</view>
			<view class="list">
				<view class="label">到账时间</view>
				<view class="value">2020-02-01 17:02</view>
			</view>
			<view class="button">
				去酿蜜器获得更多蜜糖
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
	position: fixed;
	top:0;
	bottom:0;
	left: 0;
	width:750rpx;
	display: flex;
	flex-direction: column;
	background-color: #f5f6f8;
	.top{
		width:750rpx;
		height: 219rpx;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 19rpx;
		flex-shrink: 0;
		.price{
			font-size:93rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(44,44,44,1);
			.smallPrice{
				font-size:69rpx;
			}
		}
		.dsc{
			font-size:28rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(153,153,153,1);
			margin-top: 33rpx;
		}
	}
	.center{
		width:750rpx;
		height:404rpx;
		background-color: #fff;
		padding: 0 33rpx;
		margin-top: 9rpx;
		flex-shrink: 0;
		.centerTitle{
			height: 102rpx;
			line-height: 102rpx;
			font-size:35rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(38,38,38,1);
		}
		.list{
			display: flex;
			.leftPic{
				width:49rpx;
				height: 256rpx;
				flex-shrink: 0;
			}
			.listRight{
				flex-grow: 1;
				margin-left: 26rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				height: 256rpx;
				.point{
					display: flex;
					align-items: center;
					justify-content: space-between;
					.label{
						font-size:31rpx;
						font-family:PingFang SC;
						font-weight:500;
						color:rgba(38,38,38,1);
					}
					.date{
						font-size:28rpx;
						font-family:PingFang SC;
						font-weight:500;
						color:rgba(153,153,153,1);
					}
				}
			}
		}
	}
	.bottom{
		width: 750rpx;
		flex-grow: 1;
		padding: 0 32rpx 0 40rpx;
		position: relative;
		background-color: #fff;
		margin-top: 9rpx;
		.list{
			width:100%;
			display: flex;
			justify-content:space-between;
			align-items: center;
			border-bottom:1px solid rgba(241,242,246,1);
			height: 95rpx;
			.label{
				font-size:28rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(34,34,34,1);
			}
			.value{
				font-size:28rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(38,38,38,1);
			}
		}
		.button{
			margin: auto;
			margin-top: 155rpx;
			width:625rpx;
			height: 83rpx;
			background:rgba(239,65,83,1);
			border-radius:42rpx;
			font-size:28rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(255,255,255,1);
			text-align: center;
			line-height: 83rpx;
		}
	}
}
</style>
