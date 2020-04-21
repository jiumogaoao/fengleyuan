import {postFetch} from '@/util/request_UT.js'
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
			uni.navigateBack();
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
		return;
		// if(!uni.getStorageSync('cacheCheck')){
			// #ifndef H5
			// let nowVersion = plus.runtime.version;
			// console.log('version',plus.runtime.version)
			// postFetch('index.php/index/index/appnumber',{},false,function(res){
			// 	if(res.data.status!=200){
			// 		uni.showToast({
			// 			title:res.data.msg,
			// 			icon:'none'
			// 		})
			// 	}else{
			// 		// uni.getClipboardData({
			// 		//     success: function (res) {
			// 		// 		if(res.data.length && res.data.replace(/\s*/g,"").length && uni.getStorageSync('firstIn')==1 && uni.getStorageSync('cacheTitle') != res.data && typeof(res.data)=="string"){
			// 		// 			const subNVue = uni.getSubNVueById('catchPopup')
			// 		// 				uni.$off('popUpCancel')
			// 		// 				uni.$on('popUpCancel',function(){debugger;
			// 		// 					subNVue.hide()
			// 		// 				})
			// 		// 				uni.$off('popUpGo')
			// 		// 				uni.$once('popUpGo',function(){debugger;
			// 		// 					subNVue.hide()
			// 		// 					uni.navigateTo({
			// 		// 						url:'/pages/search/search?keywork='+res.data
			// 		// 					})
			// 		// 				})
								
								
			// 		// 				setTimeout(function(){
			// 		// 					subNVue.show('popup',200,()=>{
			// 		// 						uni.$emit('cacheTitle',res.data)
			// 		// 						uni.setStorageSync('cacheTitle',res.data)
			// 		// 						// _this.$store.dispatch("userST/setCacheTitle",res.data)
			// 		// 					    console.log('subNVue 原生子窗体显示成功');
			// 		// 						// uni.setStorageSync('cacheCheck',1)
			// 		// 						// uni.setClipboardData({
			// 		// 						//     data: '',
			// 		// 						//     success: function () {
			// 		// 						//         console.log('清除缓存成功');
			// 		// 						//     }
			// 		// 						// });
			// 		// 					})
			// 		// 				},1000)
			// 		// 		}
			// 		//     }
			// 		// });
			// 	}
			// })
			// #endif
			
			
		
		// }
	},
	computed:{
		
	},
	onReady(){
		
		
	}
}