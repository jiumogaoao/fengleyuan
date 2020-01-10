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
		// if(!uni.getStorageSync('cacheCheck')){
			// #ifndef H5
			let nowVersion = plus.runtime.version;
			console.log('version',plus.runtime.version)
			postFetch('index.php/index/index/appnumber',{},false,function(res){
				if(res.data.status!=200){
					uni.showToast({
						title:res.data.msg,
						icon:'none'
					})
				}else{
					if(res.data.data.number != nowVersion){
						if(!uni.getStorageSync('versionCheck')){
						let newVersionSubNVue = uni.getSubNVueById('newVersionPopup')
						uni.$off('newVersionCancel')
						uni.$on('newVersionCancel',function(){
							newVersionSubNVue.hide()
						})
						uni.$off('newVersionGo')
						uni.$on('newVersionGo',function(){
							// newVersionSubNVue.hide()
							let appurl='';
							if (plus.os.name=="Android") {  
							    appurl = res.data.data.app_url; //这个是通用应用市场，如果想指定某个应用商店，需要单独查这个应用商店的包名或scheme及参数  
							}  
							else{  
							    appurl = "https://apps.apple.com/cn/app/%E8%9C%9C%E8%9C%82%E5%A4%A9%E5%A0%82/id1492021582";  
							}
							plus.runtime.openURL(appurl)
						})
						newVersionSubNVue.show('popup',200,()=>{
							console.log('newVersionShow')
							uni.setStorageSync('versionCheck',1)
						})
						}
						return;
					}
					uni.getClipboardData({
					    success: function (res) {
							if(res.data.length && res.data.replace(/\s*/g,"").length && uni.getStorageSync('firstIn')==1 && uni.getStorageSync('cacheTitle') != res.data && typeof(res.data)=="string"){
								const subNVue = uni.getSubNVueById('catchPopup')
									uni.$off('popUpCancel')
									uni.$on('popUpCancel',function(){debugger;
										subNVue.hide()
									})
									uni.$off('popUpGo')
									uni.$once('popUpGo',function(){debugger;
										subNVue.hide()
										uni.navigateTo({
											url:'/pages/search/search?keywork='+res.data
										})
									})
								
								
									setTimeout(function(){
										subNVue.show('popup',200,()=>{
											uni.$emit('cacheTitle',res.data)
											uni.setStorageSync('cacheTitle',res.data)
											// _this.$store.dispatch("userST/setCacheTitle",res.data)
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
				}
			})
			// #endif
			
			
		
		// }
	},
	computed:{
		
	},
	onReady(){
		
		
	}
}