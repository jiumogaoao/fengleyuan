<template>
	<view>
		<view class="historyList">
			<view class="historyTop">
				<view class="title">历史搜索</view>
			</view>
			<view class="list">
				<view class="point">电脑</view>
				<view class="point">连衣裙</view>
				<view class="point">海绵床垫</view>
			</view>
		</view>
		<view class="hotList">
			<view class="title">大家都在搜</view>
			<view class="list">
				<view class="pointFrame"><view class="point">Sony索尼手机Xperia 5</view></view>
				<view class="pointFrame"><view class="point">连衣裙</view></view>
				<view class="pointFrame"><view class="point">电脑</view></view>
				<view class="pointFrame"><view class="point">连衣裙</view></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchKey:''
			};
		},
		methods:{
			search(){
				
			}
		},
		onNavigationBarSearchInputChanged(e){
			this.searchKey = e.text
		},
		onNavigationBarSearchInputClicked: async function(e) {
			
		},
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) {
				this.search()
			}
		}
	}
</script>

<style lang="scss">
	.historyList{
		width:750rpx;
		padding: 0 26rpx 0 48rpx;
		margin-top: 52rpx;
		.historyTop{
			width:100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.title{
				font-size:26rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(34,34,34,1);
			}
		}
		.list{
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			.point{
				margin-top: 28rpx;
				margin-right: 21rpx;
				padding: 18rpx 37rpx;
				background:rgba(247,247,247,1);
				border-radius:28rpx;
				font-size:20rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(34,34,34,1);
			}
		}
	}
	.hotList{
		width:750rpx;
		padding: 0 26rpx 0 48rpx;
		margin-top: 56rpx;
		.title{
			font-size:26rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(34,34,34,1);
		}
		.list{
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			.pointFrame{
				margin-top: 28rpx;
				margin-right: 21rpx;
				.point{
					padding: 18rpx 37rpx;
					background:rgba(247,247,247,1);
					border-radius:28rpx;
					font-size:20rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(34,34,34,1);
				}
			}
			}
	}
</style>
