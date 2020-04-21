<template>
	<pageCP>
				<!-- <web-view :src="url" :webview-styles="st" class="webview"></web-view> -->
				<view></view>
				</pageCP>
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

				},
				dl:null,
				wv:null
			};
		},
		onShow(){
			if(!this.$store.state.userST.network){
				uni.navigateTo({
							url:'/pages/noNetwork/noNetwork'
						})
			}else{
				if(this.wv){
					wv.loadURL(this.url)
				}
			}
		},
		onHide(){
			// clearInterval(this.dl)
		},
		onReady(){
			
		},
		onBackPress(){
			// this.wv.close()
		},
		onLoad(option){
			
			let _this=this;
			_this.url=decrypt64(option.url)
			if(option.title){
				this.showTitle=option.title
			}
			       setTimeout(function() {
				if(_this.showTitle){
						uni.setNavigationBarTitle({
							title:_this.showTitle
						})
				}
				_this.wv=plus.webview.open(_this.url,"wv",{
					"zindex":0,
					"top":60,
					"left":0,
					"right":0,
					"bottom":0
				},null,null,function(){
					// const subNVue = uni.getSubNVueById('title')
					// // subNVue.setStyle({
					// // 	"zindex":99999999999999999999999
					// // })
					// subNVue.show('none',0,()=>{
					// 	console.log("显示头部")
					// })
				})
				let currentWebview = _this.$mp.page.$getAppWebview()
					currentWebview.append(_this.wv)
			       }, 500); //如果是页面初始化调用时，需要延时一下
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
