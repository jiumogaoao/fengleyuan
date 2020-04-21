<template>
	<pageCP>
	<view class="page">
		<view class="step" v-if="step==1" key="1">
			<view class="inputFrame">
				<view class="label">手机号码</view>
				<view class="inputSubFrame">
					<input placeholder="请输入手机号码" v-model="phone" type="number"/>
				</view>
			</view>
			<view class="inputFrame">
				<view class="label">手机验证码</view>
				<view class="inputSubFrame">
					<input placeholder="请输入您的手机验证码" v-model="code" type="number"/>
					<view class="getcode" v-if="nextTime">{{nextTime}}秒后可重发</view>
					<view class="getcode" @click="getCode" v-else>获取验证码</view>
				</view>
			</view>
			<view class="button" @click="next">下一步</view>
		</view>
		<view class="step" v-if="step==2" key="2">
			<view class="inputFrame">
				<view class="label">密码</view>
				<view class="inputSubFrame">
					<input placeholder="5~10位大小写英文或数字" v-model="password" password="true"/>
				</view>
			</view>
			<view class="inputFrame">
				<view class="label">确认密码</view>
				<view class="inputSubFrame">
					<input placeholder="请再次输入您的密码" v-model="password2" password="true"/>
				</view>
			</view>
			<view class="button" @click="regest">确认重置</view>
		</view>
		<view class="step" v-if="step==3" key="3">
			<image src="/static/resetSuccess.png" class="successIcon"></image>
			<view class="dsc">密码重置成功</view>
			<view class="button" @click="go('/pages/public/login')">立即登录</view>
		</view>
		<image src="/static/regestBottom.png" class="regestBottom"></image>
	</view> 
	</pageCP>
</template>

<script>
	import allpage from '@/mixin/allPage'
	import {postFetch} from '@/util/request_UT.js'
	export default {
		mixins:[allpage],
		data() {
			return {
				phone:'',
				email:'chm'+(new Date().getTime()),
				password:'',
				password2:'',
				code:'',
				id:'',
				nextTime:0,
				showPassword:false,
				step:1,
				agreement:"<用户协议>",
				policy:"<隐私政策>"
			};
		},
		methods:{
			next(){
				let _this=this
				if(_this.phoneCheck()&&_this.codeCheck()){
					this.step=2
				}
			},
			go(url){
				uni.navigateTo({
					url
				})
			},
			phoneCheck(){
				if(!this.phone.length){
					uni.showToast({
						title:'请输入手机号',
						icon:'none'
					})
					return false;
				}else if(!(/^1[3456789]\d{9}$/.test(this.phone))){
								uni.showToast({
								    title: '请输入正确的手机号',
									icon:'none',
								    duration: 1000
								});
							return false;
						}else{
							return true;
						}
			},
			emailCheck(){
				return true;
				if(!this.email.length){
					uni.showToast({
						title:'请输入邮箱',
						icon:'none'
					})
					return false;
				}else if(!(/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.email))){
								uni.showToast({
								    title: '请输入正确的邮箱',
									icon:'none',
								    duration: 1000
								});
							return false;
						}else{
							return true;
						}
			},
			passwordCheck(){
				if(!this.password.length){
					uni.showToast({
						title:'请输入密码',
						icon:'none'
					})
					return false;
				}else if(this.password.length < 5 || this.password.length>10){
					uni.showToast({
						title:'密码须5-10位',
						icon:'none'
					})
					return false;
				}else if(!(/^[a-zA-Z\d]+$/.test(this.password))){
					uni.showToast({
						title:'密码格式错误',
						icon:'none'
					})
					return false;
				}else{
					return true;
				}
			},
			password2Check(){
				if(!this.password2.length){
					uni.showToast({
						title:'请输入确认密码',
						icon:'none'
					})
					return false;
				}else if(this.password != this.password2){
					uni.showToast({
						title:'验证密码需要与密码相同',
						icon:'none'
					})
					return false;
				}else{
					return true;
				}
			},
			codeCheck(){
				if(!this.code.length){
					uni.showToast({
						title:'请输入验证码',
						icon:'none'
					})
					return false;
				}else{
					return true;
				}
			},
			togglePassword(){
				this.showPassword = !this.showPassword
			},
			regest(){
				let _this=this
				if(_this.phoneCheck()&&_this.passwordCheck()&&_this.password2Check()&&_this.codeCheck()){
					postFetch('index.php/index/login/psw_reset',{phone:_this.phone,password:_this.password,checkNum:_this.code},false,function(res){
						if(res.data.status!=200){
							uni.showToast({
								title:res.data.msg,
								icon:'none'
							})
						}else{
							_this.step=3
						}
					})
				}
			},
			getCode(){
				let _this=this
				if(this.phoneCheck()){
					postFetch('index.php/index/login/sms',{phone:_this.phone,psw_reset:1},false,function(res){
						if(res.data.status!=200){
							uni.showToast({
								title:res.data.msg,
								icon:'none'
							})
						}else{
							uni.showToast({
								title:'发送成功',
								icon:'none'
							})
						}
						_this.nextTime=60;
						let s = setInterval(function(){
							if(!_this.nextTime){
								clearInterval(s)
							}else{
								_this.nextTime--
							}
						},1000)
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.regestBottom{
		width:750rpx;
		height: 161rpx;
		position: fixed;
		left:0;
		bottom:0;
	}
	.page{
		width:750rpx;
		background-color: #fff;
		.step{
			position: relative;
			z-index: 3;
			width:750rpx;
			.inputFrame{
				width:634rpx;
				height: 119rpx;
				background-color: #F8F5FC;
				margin: auto;
				margin-top: 69rpx;
				padding: 21rpx 33rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.label{
					font-size:25rpx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(97,98,102,1);
				}
				.inputSubFrame{
					width:100%;
					display: flex;
					align-items: center;
					
					input{
						flex-grow: 1;
						font-size:29rpx;
						font-family:PingFang SC;
						font-weight:500;
					}
					.getcode{
						font-size:29rpx;
						font-family:PingFang SC;
						font-weight:bold;
						color:rgba(51,51,51,1);
						flex-shrink: 0;
					}
				}
			}
			.successIcon{
				width:250rpx;
				height:250rpx;
				display: block;
				margin: auto;
				margin-top: 63rpx;
			}
			.dsc{
				font-size:29rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(51,51,51,1);
				text-align: center;
				margin-top: 39rpx;
			}
			.button{
				background:rgba(250,197,35,1);
				opacity:0.8;
				border-radius:30rpx;
				width:634rpx;
				height: 75rpx;
				margin: auto;
				margin-top: 69rpx;
				font-size:29rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(255,255,255,1);
				text-align: center;
				line-height: 75rpx;
			}
			.agreement{
				margin: auto;
				margin-top: 25rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				image{
					width: 35rpx;
					height:35rpx;
				}
				.des{
					font-size:21rpx;
					font-family:PingFang SC;
					font-weight:bold;
					color:rgba(217,217,217,1);
					.yellow{
						color: #FCDC79;
					}
				}
			}
		}
	}
</style>
