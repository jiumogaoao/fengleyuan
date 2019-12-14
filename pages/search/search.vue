<template>
	<view>
		<view class="historyList" v-if="!noempty && searchHistory.length">
			<view class="historyTop">
				<view class="title">历史搜索</view>
				<image class="removeHistory" src="/static/removeHistory.png" @click="removeHistory"></image>
			</view>
			<view class="list">
				<view class="point" v-for="(v,i) in searchHistory" :key="i" @click="setKeyWord(v)">{{v}}</view>
				<!-- <view class="point">电脑</view>
				<view class="point">连衣裙</view>
				<view class="point">海绵床垫</view> -->
			</view>
		</view>
		<view class="hotList" v-if="!noempty">
			<view class="title">大家都在搜</view>
			<view class="list">
				<view class="pointFrame" @click="setKeyWord('新春礼包')"><view class="point">新春礼包</view></view>
				<view class="pointFrame" @click="setKeyWord('圣诞节')"><view class="point">圣诞节</view></view>
			</view>
		</view>
		<block v-else>
			<view class="navbar" :style="{position:headerPosition,top:headerTop}">
				<view class="nav-item" :class="{current: salse === 0}" @click="setSalse(0)">
					<text>综合</text>
				</view>
				<view class="nav-item" :class="{current: salse === 8 || salse === 9}" @click="setSalse(8)">
					<text>销量</text>
					<image class="sort" :src="salse==9?'/static/up.png':'/static/down.png'" @click.stop="sortToggle(0)"></image>
				</view>
				<view class="nav-item" :class="{current: salse === 10 || salse === 11}" @click="setSalse(9)">
					<text>价格</text>
					<image class="sort" :src="salse==11?'/static/up.png':'/static/down.png'" @click.stop="sortToggle(1)"></image>
				</view>
				<image class="showType" :src="showType?'/static/show1.png':'/static/show0.png'" @click="toggleShowType"></image>
			</view>
			<view style="width:750rpx;height:80rpx;"></view>
			<view class="goods-list" v-if="goodsList.length">
				<view 
					v-for="(item, index) in goodsList" :key="index"
					class="goods-item" v-if="showType==0"
					@click="navToDetailPage(item)"
				>
					<view class="image-wrapper">
						<image :src="item.header_img" mode="aspectFill"></image>
					</view>
					<view class="title clamp">{{item.product_name}}</view>
					<view class="shopFrame">
						<image class="shopIcon" src="/static/shop.png"></image>
						<view class="shopName">{{item.shop_name}}</view>
					</view>
					<view class="rebateFrame">
						<view class="coupon">券￥300</view>
						<view class="income">预估收益<image src="/static/productIcon02.png" class="mt"></image>{{item.income_ratio}}</view>
					</view>
					<view class="price-box">
						<view class="left">
							<text class="priceTip">￥</text><text class="price">{{item.commodity_price}}</text><text class="oldPrice">￥1110</text>
						</view>
						
						<text class="right">已售 {{item.sales_volume}}万</text>
					</view>
				</view>
				<view
					v-for="(item, index) in goodsList" :key="index"
					class="goods-item showType1"
					@click="navToDetailPage(item)"
					 v-if="showType==1"
				>
					<view class="image-wrapper">
						<image :src="item.header_img" mode="aspectFill"></image>
					</view>
					<view class="productRight">
						<view class="title clamp">{{item.product_name}}</view>
						<view class="shopFrame">
							<image class="shopIcon" src="/static/shop.png"></image>
							<view class="shopName">{{item.shop_name}}</view>
						</view>
						<view class="rebateFrame">
							<view class="coupon">券￥300</view>
							<view class="income">预估收益<image src="/static/productIcon02.png" class="mt"></image>{{item.income_ratio}}</view>
						</view>
						<view class="price-box">
							<view class="left">
								<text class="priceTip">￥</text><text class="price">{{item.commodity_price}}</text><text class="oldPrice">￥1110</text>
							</view>
							
							<text class="right">已售 {{item.sales_volume}}万</text>
						</view>
					</view>
					
				</view>
				
			</view>
			<image src="/static/empty.png" class="noData" v-else></image>
			<uni-load-more :status="loadingType"></uni-load-more>
		</block>
		
	</view>
</template>

<script>
	import {postFetch} from '@/util/request_UT.js'
	export default {
		data() {
			return {
				saleSort:0,
				priceSort:0,
				searchKey:'',
				result:[
					
				],
				cateMaskState: 0, //分类面板展开状态
				headerPosition:"fixed",
				headerTop:"0px",
				loadingType: 'more', //加载更多状态
				filterIndex: 0, 
				cateId: 0, //已选三级分类id
				priceOrder: 0, //1 价格从低到高 2价格从高到低
				cateList: [],
				goodsList: [
					// {
					// 	"id":2,
					// 	"pid":"13512020724",
					// 	"product_name":"WETHERM温碧泉八杯水补水保湿套装爽肤水面霜男女化妆护肤品正品",
					// 	"header_img":"http://img.alicdn.com/bao/uploaded/i2/661544293/O1CN01O7qd1i1haEshyU0Y4_!!0-item_pic.jpg",
					// 	"pro_url":"http://item.taobao.com/item.htm?id=13512020724",
					// 	"shop_name":"温碧泉旗舰店",
					// 	"commodity_price":90,
					// 	"sales_volume":"892",
					// 	"income_ratio":9,
					// 	"commission":"8.1",
					// 	"seller_id":"温碧泉旗舰店",
					// 	"tbk_smor_url":"https://s.click.taobao.com/iwSuYtv",
					// 	"tbk_url":"https://s.click.taobao.com/t?e=m%3D2%26s%3DSx4s4%2FT5YkccQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67h8r4WhmWCVg5ZnjZiNpIZYP071OQeeUX1U0bFwiQSAKjNDhADNALs5XO%2FuunAhMG1cF%2BxuuSKWB6lBjOrujip7IuD9ht8sOM2hGWPlHgTvG4%2BE8ttrT1rVxKmPmpIKZsA%3D%3D",
					// 	"ambush":"￥vGYtYBPUkGQ￥",
					// 	"total_coupons":"200000",
					// 	"coupon_surplus":"199957",
					// 	"coupon_face_value":"满90元减55元",
					// 	"coupon_start_time":"2009-12-01 00:00:00",
					// 	"coupon_end_time":"2010-12-01 00:00:00",
					// 	"coupon_link":"https://uland.taobao.com/coupon/edetail?e=4pr5oTZCKMJF0Vw9m5i33M0AcM9Q6CVNTFCQBvBsQDU%2BuLmYoH1Xhtyh%2FpPPYLf0txl6Um37OPIiRT7n5fsvdZTOHoUIKFRgRWbA%2FrJEooPIj4kOey29BKJ7%2BkHL3AEW&af=1&pid=mm_728630106_1144000046_109836000284",
					// 	"coupon_password":"￥TUIFYBPUybw￥",
					// 	"Coupon_short_link":"https://s.click.taobao.com/jeRuYtv",
					// 	"is_pro":"是",
					// 	"regiment_size":"0",
					// 	"regiment_price":"0",
					// 	"regiment_commission":"0",
					// 	"group_start_time":"2001-01-01 08:00:00",
					// 	"group_end_time":"2001-01-01 08:00:00",
					// 	}
				],
				showType:0,
				curr_page:1,
				keywork:'',
				salse:0,//0综合1按销量顺序2销量倒序3价格顺序4价格倒序5上架时间6优惠券7金额佣金
				noempty:false,
				searchHistory:uni.getStorageSync("searchHistory")||[]
			};
		},
		methods:{
			setSalse(num){
				this.salse=num;
				this.search()
			},
			setKeyWord(str){
				this.keywork=str;
				this.search()
			},
			removeHistory(){
				this.$set(this,"searchHistory",[])
				uni.setStorageSync("searchHistory",[])
			},
			sortToggle(type){
				if(type){
					this.salse = (this.salse==10)?11:10
				}else{
					this.salse = (this.salse==8)?9:8
				}
			},
			toggleShowType(){
				this.showType = !this.showType
			},
			push(){
				postFetch('index.php/index/index/search',{keywork:this.keywork,curr_page:this.curr_page,selse:this.selse},false,function(res){
					console.log("search",res)
					if(res.data.pro_list){
						_this.$set(_this,'goodsList',[..._this.goodsList,res.data.pro_list])
						this.curr_page += 1
					}
				})
			},
			search(){
				let _this=this;
				uni.hideKeyboard()
				this.noempty=true;
				if(this.keywork){
					let newH = [this.keywork];
					this.searchHistory.map(function(v){
						if(!newH.includes(v)){
							newH.push(v)
						}
					})
					this.$set(this,"searchHistory",newH)
					uni.setStorageSync("searchHistory",newH)
				}
				this.curr_page = 1;
				postFetch('index.php/index/index/search',{keywork:this.keywork,curr_page:this.curr_page,type:this.selse},false,function(res){
					console.log("search",res)
					
					if(res.data.pro_list){
						_this.$set(_this,'goodsList',res.data.pro_list)
						this.curr_page += 1
					}
				})
			},
			//加载分类
			async loadCateList(fid, sid){
				let list = await this.$api.json('cateList');
				let cateList = list.filter(item=>item.pid == fid);
				
				cateList.forEach(item=>{
					let tempList = list.filter(val=>val.pid == item.id);
					item.child = tempList;
				})
				this.cateList = cateList;
			},
			//加载商品 ，带下拉刷新和上滑加载
			async loadData(type='add', loading) {
				//没有更多直接返回
				if(type === 'add'){
					if(this.loadingType === 'nomore'){
						return;
					}
					this.loadingType = 'loading';
				}else{
					this.loadingType = 'more'
				}
				
				let goodsList = await this.$api.json('goodsList');
				if(type === 'refresh'){
					this.goodsList = [];
				}
				//筛选，测试数据直接前端筛选了
				if(this.filterIndex === 1){
					goodsList.sort((a,b)=>b.sales - a.sales)
				}
				if(this.filterIndex === 2){
					goodsList.sort((a,b)=>{
						if(this.priceOrder == 1){
							return a.price - b.price;
						}
						return b.price - a.price;
					})
				}
				
				this.goodsList = this.goodsList.concat(goodsList);
				
				//判断是否还有下一页，有是more  没有是nomore(测试数据判断大于20就没有了)
				this.loadingType  = this.goodsList.length > 20 ? 'nomore' : 'more';
				if(type === 'refresh'){
					if(loading == 1){
						uni.hideLoading()
					}else{
						uni.stopPullDownRefresh();
					}
				}
			},
			//筛选点击
			tabClick(index){
				if(this.filterIndex === index && index !== 2){
					return;
				}
				this.filterIndex = index;
				if(index === 2){
					this.priceOrder = this.priceOrder === 1 ? 2: 1;
				}else{
					this.priceOrder = 0;
				}
				uni.pageScrollTo({
					duration: 300,
					scrollTop: 0
				})
				this.loadData('refresh', 1);
				uni.showLoading({
					title: '正在加载'
				})
			},
			//显示分类面板
			toggleCateMask(type){
				let timer = type === 'show' ? 10 : 300;
				let	state = type === 'show' ? 1 : 0;
				this.cateMaskState = 2;
				setTimeout(()=>{
					this.cateMaskState = state;
				}, timer)
			},
			//分类点击
			changeCate(item){
				this.cateId = item.id;
				this.toggleCateMask();
				uni.pageScrollTo({
					duration: 300,
					scrollTop: 0
				})
				this.loadData('refresh', 1);
				uni.showLoading({
					title: '正在加载'
				})
			},
			//详情
			navToDetailPage(item){
				//测试数据没有写id，用title代替
				let id = item.title;
				uni.navigateTo({
					url: `/pages/product/product?id=${id}`
				})
			},
			stopPrevent(){}
		},
		onLoad(options){
			// #ifdef H5
			// this.headerTop = document.getElementsByTagName('uni-page-head')[0].offsetHeight+'px';
			// #endif
			// this.cateId = options.tid;
			// this.loadCateList(options.fid,options.sid);
			// this.loadData();
			if(options.keywork||options.salse){
				this.keywork = options.keywork || '';
				this.salse = options.salse;
				this.search()
			}
		},
		onPageScroll(e){
			//兼容iOS端下拉时顶部漂移
			if(e.scrollTop>=0){
				this.headerPosition = "fixed";
			}else{
				this.headerPosition = "absolute";
			}
		},
		//下拉刷新
		onPullDownRefresh(){
			this.loadData('refresh');
		},
		//加载更多
		onReachBottom(){
			this.loadData();
		},
		onNavigationBarSearchInputChanged(e){
			this.searchKey = e.text
			console.log("onNavigationBarSearchInputChanged",e.text)
		},
		onNavigationBarSearchInputClicked: async function(e) {
			console.log("onNavigationBarSearchInputClicked")
		},
		onNavigationBarSearchInputConfirmed(){
			this.keywork = this.searchKey;
			this.search()
		},
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) {
				this.keywork = this.searchKey;
				this.search()
			}
		}
	}
</script>

<style lang="scss">
	page, .content{
		background: #fff;
	}
	.noData{
		width:129rpx;
		height: 181rpx;
		display: block;
		margin:auto;
		margin-top: 273rpx;
	}
	.content{
		padding-top: 96upx;
	}
	
	.navbar{
		position: fixed;
		left: 0;
		top: var(--window-top);
		display: flex;
		align-items: center;
		width: 100%;
		height: 80upx;
		background: #fff;
		box-shadow: 0 2upx 10upx rgba(0,0,0,.06);
		z-index: 10;
		.nav-item{
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 30upx;
			color: #999999;
			position: relative;
			&.current{
				color: #222222;
				// &:after{
				// 	content: '';
				// 	position: absolute;
				// 	left: 50%;
				// 	bottom: 0;
				// 	transform: translateX(-50%);
				// 	width: 120upx;
				// 	height: 0;
				// 	border-bottom: 4upx solid $base-color;
				// }
			}
			.sort{
				width: 14rpx;
				height: 35rpx;
				margin-left: 4rpx;
			}
		}
		.p-box{
			display: flex;
			flex-direction: column;
			.yticon{
				display: flex;
				align-items: center;
				justify-content: center;
				width: 30upx;
				height: 14upx;
				line-height: 1;
				margin-left: 4upx;
				font-size: 26upx;
				color: #888;
				&.active{
					color: $base-color;
				}
			}
			.xia{
				transform: scaleY(-1);
			}
		}
		.cate-item{
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			width: 80upx;
			position: relative;
			font-size: 44upx;
			&:after{
				content: '';
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				border-left: 1px solid #ddd;
				width: 0;
				height: 36upx;
			}
		}
		.showType{
			width:35rpx;
			height:35rpx;
			margin-right: 59rpx;
		}
	}
	
	/* 分类 */
	.cate-mask{
		position: fixed;
		left: 0;
		top: var(--window-top);
		bottom: 0;
		width: 100%;
		background: rgba(0,0,0,0);
		z-index: 95;
		transition: .3s;
		
		.cate-content{
			width: 630upx;
			height: 100%;
			background: #fff;
			float:right;
			transform: translateX(100%);
			transition: .3s;
		}
		&.none{
			display: none;
		}
		&.show{
			background: rgba(0,0,0,.4);
			
			.cate-content{
				transform: translateX(0);
			}
		}
	}
	.cate-list{
		display: flex;
		flex-direction: column;
		height: 100%;
		.cate-item{
			display: flex;
			align-items: center;
			height: 90upx;
			padding-left: 30upx;
			font-size: 28upx;
			color: #555;
			position: relative;
		}
		.two{
			height: 64upx;
			color: #303133;
			font-size: 30upx;
			background: #f8f8f8;
		}
		.active{
			color: $base-color;
		}
	}
	
	/* 商品列表 */

	.goods-list{
		display:flex;
		flex-wrap:wrap;
		justify-content: space-between;
		padding: 0 14upx;
		background-color: #f5f6f8;
		padding-bottom: 20rpx;
		.goods-item{
			display:flex;
			flex-direction: column;
			width:354rpx;
			height:556rpx;
			margin-top: 14rpx;
			background-color: #fff;
		}
		.goods-item.showType1{
			flex-direction:row;
			width:100%;
			height:250rpx;
			padding: 14rpx;
		}
		.image-wrapper{
			width: 100%;
			height: 354upx;
			border-radius: 3px;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
				opacity: 1;
			}
		}
		.goods-item.showType1 .image-wrapper{
			width:222rpx;
			height: 222rpx;
			margin-right: 15rpx;
			flex-shrink: 0;
		}
		.productRight{
			flex-grow: 1;
			padding: 17rpx 0 14rpx 0;
		}
		.title{
			font-size:26rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(34,34,34,1);
			width:100%;
			padding: 0 14rpx;
			height: 58rpx;
			margin-top: 14rpx;
			overflow: hidden;
			text-overflow: ellipsis;
			display:-webkit-box; //作为弹性伸缩盒子模型显示。
			-webkit-box-orient:vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
			-webkit-line-clamp:2; //显示的行
			white-space: normal;
			line-height: 1.1;
		}
		.shopFrame{
			width:100%;
			padding: 0 14rpx;
			margin-top: 10rpx;
			display: flex;
			align-items: center;
			.shopIcon{
				width:21rpx;
				height:21rpx;
				margin-right: 15rpx;
			}
			.shopName{
				font-size:20rpx;
				font-family:PingFang SC;
				font-weight:400;
				color:rgba(153,153,153,1);
			}
		}
		.rebateFrame{
			width:100%;
			padding: 0 14rpx;
			margin-top: 12rpx;
			display: flex;
			align-items: center;
			.coupon{
				width:90rpx;
				height:35rpx;
				background-image: url('~@/static/coupon.png');
				background-size: 90rpx 35rpx;
				background-repeat: no-repeat;
				margin-right: 14rpx;
				font-size:17rpx;
				font-family:PingFang SC;
				font-weight:400;
				color:rgba(255,255,255,1);
				line-height: 35rpx;
				text-align: center;
			}
			.income{
				width:139rpx;
				height:29rpx;
				background:rgba(250,131,35,1);
				border-radius:7rpx;
				font-size:17rpx;
				font-family:PingFang SC;
				font-weight:400;
				color:rgba(255,255,255,1);
				text-align: center;
				line-height: 29rpx;
				.mt{
					width:14rpx;
					height:14rpx;
				}
			}
		}
		.price-box{
			width:100%;
			padding: 0 14rpx;
			display: flex;
			justify-content: space-between;
			margin-top: 12rpx;
			.left{
				display: flex;
				align-items: baseline;
				.priceTip{
					font-size: 20rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(219,0,27,1);
				}
				.price{
					font-size: 29rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(219,0,27,1);
				}
				.oldPrice{
					font-size:20rpx;
					font-family:PingFang SC;
					font-weight:400;
					text-decoration:line-through;
					color:rgba(153,153,153,1);
				}
			}
			.right{
				font-size:23rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(153,153,153,1);
			}
		}
	}
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
			.removeHistory{
				width:35rpx;
				height:35rpx;
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

	
	

