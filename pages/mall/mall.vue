<template>
	<pageCP>
	<view class="container">
		<image src="/static/mallBG.png" class="bg"></image>
		<view class="bigTitle">蜂巢优选</view>
		<scroll-view class="scrollMall" scroll-y="true">
			<view class="scrollFrame">
				<view class="topFrame">
					<view class="left">
						<image class="avatar" src="/static/missing-face.png"></image>
						<view class="info">
							<view class="name">普通用户小明</view>
							<view class="typeFrame">
								<image class="typeIcon" src="/static/d1.png"></image>
								<view class="typeName">普通会员</view>
							</view>
						</view>
					</view>
					<view class="right">
						<view class="canUseTitle">可用蜜糖</view>
						<view class="canUseFrame">
							<image class="mt" src="/static/productIcon02.png"></image>
							<view class="canUse">123,123.<text>456</text></view>
						</view>
					</view>
				</view>
				<swiper class="carousel" circular :autoplay="true" :interval="4000">
					<swiper-item>
						<image src="/static/mallBanner.png"/>
					</swiper-item>
				</swiper>
				<view class="promoFrame">
					<view class="promoSubFrame promoLeft">
						<view class="title">新人专享</view>
						<view class="dsc">蜜粉邀请必备</view>
						<view class="red">拉新活动</view>
						<image class="promo" src="/static/mallPromo0.png"></image>
					</view>
					<view class="promoRight">
						<view class="promoSubFrame promoTop">
							<view class="title">蜜蜂优选</view>
							<view class="dsc">源头精选 员工福利</view>
							<image class="promo" src="/static/mallPromo1.png"></image>
						</view>
						<view class="promoSubFrame promoBottom">
							<view class="title">红包0元购</view>
							<view class="dsc">高效助理拉新</view>
							<image class="promo" src="/static/mallPromo2.png"></image>
						</view>
					</view>
				</view>
				<view class="titleFrame">
					<image class="titlePoint img" src="/static/mallTitle0.png"></image>
					<view class="titleName">会员特惠礼包专区</view>
					<image class="titlePoint img" src="/static/mallTitle1.png"></image>
				</view>
				<view class="goodList">
					<view class="good" @click="goodClick(v.id)" v-for="(v,i) in salescout" v-if="salescout.length" :key="v.id">
						<image class="goodImg" :src="v.head_url"></image>
						<view class="goodTitle">{{v.title}}</view>
						<view class="goodBottom">
							<view class="price"><text>￥</text>{{v.zk_final_price}}</view>
							<view class="vipFrame">
								<image class="vipIcon" src="/static/d0.png"></image>
								<view class="vipDay">送365天VIP权益</view>
							</view>
						</view>
					</view>
				</view>
				<view class="titleFrame">
					<view class="titlePoint"></view>
					<view class="titleName">新品上架</view>
					<view class="titlePoint"></view>
				</view>
				<view class="goodList">
					<view class="good" :class="i%2?'odd':''" @click="goodClick(v.id)" v-for="(v,i) in new_product" v-if="new_product.length" :key="v.id">
						<image class="goodImg" :src="v.head_url"></image>
						<view class="goodTitle">{{v.title}}</view>
						<view class="goodBottom">
							<view class="price"><text>￥</text>{{v.zk_final_price}}</view>
							<view class="vipFrame">
								<image class="vipIcon" src="/static/d0.png"></image>
								<view class="vipDay">送365天VIP权益</view>
							</view>
						</view>
					</view>
				</view>
				<view class="titleFrame">
					<view class="titlePoint"></view>
					<view class="titleName">正在热卖</view>
					<view class="titlePoint"></view>
				</view>
				<view class="goodList">
					<view class="good" :class="i%2?'odd':''" @click="goodClick(v.id)" v-for="(v,i) in hot_buy" v-if="hot_buy.length" :key="v.id">
						<image class="goodImg" :src="v.head_url"></image>
						<view class="goodTitle">{{v.title}}</view>
						<view class="goodBottom">
							<view class="price"><text>￥</text>{{v.zk_final_price}}</view>
							<view class="vipFrame">
								<image class="vipIcon" src="/static/d0.png"></image>
								<view class="vipDay">送365天VIP权益</view>
							</view>
						</view>
					</view>
				</view>
				<view class="titleFrame">
					<view class="titlePoint"></view>
					<view class="titleName">即将下架</view>
					<view class="titlePoint"></view>
				</view>
				<view class="goodList">
					<view class="good" :class="i%2?'odd':''" @click="goodClick(v.id)" v-for="(v,i) in lower_shelf" v-if="lower_shelf.length" :key="v.id">
						<image class="goodImg" :src="v.head_url"></image>
						<view class="goodTitle">{{v.title}}</view>
						<view class="goodBottom">
							<view class="price"><text>￥</text>{{v.zk_final_price}}</view>
							<view class="vipFrame">
								<image class="vipIcon" src="/static/d0.png"></image>
								<view class="vipDay">送365天VIP权益</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
	</pageCP>
</template>

<script>
	import allpage from '@/mixin/allPage'
	import {postFetch} from '@/util/request_UT.js';
	export default {
		mixins:[allpage],
		components:{
			
		},
		data() {
			return {
				salescout:[],
				new_product:[],
				hot_buy:[],
				lower_shelf:[]
			};
		},
		onShow(){

		},
		onLoad() {
			let _this = this;
			postFetch('index.php/index/indexgoods/indexgoods',{},false,function(res){
				console.log("indexgoods",res)
				_this.$set(_this,'salescout',res.data.salescout)
				_this.$set(_this,'new_product',res.data.new_product)
				_this.$set(_this,'hot_buy',res.data.hot_buy)
				_this.$set(_this,'lower_shelf',res.data.lower_shelf)
			})
		},
		methods: {
			goodClick(id){
				uni.navigateTo({
					url:'/pages/product/productMall?id='+id
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		width:750rpx;
		position: fixed;
		top:0;
		left: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		background-color: #ececec;
		overflow: hidden;
		.bg{
			width:750rpx;
			height: 433rpx;
			position: absolute;
			top:0;
			left: 0;
		}
		.bigTitle{
			font-size:35rpx;
			font-family:PingFang SC;
			color:rgba(255,255,255,1);
			margin-top: 96rpx;
			flex-shrink: 0;
			position: relative;
			z-index: 3;
		}
		.scrollMall{
			width: 750rpx;
			position: relative;
			z-index: 3;
			position: absolute;
			top:150rpx;
			left: 0;
			bottom:0;
			padding: 0 23rpx 0 27rpx;
			.topFrame{
				width:100%;
				height: 132rpx;
				background:rgba(255,255,255,1);
				box-shadow:0px 1px 14px 0px rgba(182,182,182,0.3);
				border-radius:7px;
				padding: 0 46rpx 0 35rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.left{
					display: flex;
					align-items: center;
					.avatar{
						width:99rpx;
						height:99rpx;
					}
					.info{
						margin-left: 13rpx;
						.name{
							font-size:25rpx;
							font-family:PingFang SC;
							font-weight:bold;
							color:rgba(51,51,51,1);
						}
						.typeFrame{
							display: flex;
							align-items: center;
							background:linear-gradient(50deg,rgba(255,223,169,1),rgba(252,241,211,1));
							border-radius:16rpx;
							padding: 8rpx 17rpx;
							margin-top: 9rpx;
							.typeIcon{
								width: 20rpx;
								height: 17rpx;
							}
							.typeName{
								font-size:19rpx;
								font-family:PingFang SC;
								font-weight:500;
								color:rgba(0,0,0,1);
								margin-left: 6rpx;
							}
						}
					}
				}
				.right{
					.canUseTitle{
						font-size:25rpx;
						font-family:PingFang SC;
						font-weight:500;
						color:rgba(51,51,51,1);
						opacity:0.5;
					}
					.canUseFrame{
						display: flex;
						margin-top: 13rpx;
						.mt{
							width:24rpx;
							height:24rpx;
						}
						.canUse{
							margin-left: 8rpx;
							font-size:33rpx;
							font-family:Source Han Sans CN;
							font-weight:800;
							color:rgba(51,51,51,1);
							text{
								font-size:25rpx;
								font-family:Source Han Sans CN;
								font-weight:800;
								color:rgba(51,51,51,1);
							}
						}
					}
				}
			}
			.carousel{
				width:100%;
				height: 351rpx;
				margin-top: 15rpx;
				image{
					width:100%;
					height: 351rpx;
					box-shadow: 3rpx 3rpx 3rpx rgba(0,0,0,0.3);
					border-radius: 10rpx;
				}
			}
			.promoFrame{
				width:100%;
				height: 365rpx;
				background:rgba(255,255,255,1);
				box-shadow:0rpx 1rpx 14rpx 0rpx rgba(182,182,182,0.3);
				border-radius:7rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-top: 28rpx;
				.promoRight{
					width: 50%;
					height: 100%;
				}
				.promoSubFrame{
					padding: 31rpx 19rpx 18rpx 33rpx;
					flex-shrink: 0;
					position: relative;
					.title{
						font-size:28rpx;
						font-family:PingFang SC;
						font-weight:800;
						color:rgba(51,51,51,1);
					}
					.dsc{
						font-size:19rpx;
						font-family:PingFang SC;
						font-weight:500;
						color:rgba(161,161,161,1);
						margin-top: 13rpx;
					}
					.red{
						width:108rpx;
						height:34rpx;
						border-radius: 34rpx;
						background-color: red;
						color: #fff;
						font-size: 26rpx;
						line-height: 34rpx;
						text-align: center;
					}
					&.promoLeft{
						width: 50%;
						height: 100%;
						image{
							position: absolute;
							bottom:18rpx;
							right:19rpx;
							width:195rpx;
							height:195rpx;
						}
					}
					&.promoTop{
						width:100%;
						height: 50%;
						border-left: 1px solid rgba(153,153,153,1);
						border-bottom: 1px solid rgba(153,153,153,1);
						image{
							position: absolute;
							top:33rpx;
							right:19rpx;
							width:158rpx;
							height:158rpx;
						}
					}
					&.promoBottom{
						width:100%;
						height: 50%;
						border-left: 1px solid rgba(153,153,153,1);
						image{
							position: absolute;
							bottom:18rpx;
							right:24rpx;
							width:115rpx;
							height:115rpx;
						}
					}
				}
			}
			.titleFrame{
				display: flex;
				justify-content: center;
				align-items: center;
				margin: auto;
				margin-top: 54rpx;
				.titlePoint{
					width:11rpx;
					height:11rpx;
					border:1px solid rgba(51,51,51,1);
					border-radius:50%;
					&.img{
						width:12rpx;
						height: 10rpx;
						border: 0;
						border-radius:0;
					}
				}
				.titleName{
					font-size:35rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(51,51,51,1);
					margin: 0 22rpx;
				}
			}
			.goodList{
				width:100%;
				background-color: #fff;
				border-radius:21rpx;
				margin-top: 44rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				flex-wrap: wrap;
				.good{
					width:50%;
					height: 497rpx;
					border-bottom: 1px solid rgba(245,245,245,1);
					padding: 27rpx 15rpx 15rpx 18rpx;
					&.odd{
						border-left: 1px solid rgba(245,245,245,1);
					}
					.goodImg{
						width: 100%;
						height: 317rpx;
					}
					.goodTitle{
						width:100%;
						height: 56rpx;
						font-size:24rpx;
						font-family:PingFang SC;
						font-weight:400;
						color:rgba(51,51,51,1);
						line-height:33rpx;
						margin-top: 22rpx;
					}
					.goodBottom{
						margin-top: 14rpx;
						width: 100%;
						display: flex;
						align-items: center;
						justify-content: space-between;
						.price{
							font-size:33rpx;
							font-family:PingFang SC;
							font-weight:400;
							color:rgba(255,165,33,1);
							text{
								font-size:24rpx;
								font-family:PingFang SC;
								font-weight:400;
								color:rgba(255,165,33,1);
							}
						}
						.vipFrame{
							background:rgba(255,165,33,1);
							border-radius:24rpx;
							padding: 13rpx 19rpx;
							display: flex;
							align-items: center;
							.vipIcon{
								width:25rpx;
								height: 22rpx;
							}
							.vipDay{
								font-size:21rpx;
								font-family:PingFang SC;
								font-weight:500;
								color:rgba(255,255,255,1);
								margin-left: 3rpx;
							}
						}
					}
				}
			}
		}
	}
</style>
