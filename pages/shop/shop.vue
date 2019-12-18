<template>
	<view class="container">
		<view class="top">
			<image class="picL" src="/static/temp/ad3.jpg"></image>
			<image class="avatar" src="/static/pic.png"></image>
			<view class="title">全家自营旗舰店</view>
			<view class="type">时尚女装</view>
			<view class="dsc">很多字的很多字的很多字的很多字的很多字的很多字的很多字的很多字的很多字的很多字的很多字的很多字的描述</view>
			<view class="all">全部商品</view>
		</view>
		<view class="guess-section">
			<view 
				v-for="(item, index) in goodsList" :key="index"
				class="guess-item"
				@click="navToDetailPage(item)"
			>
				<view class="image-wrapper">
					<image :src="item.image" mode="aspectFill"></image>
				</view>
				<text class="title clamp">{{item.title}}</text>
				<text class="price">￥{{item.price}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import allpage from '@/mixin/allPage'
	import navBarCP from '@/components/navBar_CP.vue'
	export default {
		mixins:[allpage],
		components:{
			navBarCP
		},
		data() {
			return {
				goodsList: []
			};
		},

		onLoad() {
			this.loadData();
		},
		methods: {
			async loadData() {				
				let goodsList = await this.$api.json('goodsList');
				this.goodsList = goodsList || [];
			},
			//详情页
			navToDetailPage(item) {
				//测试数据没有写id，用title代替
				let id = item.title;
				uni.navigateTo({
					url: `/pages/product/product?id=${id}`
				})
			},
		}
	}
</script>

<style lang="scss" scoped>	
	page {
		background: #f8f8f8;
	}
	.top{
		width:750rpx;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.picL{
		width:750rpx;
		height: 296rpx;
		flex-shrink: 0;
	}
	.avatar{
		width: 126rpx;
		height:126rpx;
		border-radius: 126rpx;
		margin-top: -100rpx;
		flex-shrink: 0;
		box-shadow: 3rpx 3rpx 3rpx rgba(0,0,0,0.3);
	}
	.title{
		font-size: 30rpx;
		font-weight: bold;
		margin-top: 22rpx;
	}
	.type{
		font-size: 22rpx;
		color: #cfb143;
		background-color: #fff5e9;
		padding: 5rpx 18rpx;
		margin-top: 24rpx;
		border-radius: 20rpx;
	}
	.dsc{
		font-size: 22rpx;
		color: #6d6d6d;
		width: 646rpx;
		margin-top: 20rpx;
		line-height: 30rpx;
		text-align: center;
	}
	.all{
		font-size: 32rpx;
		font-weight: bold;
		margin-top: 44rpx;
		padding-bottom: 40rpx;
	}
	/* 猜你喜欢 */
	.guess-section{
		display:flex;
		flex-wrap:wrap;
		padding: 0 30upx;
		background: #fff;
		.guess-item{
			display:flex;
			flex-direction: column;
			width: 48%;
			padding-bottom: 40upx;
			&:nth-child(2n+1){
				margin-right: 4%;
			}
		}
		.image-wrapper{
			width: 100%;
			height: 330upx;
			border-radius: 3px;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
				opacity: 1;
			}
		}
		.title{
			font-size: $font-lg;
			color: $font-color-dark;
			line-height: 80upx;
		}
		.price{
			font-size: $font-lg;
			color: $uni-color-primary;
			line-height: 1;
		}
	}
</style>