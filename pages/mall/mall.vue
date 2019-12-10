<template>
	<view class="container" v-if="false">
		<!-- 小程序头部兼容 -->
		<!-- #ifdef MP -->
		<view class="mp-search-box">
			<input class="ser-input" type="text" value="输入关键字搜索" disabled />
		</view>
		<!-- #endif -->
		<!-- 头部轮播 -->
		<view class="carousel-section">
			<!-- 标题栏和状态栏占位符 -->
			<view class="titleNview-placing"></view>
			<!-- 背景色区域 -->
			<view class="titleNview-background" :style="{backgroundColor:titleNViewBackground}"></view>
			<swiper class="carousel" circular @change="swiperChange">
				<swiper-item v-for="(item, index) in carouselList" :key="index" class="carousel-item" @click="navToDetailPage({title: '轮播广告'})">
					<image :src="item.src" />
				</swiper-item>
			</swiper>
			<!-- 自定义swiper指示器 -->
			<view class="swiper-dots">
				<text class="num">{{swiperCurrent+1}}</text>
				<text class="sign">/</text>
				<text class="num">{{swiperLength}}</text>
			</view>
		</view>
		<view class="ad-1">
			<image src="/static/temp/ad1.jpg" mode="scaleToFill"></image>
		</view>
		<!-- 分类 -->
		<view class="cate-section">
			<view class="cate-item">
				<image src="/static/temp/c3.png"></image>
				<text>环球美食</text>
			</view>
			<view class="cate-item">
				<image src="/static/temp/c5.png"></image>
				<text>个护美妆</text>
			</view>
			<view class="cate-item">
				<image src="/static/temp/c6.png"></image>
				<text>营养保健</text>
			</view>
			<view class="cate-item">
				<image src="/static/temp/c7.png"></image>
				<text>家居厨卫</text>
			</view>
			<view class="cate-item">
				<image src="/static/temp/c8.png"></image>
				<text>速食生鲜</text>
			</view>
		</view>
		
		<view class="ad-1">
			<image src="/static/temp/ad1.jpg" mode="scaleToFill"></image>
		</view>
		<image class="promo1" src="/static/pomo.png"></image>
		<view class="shopFrame">
			<view class="top">
				<view class="left">
					<image class="avatar" src="/static/icon0.png"></image>
					<view class="info">
						<view class="title">歌菲府</view>
						<view class="type">塑身毛衣</view>
					</view>
				</view>
				<view class="go" @click="navToShopPage(0)">去抢购 ></view>
			</view>
			<view class="goodList">
				<view class="good" @click="navToDetailPage(0)">
					<image src="/static/shop0.png" class="pic"></image>
					<view class="name">蓝色打底毛衣女</view>
					<view class="price">￥96</view>
				</view>
				<view class="good" @click="navToDetailPage(0)">
					<image src="/static/shop1.png" class="pic"></image>
					<view class="name">马卡龙黄色手机壳</view>
					<view class="price">￥83</view>
				</view>
				<view class="good" @click="navToDetailPage(0)">
					<image src="/static/shop2.png" class="pic"></image>
					<view class="name">马卡龙黄色手机壳</view>
					<view class="price">￥85</view>
				</view>
			</view>
		</view>
		<view class="shopFrame">
			<view class="top">
				<view class="left">
					<image class="avatar" src="/static/icon1.png"></image>
					<view class="info">
						<view class="title">酷洋数码</view>
						<view class="type blue">电子数码</view>
					</view>
				</view>
				<view class="go" @click="navToShopPage(0)">去抢购 ></view>
			</view>
			<view class="goodList">
				<view class="good" @click="navToDetailPage(0)">
					<image src="/static/shop3.png" class="pic"></image>
					<view class="name">马卡龙红色手机壳</view>
					<view class="price">￥53</view>
				</view>
				<view class="good" @click="navToDetailPage(0)">
					<image src="/static/shop4.png" class="pic"></image>
					<view class="name">马卡龙黄色手机壳</view>
					<view class="price">￥53</view>
				</view>
				<view class="good" @click="navToDetailPage(0)">
					<image src="/static/shop5.png" class="pic"></image>
					<view class="name">马卡龙透明手机壳</view>
					<view class="price">￥70</view>
				</view>
			</view>
		</view>
		<view class="shopFrame">
			<view class="top">
				<view class="left">
					<image class="avatar" src="/static/icon2.png"></image>
					<view class="info">
						<view class="title">耐驰</view>
						<view class="type blue">真皮男鞋</view>
					</view>
				</view>
				<view class="go" @click="navToShopPage(0)">去抢购 ></view>
			</view>
			<view class="goodList">
				<view class="good" @click="navToDetailPage(0)">
					<image src="/static/shop6.png" class="pic"></image>
					<view class="name">欧洲站男孩</view>
					<view class="price">￥130</view>
				</view>
				<view class="good" @click="navToDetailPage(0)">
					<image src="/static/shop7.png" class="pic"></image>
					<view class="name">秋冬季潮鞋</view>
					<view class="price">￥120</view>
				</view>
				<view class="good" @click="navToDetailPage(0)">
					<image src="/static/shop8.png" class="pic"></image>
					<view class="name">真皮高帮鞋</view>
					<view class="price">￥115</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import navBarCP from '@/components/navBar_CP.vue'
	export default {
		components:{
			navBarCP
		},
		data() {
			return {
				titleNViewBackground: '',
				swiperCurrent: 0,
				swiperLength: 0,
				carouselList: [],
				goodsList: []
			};
		},
		onShow(){
			uni.showToast({
					title:'暂未开放，敬请期待',
					icon:'none',
					duration:3000
			})
			uni.switchTab({
			    url: '/pages/index/index'
			});
		},
		onLoad() {
			this.loadData();
		},
		methods: {
			/**
			 * 请求静态数据只是为了代码不那么乱
			 * 分次请求未作整合
			 */
			async loadData() {
				let carouselList = await this.$api.json('carouselList');
				this.titleNViewBackground = carouselList[0].background;
				this.swiperLength = carouselList.length;
				this.carouselList = carouselList;
				
				let goodsList = await this.$api.json('goodsList');
				this.goodsList = goodsList || [];
			},
			//轮播图切换修改背景色
			swiperChange(e) {
				const index = e.detail.current;
				this.swiperCurrent = index;
				this.titleNViewBackground = this.carouselList[index].background;
			},
			//店铺
			navToShopPage(item) {
				uni.navigateTo({
					url: `/pages/shop/shop?id=${item}`
				})
			},
			//详情页
			navToDetailPage(item) {
				uni.navigateTo({
					url: `/pages/product/product?id=${item}`
				})
			},
		},
		// #ifndef MP
		// 标题栏input搜索框点击
		onNavigationBarSearchInputClicked: async function(e) {
			this.$api.msg('点击了搜索框');
		},
		//点击导航栏 buttons 时触发
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) {
				this.$api.msg('点击了扫描');
			} else if (index === 1) {
				// #ifdef APP-PLUS
				const pages = getCurrentPages();
				const page = pages[pages.length - 1];
				const currentWebview = page.$getAppWebview();
				currentWebview.hideTitleNViewButtonRedDot({
					index
				});
				// #endif
				uni.navigateTo({
					url: '/pages/notice/notice'
				})
			}
		}
		// #endif
	}
</script>

<style lang="scss" scoped>
	/* #ifdef MP */
	.mp-search-box{
		position:absolute;
		left: 0;
		top: 30upx;
		z-index: 9999;
		width: 100%;
		padding: 0 80upx;
		.ser-input{
			flex:1;
			height: 56upx;
			line-height: 56upx;
			text-align: center;
			font-size: 28upx;
			color:$font-color-base;
			border-radius: 20px;
			background: rgba(255,255,255,.6);
		}
	}
	page{
		.cate-section{
			position:relative;
			z-index:5;
			border-radius:16upx 16upx 0 0;
			margin-top:-20upx;
		}
		.carousel-section{
			padding: 0;
			.titleNview-placing {
				padding-top: 0;
				height: 0;
			}
			.carousel{
				.carousel-item{
					padding: 0;
				}
			}
			.swiper-dots{
				left:45upx;
				bottom:40upx;
			}
		}
	}
	/* #endif */
	
	
	page {
		background: #f8f8f8;
	}
	.m-t{
		margin-top: 16upx;
	}
	/* 头部 轮播图 */
	.carousel-section {
		position: relative;
		padding-top: 10px;

		.titleNview-placing {
			height: var(--status-bar-height);
			padding-top: 0px;
			box-sizing: content-box;
		}

		.titleNview-background {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 426upx;
			transition: .4s;
		}
	}
	.carousel {
		width: 100%;
		height: 350upx;

		.carousel-item {
			width: 100%;
			height: 100%;
			padding: 0 28upx;
			overflow: hidden;
		}

		image {
			width: 100%;
			height: 100%;
			border-radius: 10upx;
		}
	}
	.swiper-dots {
		display: flex;
		position: absolute;
		left: 60upx;
		bottom: 15upx;
		width: 72upx;
		height: 36upx;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk4MzlBNjE0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk4MzlBNjA0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0E3RUNERkE0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0E3RUNERkI0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Gh5BPAAACTUlEQVR42uzcQW7jQAwFUdN306l1uWwNww5kqdsmm6/2MwtVCp8CosQtP9vg/2+/gY+DRAMBgqnjIp2PaCxCLLldpPARRIiFj1yBbMV+cHZh9PURRLQNhY8kgWyL/WDtwujjI8hoE8rKLqb5CDJaRMJHokC6yKgSCR9JAukmokIknCQJpLOIrJFwMsBJELFcKHwM9BFkLBMKFxNcBCHlQ+FhoocgpVwwnv0Xn30QBJGMC0QcaBVJiAMiec/dcwKuL4j1QMsVCXFAJE4s4NQA3K/8Y6DzO4g40P7UcmIBJxbEesCKWBDg8wWxHrAiFgT4fEGsB/CwIhYE+AeBAAdPLOcV8HRmWRDAiQVcO7GcV8CLM8uCAE4sQCDAlHcQ7x+ABQEEAggEEAggEEAggEAAgQACASAQQCCAQACBAAIBBAIIBBAIIBBAIABe4e9iAe/xd7EAJxYgEGDeO4j3EODp/cOCAE4sYMyJ5cwCHs4rCwI4sYBxJ5YzC84rCwKcXxArAuthQYDzC2JF0H49LAhwYUGsCFqvx5EF2T07dMaJBetx4cRyaqFtHJ8EIhK0i8OJBQxcECuCVutxJhCRoE0cZwMRyRcFefa/ffZBVPogePihhyCnbBhcfMFFEFM+DD4m+ghSlgmDkwlOgpAl4+BkkJMgZdk4+EgaSCcpVX7bmY9kgXQQU+1TgE0c+QJZUUz1b2T4SBbIKmJW+3iMj2SBVBWz+leVfCQLpIqYbp8b85EskIxyfIOfK5Sf+wiCRJEsllQ+oqEkQfBxmD8BBgA5hVjXyrBNUQAAAABJRU5ErkJggg==);
		background-size: 100% 100%;

		.num {
			width: 36upx;
			height: 36upx;
			border-radius: 50px;
			font-size: 24upx;
			color: #fff;
			text-align: center;
			line-height: 36upx;
		}

		.sign {
			position: absolute;
			top: 0;
			left: 50%;
			line-height: 36upx;
			font-size: 12upx;
			color: #fff;
			transform: translateX(-50%);
		}
	}
	/* 分类 */
	.cate-section {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap:wrap;
		padding: 30upx 22upx; 
		background: #fff;
		.cate-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: $font-sm + 2upx;
			color: $font-color-dark;
		}
		/* 原图标颜色太深,不想改图了,所以加了透明度 */
		image {
			width: 88upx;
			height: 88upx;
			margin-bottom: 14upx;
			border-radius: 50%;
			opacity: .7;
			box-shadow: 4upx 4upx 20upx rgba(250, 67, 106, 0.3);
		}
	}
	.ad-1{
		width: 100%;
		height: 210upx;
		padding: 10upx 0;
		background: #fff;
		image{
			width:100%;
			height: 100%; 
		}
	}
	.promo1{
		width: 750rpx;
		height:466rpx;
	}
	.shopFrame{
		width:750rpx;
		margin-top: 15rpx;
		background-color: #fff;
		.top{
			width:100%;
			height: 135rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.left{
				display: flex;
				align-items: center;
				.avatar{
					width:104rpx;
					height:104rpx;
					border-radius: 50rpx;
					box-shadow: 3rpx 3rpx 3rpx rgba(0,0,0,0.3);
					margin-left: 20rpx;
				}
				.info{
					margin-left: 15rpx;
					.title{
						font-size:33rpx;
						font-family:PingFang SC;
						font-weight:500;
						color:rgba(0,0,0,1);
					}
					.type{
						font-size: 22rpx;
						color: #cfb143;
						background-color: #fff5e9;
						padding: 5rpx 18rpx;
						margin-top: 20rpx;
						border-radius: 20rpx;
					}
					.type.blue{
						color: #90A9D0;
						background-color: #EDF5FE;
					}
				}
			}
			.go{
				font-size: 26rpx;
				color: #fff;
				font-weight: bold;
				background-color: #3b3b3b;
				padding: 14rpx 24rpx;
				margin-right: 20rpx;
				border-radius: 30rpx;
			}
		}
		.goodList{
			width: 750rpx;
			display: flex;
			justify-content: space-evenly;
			.good{
				width:208rpx;
				height:320rpx;
				.pic{
					width:208rpx;
					height:208rpx;
				}
				.name{
					font-size:25rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(51,51,51,1);
					width: 100%;
					text-align: center;
					margin-top: 27.08rpx;
				}
				.price{
					font-size:25rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(190,68,110,1);
					width: 100%;
					text-align: center;
					margin-top: 13rpx;
				}
			}
		}
	}
</style>
