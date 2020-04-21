<template>
	<pageCP>
	<view class="page">
		<swiper class="swiper" :indicator-dots="true" :autoplay="true">
			<swiper-item class="carousel-item">
				<image src="/static/welcome0.png"  mode="widthFix" key="1" :style="{width:(750/s)+'rpx'}"/>
			</swiper-item>
			<swiper-item class="carousel-item">
				<image src="/static/welcome1.png"  mode="widthFix" key="2" :style="{width:(750/s)+'rpx'}"/>
			</swiper-item>
			<swiper-item class="carousel-item">
				<image src="/static/welcome2.png"  mode="widthFix" key="3" :style="{width:(750/s)+'rpx'}"/>
				<image class="button" src="/static/startButton.png" @click="go" :style="{top:(1055/s)+'rpx'}"/>
			</swiper-item>
		</swiper>
	</view>
	</pageCP>
</template>

<script>
	import allpage from '@/mixin/allPage'
	export default {
		data() {
			return {
				s:1
			};
		},
		onLoad(){
			let _this=this;
			uni.getSystemInfo({
				success(res){
					console.log('系统信息',res)
					if(res.screenWidth/res.screenHeight>750/1200){
						let rpx=res.screenWidth/750
						_this.s=(1200*rpx)/res.screenHeight
					}
					if(res.platform=='ios'&&((res.screenWidth/res.screenHeight)==(2048/2732)||(res.screenWidth/res.screenHeight)==(2732/2048))){
						console.log('是ipad')
					}else{
						console.log('不是ipad')
					}
				}
			})
		},
		methods:{
			go(){
				console.log('go')
				try{
					uni.reLaunch({
						url: '/pages/index/index'
					})
				}catch(e){
					console.log('error',e)
				}
				
				
			}
		}
	}
</script>

<style lang="scss">
	.page{
		width: 750rpx;
		position: fixed;
		top:0;
		bottom:0;
		left:0;
		padding-top: var(--status-bar-height);
		background-color: #fff;
		.swiper{
			width:750rpx;
			height: 100%;
			image{
				// width:750rpx;
				display: block;
				margin: auto;
			}
			.button{
				width:342rpx !important;
				height:78rpx !important;
				position: absolute;
				// top:1055rpx;
				left:201rpx;
			}
		}
	}
</style>
