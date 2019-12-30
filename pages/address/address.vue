<template>
	<view class="content b-t">
		<view class="listFrame" v-if="addressList.length">
			<view class="list b-b" v-for="(item, index) in addressList" :key="index" @click="checkAddress(item)">
				<view class="wrapper">
					<view class="address-box">
						<text v-if="item.default" class="tag">默认</text>
						<text class="address">{{item.province}}省{{item.city}}市{{item.area}}区</text>
					</view>
					<view class="detailArea">
						{{item.address}}
					</view>
					<view class="u-box">
						<text class="name">{{item.name}}</text>
						<text class="mobile">{{item.mobile}}</text>
					</view>
				</view>
				<image class="bianji" @click.stop="addAddress('edit', index)" src="/static/editPlace.png"></image>
				<image class="border" src="/static/mall.png"></image>
			</view>
		</view>
		<image v-else src="/static/empty.png" class="noData"></image>
		<!-- <text style="display:block;padding: 16upx 30upx 10upx;lihe-height: 1.6;color: #fa436a;font-size: 24upx;">
			重要：添加和修改地址回调仅增加了一条数据做演示，实际开发中将回调改为请求后端接口刷新一下列表即可
		</text> -->
		
		<view class="buttonFrame">
			<button class="add-btn" @click="addAddress('add')">新增地址</button>
			<button class="comfirm-btn">确定</button>
		</view>
		
	</view>
</template>

<script>
	import allpage from '@/mixin/allPage'
	export default {
		mixins:[allpage],
		data() {
			return {
				source: 0,
				addressList: [
					{
						name: '刘晓晓',
						mobile: '18666666666',
						addressName: '贵族皇仕牛排(东城店)',
						address: '贵族皇仕牛排(东城店)',
						province:'山西',
						city:'太原',
						area: '武侯区',
						default: true
					},{
						name: '刘大大',
						mobile: '18667766666',
						addressName: '龙回1区12号楼',
						address: '龙回1区12号楼',
						province:'广东',
						city:'广州',
						area: '黄埔',
						default: false,
					}
				]
			}
		},
		onLoad(option){
			console.log(option.source);
			this.source = option.source;
		},
		onShow(){
			this.addressList=uni.getStorageSync('addressList')||[]
		},
		methods: {
			//选择地址
			checkAddress(item){
				if(this.source == 1){
					//this.$api.prePage()获取上一页实例，在App.vue定义
					this.$api.prePage().addressData = item;
					uni.navigateBack()
				}
			},
			addAddress(type, index){
				uni.navigateTo({
					url: `/pages/address/addressManage?type=${type}&id=${index}`
				})
			},
			//添加或修改成功之后回调
			refreshList(data, type){
				//添加或修改后事件，这里直接在最前面添加了一条数据，实际应用中直接刷新地址列表即可
				this.addressList.unshift(data);
				
				console.log(data, type);
			}
		}
	}
</script>

<style lang='scss'>
	page{
		padding-bottom: 120upx;
	}
	.content{
		position: relative;
	}
	.b-t:after{
		border: 0 !important;
	}
	.noData{
		width:129rpx;
		height: 181rpx;
		display: block;
		margin:auto;
		margin-top: 273rpx;
	}
	.listFrame{
		width: 750rpx;
	}
	.list{
		width:100%;
		display: flex;
		align-items: center;
		height: 192rpx;
		justify-content: space-between;
		padding: 21rpx 32rpx 49rpx 32rpx;
		position: relative;
		margin-bottom: 28rpx;
		border-radius:21rpx;
		.border{
			width: 750rpx;
			height: 6rpx;
			position: absolute;
			left: 0;
			bottom: 0;
		}
	}
	.wrapper{
		display: flex;
		flex-direction: column;
		flex: 1;
	}
	.address-box{
		display: flex;
		align-items: center;
		.tag{
			width:56rpx;
			height:28rpx;
			background:#F32B3F;
			font-size:20rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(255,255,255,1);
			line-height: 28rpx;
			text-align: center;
			margin-right: 20rpx;
		}
		.address{
			font-size:24rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(51,51,51,1);
		}
	}
	.detailArea{
		font-size:32rpx;
		font-family:PingFang SC;
		font-weight:800;
		color:rgba(51,51,51,1);
		margin-top: 26rpx;
	}
	/* <view class="u-box">
		<text class="name">{{item.name}}</text>
		<text class="mobile">{{item.mobile}}</text>
	</view> */
	.u-box{
		margin-top: 19rpx;
		display: flex;
		align-items: center;
		.name{
			font-size:24rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(51,51,51,1);
			margin-right: 14rpx;
		}
		.mobile{
			font-size:24rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(51,51,51,1);
		}
	}
	.bianji{
		width:42rpx;
		height: 42rpx;
	}
	/* <view class="buttonFrame">
		<button class="add-btn" @click="addAddress('add')">新增地址</button>
		<button class="comfirm-btn">确定</button>
	</view> */
	.buttonFrame{
		display: flex;
		align-items: center;
		padding: 33rpx;
		justify-content: space-between;
		margin-top: 83rpx;
		.add-btn{
			width:322rpx;
			height:74rpx;
			border:2rpx solid rgba(243,43,63,1);
			border-radius:37rpx;
			font-size:31rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(243,43,63,1);
			line-height:70rpx;
			text-align: center;
		}
		.comfirm-btn{
			width:322rpx;
			height:74rpx;
			border:2rpx solid rgba(243,43,63,1);
			background:linear-gradient(20deg,rgba(240,45,64,1),rgba(239,65,83,1));
			border-radius:37rpx;
			font-size:31rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:#fff;
			line-height:70rpx;
			text-align: center;
		}
	}
	/* .add-btn{
		width:625rpx;
		height:83rpx;
		background:linear-gradient(-90deg,rgba(221,141,69,1) 0%,rgba(250,197,35,1) 99%);
		border-radius:42rpx;
		font-size:42rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(255,255,255,1);
		line-height: 83rpx;
		text-align: center;
		position: fixed;
		bottom:50rpx;
		left: 62.5rpx;
	} */
</style>
