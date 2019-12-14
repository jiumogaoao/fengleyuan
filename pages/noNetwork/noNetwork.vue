<template>
	<view class="page">
		<image src="/static/nonetwork.png"></image>
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
	.page{
		position: fixed;
		top:0;
		left:0;
		right:0;
		bottom:0;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #f5f6f8;
		image{
			width:265rpx;
			height: 229rpx;
		}
	}
</style>
