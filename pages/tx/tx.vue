<template>
	<view class="container">
		<view class="yellow">
			已获得【全部提现】资格，剩余次数：1
		</view>
		<view class="top">
			<view class="dsc">总<image class="mt" src="/static/productIcon02.png"></image>（100蜜糖可以提现1元）</view>
			<view class="number">123,456.<text class="smallNumber">89</text></view>
			<image src="/static/txButton.png" class="button"></image>
		</view>
		<view class="bottom">
			<view class="list">
				<view class="listTitle">
					<image class="listIcon" src="/static/txIcon0.png"></image>
					<text>支付宝支付</text>
				</view>
				<view class="typeFrame">
					<view class="type" @click="go('/pages/tx/txZFB?money=15')">提现<text class="red">15元</text></view>
					<view class="type" @click="go('/pages/tx/txZFB?money=30')">提现<text class="red">30元</text></view>
					<view class="type" @click="go('/pages/tx/txZFB')">更多<text class="red">金额</text></view>
				</view>
			</view>
			<view class="list">
				<view class="listTitle">
					<image class="listIcon" src="/static/txIcon1.png"></image>
					<text>微信支付</text>
				</view>
				<view class="typeFrame">
					<view class="type" @click="go('/pages/tx/txWX?money=15')">提现<text class="red">15元</text></view>
					<view class="type" @click="go('/pages/tx/txWX?money=30')">提现<text class="red">30元</text></view>
					<view class="type" @click="go('/pages/tx/txWX')">更多<text class="red">金额</text></view>
				</view>
			</view>
			<view class="list">
				<view class="listTitle">
					<image class="listIcon" src="/static/txIcon2.png"></image>
					<text>银行卡支付</text>
				</view>
				<view class="typeFrame">
					<view class="type" @click="go('/pages/tx/txYHK?money=15')">提现<text class="red">15元</text></view>
					<view class="type" @click="go('/pages/tx/txYHK?money=30')">提现<text class="red">30元</text></view>
					<view class="type" @click="go('/pages/tx/txYHK')">更多<text class="red">金额</text></view>
				</view>
			</view>
			<view class="rule">规则说明</view>
			<view class="button">邀请好友</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				go(url){
					uni.navigateTo({
						url
					})
				}
			};
		},
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) {
				uni.navigateTo({
					url:'/pages/tx/rule'
				})
			}
		},
	}
</script>

<style lang="scss">
.yellow{
		width:750rpx;
		height: 58rpx;
		background-color: #FEF8D4;
		font-size:22rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(170,153,117,1);
		padding: 0 27rpx;
		line-height: 58rpx;
}
.top{
	width:750rpx;
	height: 353rpx;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.dsc{
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(153,153,153,1);
		.mt{
			width:22rpx;
			height:22rpx;
			margin: 0 5rpx;
		}
	}
	.number{
		font-size:93rpx;
		font-family:PingFang SC;
		font-weight:800;
		color:rgba(255,200,62,1);
		margin-top: 55rpx;
		.smallNumber{
			font-size:69rpx;
		}
	}
	.button{
		width:168rpx;
		height:53rpx;
		margin-top: 29rpx;
	}
}
.bottom{
	margin-top: 22rpx;
	background-color: #fff;
	padding-bottom: 72rpx;
	.list{
		padding: 0 31rpx;
		.listTitle{
			display: flex;
			align-items: center;
			font-size:29rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(0,0,0,1);
			height: 88rpx;
			.listIcon{
				width:38rpx;
				height:38rpx;
				margin-right: 22rpx;
			}
		}
		.typeFrame{
			width:100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.type{
				width:220rpx;
				height: 135rpx;
				border:1px solid rgba(229,229,229,1);
				border-radius:4rpx;
				line-height: 135rpx;
				text-align: center;
				font-size:32rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(30,30,30,1);
				.red{
					color:#DE5653;
				}
			}
		}
	}
	.rule{
		font-size:28rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(52,114,223,1);
		margin-top: 34rpx;
		text-align: center;
	}
	.button{
		width:625rpx;
		height:83rpx;
		background:rgba(239,65,83,1);
		border-radius:42rpx;
		font-size:28rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(255,255,255,1);
		text-align: center;
		line-height: 83rpx;
		margin: auto;
		margin-top: 67rpx;
	}
}
</style>
