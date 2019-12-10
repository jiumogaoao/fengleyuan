<template>
	<image src="/static/welcomeDefault.png" mode="widthFix"></image>
</template>

<script>
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
	image{
		width:750rpx;
	}
</style>
