<template>
	<view class="modalCP">
		<view class="modalFrame">
			<view class="titleFrame">{{title}}</view>
			<scroll-view class="contentFrame">
				<slot></slot>
			</scroll-view>
			<view class="bottomFrame">
				<view class="button cancel" @click="cancel">{{cancelText}}</view>
				<view class="button" @click="confirm">{{confirmText}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['title','cancelText','confirmText'],
		data() {
			return {
				
			};
		},
		methods:{
			confirm(){
				console.log("confirmClick")
				this.$emit('confirm')
			},
			cancel(){
				this.$emit('cancel')
			}
		}
	}
</script>

<style lang="scss">
	.modalCP{
		position: fixed;
		top:0;
		width:750rpx;
		bottom:0;
		left:0;
		background-color: rgba(0,0,0,0.3);
		display: flex;
		align-items: center;
		justify-content: center;
		.modalFrame{
			width:567rpx;
			display: flex;
			flex-direction: column;
			background-color: #fff;
			border-radius: 28rpx;
			padding: 76rpx 50rpx 58rpx 56rpx;
			.titleFrame{
				font-size:42rpx;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(34,34,34,1);
				text-align: center;
				margin-bottom: 60rpx;
				flex-shrink: 0;
			}
			.contentFrame{
				width:100%;
				flex-grow: 1;
			}
			.bottomFrame{
				width:100%;
				flex-shrink: 0;
				margin-top: 74rpx;
				.button{
					width:474rpx;
					height:83rpx;
					background:linear-gradient(90deg,rgba(250,197,35,1) 0%,rgba(250,131,35,1) 100%);
					border-radius:42rpx;
					font-size:33rpx;
					font-family:PingFang SC;
					font-weight:bold;
					color:rgba(255,255,255,1);
					line-height:83rpx;
					text-align: center;
				}
				.button.cancel{
					background:rgba(232,230,231,1);
					color:rgba(102,102,102,1);
					margin-bottom: 24rpx;
				}
			}
		}
	}
</style>
