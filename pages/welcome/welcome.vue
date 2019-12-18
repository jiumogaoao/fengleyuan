<template>
	<view class="page">
		<swiper class="swiper" :indicator-dots="true" :autoplay="true">
			<swiper-item class="carousel-item">
				<image src="/static/welcome0.png"  mode="widthFix" key="1"/>
			</swiper-item>
			<swiper-item class="carousel-item">
				<image src="/static/welcome1.png"  mode="widthFix" key="2"/>
			</swiper-item>
			<swiper-item class="carousel-item">
				<image src="/static/welcome2.png"  mode="widthFix" key="3"/>
				<image class="button" src="/static/startButton.png" @click="go"/>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import allpage from '@/mixin/allPage'
	export default {
		data() {
			return {
				
			};
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
				width:750rpx;
				margin: auto;
			}
			.button{
				width:342rpx !important;
				height:78rpx !important;
				position: absolute;
				top:1055rpx;
				left:201rpx;
			}
		}
	}
</style>
