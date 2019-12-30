<template>  
    <view class="container">  
		<image class="topBG" src="/static/user-bg.png"></image>
		<view class="top">
			<view class="user-info-box">
				<image class="portrait" :src="avatar || '/static/logo.png'"></image>
				<view class="info-box" v-if="nickname">
					<text class="username">{{nickname || '游客'}}</text>
					<view class="codeFrame"><view class="code">{{invitation||'暂无'}}</view><view class="copyButton" v-if="invitation">复制邀请码</view></view>
				</view>
				<view class="toLogon" v-else @click="go('/pages/public/login')">点击登陆账号</view>
			</view>
		</view>
		<view class="card">
			<image class="cardBG" src="/static/userBackgroundCard.png"></image>
			<view class="tag"><text>{{identity_type==0 && phone?'普通会员':''}}{{identity_type==0 && !phone?'蜜蜂天堂会员':''}}{{identity_type==1?'VIP会员':''}}{{identity_type==2?'合伙人':''}}{{identity_type==3?'联合创始人':''}}</text><image src="/static/userDeamean.png"></image></view>
			<view class="cardTop">
				<view class="topLeft">
					<view class="topLeftTitle"><image class="mt" src="/static/productIcon02.png"></image><text>累计收益</text><image class="rightDeg" src="/static/right.png"></image></view>
					<view class="topLeftNumber">123.45</view>
				</view>
				<view class="topRight">
					<view class="topRightTitle">今日预估蜜糖</view>
					<view class="topRightNumber">0.0</view>
					<view class="topRightTitle" style="margin-top: 32rpx;">本月预估蜜糖</view>
					<view class="topRightNumber">0.0</view>
				</view>
			</view>
			<view class="cardBottom">
				<view class="bottomLeft">
					<image src="/static/vipDeamean.png"></image><text>升级</text><text class="yellow">VIP</text><text>购物返佣最高</text><text class="yellow">90%</text>
				</view>
				<view class="bottomRight" @click="navTo('/pages/vip/vip')">
					<text>去升级</text><image src="/static/right.png"></image>
				</view>
			</view>
		</view>
		<view class="navFrame">
			<view class="nav" @click="navTo('/pages/income/income')">
				<image class="navImg" src="/static/user0.png"></image>
				<view class="navTitle">我的收益</view>
			</view>
			<view class="nav" @click="navTo('/pages/order/order?state=0')">
				<image class="navImg" src="/static/user1.png"></image>
				<view class="navTitle">订单明细</view>
			</view>
			<view class="nav" @click="navTo('/pages/fans/fans')">
				<image class="navImg" src="/static/user2.png"></image>
				<view class="navTitle">我的粉丝</view>
			</view>
			<view class="nav" @click="navTo('/pages/share/share')">
				<image class="navImg" src="/static/user3.png"></image>
				<view class="navTitle">分享好友</view>
			</view>
		</view>
		<view class="bothFrame">
			<image class="bothPoint" src="/static/userBoth0.png" @click="navTo('/pages/cart/cart')"></image>
			<image class="bothPoint" src="/static/userBoth1.png"></image>
		</view>
		<image class="bigPic" src="/static/userBigPic.png" @click="navTo('/pages/vip/vip')"></image>
		<view class="otherFrame">
			<view class="otherTitle">其他服务</view>
			<view class="otherList">
				<view class="otherPoint">
					<image class="otherImg" src="/static/userOther0.png"></image>
					<view class="otherPointTitle">浏览历史</view>
				</view>
				<view class="otherPoint" @click="navTo('/pages/follow/follow')">
					<image class="otherImg" src="/static/userOther1.png"></image>
					<view class="otherPointTitle">我的收藏</view>
				</view>
				<view class="otherPoint" @click="navTo('/pages/fans/fans')">
					<image class="otherImg" src="/static/userOther2.png"></image>
					<view class="otherPointTitle">邀请好友</view>
				</view>
				<view class="otherPoint" @click="navTo('/pages/business/business')">
					<image class="otherImg" src="/static/userOther3.png"></image>
					<view class="otherPointTitle">商家入驻</view>
				</view>
			</view>
		</view>
		<!-- <view class="user-section">
			<image class="bg" src="/static/user-bg.png"></image>
			<view class="user-info-box">
				<view class="portrait-box">
					<image class="portrait" :src="avatar || '/static/logo.png'"></image>
				</view>
				<view class="info-box" v-if="nickname">
					<text class="username">{{nickname || '游客'}}</text>
					<view class="code">邀请码：{{invitation||'暂无'}}</view>
				</view>
				<view class="info-box" v-else @click="go('/pages/public/login')">
					<text class="toLogon">点击登陆账号</text>
				</view>
			</view>
			<view class="vip-card-box">
				<image class="card-bg" src="/static/vip-card-bg.png" mode=""></image>
				<view class="b-btn" @click="navTo('/pages/vip/vip')" v-if="!identity_type">
					立即开通
				</view>
				<view class="tit">
					<text class="yticon icon-iLinkapp-"></text>
					{{identity_type==0 && phone?'普通会员':''}}
					{{identity_type==0 && !phone?'蜜蜂天堂会员':''}}
					{{identity_type==1?'VIP会员':''}}
					{{identity_type==2?'合伙人':''}}
					{{identity_type==3?'联合创始人':''}}
				</view> -->
				<!-- <text class="e-m">蜜蜂天堂 Union</text> -->
				<!-- <text class="e-b">会员等级越高，消费奖励越丰厚，更多精彩，等您发现</text> -->
		<!-- 	</view>
		</view> -->
		
		<!-- <view 
			class="cover-container"
			:style="[{
				transform: coverTransform,
				transition: coverTransition
			}]"
			@touchstart="coverTouchstart"
			@touchmove="coverTouchmove"
			@touchend="coverTouchend"
		>
			<image class="arc" src="/static/arc.png"></image>
			
			<view class="tj-sction">
				<view class="tj-item" @click="navTo('/pages/fans/fans')">
					<text class="num">0</text>
					<text>邀请人数</text>
				</view>
				<view class="tj-item">
					<text class="num">0</text>
					<text>优惠券</text>
				</view>
				<view class="tj-item">
					<text class="num">0</text>
					<text>蜜糖</text>
				</view>
			</view> -->
			<!-- 订单 -->
			<!-- <view class="order-section">
				<view class="order-item" @click="navTo('/pages/order/order?state=0')" hover-class="common-hover"  :hover-stay-time="50">
					<text class="yticon icon-shouye"></text>
					<text>全部订单</text>
				</view>
				<view class="order-item" @click="navTo('/pages/order/order?state=1')"  hover-class="common-hover" :hover-stay-time="50">
					<text class="yticon icon-daifukuan"></text>
					<text>待付款</text>
				</view>
				<view class="order-item" @click="navTo('/pages/order/order?state=2')" hover-class="common-hover"  :hover-stay-time="50">
					<text class="yticon icon-yishouhuo"></text>
					<text>待收货</text>
				</view>
				<view class="order-item" @click="navTo('/pages/order/order?state=4')" hover-class="common-hover"  :hover-stay-time="50">
					<text class="yticon icon-shouhoutuikuan"></text>
					<text>退款/售后</text>
				</view>
			</view> -->
			<!-- <image src="https://www.paradisebee.com/pomo4.png" class="promoD" @click="navTo('/pages/vip/vip')"></image> -->
			<!-- 订单 -->
			<!-- <view class="order-section">
				<view class="order-item" @click="navTo('/pages/income/income')">
					<image class="shouyiIcon" src="/static/b2.png"></image>
					<text>收益</text>
				</view>
				<view class="order-item" @click="navTo('/pages/order/order?state=0')">
					<image class="shouyiIcon" src="/static/b0.png"></image>
					<text>订单</text>
				</view>
				<view class="order-item" @click="navTo('/pages/fans/fans')">
					<image class="shouyiIcon" src="/static/b1.png"></image>
					<text>粉丝</text>
				</view>
				<view class="order-item" @click="navTo('/pages/share/share')">
					<image class="shouyiIcon" src="/static/b3.png"></image>
					<text>邀请</text>
				</view>
			</view> -->
			<!-- 浏览历史 -->
			<!-- <view class="history-section icon">
				<view class="sec-header" v-if="historyList.length">
					<text class="yticon icon-lishijilu"></text>
					<text>浏览历史</text>
				</view>
				<scroll-view scroll-x class="h-list" v-if="historyList.length">
					<image @click="popOut(v.num_iid)" :src="v.pict_url" mode="aspectFill" v-for="(v,i) in historyList" :key="i"></image>
				</scroll-view> -->
				<!-- <list-cell icon="icon-iconfontweixin" iconColor="#e07472" title="我的钱包" tips="您的会员还有3天过期"></list-cell> -->
				<!-- <list-cell icon="icon-dizhi" iconColor="#5fcda2" title="地址管理" @eventClick="navTo('/pages/address/address')"></list-cell>
				<list-cell icon="icon-share" iconColor="#9789f7" title="分享" tips="邀请好友,分享快乐" @eventClick="navTo('/pages/share/share')"></list-cell> -->
				<!-- <list-cell icon="icon-pinglun-copy" iconColor="#ee883b" title="晒单" tips="晒单抢红包"></list-cell> -->
	<!-- 			<list-cell icon="icon-shoucang_xuanzhongzhuangtai" iconColor="#54b4ef" title="我的收藏" @eventClick="navTo('/pages/follow/follow')"></list-cell>
				<list-cell icon="icon-shezhi1" iconColor="#e07472" title="设置" border="" @eventClick="navTo('/pages/set/set')"></list-cell>
			</view>
		</view> -->
			
		
    </view>  
</template>  
<script>  
	import allpage from '@/mixin/allPage'
	import listCell from '@/components/mix-list-cell';
	import {encrypt64} from '@/util/security_UT.js'
    import {  
        mapState 
    } from 'vuex';  
	const Alibcsdk = uni.requireNativePlugin('UZK-Alibcsdk');
	let startY = 0, moveY = 0, pageAtTop = true;
    export default {
		mixins:[allpage],
		components: {
			listCell
		},
		data(){
			return {
				coverTransform: 'translateY(0px)',
				coverTransition: '0s',
				moving: false,
				historyList:[]
			}
		},
		onShow(){
			let productHistory = uni.getStorageSync('productHistory')
			this.$set(this,"historyList",productHistory||[])
		},
		onLoad(){
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
		// #ifndef MP
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) {
				this.navTo('/pages/set/set');
			}else if(index === 1){
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
		},
		// #endif
        computed: {
			hasLogin(){
				return this.$store.state.userST.hasLogin
			},
			invitation(){
				return this.$store.state.userST.invitation
			},
			phone(){
				return this.$store.state.userST.phone
			},
			nickname(){
				return this.$store.state.userST.nickname
			},
			avatar(){
				return this.$store.state.userST.avatar
			},
			identity_type(){
				return this.$store.state.userST.identity_type
			}
		},
        methods: {
			go(url){
				uni.navigateTo({
					url
				})  
			},
			popOut(url){
				// plus.runtime.openURL(url)
				// url=encrypt64(url)
				// uni.navigateTo({
				// 	url:'/pages/yijiayou/yijiayou?url='+url
				// })
				Alibcsdk.opendetail({
					itemid: url,
					linkkey: "taobao",
					// adzoneid: "103062550066",
					// pid: "mm_131245267_59600050_103062550066",
					nativeFailedMode: "download",
					appkey: "28164312",
					opentype: 'native'
				}, result => {
				
				})
			},
			/**
			 * 统一跳转接口,拦截未登录路由
			 * navigator标签现在默认没有转场动画，所以用view
			 */
			navTo(url){
				if(!this.hasLogin){
					url = '/pages/public/login';
				}
				uni.navigateTo({  
					url
				})  
			}, 
	
			/**
			 *  会员卡下拉和回弹
			 *  1.关闭bounce避免ios端下拉冲突
			 *  2.由于touchmove事件的缺陷（以前做小程序就遇到，比如20跳到40，h5反而好很多），下拉的时候会有掉帧的感觉
			 *    transition设置0.1秒延迟，让css来过渡这段空窗期
			 *  3.回弹效果可修改曲线值来调整效果，推荐一个好用的bezier生成工具 http://cubic-bezier.com/
			 */
			coverTouchstart(e){
				if(pageAtTop === false){
					return;
				}
				this.coverTransition = 'transform .1s linear';
				startY = e.touches[0].clientY;
			},
			coverTouchmove(e){
				moveY = e.touches[0].clientY;
				let moveDistance = moveY - startY;
				if(moveDistance < 0){
					this.moving = false;
					return;
				}
				this.moving = true;
				if(moveDistance >= 80 && moveDistance < 100){
					moveDistance = 80;
				}
		
				if(moveDistance > 0 && moveDistance <= 80){
					this.coverTransform = `translateY(${moveDistance}px)`;
				}
			},
			coverTouchend(){
				if(this.moving === false){
					return;
				}
				this.moving = false;
				this.coverTransition = 'transform 0.3s cubic-bezier(.21,1.93,.53,.64)';
				this.coverTransform = 'translateY(0px)';
			}
        }  
    }  
</script>  
<style lang='scss'>
	page{
		background-color: #f5f5f5;
	}
	.container{
		position: relative;
		background-color: #f5f5f5;
	}
	.topBG{
		position:absolute;
		top:0;
		left:0;
		width:750rpx;
		height: 483rpx;
	}
	.top{
		width:750rpx;
		height:483rpx;
		position: relative;
		z-index: 2;
		.user-info-box{
			display: flex;
			align-items: center;
			position: absolute;
			top:142rpx;
			left: 24rpx;
			.portrait{
				width:119rpx;
				height:119rpx;
				border-radius: 119rpx;
			}
			.info-box{
				margin-left: 17rpx;
				.username{
					font-size:33rpx;
					font-family:PingFang SC;
					font-weight:bold;
					color:rgba(43,9,0,1);
				}
				.codeFrame{
					display: flex;
					align-items: center;
					margin-top: 14rpx;
					.code{
						width:141rpx;
						height:44rpx;
						background-image: url('~@/static/userCodeBG.png');
						background-size: 141rpx 44rpx;
						line-height: 44rpx;
						text-align: center;
						font-size:31rpx;
						font-family:PingFang SC;
						font-weight:500;
						color:rgba(43,9,0,1);
					}
					.copyButton{
						width:154rpx;
						height:44rpx;
						background:rgba(51,51,51,1);
						border-radius:22rpx;
						font-size:22rpx;
						font-family:PingFang SC;
						font-weight:500;
						color:rgba(255,255,255,1);
						line-height: 44rpx;
						text-align: center;
					}
				}
			}
			.toLogon{
				font-size:33rpx;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(43,9,0,1);
				margin-left: 20rpx;
			}
		}
	}

	.card{
		width:705rpx;
		height: 315rpx;
		margin: auto;
		margin-top: -168rpx;
		background-size: 705rpx 315rpx;
		position:relative;
		.cardBG{
			width:705rpx;
			height: 315rpx;
			position: absolute;
			top:0;
			left:0;
		}
		.tag{
			height:49rpx;
			padding: 0 10rpx;
			background:linear-gradient(83deg,rgba(53,53,53,1) 0%,rgba(11,11,11,1) 100%);
			border-radius:14rpx 0px 14rpx 0px;
			font-size:21rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(251,205,156,1);
			display: flex;
			align-items: center;
			justify-content: center;
			position: absolute;
			top:0;
			left:0;
			z-index: 2;
			image{
				width:22rpx;
				height: 22rpx;
			}
		}
		.cardTop{
			display: flex;
			padding-left: 31rpx;
			padding-right: 119rpx;
			padding-top: 40rpx;
			align-items: center;
			justify-content: space-between;
			height: 247rpx;
			width: 100%;
			position: relative;
			z-index: 2;
			.topLeftTitle{
				font-size:25rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(255,255,255,1);
				.mt{
					width:25rpx;
					height:25rpx;
					margin-right: 6rpx;
				}
				.rightDeg{
					width:10rpx;
					height: 19rpx;
					margin-left: 6rpx;
				}
			}
			.topLeftNumber{
				font-size:49rpx;
				font-family:PingFang SC;
				font-weight:800;
				color:rgba(255,255,255,1);
				margin-top: 22rpx;
			}
			.topRight{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.topRightTitle{
					font-size:22rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(255,255,255,1);
				}
				.topRightNumber{
					font-size:35rpx;
					font-family:PingFang SC;
					font-weight:800;
					color:rgba(255,255,255,1);
					margin-top: 22rpx;
				}
			}
		}
		.cardBottom{
			width:656rpx;
			height:47rpx;
			background:linear-gradient(16deg,rgba(255,229,184,1) 0%,rgba(255,207,158,1) 100%);
			border-radius:14rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 14rpx 0 8rpx;
			margin: auto;
			position: relative;
			z-index: 2;
			.bottomLeft{
				display: flex;
				align-items: center;
				font-size:22rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(51,51,51,1);
				.yellow{
					color: #E38A3A;
				}
				image{
					width:24rpx;
					height: 24rpx;
					margin-right: 7rpx;
				}
			}
			.bottomRight{
				display: flex;
				align-items: center;
				font-size:22rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(117,96,73,1);
				image{
					width:10rpx;
					height: 19rpx;
					margin-left: 7rpx;
				}
			}
		}
	}
	.navFrame{
		width:574rpx;
		margin: auto;
		margin-top: 30rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.nav{
			width: 25%;
			.navImg{
				width:84rpx;
				height:84rpx;
				margin: auto;
				display: block;
			}
			.navTitle{
				font-size:24rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(34,34,34,1);
				text-align: center;
				margin-top: 20rpx;
			}
		}
	}
	.bothFrame{
		width:738rpx;
		margin:auto;
		margin-top: 28rpx;
		display: flex;
		align-items: center;
		image{
			width: 368rpx;
			height:140rpx;
		}
	}
	.bigPic{
		width:706rpx;
		height:151rpx;
		border-radius: 10rpx;
		display: block;
		margin: auto;
		margin-top: 17rpx;
	}
	.otherFrame{
		width:706rpx;
		margin: auto;
		margin-top: 33rpx;
		background:rgba(255,255,255,1);
		box-shadow:0px 0rpx 13px 1rpx rgba(0, 0, 0, 0.1);
		border-radius:7rpx;
		padding: 47rpx 0 47rpx 24rpx;
		.otherTitle{
			font-size:25rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(34,34,34,1);
		}
		.otherList{
			margin: auto;
			margin-top: 58rpx;
			width: 597rpx;
			display: flex;
			align-items: center;
			.otherPoint{
				width:25%;
				.otherImg{
					width:35rpx;
					height:35rpx;
					display: block;
					margin: auto;
				}
				.otherPointTitle{
					font-size:22rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(102,102,102,1);
					margin-top: 20rpx;
					text-align: center;
				}
			}
		}
	}
</style>