<template>
	<view>
		<view class="title">审核不通过</view>
		<view class="botton" @click="c">再次申请成为商家</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			c(){
				uni.navigateTo({
					url:'/pages/business/business'
				})
			}
		}
	}
</script>

<style lang="scss">
	.title{
		text-align: center;
		margin-top: 200rpx;
	}
	.botton{
		width:625rpx;
		height:83rpx;
		background:rgba(250,197,35,1);
		border-radius:42rpx;
		font-size:28rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(255,255,255,1);
		line-height:83rpx;
		text-align: center;
		position: fixed;
		left: 63rpx;
		bottom:132rpx;
	}
</style>
