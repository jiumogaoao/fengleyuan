<template>
	<view class="container">
		<!-- 空白页 -->
		<view v-if="!hasLogin || empty===true" class="empty">
			<image src="/static/emptyCart.jpg" mode="aspectFit"></image>
			<view v-if="hasLogin" class="empty-tips">
				空空如也
				<navigator class="navigator" v-if="hasLogin" url="../index/index" open-type="switchTab">随便逛逛></navigator>
			</view>
			<view v-else class="empty-tips">
				空空如也
				<view class="navigator" @click="navToLogin">去登陆></view>
			</view>
		</view>
		<view v-else>
			<!-- 列表 -->
			<view class="shopList">
				<view class="shopListTop">
					<radio class="shopRadio"/>
					<image src="/static/shoppingCartShopIcon.png" class="shopIcon"></image>
					<view class="shopTitle">蜜蜂天堂专营店</view>
					<image src="/static/right.png" class="shopRightDeg"></image>
				</view>
				<view class="goodList">
					<radio class="goodRadio"/>
					<image src="/static/found2.png" class="goodIcon"></image>
					<view class="goodInfo">
						<view class="goodTitle">儿童大块积木桶装1-2-3-6周岁益智早教婴儿宝宝男女孩木头玩具</view>
						<view class="infoCenter">
							<view class="sku">全部套装【68块】</view>
							<view class="income"><text>预估收益</text><image src="/static/productIcon02.png" class="mt"></image><text>15.51</text></view>
						</view>
						<view class="infoBottom">
							<view class="infoBottomLeft">
								<view class="price">￥123</view>
								<view class="oldPrice">￥123</view>
							</view>
							<view class="countFrame">
								<view class="countButton">+</view>
								<input/>
								<view class="countButton">-</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 底部菜单栏 -->
			<view class="action-section">
				<view class="actionLeft">
					<radio></radio>
					<view class="actionLabel">全选</view>
				</view>
				<view class="actionRight">
					<view class="actionCenter">
						<view class="total">合计：<text class="red">$320.00</text></view>
						<view class="dec"><text>预估收益</text><image src="/static/productIcon02.png" class="mt"></image><text>3.89</text></view>
					</view>
					<view class="go" @click="createOrder">结算（0）</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import allpage from '@/mixin/allPage'
	import {
		mapState
	} from 'vuex';
	import uniNumberBox from '@/components/uni-number-box.vue'
	export default {
		mixins:[allpage],
		components: {
			uniNumberBox
		},
		data() {
			return {
				total: 0, //总价格
				allChecked: false, //全选状态  true|false
				empty: false, //空白页现实  true|false
				cartList: [],
				hasLogin:true
			};
		},
		onLoad(){
			this.loadData();
		},
		watch:{
			//显示空白页
			cartList(e){
				let empty = e.length === 0 ? true: false;
				if(this.empty !== empty){
					this.empty = empty;
				}
			}
		},
		computed:{
		
		},
		methods: {
			//请求数据
			async loadData(){
				let list = await this.$api.json('cartList'); 
				let cartList = list.map(item=>{
					item.checked = true;
					return item;
				});
				this.cartList = cartList;
				this.calcTotal();  //计算总价
			},
			//监听image加载完成
			onImageLoad(key, index) {
				this.$set(this[key][index], 'loaded', 'loaded');
			},
			//监听image加载失败
			onImageError(key, index) {
				this[key][index].image = '/static/errorImage.jpg';
			},
			navToLogin(){
				uni.navigateTo({
					url: '/pages/public/login'
				})
			},
			 //选中状态处理
			check(type, index){
				if(type === 'item'){
					this.cartList[index].checked = !this.cartList[index].checked;
				}else{
					const checked = !this.allChecked
					const list = this.cartList;
					list.forEach(item=>{
						item.checked = checked;
					})
					this.allChecked = checked;
				}
				this.calcTotal(type);
			},
			//数量
			numberChange(data){
				this.cartList[data.index].number = data.number;
				this.calcTotal();
			},
			//删除
			deleteCartItem(index){
				let list = this.cartList;
				let row = list[index];
				let id = row.id;

				this.cartList.splice(index, 1);
				this.calcTotal();
				uni.hideLoading();
			},
			//清空
			clearCart(){
				uni.showModal({
					content: '清空购物车？',
					success: (e)=>{
						if(e.confirm){
							this.cartList = [];
						}
					}
				})
			},
			//计算总价
			calcTotal(){
				let list = this.cartList;
				if(list.length === 0){
					this.empty = true;
					return;
				}
				let total = 0;
				let checked = true;
				list.forEach(item=>{
					if(item.checked === true){
						total += item.price * item.number;
					}else if(checked === true){
						checked = false;
					}
				})
				this.allChecked = checked;
				this.total = Number(total.toFixed(2));
			},
			//创建订单
			createOrder(){
				let list = this.cartList;
				let goodsData = [];
				list.forEach(item=>{
					if(item.checked){
						goodsData.push({
							attr_val: item.attr_val,
							number: item.number
						})
					}
				})

				uni.navigateTo({
					url: `/pages/order/createOrder?data=${JSON.stringify({
						goodsData: goodsData
					})}`
				})
				this.$api.msg('跳转下一页 sendData');
			}
		}
	}
</script>

<style lang='scss'>
	page{
		background-color: #f2f2f2;
	}
	.container{
		padding-bottom: 134upx;
		/* 空白页 */
		.empty{
			position:fixed;
			left: 0;
			top:0;
			width: 100%;
			height: 100vh;
			padding-bottom:100upx;
			display:flex;
			justify-content: center;
			flex-direction: column;
			align-items:center;
			background: #fff;
			image{
				width: 240upx;
				height: 160upx;
				margin-bottom:30upx;
			}
			.empty-tips{
				display:flex;
				font-size: $font-sm+2upx;
				color: $font-color-disabled;
				.navigator{
					color: $uni-color-primary;
					margin-left: 16upx;
				}
			}
		}
	}
	/* 购物车列表项 */
	
	/* 底部栏 */
	
	/* 复选框选中状态 */
	.action-section .checkbox.checked,
	.cart-item .checkbox.checked{
		color: $uni-color-primary;
	}

	.shopList{
		width:100%;
		background-color: #fff;
		margin-top: 21upx;
		.shopListTop{
			display: flex;
			align-items: center;
			padding: 31rpx 31upx 31upx 33upx;
			.shopIcon{
				width: 29upx;
				height: 29upx;
				margin-left: 22upx;
				margin-right: 10upx;
			}
			.shopTitle{
				font-size:26upx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(51,51,51,1);
				margin-right: 22upx;
			}
			.shopRightDeg{
				width:14upx;
				height:24upx;
			}
		}
		.goodList{
			width:100%;
			height:238upx;
			display:flex;
			align-items:center;
			padding: 26upx 31upx 22upx 33upx;
			border-bottom:1px solid rgba(248,248,248,1);
			.goodIcon{
				width:154upx;
				height:154upx;
				margin-left: 20upx;
				margin-right: 20upx;
				flex-shrink: 0;
			}
			.goodInfo{
				flex-grow: 1;
				.goodTitle{
					font-size:25upx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(0,0,0,1);
					height: 55rpx;
					overflow: hidden;
				}
				.infoCenter{
					margin-top: 25upx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.sku{
						padding:10upx 12upx;
						background:rgba(249,249,249,1);
						border-radius:3upx;
						font-size:24upx;
						font-family:PingFang SC;
						font-weight:500;
						color:rgba(153,153,153,1);
					}
					.income{
						font-size:24upx;
						font-family:PingFang SC;
						font-weight:500;
						color:rgba(255,198,0,1);
						.mt{
							width:22upx;
							height: 22upx;
							margin: 0 4upx;
						}
					}
				}
				.infoBottom{
					margin-top: 16upx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.infoBottomLeft{
						display: flex;
						align-items: center;
						.price{
							font-size:26upx;
							font-family:PingFang SC;
							font-weight:bold;
							color:rgba(254,69,69,1);
						}
						.oldPrice{
							font-size:21upx;
							font-family:PingFang SC;
							font-weight:500;
							text-decoration:line-through;
							color:rgba(167,166,166,1);
							margin-left: 15upx;
						}
					}
					.countFrame{
						display: flex;
						align-items: center;
						width:130upx;
						height:33upx;
						border: 1px solid #BBBBBB;
						border-radius:3upx;
						overflow: hidden;
						.countButton{
							width: 42upx;
							height: 100%;
							text-align: center;
							line-height: 26upx;
							font-size:24upx;
							font-family:PingFang SC;
							font-weight:500;
							color:rgba(102,102,102,1);
							flex-shrink: 0;
						}
						input{
							flex-grow: 1;
							height: 26upx;
							line-height: 26upx;
							border-left: 1px solid #BBBBBB;
							border-right: 1px solid #BBBBBB;
							font-size:24upx;
							font-family:PingFang SC;
							font-weight:500;
							color:rgba(102,102,102,1);
							text-align: center;
						}
					}
				}
			}
		}
	}
	.action-section{
		width:750upx;
		position:fixed;
		left:0;
		bottom:0;
		justify-content:space-between;
		height:90upx;
		padding-left:54upx;
		display: flex;
		background-color: #fff;
		.actionLeft{
			display: flex;
			align-items: center;
			flex-shrink: 0;
			.actionLabel{
				font-size:24upx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(102,102,102,1);
				margin-left: 20upx;
			}
		}
		.actionRight{
			flex-grow: 1;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			.actionCenter{
				margin-right: 79upx;
				.total{
					font-size:25upx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(102,102,102,1);
					.red{
						color:#FE4646;
					}
				}
				.dec{
					font-size:24upx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(255,198,0,1);
					margin-top: 10upx;
					.mt{
						width:22upx;
						height:22upx;
						margin: 0 4upx;
					}
				}
			}
			.go{
				width:217upx;
				height:90upx;
				background:rgba(250,28,0,1);
				font-size:28upx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(255,255,255,1);
				line-height: 90upx;
				text-align: center;
			}
		}
	}
</style>
