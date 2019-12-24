module.exports = {
	components:{},
	data() {
				return {
					havebind:0
				}
			},
	mounted(){
		
	},
	methods: {
		back(){
			if(this.$store.state.userST.network==true){
				uni.navigateBack();
			}else{
				uni.showLoading({
					title:'加载中'
				})
				setTimeout(function () {
				    uni.hideLoading();
				}, 4000);
			}
			
		},
		go(url){
			uni.navigateTo({
			    url: url
			});
		},
	},
	onLoad(){
		
	},
	onShow(){
		let _this=this
		// if(!uni.getStorageSync('cacheCheck')){
			
			uni.getClipboardData({
			    success: function (res) {
					if(res.data.length && uni.getStorageSync('firstIn')==1 && _this.$store.state.userST.cacheTitle != res.data){
						const subNVue = uni.getSubNVueById('catchPopup')
							uni.$off('popUpCancel')
							uni.$on('popUpCancel',function(){
								subNVue.hide()
							})
							uni.$off('popUpGo')
							uni.$once('popUpGo',function(){
								subNVue.hide()
								uni.navigateTo({
									url:'/pages/search/search?keywork='+res.data
								})
							})
						
						
							setTimeout(function(){
								subNVue.show('popup',200,()=>{
									uni.$emit('cacheTitle',res.data)
									_this.$store.dispatch("userST/setCacheTitle",res.data)
								    console.log('subNVue 原生子窗体显示成功');
									// uni.setStorageSync('cacheCheck',1)
									// uni.setClipboardData({
									//     data: '',
									//     success: function () {
									//         console.log('清除缓存成功');
									//     }
									// });
								})
							},1000)
					}
			    }
			});
			
		
		// }
	},
	computed:{
		
	},
	onReady(){
		
		
	}
}