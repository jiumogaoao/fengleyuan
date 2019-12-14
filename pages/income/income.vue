<template>
	<view>
		<view class="top">
			<view class="topTop">
				<view class="topLeft">
					<view class="title">账户蜜糖余额</view>
					<view class="bigMoney">{{user_balance>0?user_balance:'- -'}}</view>
				</view>
				<view class="topRight">
					<view class="iconfont2">&#xe62a;</view>
					<view class="detail" @click="go('/pages/income/incomeList')">账单明细</view>
				</view>
			</view>
			<view class="topBottom">
				<view class="item">
					<view class="title">累计获得蜜糖</view>
					<view class="money">{{accumulated>0?accumulated:'- -'}}</view>
				</view>
				<view class="item">
					<view class="title">未结算蜜糖</view>
					<view class="money">{{unsettled>0?unsettled:'- -'}}</view>
				</view>
				<view class="item">
					<view class="title">月均获得蜜糖</view>
					<view class="money">{{move_avg>0?move_avg:'- -'}}</view>
				</view>
			</view>
		</view>
		<view class="bar">
			<view class="item" @click="changeState(0)">
				<view class="title">每日</view>
				<view class="line" v-if="state==0"></view>
			</view>
			<view class="item" @click="changeState(1)">
				<view class="title">每周</view>
				<view class="line" v-if="state==1"></view>
			</view>
			<view class="item" style="border-right: 0;" @click="changeState(2)">
				<view class="title">每月</view>
				<view class="line" v-if="state==2"></view>
			</view>
		</view>
		<view class="noMessage" style="top:462rpx;" v-if="!list[state].length">
			<image src="/static/empty.png"/>
		</view>
		<block v-if="state==0 && list[0].length">
			<view class="listHead">
				<view class="item" style="margin-left: 57rpx;">
					<view class="iconfont2">&#xe697;</view>
					<view class="title">日期</view>
				</view>
				<view class="item" style="margin-left: 292rpx;">
					<view class="iconfont2">&#xe606;</view>
					<view class="title">累计获得</view>
				</view>
			</view>
			<view class="listFrame" v-for="(v,i) in list[0]" :key="i">
				<view class="list">
					<view class="date">{{v.created_at}}</view>
					<view class="money">{{v.income}}蜜糖</view>
				</view>
			</view>
			<view class="listFoot"></view>
		</block>
		<block v-if="state==1 && list[1].length">
			<view class="listHead">
				<view class="item" style="margin-left: 57rpx;">
					<view class="iconfont2">&#xe697;</view>
					<view class="title">日期</view>
				</view>
				<view class="item" style="margin-left: 292rpx;">
					<view class="iconfont2">&#xe606;</view>
					<view class="title">累计获得</view>
				</view>
			</view>
			<view class="listFrame" v-for="(v,i) in list[1]" :key="i">
				<view class="list">
					<view class="date">{{v.created_at}}</view>
					<view class="money">{{v.income}}蜜糖</view>
				</view>
			</view>
			<view class="listFoot"></view>
		</block>
		<block v-if="state==2" && list[2].length>
			<view class="listHead">
				<view class="item" style="margin-left: 57rpx;">
					<view class="iconfont2">&#xe697;</view>
					<view class="title">日期</view>
				</view>
				<view class="item" style="margin-left: 292rpx;">
					<view class="iconfont2">&#xe606;</view>
					<view class="title">累计获得</view>
				</view>
			</view>
			<view class="listFrame" v-for="(v,i) in list[2]" :key="i">
				<view class="list">
					<view class="date">{{v.created_at}}</view>
					<view class="money">{{v.income}}蜜糖</view>
				</view>
			</view>
			<view class="listFoot"></view>
		</block>
	</view>
</template>

<script>
	import {postFetch} from '@/util/request_UT.js';
	export default {
		data() {
			return {
				state:0,
				accumulated:0,
				user_balance:0,
				unsettled:0,
				move_avg:0,
				list:[[],[],[]]
			};
		},
		onLoad(){
			let _this=this;
			postFetch('index.php/index/login/vip_profit',{id:this.$store.state.userST.id,user_token:this.$store.state.userST.user_tooken,type:1},false,function(res){
				console.log('income1',res)
				_this.accumulated = res.data.accumulated[0].income
				_this.user_balance = res.data.user_balance[0].income
				_this.unsettled = res.data.unsettled[0].commission
				_this.move_avg = res.data.move_avg
				_this.$set(_this.list,0,res.data.list)
			})
			postFetch('index.php/index/login/vip_profit',{id:this.$store.state.userST.id,user_token:this.$store.state.userST.user_tooken,type:2},false,function(res){
				console.log('income2',res)
				_this.accumulated = res.data.accumulated[0].income
				_this.user_balance = res.data.user_balance[0].income
				_this.unsettled = res.data.unsettled[0].commission
				_this.move_avg = res.data.move_avg
				_this.$set(_this.list,1,res.data.list)
			})
			postFetch('index.php/index/login/vip_profit',{id:this.$store.state.userST.id,user_token:this.$store.state.userST.user_tooken,type:3},false,function(res){
				console.log('income3',res)
				_this.accumulated = res.data.accumulated[0].income
				_this.user_balance = res.data.user_balance[0].income
				_this.unsettled = res.data.unsettled[0].commission
				_this.move_avg = res.data.move_avg
				_this.$set(_this.list,2,res.data.list)
			})
		},
		methods:{
			changeState(num){
				this.state = num
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
		background-color: #f6f6f6;
	}
	.top{
		width: 750rpx;
		height: 380rpx;
		background-image: linear-gradient(to top right, #D33D34, #EC6548);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding-top: 70rpx;
		.topTop{
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.topLeft{
				margin-left: 36rpx;
				.title{
					font-size: 23rpx;
					color: #fff;
				}
				.bigMoney{
					font-size: 44rpx;
					color: #fff;
					font-weight: bold;
					margin-top: 33rpx;
				}
			}
			.topRight{
				margin-right: 58rpx;
				width:193rpx;
				height:47rpx;
				background-color: #fff;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 47rpx;
				.iconfont{
					color: #D33D34;
				}
				.detail{
					font-size: 25rpx;
					color: #D33D34;
					margin-left: 13rpx;
				}
			}
		}
		.topBottom{
			display: flex;
			justify-content: space-between;
			width: 100%;
			margin-top: 30rpx;
			padding: 0 36rpx;
			.item{
				display: flex;
				flex-direction: column;
				align-items: center;
				.title{
					font-size: 23rpx;
					color: #fff;
				}
				.money{
					font-size: 28rpx;
					color: #fff;
					margin-top: 28rpx;
				}
			}
		}
	}
	.bar{
		width:750rpx;
		background-color: #fff;
		height:82rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.item{
			height: 100%;
			flex-grow: 1;
			flex-shrink: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;
			.title{
				font-size: 28rpx;
			}
			.line{
				width:34rpx;
				height: 4rpx;
				background-color: #333;
				position: absolute;
				bottom:0;
				display: block;
			}
		}
	}
	.listHead{
		width:750rpx;
		height: 82rpx;
		display: flex;
		align-items: center;
		.item{
			display: flex;
			align-items: center;
			.iconfont{
				font-size: 27rpx;
				color: #333333;
			}
			.title{
				font-size: 27rpx;
				color: #333333;
				margin-left: 10rpx;
			}
		}
	}
	.listFrame{
		width:712rpx;
		background-color: #fff;
		margin: auto;
		.list{
			width: 631rpx;
			height: 99rpx;
			margin: auto;
			border-bottom: 1px solid #ddd;
			display: flex;
			align-items: center;
			.date{
				font-size: 25rpx;
				width: 376rpx;
				color: #333;
				font-weight: bold;
			}
			.money{
				font-size: 25rpx;
				color: #FF5500;
				font-weight: bold;
			}
		}
	}
	.listFoot{
		width:712rpx;
		height: 47rpx;
		background-color: #fff;
		margin: auto;
	}
</style>
