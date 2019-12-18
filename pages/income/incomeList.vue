<template>
	<view>
		<image src="/static/incomeList0.png" class="top"/>
		<block v-if="Object.keys(list).length" v-for="(v,i) in list" :key="i">
			<view class="title">{{v.created_at}}</view>
			<view class="list">
				<view class="point head">
					<view class="left">
						<image src="/static/incomeList2.png"></image>
						<text>来源</text>
					</view>
					<view class="center">
						<image src="/static/incomeList1.png"></image>
						<text>订单号</text>
					</view>
					<view class="right">
						<image src="/static/productIcon02.png"></image>
						<text>蜜糖</text>
					</view>
				</view>
				<view class="point" v-if="v.oneself">
					<view class="left">
						<text>自购</text>
					</view>
					<view class="center">
						<text>{{v.oneself.order_id}}</text>
					</view>
					<view class="right">
						<text>{{v.oneself.income}}</text>
					</view>
				</view>
				<view class="point" v-if="v.offline">
					<view class="left">
						<text>下级购物类型</text>
					</view>
					<view class="center">
						<text>/</text>
					</view>
					<view class="right">
						<text>{{v.offline.income}}</text>
					</view>
				</view>
			</view>
		</block>
		<view class="noMessage" style="top:437rpx;" v-else>
			<image src="/static/empty.png"/>
		</view>

	</view>
</template>

<script>
	import allpage from '@/mixin/allPage'
	import {postFetch} from '@/util/request_UT.js';
	export default {
		mixins:[allpage],
		data() {
			return {
				list:{}
			};
		},
		methods:{
			
		},
		onLoad(){
			let _this=this;
			postFetch('index.php/index/login/vip_data',{id:this.$store.state.userST.id,user_token:this.$store.state.userST.user_tooken},false,function(res){
				console.log('incomeList',res)
				let newO={}
				res.data.oneself.map(function(v,i){
					if(!newO[v.order_id]){
						newO[v.order_id]={}
					}
					newO[v.order_id].oneself=v
					newO[v.order_id].created_at=v.created_at
				})
				res.data.offline.map(function(v,i){
					if(!newO[v.order_id]){
						newO[v.order_id]={}
					}
					newO[v.order_id].offline=v
					newO[v.order_id].created_at=v.created_at
				})
				_this.$set(_this,'list',newO)
				console.log("_this.list",_this.list)
			})
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #f6f6f6;
	}
	.top{
		width:750rpx;
		height: 437rpx;
	}
	.title{
		width: 750rpx;
		height: 56rpx;
		background:rgba(245,246,248,1);
		padding: 0 49rpx;
		font-size:28rpx;
		font-family:PingFang SC;
		font-weight:800;
		color:rgba(102,102,102,1);
		line-height: 56rpx;
	}
	.list{
		width:750rpx;
		padding: 0 69rpx 28rpx 63rpx;
		background-color: #fff;
		.point{
			width:100%;
			height: 78rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.left{
				flex-shrink: 0;
				width: 112rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				text{
					font-size:25rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(102,102,102,1);
					text-align: center;
				}
			}
			.right{
				flex-shrink: 0;
				width:88rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				text{
					font-size:25rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(102,102,102,1);
					text-align: center;
				}
			}
			.center{
				flex-grow: 1;
				display: flex;
				align-items: center;
				justify-content: center;
				text{
					font-size:17rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(102,102,102,1);
					text-align: center;
				}
			}
		}
		.point.head{
			image{
				width:28rpx;
				height:28rpx;
				margin-right: 7rpx;
			}
			text{
				font-size:28rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(255,187,18,1); 
			}
		}
	}
</style>

