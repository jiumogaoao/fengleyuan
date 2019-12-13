<template>
	<view class="container">
		<!-- 小程序头部兼容 -->
		<!-- #ifdef MP -->
		<view class="mp-search-box">
			<input class="ser-input" type="text" value="输入关键字搜索" disabled />
		</view>
		<!-- #endif -->
		<!-- <navBarCP class="navBarCP" :style="{backgroundColor:'#DD8D45'}"/> -->
		<!-- 头部轮播 -->
		<view class="carousel-section">
			<!-- 标题栏和状态栏占位符 -->
			<view class="titleNview-placing"></view>
			<!-- 背景色区域 -->
			<view class="titleNview-background" :style="{backgroundColor:'#'+(titleNViewBackground||'DD8D45')}"></view>
			<swiper class="carousel" circular @change="swiperChange">
				<swiper-item v-for="(item, index) in carouselList" :key="index" class="carousel-item" @click="navToDetailPage({title: '轮播广告'})">
					<image :src="item.banner_url" @click="bannerClick(item.url,item.type)"/>
				</swiper-item>
			</swiper>
			<!-- 自定义swiper指示器 -->
			<view class="swiper-dots">
				<text class="num">{{swiperCurrent+1}}</text>
				<text class="sign">/</text>
				<text class="num">{{swiperLength}}</text>
			</view>
		</view>
		<!-- 分类 -->
		<view class="cate-section">
			<view class="cate-item" @click="go('/pages/search/search')">
				<image src="/static/temp/c3.png"></image>
				<text>实时热销</text>
			</view>
			<view class="cate-item" @click="go('/pages/search/search')">
				<image src="/static/temp/c5.png"></image>
				<text>网红新品</text>
			</view>
			<view class="cate-item" @click="go('/pages/search/search')">
				<image src="/static/temp/c6.png"></image>
				<text>聚优惠</text>
			</view>
			<view class="cate-item" @click="go('/pages/product/list')">
				<image src="/static/temp/c7.png"></image>
				<text>高佣专区</text>
			</view>
			<view class="cate-item" @click="yijiayou">
				<image src="/static/temp/c8.png"></image>
				<text>优惠加油</text>
			</view>
		</view>
		
		<view class="ad-1" @click="navTo('/pages/vip/vip')">
			<image src="https://www.paradisebee.com/pomo3.png" mode="scaleToFill"></image>
		</view>
		
		<!-- 秒杀楼层 -->
		<!-- <view class="seckill-section m-t">
			<view class="s-header">
				<image class="s-img" src="/static/temp/secskill-img.jpg" mode="widthFix"></image>
				<text class="tip">8点场</text>
				<text class="hour timer">07</text>
				<text class="minute timer">13</text>
				<text class="second timer">55</text>
				<text class="yticon icon-you"></text>
			</view>
			<scroll-view class="floor-list" scroll-x>
				<view class="scoll-wrapper">
					<view 
						v-for="(item, index) in goodsList" :key="index"
						class="floor-item"
						@click="navToDetailPage(item.title)"
					>
						<image :src="item.image" mode="aspectFill"></image>
						<text class="title clamp">{{item.title}}</text>
						<text class="price">￥{{item.price}}</text>
					</view>
				</view>
			</scroll-view>
		</view> -->
		<!-- <view class="pomoFrame">
			<view class="pomp1">
				<view class="left">
					<view class="leftTop">
						<view class="title">自营商城</view>
						<view class="dsc">更多好货任你选</view>
					</view>
					<view class="leftBottom">
						<image class="picL" src="/static/a0.png"></image>
						<image class="picL" src="/static/a1.png"></image>
					</view>
				</view>
				<view class="right">
					<view class="rightTop">
						<view class="rightTopLeft">
							<view class="title">品牌好货</view>
							<view class="dsc">品牌精选热销好货</view>
						</view>
						<image class="picL" src="/static/a2.png"/>
					</view>
					<view class="rightTop">
						<view class="rightTopLeft">
							<view class="title">今日爆款</view>
							<view class="dsc">精选今日爆款榜单</view>
						</view>
						<image class="picL" src="/static/a3.png"/>
					</view>
				</view>
			</view>
			<view class="pomp2">
				<view class="item">
					<view class="top">
						<view class="title">0元购</view>
						<view class="dsc">蜜蜂天堂独家福利</view>
					</view>
					<image class="picS" src="/static/a4.png"/>
				</view>
				<view class="item">
			
						<view class="title">信用卡</view>
						<view class="dsc">办卡享更多优惠</view>
			
					<image class="picS" src="/static/a5.png"/>
				</view>
				<view class="item" style="border: 0;">
				
						<view class="title">限时秒杀</view>
						<view class="dsc">每日更新 全网最低价</view>
			
					<image class="picS" src="/static/a6.png"/>
				</view>
			</view>
		</view> -->
		
		<!-- 团购楼层 -->
<!-- 		<view class="f-header m-t">
			<image src="/static/temp/h1.png"></image>
			<view class="tit-box">
				<text class="tit">精品团购</text>
				<text class="tit2">Boutique Group Buying</text>
			</view>
			<text class="yticon icon-you"></text>
		</view>
		<view class="group-section">
			<swiper class="g-swiper" :duration="500">
				<swiper-item
					class="g-swiper-item"
					v-for="(item, index) in goodsList" :key="index"
					v-if="index%2 === 0"
					@click="navToDetailPage(item)"
				>
					<view class="g-item left">
						<image :src="item.image" mode="aspectFill"></image>
						<view class="t-box">
							<text class="title clamp">{{item.title}}</text>
							<view class="price-box">
								<text class="price">￥{{item.price}}</text> 
								<text class="m-price">￥188</text> 
							</view>
							
							<view class="pro-box">
							  	<view class="progress-box">
							  		<progress percent="72" activeColor="#fa436a" active stroke-width="6" />
							  	</view>
								<text>6人成团</text>
							</view>
						</view>
						            
					</view>
					<view class="g-item right">
						<image :src="goodsList[index+1].image" mode="aspectFill"></image>
						<view class="t-box">
							<text class="title clamp">{{goodsList[index+1].title}}</text>
							<view class="price-box">
								<text class="price">￥{{goodsList[index+1].price}}</text> 
								<text class="m-price">￥188</text> 
							</view>
							<view class="pro-box">
							  	<view class="progress-box">
							  		<progress percent="72" activeColor="#fa436a" active stroke-width="6" />
							  	</view>
								<text>10人成团</text>
							</view>
						</view>
					</view>
				</swiper-item>

			</swiper>
		</view> -->
		
		
		
		<!-- 分类推荐楼层 -->
		<!-- <view class="f-header m-t">
			<image src="/static/temp/h1.png"></image>
			<view class="tit-box">
				<text class="tit">分类精选</text>
				<text class="tit2">Competitive Products For You</text>
			</view>
			<text class="yticon icon-you"></text>
		</view>
		<view class="hot-floor">
			<view class="floor-img-box">
				<image class="floor-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553409398864&di=4a12763adccf229133fb85193b7cc08f&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201703%2F19%2F20170319150032_MNwmn.jpeg" mode="scaleToFill"></image>
			</view>
			<scroll-view class="floor-list" scroll-x>
				<view class="scoll-wrapper">
					<view 
						v-for="(item, index) in goodsList" :key="index"
						class="floor-item"
						@click="navToDetailPage(item)"
					>
						<image :src="item.image" mode="aspectFill"></image>
						<text class="title clamp">{{item.title}}</text>
						<text class="price">￥{{item.price}}</text>
					</view>
					<view class="more">
						<text>查看全部</text>
						<text>More+</text>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="hot-floor">
			<view class="floor-img-box">
				<image class="floor-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553409984228&di=dee176242038c2d545b7690b303d65ea&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F5ef4da9f17faaf4612f0d5046f4161e556e9bbcfdb5b-rHjf00_fw658" mode="scaleToFill"></image>
			</view>
			<scroll-view class="floor-list" scroll-x>
				<view class="scoll-wrapper">
					<view 
						v-for="(item, index) in goodsList" :key="index"
						class="floor-item"
						@click="navToDetailPage(item)"
					>
						<image :src="item.image3" mode="aspectFill"></image>
						<text class="title clamp">{{item.title}}</text>
						<text class="price">￥{{item.price}}</text>
					</view>
					<view class="more">
						<text>查看全部</text>
						<text>More+</text>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="hot-floor">
			<view class="floor-img-box">
				<image class="floor-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553409794730&di=12b840ec4f5748ef06880b85ff63e34e&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01dc03589ed568a8012060c82ac03c.jpg%40900w_1l_2o_100sh.jpg" mode="scaleToFill"></image>
			</view>
			<scroll-view class="floor-list" scroll-x>
				<view class="scoll-wrapper">
					<view 
						v-for="(item, index) in goodsList" :key="index"
						class="floor-item"
						@click="navToDetailPage(item)"
					>
						<image :src="item.image2" mode="aspectFill"></image>
						<text class="title clamp">{{item.title}}</text>
						<text class="price">￥{{item.price}}</text>
					</view>
					<view class="more">
						<text>查看全部</text>
						<text>More+</text>
					</view>
				</view>
			</scroll-view>
		</view> -->

		<!-- 猜你喜欢 -->
		<view class="f-header m-t">
			<image src="/static/temp/h1.png"></image>
			<view class="tit-box">
				<text class="tit">猜你喜欢</text>
				<text class="tit2">Guess You Like It</text>
			</view>
			<text class="yticon icon-you"></text>
		</view>
		
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
		
		<modalCP title="用户协议及隐私政策" cancelText="不同意" confirmText="同意" class="modalCP" @confirm="rulaComfirm" @cancel="rulaCancel" v-if="showFirstPOP">
			<view class="p">感谢您信任并使用蜜蜂天堂</view>
			<view class="p">我们非常重视您的个人信息和隐私保护，为了更好的保障您的个人权益，在您使用我们的产品前，请您认真阅读<text class="link" @click="go('/pages/agreement/agreement')">《用户协议》</text>和<text class="link" @click="go('/pages/policy/policy')">《隐私政策》</text>的全部内容，同意并接受全部条款后开始使用我们的产品和服务。</view>
			<view class="p">若选择不同意，将无法使用我们的产品和服务，并退出应用。</view>
		</modalCP>
	</view>
</template>

<script>
	import navBarCP from '@/components/navBar_CP.vue'
	import modalCP from '@/components/modal_CP.vue'
	import {postFetch} from '@/util/request_UT.js'
	import {encrypt64} from '@/util/security_UT.js'
	export default {
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
				latitude:0,
				yijiayoulink:''
			};
		},
		onShow(){
			let _this = this;
			if(!uni.getStorageSync('firstIn')){
				this.showFirstPOP=true
			}
			console.log('开始获取')
			uni.getLocation({
			    type: 'gcj02',
			    success: function (res) {
					console.log('获取坐标成功',res)
					postFetch('index.php/index/index',{phone:_this.$store.state.userST.phone||null,latitude:res.latitude||null,
								longitude:res.longitude||null},false,function(res){
									console.log("获取index",res)
									_this.swiperLength=res.data.banner.length
						_this.$set(_this,'carouselList',res.data.banner)
						_this.$set(_this,'goodsList2',res.data.product)
					})
				},
				fail:function(){
					console.log('获取坐标失败')
					postFetch('index.php/index/index',{phone:_this.$store.state.userST.phone||null},false,function(res){
						console.log("获取index",res)
						_this.swiperLength=res.data.banner.length
						_this.$set(_this,'carouselList',res.data.banner)
						_this.$set(_this,'goodsList2',res.data.product)
					})
				}
				})
			
		},
		onLoad() {
			this.loadData();
		},
		methods: {
			navTo(url){
				if(!this.hasLogin){
					url = '/pages/public/login';
				}
				uni.navigateTo({  
					url
				})  
			}, 
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
								_this.yijiayoulink=encrypt64(res.data.url)
								uni.navigateTo({
									url:'/pages/yijiayou/yijiayou?url='+_this.yijiayoulink
								})
								// plus.runtime.openURL(res.data.url)
							})
					    },
						fail:function(e){
							uni.showToast({
								title:'获取定位失败',
								icon:'none'
							})
							postFetch('index.php/index/api/ejiayou',{
								latitude:null,
								longitude:null,
								phone:'13800138000'
							},false,function(res){
								console.log('ejiayou',JSON.stringify(res.data.url))
								_this.yijiayoulink=res.data.url
								uni.navigateTo({
									url:'/pages/yijiayou/yijiayou?url='+_this.yijiayoulink
								})
								// plus.runtime.openURL(res.data.url)
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
				this.titleNViewBackground = this.carouselList[index].colo;
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
			uni.navigateTo({
				url:'/pages/search/search'
			})
		},
		onTabItemTap(t){
			console.log(t);
			if(t.text=="自营商城"){
				uni.showToast({
					title:"暂未开放，敬请期待",
					icon:'none'
				})
			}
			return false;
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
