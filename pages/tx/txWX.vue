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
		<view class="errorPopFrame" @click="errorToggle">
			<view class="errorPop" @click.stop="stopEvent">
				<view class="errorTitle">提现失败</view>
				<view class="errorBottom">
					<image class="errorIcon" src="/static/txError.png"></image>
					<view class="errorDsc">抱歉，提现没有成功，请您检查一下~</view>
					<view class="errorButton" @click="errorToggle">返回</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				errorPop:false
			};
		},
		methods:{
			stopEvent(){},
			errorToggle(){
				this.errorPop = !this.errorPop
			}
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
		.errorPopFrame{
			position: fixed;
			top:0;
			bottom:0;
			left:0;
			width:750rpx;
			background-color: rgba(0,0,0,0.5);
			z-index: 9;
			.errorPop{
				width: 750rpx;
				height: 460rpx;
				position: absolute;
				left:0;
				bottom:0;
				background-color: #fff;
				border-radius: 10rpx 10rpx 0 0;
				padding: 0 22rpx;
				.errorTitle{
					width:100%;
					height: 90rpx;
					line-height: 90rpx;
					text-align: center;
					font-size:35rpx;
					font-family:PingFang SC;
					font-weight:bold;
					color:rgba(52,52,52,1);
				}
				.errorBottom{
					width:100%;
					height: 374rpx;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					.errorIcon{
						width:148rpx;
						height:148rpx;
					}
					.errorDsc{
						font-size:28rpx;
						font-family:PingFang SC;
						font-weight:500;
						color:rgba(52,52,52,1);
						margin-top: 31rpx;
					}
					.errorButton{
						width:684rpx;
						height:74rpx;
						background:linear-gradient(20deg,rgba(240,45,64,1),rgba(239,65,83,1));
						border-radius:37rpx;
						margin-top: 37rpx;
						font-size:31rpx;
						font-family:PingFang SC;
						font-weight:500;
						color:rgba(255,255,255,1);
						line-height: 74rpx;
						text-align: center;
					}
				}
			}
		}
	}
</style>
