import Vue from 'vue'
import {postFetch} from '@/util/request_UT.js'
export default {
  namespaced:true,
  state: {
	  id:'',
	hasLogin: false,
	userInfo: {},
	phone:'',
	nickname:'',
	user_tooken:'',
	avatar:'',
	invitation:'',
	pinvitation:'',
	superior_head:'',
	network:true,
	identity_type:0,
	cacheTitle:'',
	fans1:[],
	fans2:[],
	fans3:[],
	is_business:0
  },
  mutations: {
	setCacheTitle(state, data){
		state.cacheTitle=data
	},
	network(state, data){
		state.network=data
	},
	setBusiness(state, data) {
		state.is_business = data;
		uni.setStorageSync('userInfo',state);
	},
	login(state, data) {
		state.id = data.id;
		state.hasLogin = true;
		state.phone = data.phone
		state.nickname = data.nickname
		state.user_tooken = data.user_token||data.user_tooken
		state.invitation = data.invitation
		state.avatar = data.avatar
		state.pinvitation = data.pinvitation
		state.superior_head = data.superior_head
		state.identity_type = data.identity_type
		Vue.set(state,'fans1',data.fans1)
		Vue.set(state,'fans2',data.fans2)
		Vue.set(state,'fans3',data.fans3)
		state.is_business=data.is_business||data.business_id
		uni.setStorageSync('userInfo',state);
	},
	logout(state) {
		state.id = '';
		state.hasLogin = false;
		state.phone = ''
		state.nickname = ''
		state.user_tooken = ''
		state.invitation = ''
		state.avatar = ''
		state.pinvitation = ''
		state.superior_head = ''
		state.identity_type = ''
		Vue.set(state,'fans1',[])
		Vue.set(state,'fans2',[])
		Vue.set(state,'fans3',[])
		state.is_business=''
		uni.setStorageSync('userInfo',state);
	}
  },
  actions:{
	  setCacheTitle(context,data){
		  context.commit('setCacheTitle',data)
	  },
	  network(context,data){
	  	context.commit('network',data)
	  },
	async logon(context,data){
		let _this=this;
		let res = await postFetch('index.php/index/login/login',{phone:data.phone,password:data.password},false)
		console.log("logon",JSON.stringify(res.data))
		if(res.data.status != 200){
			if(data.callback){
				data.callback(res.data.msg)
			}
		}else{
			res.data.avatar=res.data.userpic
			res.data.fans1=[];
			res.data.fans2=[];
			res.data.fans3=[];
			if(res.data.children && res.data.children.children &&res.data.children.children.length){
				res.data.fans1= res.data.children.children
				res.data.children.children.map(function(v){
					if(v.children && v.children.length){
						v.children.map(function(v2){
							res.data.fans2.push(v2)
							if(v2.children && v2.children.length){
								v2.children.map(function(v3){
									res.data.fans3.push(v3)
								})
							}
						})
					}
				})
			}
			context.commit('login',res.data)
			if(data.callback){
				data.callback()
			}
		}
	},
	setLogon(context,data){
		context.commit('login',data)
	},
	logout(context,data){
		context.commit('logout')
	},
	setBusiness(context,data){
		context.commit('setBusiness',data)
	}
  }
}