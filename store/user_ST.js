import Vue from 'vue'
import {postFetch} from '@/util/request_UT.js'
export default {
  namespaced:true,
  state: {
	hasLogin: false,
	userInfo: {},
	phone:'',
	nickname:'',
	user_tooken:'',
	avatar:'',
	invitation:''
  },
  mutations: {
	login(state, data) {
		state.hasLogin = true;
		state.phone = data.phone
		state.nickname = data.nickname
		state.user_tooken = data.user_tooken
		state.invitation = data.invitation
		state.avatar = data.avatar
		uni.setStorageSync('userInfo',state);
	},
	logout(state) {
		state.hasLogin = false;
		state.phone = ''
		state.nickname = ''
		state.user_tooken = ''
	}
  },
  actions:{
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
			context.commit('login',res.data)
			if(data.callback){
				data.callback()
			}
		}
	},
	setLogon(context,data){
		context.commit('login',data)
	}
  }
}