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
		<view class="headFoot" v-if="!identity_type">
			<view class="text"><text>现在升级VIP，最高可</text><text class="red">赚</text><image class="mt" src="/static/productIcon02.png"></image><text class="red">{{vip}}元</text></view>
			<view class="button" @click="goVip">
				<image class="icon" src="/static/productIcon01.png"></image>
				<view class="label">立即升级</view>
			</view>
		</view>
		<view class="introduceFrame">
			<view class="introduce-section">
				<image src="/static/productIcon03.png" class="titleIcon"></image><view class="title"> {{product_name}}</view>
				<view class="saled">销量2w+</view>
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
					<view>预估收益</view><image class="mt" src="/static/productIcon02.png"></image><view>{{income}}</view>
					<!-- <text>库存: 4690</text>
					<text>浏览量: 768</text> -->
				</view>
			</view>
			<view class="couponFrame" v-if="coupon_face_value">
				<image class="couponBG" src="/static/productIcon06.png"></image>
				<view class="left">
					<view class="price-tip">￥</view>
					<view class="price">{{coupon_face_value}}</view>
					<view class="nameFrame">
						<view class="name">优惠券</view>
						<view class="useDate">12月12日 - 12月21日</view>
					</view>
				</view>
				<view class="button" @click="popOut(coupon_link)">立即领取</view>
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
		<view class="guessFrame">
			<view class="guesstTitleFrame">
				<image class="guessTitleIcon" src="/static/productTitleIcon.png"></image>
				<view class="guessTitle">猜你喜欢</view>
				<image class="guessTitleIcon" src="/static/productTitleIcon.png"></image>
			</view>
			<scroll-view scroll-x="true" class="scroll">
				<view class="scrollFrame">
					<view class="guessProduct" v-for="(v,i) in guess_like" :key="i">
						<image :src="v.pict_url" class="guessImg"></image>
						<view class="guessProductTitle">{{v.title}}</view>
						<view class="guessInfo">
							<view class="guessCoupon">券￥{{v.coupon}}</view>
							<view class="guessIncomeFrame">
								<view class="guessIncome">预估收益</view>
								<image class="mt" src="/static/productIcon02.png"></image>
								<view class="guessIncome">{{v.commission}}</view>
							</view>
						</view>
						<view class="guessBottom">
							<view class="guessPriceFrame">
								<view class="guessPriceLabel">券后价</view>
								<view class="guessPriceTip">￥</view>
								<view class="guessPrice">{{v.zk_final_price_wap1?v.zk_final_price_wap1:v.zk_final_price_wap}}</view>
							</view>
							<view class="guessOldPrice">￥{{v.commodity_price}}</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="shopFrame">
			<view class="left">
				<image class="shopIcon" src="/static/productIcon03.png"></image>
				<view class="shopTitle">{{shop_name}}</view>
			</view>
			<view class="right" @click="toShop">进入店铺</view>
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
			<view :class="{bottomPoint:1,hl:liked}" @click="like">
				<image :src="liked?'/static/productIcon05a.png':'/static/productIcon05.png'" class="buttomIcon"></image>
				<view class="bottomLabel">猜你喜欢</view>
			</view>
			<view :class="{bottomPoint:1,hl:followed}" @click="toggleFollow">
				<image :src="followed?'/static/productIcon04a.png':'/static/productIcon04.png'" class="buttomIcon"></image>
				<view class="bottomLabel">收藏</view>
			</view>
			<view class="bottomButtonFrame">
				<view class="left" @click="share">
					<view class="title">分享</view>
					<!-- <view class="dsc">赚<image class="bottomButtonIcon" src="/static/productIcon02.png"></image>14.28</view> -->
				</view>
				<view class="right" @click="buy">
					<view class="title">购买</view>
					<view class="dsc">省<!-- <image class="bottomButtonIcon" src="/static/productIcon02.png"></image> -->{{estimate?estimate:(commodity_price-post_coupon)}}元</view>
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
	import allpage from '@/mixin/allPage'
	import share from '@/components/share';
	import {postFetch} from '@/util/request_UT.js';
	import {encrypt64} from '@/util/security_UT.js'
	const Alibcsdk = uni.requireNativePlugin('UZK-Alibcsdk');
	var t ;
	export default{
		mixins:[allpage],
		components: {
			share
		},
		data() {
			return {
				followed:false,
				liked:false,
				id:'',
				pid:'',
				commodity_price: 0,
				coupon_face_value: 0,
				estimate:0,
				post_coupon:0,
				vip:0,
				coupon_link: "",
				header_img: "",
				pro_url: "",
				tb_url:"",
				product_name: "",
				sales_volume: "",
				specClass: 'none',
				specSelected:[],
				shop_name:'',
				favorite: true,
				income:0,
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
				],
				num_iid:'',
				shop_id:'',
				guess_like:[]
			};
		},
		async onLoad(options){
			this.id = options.id;
			Alibcsdk.init(
				result => {
					console.log(JSON.stringify(result))
					if (result.status) {
						// uni.showToast({
						// 	title: "初始化成功"
						// });
						console.log('Alibcsdk初始化成功')
					} else {
						console.log('Alibcsdk初始化失败')
					}
					//console.log(JSON.stringify(result))
				}
			)
		},
		onShow(){
			let _this = this; 
			
			//接收传值,id里面放的是标题，因为测试数据并没写id 
			let id = this.id;
			// if(id){
			// 	this.$api.msg(`点击了${id}`);
			// }
			postFetch('index.php/index/index/product_center',{id:this.id,isvip:this.identity_type||0},false,function(res){
				console.log('product_center',res)
				_this.id=res.data.id//id
				_this.pid=res.data.pid//淘宝id
				_this.commodity_price=res.data.reserve_price//原价
				_this.coupon_face_value=res.data.coupon//优惠券价格
				_this.coupon_link=res.data.coupon_click_url//优惠券地址
				_this.header_img=res.data.pict_url//商品图片
				_this.pro_url=res.data.item_url//商品地址
				_this.product_name=res.data.title//商品标题
				_this.sales_volume=res.data.volume//销量
				_this.shop_name=res.data.nick//店铺名
				_this.estimate=res.data.save//省多少
				_this.post_coupon=res.data.zk_final_price_wap//券后价
				_this.vip=res.data.vip//升级可赚,预估收益
				_this.income=res.data.commission//预估收益
				_this.num_iid=res.data.num_iid
				_this.shop_id=res.data.seller_id
				_this.$set(_this,'guess_like',res.data.guess_like)
				// _this.save=res.data.reserve_price-res.data.zk_final_price_wap//省多少
				// _this.tb_url=res.data[0].tb_url
				_this.tb_url="tbopen://m.taobao.com/tbopen/index.html?action=ali.open.nav&module=h5&bootImage=0&source=sb&appkey=24585258&smbSid=D9usFXFt3CUCAWpUEmbJnqKl_1562771012228&rbbt=bc.mallDetail.6.0.0&params=%7B%22fid%22%3A%22Wq6WVWePzYK%22%2C%22mtopCostTime%22%3A%22602%22%2C%22_t%22%3A%221562771013928%22%7D&h5Url=https%3A%2F%2Fdetail.m.tmall.com%2Fitem.htm%3Fid%3D545617271936%26ali_trackid%3D2%253Amm_119358667_35544742_126462907%253A1562771005_146_947006687%26pvid%3Dnull%26scm%3Dnull%26e%3Dp1zr4pcBUutfRHk7Z7SOONK1O27zH5exMy-K7eYuUtD9Umq014SDk-EB843RIyUrz5TIqjXOFX8u5CK3qPnb4lYGFoZ0V7Qu1n2u1uaGfFRgsCpuYl5N_4Fi75dyoNakjIS9tDsfWnft889xAP7p2jp03STBeU8EESg8S2zmmcYTF6i4jJ3bKFV3p2QP3rdTNIRPse9zYAx9sOxrKwzrUKjUeRQ-baNrRbbhzKSdd6Buj8gkG7lyPXJNpUdEdxUwsmcYjUfw1pLyxfMlhoGmqyEXoVwCl-WxyneceYJe9jQVJFtDE6_qOAMjmLAC-HTKdL9elmNoMI-b0YmewATGuG3qGSkGjcFH-YgNcLKYkqVb8VTdan73Yx5l5jApKhRTBzCw_9olP8KLGcjuwgWuxNQDEIJrpqdyy8CEDSc0Uk_EXzm7ZfO5Mg%26type%3D2%26tk_cps_param%3D119358667%26tkFlag%3D0%26point%3D%25257B%252522from%252522%25253A%252522h5%252522%25252C%252522ali_trackid%252522%25253A%2525222%25253Amm_119358667_35544742_126462907%25253A1562771005_146_947006687%252522%25252C%252522h5_uid%252522%25253A%252522D9usFXFt3CUCAWpUEmbJnqKl%252522%25252C%252522ap_uri%252522%25253A%252522sb_redirect_auto%252522%25252C%252522page%252522%25253A%252522mallDetail%252522%25252C%252522callType%252522%25253A%252522scheme%252522%25257D"
				let productHistory = uni.getStorageSync('productHistory')
				if(productHistory && Array.isArray(productHistory)){
					let aKey={}
					aKey[res.data.id]=1;
					let aArray=[res.data]
					try{
						productHistory.map(function(v){
							if(!aKey[v.id]){
								aKey[v.id]=1;
								aArray.push(v)
							}
						});
						uni.setStorageSync('productHistory',aArray)
					}catch(e){
						uni.setStorageSync('productHistory',[res.data])
					}
					
				}else{
					uni.setStorageSync('productHistory',[res.data])
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
			this.shareList = this.$api.json('shareList');
			try{
				this.followed=uni.getStorageSync('followList')[this.id]?true:false
			}catch(e){
				this.followed=false;
			}
			try{
				this.liked=uni.getStorageSync('likeList')[this.id]||false
			}catch(e){
				this.liked=false
			}
		},
		computed:{
			identity_type(){
				return this.$store.state.userST.identity_type
			}
		},
		methods:{
			goVip(){
				if(this.$store.state.userST.phone){
					uni.navigateTo({
						url:'/pages/vip/vip'
					})
				}else{
					uni.navigateTo({
						url:'/pages/public/login'
					})
				}
			},
			toggleLike(){
				let o=uni.getStorageSync('likeList')
				if(!o){
					o={}
				}
				this.liked = !this.liked
				o[this.id]=this.liked
				uni.setStorageSync('likeList',o)
			},
			toggleFollow(){
				let _this=this;
				let o=uni.getStorageSync('followList')
				if(!o){
					o={}
				}
				this.followed = !this.followed
				if(this.followed){
					o[this.id]={
						id:_this.id,
						pid:_this.pid,
						commodity_price:_this.commodity_price,
						coupon_face_value:_this.coupon_face_value,
						coupon_link:_this.coupon_link,
						header_img:_this.header_img,
						pro_url:_this.pro_url,
						product_name:_this.product_name,
						sales_volume:_this.sales_volume,
						shop_name:_this.shop_name,
						estimate:_this.estimate,
						post_coupon:_this.post_coupon,
						vip:_this.vip,
						num_iid:_this.num_iid,
						shop_id:_this.shop_id
					}
				}else{
					o[this.id]=false
				}
				uni.setStorageSync('followList',o)
			},
			popOut(url){
				let _this=this;
				if(!this.$store.state.userST.network){
					uni.navigateTo({
								url:'/pages/noNetwork/noNetwork'
							})
				}else{
					Alibcsdk.openurl({
					    url: url,
					    appkey:'28164312',
					    linkkey: 'taobao',
					    nativeFailedMode:'download'
					}, result=> {
					
					});
				}
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
				// this.$refs.share.toggleMask();
					uni.navigateTo({
						url:'/pages/share/shareProduct'
					})
			},
			//收藏
			toFavorite(){
				this.favorite = !this.favorite;
			},
			toShop(){
				let _this=this
				if(!this.$store.state.userST.network){
					uni.navigateTo({
								url:'/pages/noNetwork/noNetwork'
							})
				}else{
					if(_this.coupon_link){
						_this.popOut(_this.coupon_link)
					}else{
						Alibcsdk.openshop({
							shopid:_this.shop_id,
						    appkey:'28164312',
						    linkkey: 'taobao',
						    nativeFailedMode:"download"
						}, result=> {
						
						});
					}
					
				}
			},
			buy(){
				let _this=this;
				if(!this.$store.state.userST.network){
					uni.navigateTo({
								url:'/pages/noNetwork/noNetwork'
							})
				}else{
					if(_this.coupon_link){
						_this.popOut(_this.coupon_link)
					}else{
						Alibcsdk.opendetail({
							itemid: _this.num_iid,
							linkkey: "taobao",
							nativeFailedMode: "download",
							appkey: "28164312",
							opentype: 'native'
						}, result => {
						
						})
					}
					
				}
			},
			stopPrevent(){},
			like(){
				uni.navigateTo({
					url:"/pages/search/search?keywork="+this.product_name+"&salse=0"
				})
			}
		},

	}
</script>

<style lang='scss'>
	page{
		background: $page-color-base;
		padding-bottom: 160upx;
	}
	.container{
		background:rgba(248,248,248,1);
	}
	.mt{
		width:22upx;
		height:22upx;
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
		width: 750upx;
		height: 58upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.text{
			flex-grow: 1;
			padding: 17upx 42upx;
			background-color: #FCEEC7;
			font-size:24upx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(49,33,8,1);
			.red{
				font-size:24upx;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(200,55,47,1);
			}
		}
		.button{
			flex-shrink: 0;
			width: 154upx;
			height: 58upx;
			background-color: #FFD476;
			display: flex;
			justify-content: center;
			align-items: center;
			.icon{
				width:25upx;
				height: 24upx;
				margin-right: 10upx;
			}
			.label{
				font-size:21upx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(49,33,8,1);
			}
		}
	}
	/* 标题简介 */
	.introduceFrame{
		width: 100%;
		background-color: #fff;
		padding-bottom: 24upx;
	}
	.introduce-section{
		background: #fff;
		padding: 20upx 30upx;
		position: relative;
		.title{
			font-size:29upx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(51,51,51,1);
			height: 71upx;
			line-height: 1.5;
			text-indent: 38upx;
		}
		.titleIcon{
			width:28upx;
			height:28upx;
			position: absolute;
			top:28upx;
			left: 30upx;
		}
		.saled{
			font-size:24upx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(153,153,153,1);
			position: absolute;
			top:74upx;
			right: 31upx;
		}
	}
	.priceFrame{
		width: 750upx;
		padding: 0 28upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* margin-top: 15upx; */
		.price-box{
			display:flex;
			align-items:baseline;
			.priceLabel{
				font-size:24upx;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(228,70,84,1);
			}
			.price-tip{
				font-size:33upx;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(219,0,27,1);
			}
			.price{
				font-size:50upx;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(219,0,27,1);
			}
			.m-price{
			margin:0 12upx;
			font-size:21upx;
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
			/* width:186upx; */
			padding: 0 10upx;
			height:37upx;
			background-color: #FFE0A5;
			font-size:24upx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(49,33,8,1);
			text-align: center;
			line-height: 37upx;
			display: flex;
			align-items: center;
		}
	}
	.couponFrame{
		width:715upx;
		height:173upx;
		margin: auto;
		margin-top: 45upx;
		position: relative;
		.couponBG{
			width:715upx;
			height:173upx;
		}
		.left{
			position: absolute;
			top:37upx;
			left: 60upx;
			display: flex;
			align-items: baseline;
			.price-tip{
				font-size:33upx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(249,22,60,1);
				position: relative;
				top:-80upx;
			}
			.price{
				font-size:115upx;
				font-family:Adobe Heiti Std;
				font-weight:normal;
				color:rgba(249,22,60,1);
			}
			.nameFrame{
				height: 76upx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				position: relative;
				top: -52upx;
				margin-left: 26upx;
				.name{
					font-size:35upx;
					font-family:PingFang SC;
					font-weight:800;
					color:rgba(249,22,60,1);
				}
				.useDate{
					font-size:21upx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(249,22,60,1);
				}
			}
		}
		.button{
			font-size:28upx;
			font-family:PingFang SC;
			font-weight:bold;
			color:rgba(210,26,56,1);
			position: absolute;
			top:69upx;
			right:48upx;
		}
	}
	.guessFrame{
		width: 750upx;
		padding: 27upx 0;
		margin-top: 16upx;
		background-color: #fff;
		.guesstTitleFrame{
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 98upx;
			.guessTitleIcon{
				width:26upx;
				height:26upx;
			}
			.guessTitle{
				font-size:31upx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(34,34,34,1);
				margin: 0 21upx;
			}
		}
		.scroll{
			width:750upx;
			height: 380upx;
			.scrollFrame{
				display: flex;
				flex-wrap: nowrap;
				.guessProduct{
					width:249upx;
					margin-left: 17upx;
					.guessImg{
						width:249upx;
						height:249upx;
					}
					.guessProductTitle{
						font-size:26upx;
						font-family:PingFang SC;
						font-weight:500;
						color:rgba(51,51,51,1);
						/* text-indent: 9upx; */
						margin-top: 10upx;
						padding-left: 9upx;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
					.guessInfo{
						padding-left: 6upx;
						margin-top: 8upx;
						display: flex;
						justify-content: space-between;
						align-items: center;
						.guessCoupon{
							width:90upx;
							height: 35upx;
							background-image: url('~@/static/coupon.png');
							background-size: 90upx 35upx;
							line-height: 35upx;
							text-align: center;
							font-size:17upx;
							font-family:PingFang SC;
							font-weight:400;
							color:rgba(255,255,255,1);
						}
						.guessIncomeFrame{
							padding: 6upx 15upx;
							background:rgba(250,131,35,1);
							border-radius:7upx;
							display: flex;
							align-items: center;
							.guessIncome{
								font-size:17upx;
								font-family:PingFang SC;
								font-weight:400;
								color:rgba(255,255,255,1);
							}
						}
					}
					.guessBottom{
						margin-top: 17upx;
						width: 100%;
						padding-left: 7upx;
						display: flex;
						justify-content: space-between;
						align-items: baseline;
						.guessPriceFrame{
							display: flex;
							align-items: baseline;
							.guessPriceLabel{
								font-size:17upx;
								font-family:PingFang SC;
								font-weight:500;
								color:rgba(228,70,84,1);
							}
							.guessPriceTip{
								font-size:22upx;
								font-family:PingFang SC;
								font-weight:bold;
								color:rgba(219,0,27,1);
							}
							.guessPrice{
								font-size:33upx;
								font-family:PingFang SC;
								font-weight:bold;
								color:rgba(219,0,27,1);
							}
						}
						.guessOldPrice{
							font-size:21upx;
							font-family:PingFang SC;
							font-weight:500;
							text-decoration:line-through;
							color:rgba(167,166,166,1);
						}
					}
				}
			}
		}
		/* <scroll-view scroll-x="true" class="scroll">
			<view class="scrollFrame">
				<view class="guessProduct">
					<image src="/static/goodlist2@2x.png" class="guessImg"></image>
					<view class="guessProductTitle">恒源祥2019春季长。。。</view>
					<view class="guessInfo">
						<view class="guessCoupon">券￥300</view>
						<view class="guessIncomeFrame">
							<view class="guessIncome">预估收益</view>
							<image class="mt" src="/static/productIcon02.png"></image>
							<view class="guessIncome">50</view>
						</view>
					</view>
					<view class="guessBottom">
						<view class="guessPriceFrame">
							<view class="guessPriceLabel">券后价</view>
							<view class="guessPriceTip">￥</view>
							<view class="guessPrice">248</view>
						</view>
						<view class="guessOldPrice">￥387</view>
					</view>
				</view> */
	}
	.shopFrame{
		width:750upx;
		height:80upx;
		padding:28upx 42upx;
		display:flex;
		align-items:center;
		justify-content:space-between;
		margin-top:16upx;
		background-color: #fff;
		.left{
			display: flex;
			align-items: center;
			.shopIcon{
				width:40upx;
				height:40upx;
				margin-right: 11upx;
			}
			.shopTitle{
				font-size:28upx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(51,51,51,1);
			}
		}
		.right{
			font-size:25upx;
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
		padding: 0 22upx;
		.bottomPoint{
			display:flex;
			flex-direction:column;
			justify-content: center;
			align-items: center;
			.buttomIcon{
				width:40upx;
				height:40upx;
			}
			.bottomLabel{
				font-size:22upx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(96,98,102,1);
				margin-top: 5upx;
			}
		}
		.bottomPoint.hl .bottomLabel{
			color:#DD8D45;
		}
		.bottomButtonFrame{
			width:417upx;
			height: 75upx;
			display: flex;
			.left{
				width:208upx;
				height:75upx;
				background:rgba(45,45,45,1);
				border-radius:37upx 0upx 0upx 38upx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
			.right{
				width:208upx;
				height:75upx;
				background:linear-gradient(-90deg,rgba(150,12,0,1) 0%,rgba(226,41,39,1) 100%);
				border-radius:0upx 37upx 38upx 0upx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
			.title{
				font-size:28upx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(241,241,241,1);
			}
			.dsc{
				font-size:21upx;
				font-family:PingFang SC;
				font-weight:500;
				margin-top: 10upx;
				color:rgba(241,241,241,1);
				.bottomButtonIcon{
					width:22upx;
					height: 22upx;
				}
			}
		}
	}
	
</style>
