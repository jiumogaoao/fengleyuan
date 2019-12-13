<template>
	<web-view :src="url" :webview-styles="st"></web-view>
</template>

<script>
	import {decrypt64} from '@/util/security_UT.js'
	export default {
		data() {
			return {
				url:'',
				st:{
					width:'100%',
					height:'100%'
				}
			};
		},
		onLoad(option){
			let _this=this;
			_this.url=decrypt64(option.url)
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

</style>
