<template>
	<pageCP>
	<view class="frame">
		<image src="/static/vip.png" mode="widthFix" class="bg"></image>
		<!-- <view class="iconfont" @click="back">&#xe63d;</view> -->
		<view class="buttonFrame">
			<view class="button" style="background-color: #F4301A;margin-right:20rpx;" @click="go('/pages/share/share')">
				<image class="icon" src="/static/shareIcon1.png"></image>
				<view class="text">邀请粉丝</view>
			</view>
			<view class="button" style="background-color: #FF930C;" @click="togglePop">
				<image class="icon" src="/static/shareIcon0.png"></image>
				<view class="text">升级VIP</view>
			</view>
		</view>
		<view class="pop" v-if="pop">
			<view class="popFrame">
				<view class="popTop">
					<view class="info">
						<image src="/static/vipIcon.png"></image>
						<view class="infoRight">
							<view class="title">365VIP权益礼包</view>
							<view class="subTitle">花的更少，赚得更多</view>
						</view>
					</view>
					<image src="/static/close.png" class="close" @click="togglePop"/>
				</view>
				<view class="popCenter">
					<view class="list">
						<view class="listTitle">会员类型</view>
						<view class="optionList">
							<view class="option hl">A套餐</view>
							<view class="option">B套餐</view>
							<view class="option">C套餐</view>
						</view>
					</view>
					<view class="list">
						<view class="listTitle">套餐</view>
						<view class="optionList">
							<view class="option hl">1个</view>
						</view>
					</view>
					<view class="type">规格：红酒 x6，折扣8折，返利20%。</view>
				</view>
				<view class="popFoot">
					<view class="footTitle">需付款：<text class="price">￥120</text><text class="oldPrice">￥100</text></view>
					<view class="button" @click="go('/pages/order/createOrder')">立即付款</view>
				</view>
			</view>
		</view>
	</view>
	</pageCP>
</template>

<script>
	import allpage from '@/mixin/allPage'
	export default {
		mixins:[allpage],
		data() {
			return {
				pop:false
			};
		},
		methods:{
			togglePop(){
				uni.navigateTo({
					url:"/pages/search/search?salse=0"
				})
				//this.pop = !this.pop
			},
			back(){
				uni.navigateBack()
			},
			go(url){
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.frame{
		height: 100%;
		background-color: #000;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		.bg{
			width:750rpx;
		}
		.iconfont{
			font-size: 26rpx;
			color: #fff;
			position: absolute;
			left: 20rpx;
			top:var(--status-bar-height);
		}
		.buttonFrame{
			position: absolute;
			width: 750rpx;
			display: flex;
			justify-content: center;
			left: 0;
			bottom:100rpx;
			.button{
				width:307rpx;
				height:74rpx;
				border-radius:37rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				.icon{
					width:35rpx;
					height:35rpx;
					margin-right: 10rpx;
				}
				.text{
					font-size:31rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(255,255,255,1);
				}
			}
		}
		.pop{
			position: fixed;
			top:0;
			bottom:0;
			width:750rpx;
			background-color: rgba(0,0,0,0.3);
			.popFrame{
				width: 750rpx;
				background-color: #fff;
				position: absolute;
				bottom:0;
				left: 0;
				.popTop{
					width:750rpx;
					height: 180rpx;
					padding: 42rpx;
					display: flex;
					position: relative;
					.info{
						display: flex;
						image{
							width:167rpx;
							height:167rpx;
							margin-right: 27rpx;
							position: relative;
							top:-70rpx;
						}
						.infoRight{
							.title{
								font-size:33rpx;
								font-family:PingFang SC;
								font-weight:bold;
								color:rgba(34,34,34,1);
								line-height:35rpx;
							}
							.subTitle{
								font-size:25rpx;
								font-family:PingFang SC;
								font-weight:400;
								color:rgba(153,153,153,1);
								line-height:35rpx;
								margin-top: 28rpx;
							}
						}
					}
					.close{
						width: 42rpx;
						height:42rpx;
						position: absolute;
						top:21rpx;
						right:21rpx;
					}
				}
				.popCenter{
					padding: 0 40rpx;
					min-height: 586rpx;
					.list{
						font-size: 80rpx;
						margin-top: 28rpx;
						.listTitle{
							font-size:33rpx;
							font-family:PingFang SC;
							font-weight:bold;
							color:rgba(34,34,34,1);
							line-height:35rpx;
						}
						.optionList{
							width: 100%;
							display: flex;
							justify-content: space-between;
							align-items: center;
							flex-wrap: wrap;
							
							.option{
								width:188rpx;
								height:63rpx;
								background:rgba(241,241,241,1);
								border-radius:31rpx;
								margin-top: 28rpx;
								font-size:25rpx;
								font-family:PingFang SC;
								font-weight:400;
								color:rgba(34,34,34,1);
								line-height:63rpx;
								text-align: center;
							}
							.option.hl{
								width:188rpx;
								height:63rpx;
								background:rgba(251,239,201,1);
								border-radius:31rpx;
								font-size:25rpx;
								font-family:PingFang SC;
								font-weight:400;
								color:rgba(252,190,0,1);
								line-height:63rpx;
								text-align: center;
							}
						}
					}
					.type{
						font-size:21rpx;
						font-family:PingFang SC;
						font-weight:400;
						color:rgba(153,153,153,1);
						line-height:35rpx;
						margin-top: 28rpx;
					}
				}
				.popFoot{
					width:750rpx;
					height: 94rpx;
					border-top:1px solid #999999;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.footTitle{
						margin-left: 47rpx;
						font-size:26rpx;
						font-family:PingFang SC;
						font-weight:500;
						color:rgba(34,34,34,1);
						.price{
							font-size:35rpx;
							font-family:PingFang SC;
							font-weight:500;
							color:rgba(219,0,27,1);
						}
						.oldPrice{
							font-size:25rpx;
							font-family:PingFang SC;
							font-weight:500;
							color:rgba(153,153,153,1);
							margin-left: 7rpx;
							text-decoration: line-through;
						}
					}
					.button{
						width:277rpx;
						height:94rpx;
						background:linear-gradient(-90deg,rgba(221,141,69,1) 0%,rgba(250,197,35,1) 100%);
						line-height: 94rpx;
						text-align: center;
						font-size:35rpx;
						font-family:PingFang SC;
						font-weight:500;
						color:rgba(255,255,255,1);
					}
				}
			}
		}
	}
	
</style>
