<template>
			<web-view :src="url" :webview-styles="st" class="webview"></web-view>
</template>

<script>
	import {decrypt64} from '@/util/security_UT.js'
	import navBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components:{
			navBar
		},
		data() {
			return {
				url:'',
				showTitle:"",
				st:{

				}
			};
		},
		onReady(){
			let _this=this;
			var currentWebview = this.$mp.page.$getAppWebview() //获取当前页面的webview对象
			       setTimeout(function() {
				if(_this.showTitle){
					uni.setNavigationBarTitle({
						title:_this.showTitle
					})
				}
			       }, 500); //如果是页面初始化调用时，需要延时一下
		},
		onLoad(option){
			let _this=this;
			_this.url=decrypt64(option.url)
			if(option.title){
				this.showTitle=option.title
			}
		},
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) {
				plus.webview.close('yijiayou')
				uni.switchTab({
					url:'/pages/index/index'
				})
			}
		}
	}
</script>

<style lang="scss">
	.page{
		width: 750rpx;
		height: 100%;
		.navBarCP{
			padding-top: var(--status-bar-height);
			position: relative;
			z-index: 999999999999999999999999999999;
		}
	}
</style>
