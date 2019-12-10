<template>
	<view class="modalCP">
		<view class="modalFrame">
			<view class="titleFrame">{{title}}</view>
			<scroll-view class="contentFrame">
				<slot></slot>
			</scroll-view>
			<view class="bottomFrame">
				<view class="button" @click="confirm">{{confirmText}}</view>
				<view class="button cancel" @click="cancel">{{cancelText}}</view>
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
			width:530rpx;
			display: flex;
			flex-direction: column;
			background-color: #fff;
			border-radius: 10rpx;
			.titleFrame{
				width:530rpx;
				font-size: 34rpx;
				font-weight: 500;
				text-align: center;
				flex-shrink: 0;
				height: 156rpx;
				line-height: 156rpx;
			}
			.contentFrame{
				width:530rpx;
				padding: 0 58rpx 58rpx 58rpx;
				flex-grow: 1;
			}
			.bottomFrame{
				width:530rpx;
				height: 83rpx;
				flex-shrink: 0;
				display: flex;
				.button{
					width:50%;
					height: 83rpx;
					line-height: 83rpx;
					text-align: center;
					font-size: 26rpx;
					border-top:1px solid #909090;
					border-right: 1px solid #909090;
					color: #2065ed;
				}
				.button.cancel{
					border-right: 0;
					color: #8e8e8e;
				}
			}
		}
	}
</style>
