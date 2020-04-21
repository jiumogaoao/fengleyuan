<template>
	<pageCP>
	<view class="container">
		<view class="point" @click="toggleType(0)">
			<image class="bg" src="/static/businessType0.png"></image>
			<view class="selectFrame">
				<view class="radio">
					<view class="radioPoint" v-if="type==0"></view>
				</view>
				<text>我是个人创业者</text>
			</view>
		</view>
		<view class="point" @click="toggleType(1)">
			<image class="bg" src="/static/businessType1.png"></image>
			<view class="selectFrame">
				<view class="radio">
					<view class="radioPoint" v-if="type==1"></view>
				</view>
				<text>我是商业用户</text>
			</view>
		</view>
		<view class="button" @click="submit">确认</view>
		<view class="dsc">个人创业者无需营业执照也可上传商品</view>
	</view>
	</pageCP>
</template>

<script>
	export default {
		data() {
			return {
				type:0
			};
		},
		methods:{
			toggleType(t){
				this.type=t;
			},
			submit(){
				if(this.type==0){
					uni.navigateTo({
						url:'/pages/business/self'
					})
				}else{
					uni.navigateTo({
						url:'/pages/business/business'
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.container{
		display: flex;
		flex-direction: column;
		align-items: center;
		.point{
			width:461rpx;
			height:461rpx;
			position: relative;
			margin-top: 80rpx;
			.bg{
				width:461rpx;
				height:461rpx;
			}
			.selectFrame{
				position: absolute;
				left: 117rpx;
				bottom:65rpx;
				font-size:28rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(255,255,255,1);
				display: flex;
				align-items: center;
				.radio{
					width:31rpx;
					height:31rpx;
					border: 1px solid rgba(255,255,255,1);
					border-radius: 31rpx;
					margin-right: 10rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					.radioPoint{
						width:12rpx;
						height:12rpx;
						border-radius: 12rpx;
						background-color: #fff;
					}
				}
			}
		}
		.button{
			width:625rpx;
			height:83rpx;
			background:rgba(250,197,35,1);
			border-radius:42rpx;
			font-size:28rpx;
			font-family:PingFang SC;
			font-weight:bold;
			color:rgba(255,255,255,1);
			text-align: center;
			line-height: 83rpx;
			margin-top: 123rpx;
		}
		.dsc{
			font-size:25rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(153,153,153,1);
			margin-top: 10rpx;
		}
	}
</style>
