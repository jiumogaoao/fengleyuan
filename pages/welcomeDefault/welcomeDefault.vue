<template>
	<pageCP>
	<view class="frame">
		<image src="/static/firstLogo.png"></image>
	</view>
	</pageCP>
</template>

<script>
	import allpage from '@/mixin/allPage'
	export default {
		data() {
			return {
				
			};
		},
		onShow(){
			setTimeout(function(){
				uni.reLaunch({
					url:'/pages/index/index'
				})
			},3000)
		}
	}
</script>

<style lang="scss">
	.frame{
		position: fixed;
		top:0;
		left:0;
		right:0;
		bottom:0;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(150deg,#dbfcf1 0%,#aae9d4 100%);
		image{
			width:364upx;
			height: 324upx;
		}
	}
	
</style>
