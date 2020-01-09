<template>
	<view class="container">
		<view class="top">
			<image class="topBG" src="/static/niangmiqiBG.png"></image>
			<image class="niangmiqi" src="/static/nianmiqi.gif"></image>
			<view class="rest">剩余花粉数量：123，456.78</view>
			<view class="add">加速x1.2</view>
		</view>
		<view class="center">
			<image class="centerBG" src="/static/niangmiqicenterBG.png"></image>
			<view class="bigTitle">任务栏</view>
			<view class="dscTop">当前贡献值：120</view>
			<view class="title" style="top:147rpx;left:55rpx;">每日签到</view>
			<view class="dsc" style="top:192rpx;left:55rpx;">连续签到，奖励更丰厚</view>
			<view class="title" style="top:310rpx;left:55rpx;">看视频得花粉</view>
			<view class="dsc" style="top:355rpx;left:55rpx;">听说点击视频连接，能奖励更多花粉</view>
			<view class="line" style="top:264rpx;left:59rpx;"></view>
			<view class="button" style="top:146rpx;left:508rpx;">点击签到(5花粉)</view>
			<view class="button" style="top:310rpx;left:508rpx;">观看视频(1/15)</view>
		</view>
		<view class="bottomFrame">
			<view class="bottomButton">
				<image class="bottonBG" src="/static/niangmiqiButton0.png"></image>
			</view>
			<view class="bottomButton">
				<image class="bottonBG" src="/static/niangmiqiButton1.png"></image>
				<view class="number">123.45</view>
			</view>
		</view>
		<view class="rule">酿蜜器规则</view>
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
		align-items: center;
		.top{
			width:728rpx;
			height:730rpx;
			position: relative;
			.topBG{
				width:728rpx;
				height:730rpx;
				position: absolute;
				top:0rpx;
				left:0rpx;
			}
			.rest{
				font-size:24rpx;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(136,0,97,1);
				position: absolute;
				top:58rpx;
				left:47rpx;
			}
			.add{
				font-size:24rpx;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(136,0,97,1);
				position: absolute;
				top:58rpx;
				right:72rpx;
			}
			.niangmiqi{
				position: absolute;
				top:101rpx;
				left: 75rpx;
				width:561rpx;
				height: 562rpx;
			}
		}
		.center{
			margin-top: 6rpx;
			width:738rpx;
			height:456rpx;
			position: relative;
			.centerBG{
				width:738rpx;
				height:456rpx;
				position: absolute;
				top:0;
				left: 0;
			}
			.bigTitle{
				font-size:35rpx;
				font-family:PingFang SC;
				font-weight:800;
				color:rgba(255,255,255,1);
				position: absolute;
				top:36rpx;
				left: 301rpx;
			}
			.dscTop{
				font-size:21rpx;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(255,255,255,1);
				opacity:0.8;
				position: absolute;
				top:85rpx;
				left: 280rpx;
			}
			.line{
				width:634rpx;
				height: 1px;
				background:rgba(255,255,255,1);
				position: absolute;
			}
			.title{
				font-size:32rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(255,255,255,1);
				-webkit-text-stroke:1px #880061;
				text-stroke:1px #880061;
				position: absolute;
			}
			.dsc{
				font-size:21rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(255,255,255,1);
				position: absolute;
			}
			.button{
				background:rgba(255,194,67,1);
				box-shadow:inset 0px 2rpx 17rpx 0px rgba(69,32,194,0.32);
				border-radius:24rpx;
				font-size:24rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(51,51,51,1);
				position: absolute;
				width:195rpx;
				height:74rpx;
				line-height: 74rpx;
				text-align: center;
			}
		}
		.bottomFrame{
			width:716rpx;
			height:122rpx;
			margin-top: 15rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.bottomButton{
				width:351rpx;
				height:121rpx;
				position: relative;
				.bottonBG{
					position: absolute;
					top:0;
					left:0;
					width:351rpx;
					height:121rpx;
				}
				.number{
					font-size:56rpx;
					font-family:PingFang SC;
					font-weight:800;
					color:rgba(255,255,255,1);
					-webkit-text-stroke:1px #880061;
					text-stroke:1px #880061;
					position: absolute;
					top:56rpx;
					left:122rpx;
				}
			}
		}
		.rule{
			font-size:25rpx;
			font-family:PingFang SC;
			font-weight:bold;
			color:rgba(92,148,254,1);
			margin-top: 23rpx;
		}
	}
</style>
