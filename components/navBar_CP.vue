<template>
	<view class="navBar_CP">
		<view class="left">
			 <scroll-view scroll-x="true" class="scroll-X">
				 <view class="scrollFrame">
					<view class="nav hl">精选</view>
					 <view class="nav">美妆</view>
					 <view class="nav">美食</view>
					 <view class="nav">女装</view>
					 <view class="nav">居家日用</view>
					 <view class="nav">男装</view>
					 <view class="nav">鞋品</view>
					 <view class="nav">数码家电</view>
					 <view class="nav">母婴</view>
				 </view>
			</scroll-view>
		</view>
		<view class="iconfont">&#xe60b;</view>
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

<style lang="scss" scoped>
	.navBar_CP{
		width:750rpx;
		height:90rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.left{
			margin-left: 20rpx;
			height:100%;
			flex-grow: 1;
			overflow: hidden;
			.scroll-X{
				width:100%;
				height:100%;
				.scrollFrame{
					height:90rpx;
					display: flex;
					align-items: center;
					flex-wrap: nowrap;
					.nav{
						font-size: 26rpx;
						color: #fff;
						margin-right: 40rpx;
						flex-shrink: 0;
					}
					.hl{
						font-size: 30rpx;
						font-weight: bold;
					}
				}
			}
		}
		.iconfont{
			margin-right: 20rpx;
			color: #fff;
			flex-shrink: 0;
			font-size: 40rpx;
		}
	}
</style>
