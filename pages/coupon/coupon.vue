<template>
	<view class="container">
		<tabbarCP :tab="['可使用','已失效']" :hl="tap" @change="tabChange"/>
		<view class="point">
			<image class="bg" src="/static/couponBG0.png"></image>
			<view class="price"><text class="priceTip">￥</text>100</view>
			<view class="date">有效期：2019年11月1日—12月12日</view>
			<view class="sale">满500减100优惠券</view>
		</view>
		<view class="point">
			<image class="bg" src="/static/couponBG1.png"></image>
			<view class="price"><text class="priceTip">￥</text>100</view>
			<view class="date">有效期：2019年11月1日—12月12日</view>
			<view class="sale">满500减100优惠券</view>
		</view>
		<view class="point">
			<image class="bg" src="/static/couponBG2.png"></image>
			<view class="price"><text class="priceTip">￥</text>100</view>
			<view class="date">有效期：2019年11月1日—12月12日</view>
			<view class="sale">满500减100优惠券</view>
		</view>
	</view>
</template>

<script>
	import tabbarCP from '@/components/tabbar_CP.vue'
	export default {
		components:{tabbarCP},
		data() {
			return {
				tap:0
			};
		},
		methods:{
			tabChange(i){
				this.tap = i
			}
		},
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) {
				uni.navigateTo({
					url:'/pages/coupon/getCoupon'
				})
			}
		}
	}
</script>

<style lang="scss">
	.point{
		width:704rpx;
		height:288rpx;
		margin: auto;
		margin-bottom: -14rpx;
		position: relative;
		.bg{
			position: absolute;
			top:0;
			left:0;
			width:704rpx;
			height:288rpx;
		}
		.price{
			font-size:97rpx;
			font-family:PingFang SC;
			font-weight:800;
			color:rgba(255,255,255,1);
			position: absolute;
			top:56rpx;
			left: 63rpx;
			.priceTip{
				font-size:38rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(255,255,255,1);
			}
		}
		.date{
			font-size:18rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(255,255,255,1);
			position: absolute;
			top:151rpx;
			left: 63rpx;
		}
		.sale{
			font-size:18rpx;
			font-family:Adobe Heiti Std;
			font-weight:normal;
			color:rgba(9,9,9,1);
			position: absolute;
			top:197rpx;
			left: 63rpx;
		}
	}
</style>
