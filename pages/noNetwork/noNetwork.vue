<template>
	<pageCP>
	<view class="page">
		<image src="/static/nonetwork.png"></image>
		<view class="refalsh" @click="refrash">刷新</view>
	</view>
	</pageCP>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			refrash(){
				if(this.$store.state.userST.network==true){
					uni.navigateBack();
				}else{
					uni.showLoading({
						title:'加载中'
					})
					setTimeout(function () {
					    uni.hideLoading();
					}, 4000);
				}
			}
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
		flex-direction: column;
		image{
			width:265rpx;
			height: 229rpx;
		}
		.refalsh{
			width:307rpx;
			height:74rpx;
			border-radius:37rpx;
			font-size:31rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(255,255,255,1);
		    background: rgba(250,197,35,1);
			margin-top: 60rpx;
			text-align: center;
			line-height: 74rpx;
		}
	}
</style>
