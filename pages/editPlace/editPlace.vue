<template>
	<view>
		<view class="list">
			<view class="point">
				<view class="label">收货人</view>
				<input placeholder="请填写收货人"/>
			</view>
			<view class="point">
				<view class="label">手机号</view>
				<input placeholder="请填写收货人手机号"/>
			</view>
			<view class="point">
				<view class="label">选择地区</view>
				<input placeholder="省-市-区"/>
			</view>
			<view class="point">
				<view class="label">详细地址</view>
				<input placeholder="请填写详细地址"/>
			</view>
		</view>
		<view class="button" @click="back">保存</view>
	</view>
</template>

<script>
	import allpage from '@/mixin/allPage'
	export default {
		mixins:[allpage],
		data() {
			return {
				
			};
		},
		methods:{
			back(){
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #f5f6f8;
	}
	.list{
		width:750rpx;
		background-color: #fff;
		padding: 47rpx 0 25rpx 38rpx;
		.point{
			width:100%;
			height: 81rpx;
			border-bottom: 1px solid rgba(241,242,246,1);
			display: flex;
			justify-content: space-between;
			align-items: center;
			.label{
				font-size:26rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(34,34,34,1);
				flex-shrink: 0;
				width:176rpx;
			}
			input{
				flex-grow: 1;
				font-size:26rpx;
				font-family:PingFang SC;
				font-weight:500;
			}
		}
	}
	.button{
		width:625rpx;
		height:83rpx;
		background:linear-gradient(-90deg,rgba(221,141,69,1) 0%,rgba(250,197,35,1) 99%);
		border-radius:42rpx;
		line-height: 83rpx;
		margin: auto;
		margin-top: 134rpx;
		font-size:42rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(255,255,255,1);
		text-align: center;
	}
</style>
