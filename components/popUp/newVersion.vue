<template>
	<view id="newVersionFrame">
			<image id="bigPic" src="/static/newVersion.png" @click="submitA" mode="widthFix"></image>
			<image id="closePic" src="/static/newVersionClose.png" @click="cancelA" mode="widthFix"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			submitA(){
				console.log('submit')
			},
			cancelA(){
				console.log('cancel')
				// this.$emit('newVersionClose')
			}
		}
	}
</script>

<style lang="scss" scoped>
	#newVersionFrame{
		width: 451rpx;
	}
	#bigPic{
		width:451rpx;
	}
	#closePic{
		display: block;
		width:55rpx;
		height:109rpx;
		margin: auto;
		margin-top: -5rpx;
	}
</style>
