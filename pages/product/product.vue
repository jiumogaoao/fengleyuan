<template>
	<view class="container">
		<view class="carousel">
			<swiper indicator-dots circular=true duration="400">
				<swiper-item class="swiper-item">
					<view class="image-wrapper">
						<image
							:src="header_img" 
							class="loaded" 
							mode="aspectFill"
						></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="headFoot">
			<view class="text">现在升级VIP，最高可<text>赚{{vip}}元</text></view>
			<view class="button">
				<image class="icon" src="/static/productIcon01.png"></image>
				<view class="label">立即升级</view>
			</view>
		</view>
		<view class="introduce-section">
			<text class="title"><image src="/static/productIcon03.png" class="titleIcon"></image> {{product_name}}</text>
			
		</view>
		<view class="priceFrame">
			<view class="price-box">
				<text class="priceLabel">券后价</text>
				<text class="price-tip">¥</text>
				<text class="price">{{post_coupon}}</text>
				<text class="m-price">¥{{commodity_price}}</text>
				<!-- <text class="coupon-tip">7折</text> -->
			</view>
			<view class="bot-row">
				<text>预估收益: {{estimate}}</text>
				<!-- <text>库存: 4690</text>
				<text>浏览量: 768</text> -->
			</view>
		</view>
		<!--  分享 -->
		<!-- <view class="share-section" @click="share">
			<view class="share-icon">
				<text class="yticon icon-xingxing"></text>
				 返
			</view>
			<text class="tit">该商品分享可领49减10红包</text>
			<text class="yticon icon-bangzhu1"></text>
			<view class="share-btn">
				立即分享
				<text class="yticon icon-you"></text>
			</view>
			
		</view> -->
		<view class="couponFrame">
			<image class="couponBG" src="/static/productIcon06.png"></image>
			<view class="left">
				<view class="price-tip">￥</view>
				<view class="price">{{coupon_face_value}}</view>
				<view class="name">优惠券</view>
			</view>
			<view class="button" @click="popOut(coupon_link)">立即领取</view>
		</view>
		<view class="shopFrame">
			<view class="left">
				<image class="shopIcon" src="/static/productIcon03.png"></image>
				<view class="shopTitle">{{shop_name}}</view>
			</view>
			<view class="right" @click="popOut(pro_url)">进入店铺</view>
		</view>
		<!-- <view class="c-list"> -->
			<!-- <view class="c-row b-b" @click="toggleSpec">
				<text class="tit">购买类型</text>
				<view class="con">
					<text class="selected-text" v-for="(sItem, sIndex) in specSelected" :key="sIndex">
						{{sItem.name}}
					</text>
				</view>
				<text class="yticon icon-you"></text>
			</view> -->
			<!-- <view class="c-row b-b" @click="popOut(coupon_link)">
				<text class="tit">优惠券</text>
				<text class="con t-r red">领取优惠券</text>
				<text class="yticon icon-you"></text>
			</view> -->
<!-- 			<view class="c-row b-b">
				<text class="tit">促销活动</text>
				<view class="con-list">
					<text>新人首单送20元无门槛代金券</text>
					<text>订单满50减10</text>
					<text>订单满100减30</text>
					<text>单笔购买满两件免邮费</text>
				</view>
			</view> -->
			<!-- <view class="c-row b-b">
				<text class="tit">服务</text>
				<view class="bz-list con">
					<text>7天无理由退换货 ·</text>
					<text>假一赔十 ·</text>
				</view>
			</view> -->
		<!-- </view> -->
		
		<!-- 评价 -->
		<!-- <view class="eva-section">
			<view class="e-header">
				<text class="tit">评价</text>
				<text>(86)</text>
				<text class="tip">好评率 100%</text>
				<text class="yticon icon-you"></text>
			</view> 
			<view class="eva-box">
				<image class="portrait" src="http://img3.imgtn.bdimg.com/it/u=1150341365,1327279810&fm=26&gp=0.jpg" mode="aspectFill"></image>
				<view class="right">
					<text class="name">Leo yo</text>
					<text class="con">商品收到了，79元两件，质量不错，试了一下有点瘦，但是加个外罩很漂亮，我很喜欢</text>
					<view class="bot">
						<text class="attr">购买类型：XL 红色</text>
						<text class="time">2019-04-01 19:21</text>
					</view>
				</view>
			</view>
		</view> -->
		
		<!-- <view class="detail-desc">
			<view class="d-header">
				<text>图文详情</text>
			</view>
			<rich-text :nodes="desc"></rich-text>
		</view> -->
		
		<!-- 底部操作菜单 -->
		<view class="page-bottom">
			<view class="bottomPoint">
				<image src="/static/productIcon05.png" class="buttomIcon"></image>
				<view class="bottomLabel">猜你喜欢</view>
			</view>
			<view class="bottomPoint">
				<image src="/static/productIcon04.png" class="buttomIcon"></image>
				<view class="bottomLabel">收藏</view>
			</view>
			<view class="bottomButtonFrame">
				<view class="left">
					<view class="title">分享</view>
					<view class="dsc">赚<image class="bottomButtonIcon" src="/static/productIcon02.png"></image>14.28</view>
				</view>
				<view class="right">
					<view class="title">购买</view>
					<view class="dsc">省<image class="bottomButtonIcon" src="/static/productIcon02.png"></image>64.81</view>
				</view>
			</view>
		</view>
		
		
		<!-- 规格-模态层弹窗 -->
		<view 
			class="popup spec" 
			:class="specClass"
			@touchmove.stop.prevent="stopPrevent"
			@click="toggleSpec"
		>
			<!-- 遮罩层 -->
			<view class="mask"></view>
			<view class="layer attr-content" @click.stop="stopPrevent">
				<view class="a-t">
					<image src="https://gd3.alicdn.com/imgextra/i3/0/O1CN01IiyFQI1UGShoFKt1O_!!0-item_pic.jpg_400x400.jpg"></image>
					<view class="right">
						<text class="price">¥328.00</text>
						<text class="stock">库存：188件</text>
						<view class="selected">
							已选：
							<text class="selected-text" v-for="(sItem, sIndex) in specSelected" :key="sIndex">
								{{sItem.name}}
							</text>
						</view>
					</view>
				</view>
				<view v-for="(item,index) in specList" :key="index" class="attr-list">
					<text>{{item.name}}</text>
					<view class="item-list">
						<text 
							v-for="(childItem, childIndex) in specChildList" 
							v-if="childItem.pid === item.id"
							:key="childIndex" class="tit"
							:class="{selected: childItem.selected}"
							@click="selectSpec(childIndex, childItem.pid)"
						>
							{{childItem.name}}
						</text>
					</view>
				</view>
				<button class="btn" @click="toggleSpec">完成</button>
			</view>
		</view>
		<!-- 分享 -->
		<share 
			ref="share" 
			:contentHeight="580"
			:shareList="shareList"
		></share>
	</view>
</template>

<script>
	import share from '@/components/share';
	import {postFetch} from '@/util/request_UT.js'
	export default{
		components: {
			share
		},
		data() {
			return {
				id:'',
				commodity_price: 0,
				coupon_face_value: 0,
				estimate:0,
				post_coupon:0,
				vip:0,
				coupon_link: "",
				header_img: "",
				pro_url: "",
				product_name: "",
				sales_volume: "",
				specClass: 'none',
				specSelected:[],
				shop_name:'',
				favorite: true,
				shareList: [],
				imgList: [
					{
						src: 'https://gd3.alicdn.com/imgextra/i3/0/O1CN01IiyFQI1UGShoFKt1O_!!0-item_pic.jpg_400x400.jpg'
					},
					{
						src: 'https://gd3.alicdn.com/imgextra/i3/TB1RPFPPFXXXXcNXpXXXXXXXXXX_!!0-item_pic.jpg_400x400.jpg'
					},
					{
						src: 'https://gd2.alicdn.com/imgextra/i2/38832490/O1CN01IYq7gu1UGShvbEFnd_!!38832490.jpg_400x400.jpg'
					}
				],
				desc: `
					<div style="width:100%">
						<img style="width:100%;display:block;" src="https://gd3.alicdn.com/imgextra/i4/479184430/O1CN01nCpuLc1iaz4bcSN17_!!479184430.jpg_400x400.jpg" />
						<img style="width:100%;display:block;" src="https://gd2.alicdn.com/imgextra/i2/479184430/O1CN01gwbN931iaz4TzqzmG_!!479184430.jpg_400x400.jpg" />
						<img style="width:100%;display:block;" src="https://gd3.alicdn.com/imgextra/i3/479184430/O1CN018wVjQh1iaz4aupv1A_!!479184430.jpg_400x400.jpg" />
						<img style="width:100%;display:block;" src="https://gd4.alicdn.com/imgextra/i4/479184430/O1CN01tWg4Us1iaz4auqelt_!!479184430.jpg_400x400.jpg" />
						<img style="width:100%;display:block;" src="https://gd1.alicdn.com/imgextra/i1/479184430/O1CN01Tnm1rU1iaz4aVKcwP_!!479184430.jpg_400x400.jpg" />
					</div>
				`,
				specList: [
					{
						id: 1,
						name: '尺寸',
					},
					{	
						id: 2,
						name: '颜色',
					},
				],
				specChildList: [
					{
						id: 1,
						pid: 1,
						name: 'XS',
					},
					{
						id: 2,
						pid: 1,
						name: 'S',
					},
					{
						id: 3,
						pid: 1,
						name: 'M',
					},
					{
						id: 4,
						pid: 1,
						name: 'L',
					},
					{
						id: 5,
						pid: 1,
						name: 'XL',
					},
					{
						id: 6,
						pid: 1,
						name: 'XXL',
					},
					{
						id: 7,
						pid: 2,
						name: '白色',
					},
					{
						id: 8,
						pid: 2,
						name: '珊瑚粉',
					},
					{
						id: 9,
						pid: 2,
						name: '草木绿',
					},
				]
			};
		},
		async onLoad(options){
			this.id = options.id;
			//接收传值,id里面放的是标题，因为测试数据并没写id 
			let id = options.id;
			// if(id){
			// 	this.$api.msg(`点击了${id}`);
			// }
			let _this=this;
			postFetch('index.php/index/index/product_center',{id:this.id},false,function(res){
				_this.id=res.data[0].id
				_this.commodity_price=res.data[0].commodity_price
				_this.coupon_face_value=res.data.coupon_face_value
				_this.coupon_link=res.data[0].coupon_link
				_this.header_img=res.data[0].header_img
				_this.pro_url=res.data[0].pro_url
				_this.product_name=res.data[0].product_name
				_this.sales_volume=res.data[0].sales_volume
				_this.shop_name=res.data[0].shop_name
				_this.estimate=res.data.estimate
				_this.post_coupon=res.data.post_coupon
				_this.vip=res.data.vip
				console.log(uni.getStorageSync('productHistory'),typeof(uni.getStorageSync('productHistory')))
				if(uni.getStorageSync('productHistory') && Array.isArray(uni.getStorageSync('productHistory'))){
					uni.setStorageSync('productHistory',[res.data[0],...uni.getStorageSync('productHistory')])
				}else{
					uni.setStorageSync('productHistory',[res.data[0]])
				}
			})
			
			//规格 默认选中第一条
			this.specList.forEach(item=>{
				for(let cItem of this.specChildList){
					if(cItem.pid === item.id){
						this.$set(cItem, 'selected', true);
						this.specSelected.push(cItem);
						break; //forEach不能使用break
					}
				}
			})
			this.shareList = await this.$api.json('shareList');
		},
		onShow(){
			let _this = this; 
			
		},
		methods:{
			popOut(url){
				plus.runtime.openURL(url)
			},
			//规格弹窗开关
			toggleSpec() {
				if(this.specClass === 'show'){
					this.specClass = 'hide';
					setTimeout(() => {
						this.specClass = 'none';
					}, 250);
				}else if(this.specClass === 'none'){
					this.specClass = 'show';
				}
			},
			//选择规格
			selectSpec(index, pid){
				let list = this.specChildList;
				list.forEach(item=>{
					if(item.pid === pid){
						this.$set(item, 'selected', false);
					}
				})

				this.$set(list[index], 'selected', true);
				//存储已选择
				/**
				 * 修复选择规格存储错误
				 * 将这几行代码替换即可
				 * 选择的规格存放在specSelected中
				 */
				this.specSelected = []; 
				list.forEach(item=>{ 
					if(item.selected === true){ 
						this.specSelected.push(item); 
					} 
				})
				
			},
			//分享
			share(){
				this.$refs.share.toggleMask();	
			},
			//收藏
			toFavorite(){
				this.favorite = !this.favorite;
			},
			buy(){
				uni.navigateTo({
					url: `/pages/order/createOrder`
				})
			},
			stopPrevent(){}
		},

	}
</script>

<style lang='scss'>
	page{
		background: $page-color-base;
		padding-bottom: 160upx;
	}
	.icon-you{
		font-size: $font-base + 2upx;
		color: #888;
	}
	.carousel {
		height: 722upx;
		position:relative;
		swiper{
			height: 100%;
		}
		.image-wrapper{
			width: 100%;
			height: 100%;
		}
		.swiper-item {
			display: flex;
			justify-content: center;
			align-content: center;
			height: 750upx;
			overflow: hidden;
			image {
				width: 100%;
				height: 100%;
			}
		}
		
	}
	.headFoot{
		width: 750rpx;
		height: 58rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.text{
			flex-grow: 1;
			padding: 17rpx 42rpx;
			background-color: #FCEEC7;
			font-size:24rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(49,33,8,1);
		}
		.button{
			flex-shrink: 0;
			width: 154rpx;
			height: 58rpx;
			background-color: #FFD476;
			display: flex;
			justify-content: center;
			align-items: center;
			.icon{
				width:25rpx;
				height: 24rpx;
				margin-right: 10rpx;
			}
			.label{
				font-size:21rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(49,33,8,1);
			}
		}
	}
	/* 标题简介 */
	.introduce-section{
		background: #fff;
		padding: 20upx 30upx;
		.title{
			font-size:29rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(51,51,51,1);
			height: 71rpx;
			line-height: 1.5;
			.titleIcon{
				width:28rpx;
				height:28rpx;
				margin-right: 10rpx;
			}
		}
		
	}
	.priceFrame{
		width: 750rpx;
		padding: 0 28rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 34rpx;
		.price-box{
			display:flex;
			align-items:baseline;
			.priceLabel{
				font-size:24rpx;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(228,70,84,1);
			}
			.price-tip{
				font-size:33rpx;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(219,0,27,1);
			}
			.price{
				font-size:50rpx;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(219,0,27,1);
			}
			.m-price{
			margin:0 12upx;
			font-size:21px;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(167,166,166,1);
			text-decoration: line-through;
			}
		}
		
		
		.coupon-tip{
			align-items: center;
			padding: 4upx 10upx;
			background: $uni-color-primary;
			font-size: $font-sm;
			color: #fff;
			border-radius: 6upx;
			line-height: 1;
			transform: translateY(-4upx); 
		}
		.bot-row{
			width:186rpx;
			height:37rpx;
			background-color: #FFE0A5;
			font-size:24rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(49,33,8,1);
			text-align: center;
			line-height: 37rpx;
		}
	}
	.couponFrame{
		width:715rpx;
		height:173rpx;
		margin: auto;
		margin-top: 45rpx;
		position: relative;
		.couponBG{
			width:715rpx;
			height:173rpx;
		}
		.left{
			position: absolute;
			top:37rpx;
			left: 60rpx;
			display: flex;
			align-items: baseline;
			.price-tip{
				font-size:33rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(249,22,60,1);
				position: relative;
				top:-80rpx;
			}
			.price{
				font-size:115rpx;
				font-family:Adobe Heiti Std;
				font-weight:normal;
				color:rgba(249,22,60,1);
			}
			.name{
				font-size:35rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(249,22,60,1);
				margin-left: 10rpx;
			}
		}
		.button{
			font-size:28rpx;
			font-family:PingFang SC;
			font-weight:bold;
			color:rgba(210,26,56,1);
			position: absolute;
			top:76rpx;
			right:48rpx;
		}
	}
	.shopFrame{
		width:750rpx;
		height:80rpx;
		padding:28rpx 42rpx;
		display:flex;
		align-items:center;
		justify-content:space-between;
		margin-top:16rpx;
		.left{
			display: flex;
			align-items: center;
			.shopIcon{
				width:40rpx;
				height:40rpx;
				margin-right: 11rpx;
			}
			.shopTitle{
				font-size:28rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(51,51,51,1);
			}
		}
		.right{
			font-size:25rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(228,24,87,1);
		}
	}
	/* 分享 */
	.share-section{
		display:flex;
		align-items:center;
		color: $font-color-base;
		background: linear-gradient(left, #fdf5f6, #fbebf6);
		padding: 12upx 30upx;
		.share-icon{
			display:flex;
			align-items:center;
			width: 70upx;
			height: 30upx;
			line-height: 1;
			border: 1px solid $uni-color-primary;
			border-radius: 4upx;
			position:relative;
			overflow: hidden;
			font-size: 22upx;
			color: $uni-color-primary;
			&:after{
				content: '';
				width: 50upx;
				height: 50upx;
				border-radius: 50%;
				left: -20upx;
				top: -12upx;
				position:absolute;
				background: $uni-color-primary;
			}
		}
		.icon-xingxing{
			position:relative;
			z-index: 1;
			font-size: 24upx;
			margin-left: 2upx;
			margin-right: 10upx;
			color: #fff;
			line-height: 1;
		}
		.tit{
			font-size: $font-base;
			margin-left:10upx;
		}
		.icon-bangzhu1{
			padding: 10upx;
			font-size: 30upx;
			line-height: 1;
		}
		.share-btn{
			flex: 1;
			text-align:right;
			font-size: $font-sm;
			color: $uni-color-primary;
		}
		.icon-you{
			font-size: $font-sm;
			margin-left: 4upx;
			color: $uni-color-primary;
		}
	}
	
	.c-list{
		font-size: $font-sm + 2upx;
		color: $font-color-base;
		background: #fff;
		.c-row{
			display:flex;
			align-items:center;
			padding: 20upx 30upx;
			position:relative;
		}
		.tit{
			width: 140upx;
		}
		.con{
			flex: 1;
			color: $font-color-dark;
			.selected-text{
				margin-right: 10upx;
			}
		}
		.bz-list{
			height: 40upx;
			font-size: $font-sm+2upx;
			color: $font-color-dark;
			text{
				display: inline-block;
				margin-right: 30upx;
			}
		}
		.con-list{
			flex: 1;
			display:flex;
			flex-direction: column;
			color: $font-color-dark;
			line-height: 40upx;
		}
		.red{
			color: $uni-color-primary;
		}
	}
	
	/* 评价 */
	.eva-section{
		display: flex;
		flex-direction: column;
		padding: 20upx 30upx;
		background: #fff;
		margin-top: 16upx;
		.e-header{
			display: flex;
			align-items: center;
			height: 70upx;
			font-size: $font-sm + 2upx;
			color: $font-color-light;
			.tit{
				font-size: $font-base + 2upx;
				color: $font-color-dark;
				margin-right: 4upx;
			}
			.tip{
				flex: 1;
				text-align: right;
			}
			.icon-you{
				margin-left: 10upx;
			}
		}
	}
	.eva-box{
		display: flex;
		padding: 20upx 0;
		.portrait{
			flex-shrink: 0;
			width: 80upx;
			height: 80upx;
			border-radius: 100px;
		}
		.right{
			flex: 1;
			display: flex;
			flex-direction: column;
			font-size: $font-base;
			color: $font-color-base;
			padding-left: 26upx;
			.con{
				font-size: $font-base;
				color: $font-color-dark;
				padding: 20upx 0;
			}
			.bot{
				display: flex;
				justify-content: space-between;
				font-size: $font-sm;
				color:$font-color-light;
			}
		}
	}
	/*  详情 */
	.detail-desc{
		background: #fff;
		margin-top: 16upx;
		.d-header{
			display: flex;
			justify-content: center;
			align-items: center;
			height: 80upx;
			font-size: $font-base + 2upx;
			color: $font-color-dark;
			position: relative;
				
			text{
				padding: 0 20upx;
				background: #fff;
				position: relative;
				z-index: 1;
			}
			&:after{
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translateX(-50%);
				width: 300upx;
				height: 0;
				content: '';
				border-bottom: 1px solid #ccc; 
			}
		}
	}
	
	/* 规格选择弹窗 */
	.attr-content{
		padding: 10upx 30upx;
		.a-t{
			display: flex;
			image{
				width: 170upx;
				height: 170upx;
				flex-shrink: 0;
				margin-top: -40upx;
				border-radius: 8upx;;
			}
			.right{
				display: flex;
				flex-direction: column;
				padding-left: 24upx;
				font-size: $font-sm + 2upx;
				color: $font-color-base;
				line-height: 42upx;
				.price{
					font-size: $font-lg;
					color: $uni-color-primary;
					margin-bottom: 10upx;
				}
				.selected-text{
					margin-right: 10upx;
				}
			}
		}
		.attr-list{
			display: flex;
			flex-direction: column;
			font-size: $font-base + 2upx;
			color: $font-color-base;
			padding-top: 30upx;
			padding-left: 10upx;
		}
		.item-list{
			padding: 20upx 0 0;
			display: flex;
			flex-wrap: wrap;
			text{
				display: flex;
				align-items: center;
				justify-content: center;
				background: #eee;
				margin-right: 20upx;
				margin-bottom: 20upx;
				border-radius: 100upx;
				min-width: 60upx;
				height: 60upx;
				padding: 0 20upx;
				font-size: $font-base;
				color: $font-color-dark;
			}
			.selected{
				background: #fbebee;
				color: $uni-color-primary;
			}
		}
	}
	
	/*  弹出层 */
	.popup {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 99;
		
		&.show {
			display: block;
			.mask{
				animation: showPopup 0.2s linear both;
			}
			.layer {
				animation: showLayer 0.2s linear both;
			}
		}
		&.hide {
			.mask{
				animation: hidePopup 0.2s linear both;
			}
			.layer {
				animation: hideLayer 0.2s linear both;
			}
		}
		&.none {
			display: none;
		}
		.mask{
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
			background-color: rgba(0, 0, 0, 0.4);
		}
		.layer {
			position: fixed;
			z-index: 99;
			bottom: 0;
			width: 100%;
			min-height: 40vh;
			border-radius: 10upx 10upx 0 0;
			background-color: #fff;
			.btn{
				height: 66upx;
				line-height: 66upx;
				border-radius: 100upx;
				background: $uni-color-primary;
				font-size: $font-base + 2upx;
				color: #fff;
				margin: 30upx auto 20upx;
			}
		}
		@keyframes showPopup {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
		@keyframes hidePopup {
			0% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
		}
		@keyframes showLayer {
			0% {
				transform: translateY(120%);
			}
			100% {
				transform: translateY(0%);
			}
		}
		@keyframes hideLayer {
			0% {
				transform: translateY(0);
			}
			100% {
				transform: translateY(120%);
			}
		}
	}
	
	/* 底部操作菜单 */
	.page-bottom{
		position:fixed;
		left: 30upx;
		bottom:30upx;
		z-index: 95;
		display: flex;
		justify-content:space-between;
		align-items: center;
		width: 690upx;
		height: 100upx;
		background: rgba(255,255,255,.9);
		box-shadow: 0 0 20upx 0 rgba(0,0,0,.5);
		border-radius: 16upx;
		padding: 0 22rpx;
		.bottomPoint{
			display:flex;
			flex-direction:column;
			justify-content: center;
			align-items: center;
			.buttomIcon{
				width:40rpx;
				height:40rpx;
			}
			.bottomLabel{
				font-size:22rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(96,98,102,1);
				margin-top: 5rpx;
			}
		}
		.bottomButtonFrame{
			width:417rpx;
			height: 75rpx;
			display: flex;
			.left{
				width:208rpx;
				height:75rpx;
				background:rgba(45,45,45,1);
				border-radius:37rpx 0rpx 0rpx 38rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
			.right{
				width:208rpx;
				height:75rpx;
				background:linear-gradient(-90deg,rgba(150,12,0,1) 0%,rgba(226,41,39,1) 100%);
				border-radius:0rpx 37rpx 38rpx 0rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
			.title{
				font-size:28rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(241,241,241,1);
			}
			.dsc{
				font-size:21rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(241,241,241,1);
				.bottomButtonIcon{
					width:22rpx;
					height: 22rpx;
				}
			}
		}
	}
	
</style>
