<template>
	<view class="content">
		<view class="zhanwei"></view>
			<uniNav left-icon="back" class="uniNav">
				<view class="navTabBar">
					<view :class="{navTab:1,hl:type==0}">商城收益</view>
					<!-- <view :class="{navTab:1,hl:type==1}">自营收益</view> -->
				</view>
				<!-- <image slot="right" src="/static/orderType.png" @click="toggleOption"></image> -->
			</uniNav>
			<view class="navbar">
				<view 
					v-for="(item, index) in navList" :key="index" 
					class="nav-item" 
					:class="{current: tabCurrentIndex === index}"
					@click="tabClick(index)"
				>
					{{item.text}}
				</view>
			</view>
		
		<view class="menuFrameBG" v-if="showOption" @click="toggleOption">
			<view class="menuFrame">
				<view class="menuList">
					<view class="menuTitle">订单来源</view>
					<view class="menuOptinList">
						<view class="menuOption hl"  @click.stop="toggleOption">全部</view>
						<view class="menuOption" @click.stop="toggleOption">淘宝</view>
						<view class="menuOption" @click.stop="toggleOption">京东</view>
						<view class="menuOption" @click.stop="toggleOption">拼多多</view>
						<view class="menuOption" @click.stop="toggleOption">苏宁</view>
						<view class="menuOption" @click.stop="toggleOption">天猫</view>
					</view>
				</view>
				<view class="menuList">
					<view class="menuTitle">收益来源</view>
					<view class="menuOptinList">
						<view class="menuOption hl" @click.stop="toggleOption">全部</view>
						<view class="menuOption" @click.stop="toggleOption">自购</view>
						<view class="menuOption" @click.stop="toggleOption">粉丝</view>
						<view class="menuOption" @click.stop="toggleOption">分享</view>
					</view>
				</view>
				<view class="menuButtom">
					<view class="menuButton" @click.stop="toggleOption">重置</view>
					<view class="menuButton submit" @click.stop="toggleOption">确认</view>
				</view>
			</view>
		</view>
		<swiper :current="tabCurrentIndex" class="swiper-box" duration="300" @change="changeTab">
			<swiper-item class="tab-content" v-for="(tabItem,tabIndex) in navList" :key="tabIndex">
				<scroll-view 
					class="list-scroll-content" 
					scroll-y
					@scrolltolower="loadData"
				>
					<view class="noticeFrame">
						<image src="/static/orderNotice.png"></image>
						<view class="text">温馨小提示：订单付款成功后1~10分钟才会同步显示哦~</view>
					</view>
					<!-- 空白页 -->
					<empty v-if="tabItem.loaded === true && tabItem.orderList.length === 0"></empty>
					
					<!-- 订单列表 -->
					<!-- <view class="orderItem">
						<view class="orderTop">
							<view class="mall">聚划算</view>
							<view class="time">下单时间：2019.10.17 15:50:31</view>
						</view>
						<view class="orderBottom">
							<image src="/static/orderProductPic.png"></image>
							<view class="orderInfo">
								<view class="orderTitle">四合院北极保暖四件套原生实惠装...</view>
								<view class="orderMoney">付款￥260</view>
								<view class="orderInfoBottom">
									<view class="rebate">返还28蜜糖</view>
									<view class="state">2020-1-11到账</view>
								</view>
							</view>
						</view>
					</view>
					 <view class="orderItem">
					 	<view class="orderTop">
					 		<view class="mall">淘宝</view>
					 		<view class="time">下单时间：2019.10.17 15:50:31</view>
					 	</view>
					 	<view class="orderBottom">
					 		<image src="/static/orderProductPic.png"></image>
					 		<view class="orderInfo">
					 			<view class="orderTitle">四合院北极保暖四件套原生实惠装...</view>
					 			<view class="orderMoney">付款￥260</view>
					 			<view class="orderInfoBottom">
					 				<view class="rebate">返还28蜜糖</view>
					 				<view class="state">2020-1-11到账</view>
					 			</view>
					 		</view>
					 	</view>
					 </view>
					 <view class="orderItem disable">
					 	<view class="orderTop">
					 		<view class="mall">京东</view>
					 		<view class="time">下单时间：2019.10.17 15:50:31</view>
					 	</view>
					 	<view class="orderBottom">
					 		<image src="/static/orderProductPic.png"></image>
					 		<view class="orderInfo">
					 			<view class="orderTitle">四合院北极保暖四件套原生实惠装...</view>
					 			<view class="orderMoney">付款￥260</view>
					 			<view class="orderInfoBottom">
					 				<view class="rebate">返还28蜜糖</view>
					 				<view class="state">已失效</view>
					 			</view>
					 		</view>
					 	</view>
					 </view>
					 <view class="orderItem">
					 	<view class="orderTop">
					 		<view class="mall">京东</view>
					 		<view class="time">下单时间：2019.10.17 15:50:31</view>
					 	</view>
					 	<view class="orderBottom">
					 		<image src="/static/orderProductPic.png"></image>
					 		<view class="orderInfo">
					 			<view class="orderTitle">四合院北极保暖四件套原生实惠装...</view>
					 			<view class="orderMoney">付款￥260</view>
					 			<view class="orderInfoBottom">
					 				<view class="rebate">预估赚28蜜糖</view>
					 				<view class="state">待结算</view>
					 			</view>
					 		</view>
					 	</view>
					 </view> -->
					<uni-load-more :status="tabItem.loadingType"></uni-load-more>
					
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template> 

<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import empty from "@/components/empty";
	import uniNav from '@/components/uni-nav-bar/uni-nav-bar.vue';
	import Json from '@/Json';
	export default {
		components: {
			uniLoadMore,
			empty,
			uniNav
		},
		data() {
			return {
				type:0,
				tabCurrentIndex: 0,
				showOption:false,
				navList: [{
						state: 0,
						text: '全部',
						loadingType: 'more',
						orderList: []
					},
					{
						state: 1,
						text: '待结算',
						loadingType: 'more',
						orderList: []
					},
					{
						state: 2,
						text: '已结算',
						loadingType: 'more',
						orderList: []
					},
					{
						state: 3,
						text: '已失效',
						loadingType: 'more',
						orderList: []
					}
				],
			};
		},
		
		onLoad(options){
			/**
			 * 修复app端点击除全部订单外的按钮进入时不加载数据的问题
			 * 替换onLoad下代码即可
			 */
			this.tabCurrentIndex = +options.state;
			// #ifndef MP
			this.loadData()
			// #endif
			// #ifdef MP
			if(options.state == 0){
				this.loadData()
			}
			// #endif
			
		},
		 
		methods: {
			toggleOption(){
				this.showOption = !this.showOption
			},
			//获取订单列表
			loadData(source){
				//这里是将订单挂载到tab列表下
				let index = this.tabCurrentIndex;
				let navItem = this.navList[index];
				let state = navItem.state;
				
				if(source === 'tabChange' && navItem.loaded === true){
					//tab切换只有第一次需要加载数据
					return;
				}
				if(navItem.loadingType === 'loading'){
					//防止重复加载
					return;
				}
				
				navItem.loadingType = 'loading';
				
				setTimeout(()=>{
					let orderList = Json.orderList.filter(item=>{
						//添加不同状态下订单的表现形式
						item = Object.assign(item, this.orderStateExp(item.state));
						//演示数据所以自己进行状态筛选
						if(state === 0){
							//0为全部订单
							return item;
						}
						return item.state === state
					});
					orderList.forEach(item=>{
						navItem.orderList.push(item);
					})
					//loaded新字段用于表示数据加载完毕，如果为空可以显示空白页
					this.$set(navItem, 'loaded', true);
					
					//判断是否还有数据， 有改为 more， 没有改为noMore 
					navItem.loadingType = 'more';
				}, 600);	
			}, 

			//swiper 切换
			changeTab(e){
				this.tabCurrentIndex = e.target.current;
				this.loadData('tabChange');
			},
			//顶部tab点击
			tabClick(index){
				this.tabCurrentIndex = index;
			},
			//删除订单
			deleteOrder(index){
				uni.showLoading({
					title: '请稍后'
				})
				setTimeout(()=>{
					this.navList[this.tabCurrentIndex].orderList.splice(index, 1);
					uni.hideLoading();
				}, 600)
			},
			//取消订单
			cancelOrder(item){
				uni.showLoading({
					title: '请稍后'
				})
				setTimeout(()=>{
					let {stateTip, stateTipColor} = this.orderStateExp(9);
					item = Object.assign(item, {
						state: 9,
						stateTip, 
						stateTipColor
					})
					
					//取消订单后删除待付款中该项
					let list = this.navList[1].orderList;
					let index = list.findIndex(val=>val.id === item.id);
					index !== -1 && list.splice(index, 1);
					
					uni.hideLoading();
				}, 600)
			},

			//订单状态文字和颜色
			orderStateExp(state){
				let stateTip = '',
					stateTipColor = '#fa436a';
				switch(+state){
					case 1:
						stateTip = '待付款'; break;
					case 2:
						stateTip = '待发货'; break;
					case 9:
						stateTip = '订单已关闭'; 
						stateTipColor = '#909399';
						break;
						
					//更多自定义
				}
				return {stateTip, stateTipColor};
			}
		},
	}
</script>

<style lang="scss">
	.content{
		width:750rpx;
	}
	.uniNav{
		image{
			width:39rpx;
			height:39rpx;
		}
		.navTabBar{
			width:336rpx;
			height:53rpx;
			background:rgba(248,248,248,1);
			border-radius:26rpx;
			margin: auto;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.navTab{
				width:100%;
				height:53rpx;
				background:rgba(250,197,35,0);
				border-radius:26rpx;
				font-size:26rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:#222222;
				text-align: center;
				line-height: 53rpx;
			}
			.navTab.hl{
				background:rgba(250,197,35,1);
			}
		}
	}
	.zhanwei{
		width: 100%;
		height:var(--status-bar-height);
		background-color: #fff;
	}
	page, .content{
		background: $page-color-base;
		height: 100%;
	}
	
	.swiper-box{
		height: calc(100% - var(--status-bar-height) - 44px - 90rpx);
	}
	.list-scroll-content{
		height: 100%;
	}
	
	.navbar{
		height: 90rpx;
		width: 100%;
		background: #fff;
		// box-shadow: 0 1px 5px rgba(0,0,0,.06);
		position: relative;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		z-index: 10;
		.nav-item{
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size:26rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(34,34,34,1);
			position: relative;
			&.current{
				color: rgba(34,34,34,1);
				&:after{
					content: '';
					position: absolute;
					left: 50%;
					bottom: 0;
					transform: translateX(-50%);
					width: 50rpx;
					height: 0;
					border-bottom: 2px solid rgba(250,197,35,1);
				}
			}
		}
	}

	.uni-swiper-item{
		height: auto;
	}
	.noticeFrame{
		width:700rpx;
		height:73rpx;
		border-radius:31rpx;
		background-color: #fff;
		padding: 0 36rpx;
		display: flex;
		align-items: center;
		margin: auto;
		margin-top: 7rpx;
		image{
			width:26rpx;
			height:26rpx;
			flex-shrink: 0;
			margin-right: 19rpx;
		}
		.text{
			font-size:23rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(125,97,50,1);
		}
	}
	
	.orderItem{
		width:700rpx;
		height:244rpx;
		background-color: #fff;
		margin: auto;
		margin-top: 7rpx;
		border-radius:25rpx;
		display: flex;
		flex-direction: column;
		.orderTop{
			width:700rpx;
			height: 58rpx;
			border-bottom: 1px solid rgba(241,242,246,1);
			padding: 0 38rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-shrink: 0;
			.mall{
				font-size:23rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(0,0,0,1);
			}
			.time{
				font-size:23rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(102,102,102,1);
			}
		}
		.orderBottom{
			padding: 0 38rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-grow: 1;
			image{
				width:150rpx;
				height:150rpx;
				flex-shrink: 0;
				margin-right: 52rpx;
			}
			.orderInfo{
				height:150rpx;
				.orderTitle{
					font-size:26rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(102,102,102,1);
					padding-top: 17rpx;
				}
				.orderMoney{
					font-size:23rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(153,153,153,1);
					margin-top: 41rpx;
				}
				.orderInfoBottom{
					margin-top: 17rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.rebate{
						font-size:23rpx;
						font-family:PingFang SC;
						font-weight:500;
						color:rgba(102,102,102,1);
					}
					.state{
						font-size:23rpx;
						font-family:PingFang SC;
						font-weight:500;
						color:rgba(186,144,70,1);
					}
				}
			}
		}
	}
	
	.orderItem.disable .rebate,.orderItem.disable .state{
		color:#D0D0D0 !important;
	}
	/* load-more */
	.uni-load-more {
		display: flex;
		flex-direction: row;
		height: 80upx;
		align-items: center;
		justify-content: center
	}
	
	.uni-load-more__text {
		font-size: 28upx;
		color: #999
	}
	
	.uni-load-more__img {
		height: 24px;
		width: 24px;
		margin-right: 10px
	}
	
	.uni-load-more__img>view {
		position: absolute
	}
	
	.uni-load-more__img>view view {
		width: 6px;
		height: 2px;
		border-top-left-radius: 1px;
		border-bottom-left-radius: 1px;
		background: #999;
		position: absolute;
		opacity: .2;
		transform-origin: 50%;
		animation: load 1.56s ease infinite
	}
	
	.uni-load-more__img>view view:nth-child(1) {
		transform: rotate(90deg);
		top: 2px;
		left: 9px
	}
	
	.uni-load-more__img>view view:nth-child(2) {
		transform: rotate(180deg);
		top: 11px;
		right: 0
	}
	
	.uni-load-more__img>view view:nth-child(3) {
		transform: rotate(270deg);
		bottom: 2px;
		left: 9px
	}
	
	.uni-load-more__img>view view:nth-child(4) {
		top: 11px;
		left: 0
	}
	
	.load1,
	.load2,
	.load3 {
		height: 24px;
		width: 24px
	}
	
	.load2 {
		transform: rotate(30deg)
	}
	
	.load3 {
		transform: rotate(60deg)
	}
	
	.load1 view:nth-child(1) {
		animation-delay: 0s
	}
	
	.load2 view:nth-child(1) {
		animation-delay: .13s
	}
	
	.load3 view:nth-child(1) {
		animation-delay: .26s
	}
	
	.load1 view:nth-child(2) {
		animation-delay: .39s
	}
	
	.load2 view:nth-child(2) {
		animation-delay: .52s
	}
	
	.load3 view:nth-child(2) {
		animation-delay: .65s
	}
	
	.load1 view:nth-child(3) {
		animation-delay: .78s
	}
	
	.load2 view:nth-child(3) {
		animation-delay: .91s
	}
	
	.load3 view:nth-child(3) {
		animation-delay: 1.04s
	}
	
	.load1 view:nth-child(4) {
		animation-delay: 1.17s
	}
	
	.load2 view:nth-child(4) {
		animation-delay: 1.3s
	}
	
	.load3 view:nth-child(4) {
		animation-delay: 1.43s
	}
	.menuFrameBG{
		position: fixed;
		top:calc(var(--status-bar-height) + 44px);
		left: 0;
		width:750rpx;
		height: calc(100% - var(--status-bar-height) + 44px);
		z-index: 99;
		background-color: rgba(0,0,0,0.4);
		.menuFrame{
			width: 750rpx;
			background-color: #fff;
			padding: 0 31rpx;
			.menuList{
				padding-top: 45rpx;
				width: 100%;
				.menuTitle{
					font-size:29rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(34,34,34,1);
					margin-bottom: 44rpx;
				}
				.menuOptinList{
					display: flex;
					width: 100%;
					justify-content: space-between;
					align-items: center;
					flex-wrap: wrap;
					padding: 0 20rpx;
					.menuOption{
						width:194rpx;
						height:64rpx;
						border-radius:32rpx;
						background:rgba(241,241,241,1);
						line-height: 64rpx;
						text-align: center;
						font-size:26rpx;
						font-family:PingFang SC;
						font-weight:500;
						color:rgba(34,34,34,1);
						margin-bottom: 16rpx;
					}
					.menuOption.hl{
						background:rgba(251,239,201,1);
						color:rgba(252,190,0,1);
					}
				}
			}
			.menuButtom{
				width: 100%;
				display: flex;
				align-items: center;
				margin-top: 53rpx;
				.menuButton{
					height: 99rpx;
					width: 50%;
					border-top:1px solid rgba(241,241,241,1);
					border-right: 1px solid rgba(241,241,241,1);
					font-size:29rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(102,102,102,1);
					line-height: 98rpx;
					text-align: center;
				}
				.menuButton.submit{
					border-right:0;
					color:rgba(252,190,0,1);
				}
			}
		}
	}
	@-webkit-keyframes load {
		0% {
			opacity: 1
		}
	
		100% {
			opacity: .2
		}
	}
</style>
