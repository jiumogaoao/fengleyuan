<template>
	<pageCP>
	<view class="page">
		<view class="noMessage" style="top:524rpx;" v-if="(step==0&&!fans1.length)||(step==1&&!fans2.length)||(step==2&&!fans3.length)">
			<image src="/static/empty.png"/>
		</view>
		<view class="top">
			<view class="topTop">
				<view class="compass">
					<text class="iconfont2">&#xe60e;</text>
					<text class="compasser">您的推荐人</text>
				</view>
				<view class="user">
					<image :src="head" class="avatar"></image>
					<!-- <view class="userInfo"> -->
						<view class="userName">{{nickname}}</view>
					<!-- </view> -->
				</view>
			</view>
			<view class="topBottom">
				<view :class="{item:1,hl:step==0}" @click="changeStep(0)">
					<view class="number">{{fans1.length||0}}</view>
					<view class="title">直属粉丝</view>
				</view>
				<view :class="{item:1,hl:step==1}" @click="changeStep(1)">
					<view class="number">{{fans2.length||0}}</view>
					<view class="title">二代粉丝</view>
				</view>
				<view :class="{item:1,hl:step==2}" @click="changeStep(2)">
					<view class="number">{{fans3.length||0}}</view>
					<view class="title">二代以后粉丝</view>
				</view>
			</view>
		</view>
		<view class="bar">
			<view class="barFrame">
				<view class="item">
					<view class="title"><image src="/static/ft0.png"></image>粉丝信息</view>
				</view>
				<view class="item">
					<view class="title"><image src="/static/ft1.png"></image>累积获得蜜糖</view>
				</view>
				<view class="item">
					<view class="title"><image src="/static/ft2.png"></image>关系</view>
				</view>
			</view>
		</view>
		<block v-if="step==0 && fans1.length">
			<view class="listFrame">
				<view class="list" v-for="(v,i) in fans1" :key="i">
					<view class="fans">
						<image src="/static/missing-face.png" class="avatar"></image>
						<view class="fansInfo">
							<view class="fansName">{{v.nickname}}</view>
							<view class="fansPhone">{{v.userphone}}</view>
						</view>
					</view>
					<view class="number">{{v.sum}}</view>
					<view class="relation">直属粉丝</view>
				</view>
			</view>
		</block>
		<block v-if="step==1 && fans2.length">
			<view class="listFrame">
				<view class="list" v-for="(v,i) in fans2" :key="i">
					<view class="fans">
						<image src="/static/missing-face.png" class="avatar"></image>
						<view class="fansInfo">
							<view class="fansName">{{v.nickname}}</view>
							<view class="fansPhone">{{v.userphone}}</view>
						</view>
					</view>
					<view class="number">{{v.sum}}</view>
					<view class="relation">二代粉丝</view>
				</view>
			</view>
		</block>
		<block v-if="step==2 && fans3.length">
			<view class="listFrame">
				<view class="list" v-for="(v,i) in fans3" :key="i">
					<view class="fans">
						<image src="/static/missing-face.png" class="avatar"></image>
						<view class="fansInfo">
							<view class="fansName">{{v.nickname}}</view>
							<view class="fansPhone">{{v.userphone}}</view>
						</view>
					</view>
					<view class="number">{{v.sum}}</view>
					<view class="relation">二代以后的粉丝</view>
				</view>
			</view>
		</block>
	</view>
	</pageCP>
</template>

<script>
	import allpage from '@/mixin/allPage'
	export default {
		mixins:[allpage],
		data() {
			return {
				step:0
			};
		},
		methods:{
			changeStep(num){
				this.step = num
			}
		},
		computed:{
			phone(){return this.$store.state.userST.phone},
			nickname(){return this.$store.state.userST.pinvitation},
			head(){return this.$store.state.userST.superior_head || '/static/vipIcon.png'},
			fans1(){
				debugger;
				return this.$store.state.userST.fans1
				},
			fans2(){
				debugger;
				return this.$store.state.userST.fans2
				},
			fans3(){
				debugger;
				return this.$store.state.userST.fans3
				}
		}
	}
</script>

<style lang="scss" scoped>
	page,.page{
		background-color: #f7f7f7;
	}
	.top{
		width: 750rpx;
		height: 422rpx;
		background-image: linear-gradient(to top right, #494949, #15171D);
		display: flex;
		justify-content:space-between;
		align-items: center;
		flex-direction: column;
		padding-top: 120rpx;
		.topTop{
			width: 100%;
			padding-top: 20rpx;
			.compass{
				font-size: 22rpx;
				color: #fff;
				margin-left: 83rpx;
				.compasser{margin-left: 12rpx;}
			}
			.user{
				margin-left: 83rpx;
				display: flex;
				align-items: center;
				margin-top: 22rpx;
				.avatar{
					width:79rpx;
					height:79rpx;
					border-radius: 79rpx;
				}
				// .userInfo{
					
					.userName{
						margin-left: 28rpx;
						font-size: 23rpx;
						color: #fff;
					}
					// .userPhone{
					// 	font-size: 19rpx;
					// 	color: #fff;
					// 	margin-top: 14rpx;
					// }
				// }
			}
		}
		.topBottom{
			display: flex;
			justify-content: space-between;
			width: 93%;
			.item{
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				width: 220rpx;
				height:107rpx;
				border-radius: 10rpx 10rpx 0 0;
				background-image: linear-gradient(to right, #ffffff, #a0a0a0);
				.title{
					font-size: 22rpx;
					margin-top: 10rpx;
				}
				.number{
					font-size: 28rpx;
				}
			}
			.hl.item{
				background-image: linear-gradient(to right, #fffad7, #ffbb40);
			}
		}
	}
	.bar{
		width:750rpx;
		background-color: #fff;
		height:82rpx;
		
		.barFrame{
			width: 93%;
			margin: auto;
			height: 82rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.item{
				width: 220rpx;
				height: 100%;
				flex-shrink: 0;
				display: flex;
				justify-content: center;
				align-items: center;
				position: relative;
				.title{
					font-size:20rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(51,51,51,1);
					opacity:0.7;
					image{
						width: 30rpx;
						height:30rpx;
						margin-right: 20rpx;
					}
				}
			}
		}
		
	}
	.listFrame{
		width:712rpx;
		margin: auto;
		.list{
			width: 631rpx;
			height: 199rpx;
			margin: auto;
			border-bottom: 1px solid #ddd;
			display: flex;
			align-items: center;
			.fans{
				display: flex;
				align-items: center;
				width: 301rpx;
				.avatar{
					width:80rpx;
					height:80rpx;
					border-radius: 80rpx;
				}
				.fansInfo{
					margin-left: 10rpx;
				}
				.fansName{
					font-size:20rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(51,51,51,1);
				}
				.fansPhone{
					font-size:20rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(51,51,51,1);
					opacity:0.7;
					margin-top: 20rpx;
				}
			}
			.number{
				font-size:24rpx;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(51,51,51,1);
				width: 222rpx;
			}
			.relation{
				font-size:24rpx;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(51,51,51,1);
			}
		}
	}
</style>
