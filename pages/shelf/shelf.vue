<template>
	<pageCP>
	<view class="container">
		<view class="titleNview-placing"></view>
		
		<view class="guess-section">
			<view 
				v-for="(item, index) in goodsList2" :key="index"
				class="guess-item"
				@click="navToDetailPage(item.id)"
			>
				<view class="image-wrapper">
					<image :src="item.header_img" mode="aspectFill"></image>
				</view>
				<text class="title clamp">{{item.product_name}}</text>
				<text class="price">￥{{item.commodity_price}}</text>
			</view>
		</view>

	</view>
	</pageCP>
</template>

<script>
	import allpage from '@/mixin/allPage'
	import navBarCP from '@/components/navBar_CP.vue'
	import modalCP from '@/components/modal_CP.vue'
	import {postFetch} from '@/util/request_UT.js'
	export default {
		mixins:[allpage],
		components:{
			navBarCP,
			modalCP
		},
		data() {
			return {
				titleNViewBackground: '',
				swiperCurrent: 0,
				swiperLength: 0,
				carouselList: [],
				goodsList: [],
				goodsList2:[],
				pop:false,
				showFirstPOP:false,
				longitude:0,
				latitude:0
			};
		},
		onShow(){
			let _this = this;

			uni.getLocation({
			    type: 'gcj02',
			    success: function (res) {
					postFetch('index.php/index/index',{phone:_this.$store.state.userST.phone||null,latitude:res.latitude||null,
								longitude:res.longitude||null},false,function(res){
						_this.$set(_this,'carouselList',res.data.banner)
						_this.$set(_this,'goodsList2',res.data.product)
					})
				},
				fail:function(){
					postFetch('index.php/index/index',{phone:_this.$store.state.userST.phone||null},false,function(res){
						_this.$set(_this,'carouselList',res.data.banner)
						_this.$set(_this,'goodsList2',res.data.product)
					})
				}
				})
			
		},
		onLoad() {
			// this.loadData();
		},
		methods: {
			yijiayou(){
				let _this = this;
				console.log('yijiayouClick')
				if(_this.$store.state.userST.phone){
					uni.getLocation({
					    type: 'gcj02',
					    success: function (res) {
							console.log('yijiayouClickRes',res)
							_this.longitude = res.longitude
							_this.latitude = res.latitude
							postFetch('index.php/index/api/ejiayou',{
								latitude:_this.latitude,
								longitude:_this.longitude,
								phone:'13800138000'
							},false,function(res){
								console.log('ejiayou',JSON.stringify(res.data.url))
								plus.runtime.openURL(res.data.url)
							})
					    }
					});
				}else{
					uni.navigateTo({
						url:'/pages/public/login'
					})  
				}
			},
			bannerClick(url,type){
				let _this = this;
				if(type && !_this.$store.state.userST.phone){
					uni.navigateTo({
						url:'/pages/public/login'
					})
				}else{
					plus.runtime.openURL(url)
				}
				
			},
			rulaComfirm(){
				console.log("confirm")
				uni.setStorageSync('firstIn',1)
				this.showFirstPOP=false
				console.log("confirmEnd")
			},
			rulaCancel(){
				switch(uni.getSystemInfoSync().platform){
				                    case 'android':      
				                        plus.runtime.quit();        
				                        break;    
				                    case 'ios':
				                        const exitIosAPP = uni.requireNativePlugin('CGF-ExitIosApp');       
				                        exitIosAPP.exitIosApp();     
				                        break;    
				                    default:       
				                        console.log('运行在开发者工具上')       
				                        break;
				                }
			},
			go(url){
				uni.navigateTo({
					url: url
				})
			},
			closePOP(){
				this.pop = false
			},
			/**
			 * 请求静态数据只是为了代码不那么乱
			 * 分次请求未作整合
			 */
			async loadData() {
				// let carouselList = await this.$api.json('carouselList');
				// this.titleNViewBackground = carouselList[0].background;
				// this.swiperLength = carouselList.length;
				// this.carouselList = carouselList;
				
				let goodsList = await this.$api.json('goodsList');
				this.goodsList = goodsList || [];
			},
			//轮播图切换修改背景色
			swiperChange(e) {
				const index = e.detail.current;
				this.swiperCurrent = index;
				this.titleNViewBackground = this.carouselList[index].background;
			},
			//详情页
			navToDetailPage(item) {
				//测试数据没有写id，用title代替
				// let id = item.title;
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
		onTabItemTap(t){
			console.log(t);
			// if(t.text=="自营商城"){
			// 	uni.showToast({
			// 		title:"暂未开放，敬请期待",
			// 		icon:'none'
			// 	})
			// }
			// return false;
		},
		//点击导航栏 buttons 时触发
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) {
				this.go('/pages/notice/notice')
			}
		}
		// #endif
	}
</script>

<style lang="scss" scoped>
	.agreeFrameMask{
		position: fixed;
		top:0;
		left:0;
		right:0;
		bottom:0;
		display: flex;
		background-color: rgba(0,0,0,0.6);
		justify-content: center;
		align-items: center;
		z-index: 999999;
		.agreeFrame{
			width:650rpx;
			background-color: #fff;
			border-radius: 10rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			.title{
				font-size: 36rpx;
				text-align: center;
				line-height: 100rpx;
			}
			.message{
				font-size: 18rpx;
				width: 90%;
			}
			.foot{
				margin-top: 20rpx;
				width: 100%;
				height: 80rpx;
				display: flex;
				justify-content: space-between;
				border-top: 1px solid #999;
				.left{
					width:50%;
					height:100%;
					line-height: 80rpx;
					text-align: center;
					font-size: 24rpx;
					border-right: 1px solid #999;
				}
				.right{
					width:50%;
					height:100%;
					line-height: 80rpx;
					text-align: center;
					font-size: 24rpx;
					color:#4399FC;
				}
			}
		}
	}
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
		background: #f5f5f5;
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
			padding-top: 44px;
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
			width: 108upx;
			height: 108upx;
			margin-bottom: 14upx;
			border-radius: 50%;
			opacity: .7;
		}
	}
	.ad-1{
		width:724rpx;
		height: 245rpx;
		margin: auto;
		image{
			width:100%;
			height: 100%; 
		}
	}
	/* 秒杀专区 */
	.seckill-section{
		padding: 4upx 30upx 24upx;
		background: #fff;
		.s-header{
			display:flex;
			align-items:center;
			height: 92upx;
			line-height: 1;
			.s-img{
				width: 140upx;
				height: 30upx;
			}
			.tip{
				font-size: $font-base;
				color: $font-color-light;
				margin: 0 20upx 0 40upx;
			}
			.timer{
				display:inline-block;
				width: 40upx;
				height: 36upx;
				text-align:center;
				line-height: 36upx;
				margin-right: 14upx;
				font-size: $font-sm+2upx;
				color: #fff;
				border-radius: 2px;
				background: rgba(0,0,0,.8);
			}
			.icon-you{
				font-size: $font-lg;
				color: $font-color-light;
				flex: 1;
				text-align: right;
			}
		}
		.floor-list{
			white-space: nowrap;
		}
		.scoll-wrapper{
			display:flex;
			align-items: flex-start;
		}
		.floor-item{
			width: 150upx;
			margin-right: 20upx;
			font-size: $font-sm+2upx;
			color: $font-color-dark;
			line-height: 1.8;
			image{
				width: 150upx;
				height: 150upx;
				border-radius: 6upx;
			}
			.price{
				color: $uni-color-primary;
			}
		}
	}
	
	.f-header{
		display:flex;
		align-items:center;
		height: 140upx;
		padding: 6upx 30upx 8upx;
		background: #fff;
		image{
			flex-shrink: 0;
			width: 80upx;
			height: 80upx;
			margin-right: 20upx;
		}
		.tit-box{
			flex: 1;
			display: flex;
			flex-direction: column;
		}
		.tit{
			font-size: $font-lg +2upx;
			color: #font-color-dark;
			line-height: 1.3;
		}
		.tit2{
			font-size: $font-sm;
			color: $font-color-light;
		}
		.icon-you{
			font-size: $font-lg +2upx;
			color: $font-color-light;
		}
	}
	/* 团购楼层 */
	.group-section{
		background: #fff;
		.g-swiper{
			height: 650upx;
			padding-bottom: 30upx;
		}
		.g-swiper-item{
			width: 100%;
			padding: 0 30upx;
			display:flex;
		}
		image{
			width: 100%;
			height: 460upx;
			border-radius: 4px;
		}
		.g-item{
			display:flex;
			flex-direction: column;
			overflow:hidden;
		}
		.left{
			flex: 1.2;
			margin-right: 24upx;
			.t-box{
				padding-top: 20upx;
			}
		}
		.right{
			flex: 0.8;
			flex-direction: column-reverse;
			.t-box{
				padding-bottom: 20upx;
			}
		}
		.t-box{
			height: 160upx;
			font-size: $font-base+2upx;
			color: $font-color-dark;
			line-height: 1.6;
		}
		.price{
			color:$uni-color-primary;
		}
		.m-price{
			font-size: $font-sm+2upx;
			text-decoration: line-through;
			color: $font-color-light;
			margin-left: 8upx;
		}
		.pro-box{
			display:flex;
			align-items:center;
			margin-top: 10upx;
			font-size: $font-sm;
			color: $font-base;
			padding-right: 10upx;
		}
		.progress-box{
			flex: 1;
			border-radius: 10px;
			overflow: hidden;
			margin-right: 8upx;
		}
	}
	/* 分类推荐楼层 */
	.hot-floor{
		width: 100%;
		overflow: hidden;
		margin-bottom: 20upx;
		.floor-img-box{
			width: 100%;
			height:320upx;
			position:relative;
			&:after{
				content: '';
				position:absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				background: linear-gradient(rgba(255,255,255,.06) 30%, #f8f8f8);
			}
		}
		.floor-img{
			width: 100%;
			height: 100%;
		}
		.floor-list{
			white-space: nowrap;
			padding: 20upx;
			padding-right: 50upx;
			border-radius: 6upx;
			margin-top:-140upx;
			margin-left: 30upx;
			background: #fff;
			box-shadow: 1px 1px 5px rgba(0,0,0,.2);
			position: relative;
			z-index: 1;
		}
		.scoll-wrapper{
			display:flex;
			align-items: flex-start;
		}
		.floor-item{
			width: 180upx;
			margin-right: 20upx;
			font-size: $font-sm+2upx;
			color: $font-color-dark;
			line-height: 1.8;
			image{
				width: 180upx;
				height: 180upx;
				border-radius: 6upx;
			}
			.price{
				color: $uni-color-primary;
			}
		}
		.more{
			display:flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			flex-shrink: 0;
			width: 180upx;
			height: 180upx;
			border-radius: 6upx;
			background: #f3f3f3;
			font-size: $font-base;
			color: $font-color-light;
			text:first-child{
				margin-bottom: 4upx;
			}
		}
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
	.navBarCP{
		position: fixed;
		top:140rpx;
		left: 0;
		z-index: 3;
	}
	.pomoFrame{
		width:750rpx;
		box-shadow:0px 1px 3px 0px rgba(35,35,35,0.1);
		border-radius:7px;
		padding: 0 16.67rpx;
		.pomp1{
			width:100%;
			height:288rpx;
			margin-top: 15rpx;
			background-color: #fff;
			display: flex;
			.picS{
				width: 123.61rpx;
				height: 123.61rpx;
			}
			.picL{
				width:123.61rpx;
				height:123.61rpx;
			}
			.title{
				font-size:28rpx;
				font-family:PingFang SC;
				font-weight:800;
				color:rgba(0,0,0,1);
			}
			.dsc{
				margin-top: 15.28rpx;
				font-size:21rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(153,153,153,1);
			}
			.left{
				width:358.33rpx;
				border-right: 1px solid rgba(237,232,232,1);
				height: 288rpx;
				flex-shrink: 0;
				.leftTop{
					margin-left: 31.94rpx;
					margin-top: 30.56rpx;
					display: flex;
					flex-direction: column;
					justify-content: center;
				}
				.leftBottom{
					width:272.92rpx;
					margin-top: 29.8rpx;
					margin-left: 50rpx;
					display: flex;
					justify-content: space-between;
				}
			}
			.right{
				flex-grow: 1;
				height: 100%;
				.rightTop{
					width: 100%;
					height: 50%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.rightTopLeft{
						margin-left: 20.83rpx;
						display: flex;
						flex-direction: column;
						justify-content: center;
					}
					.picL{
						margin-right:15.28rpx;
					}
				}
				
			}
		}
		.pomp2{
			width:100%;
			height:326.39rpx;
			background-color: #fff;
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			.item{
				flex-grow: 1;
				height:100%;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				border-right: 1px solid #EDE8E8;
				.title{
					font-size:28rpx;
					font-family:PingFang SC;
					font-weight:800;
					color:rgba(0,0,0,1);
				}
				.dsc{
					margin-top: 15.28rpx;
					font-size:21rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(153,153,153,1);
				}
				.picS{
					width: 123.61rpx;
					height: 123.61rpx;
					margin-top: 38.19rpx;
				}
			}
		}
	}
	.modalCP .p{
		font-size:25rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(34,34,34,1);
		line-height:38rpx;
		margin-bottom: 35rpx;
		.link{
			color: #FAC523;
		}
	}
</style>
