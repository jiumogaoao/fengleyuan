<template>
	<view class="content b-t">
		<view class="listFrame" v-if="addressList.length">
			<view class="list b-b" v-for="(item, index) in addressList" :key="index" @click="checkAddress(item)">
				<view class="wrapper">
					<view class="address-box">
						<text v-if="item.default" class="tag">默认</text>
						<text class="address">{{item.province}}省{{item.city}}市{{item.area}}区{{item.address}}</text>
					</view>
					<view class="u-box">
						<text class="name">{{item.name}}</text>
						<text class="mobile">{{item.mobile}}</text>
					</view>
				</view>
				<image class="bianji" @click.stop="addAddress('edit', index)" src="/static/editPlace.png"></image>
			</view>
		</view>
		<image v-else src="/static/empty.png" class="noData"></image>
		<!-- <text style="display:block;padding: 16upx 30upx 10upx;lihe-height: 1.6;color: #fa436a;font-size: 24upx;">
			重要：添加和修改地址回调仅增加了一条数据做演示，实际开发中将回调改为请求后端接口刷新一下列表即可
		</text> -->
		
		<button class="add-btn" @click="addAddress('add')">新增地址</button>
	</view>
</template>

<script>
	export default {
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
		margin-top: 19rpx;
		width: 750rpx;
		background-color: #fff;
		padding: 0 18rpx 0 47rpx;
	}
	.list{
		width:100%;
		display: flex;
		align-items: center;
		height: 111rpx;
		justify-content: space-between;
		border-bottom: 1px solid rgba(241,242,246,1);
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
			background:rgba(250,197,35,1);
			font-size:20rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(255,255,255,1);
			line-height: 28rpx;
			text-align: center;
			margin-right: 20rpx;
		}
		.address{
			font-size:26rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(34,34,34,1); 
		}
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
			margin-right: 22upx;
			font-size:20rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(153,153,153,1);
		}
		.mobile{
			font-size:20rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(153,153,153,1);
		}
	}
	.bianji{
		width:42rpx;
		height: 42rpx;
	}
	
	.add-btn{
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
		margin-top: 273rpx;
	}
</style>
