<template>
	<pageCP>
	<view class="container">
		<view class="title">请输入优惠券兑换码</view>
		<input/>
		<image class="button" src="/static/getCouponButton.png"></image>
		<image class="foot" src="/static/regestBottom.png"></image>
		<view class="successPopFrame" v-if="successPop">
			<view class="successPop">
				<image class="successPic" src="/static/couponSuccess.png"></image>
				<view class="successTitle">获得无门槛30元优惠券</view>
			</view>
			
		</view>
	</view>
	</pageCP>
</template>

<script>
	export default {
		data() {
			return {
				successPop:false
			};
		}
	}
</script>

<style lang="scss">
	.title{
		margin: auto;
		margin-top: 238rpx;
		font-size:25rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(102,102,102,1);
		text-align: center;
	}
	input{
		width:634rpx;
		height:103rpx;
		border:2px solid rgba(249,207,78,1);
		opacity:0.8;
		border-radius:30rpx;
		margin: auto;
		margin-top: 34rpx;
		text-align: center;
	}
	.button{
		width:634rpx;
		height: 75rpx;
		display: block;
		margin: auto;
		margin-top: 147rpx;
	}
	.foot{
		width:750rpx;
		height:160rpx;
		position: fixed;
		bottom:0;
		left:0;
	}
	.successPopFrame{
		position: fixed;
		top:0;
		left:0;
		bottom:0;
		width:750rpx;
		background-color: rgba(0,0,0,0.3);
		display: flex;
		justify-content: center;
		align-items: center;
		.successPop{
			width:491rpx;
			height:497rpx;
			position: relative;
			.successPic{
				width:491rpx;
				height:497rpx;
			}
			.successTitle{
				font-size:25rpx;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(53,58,63,1);
				position: absolute;
				top:357rpx;
				left: 122rpx;
			}
		}
	}
</style>
