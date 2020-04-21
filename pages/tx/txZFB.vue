<template>
	<pageCP>
	<view class="container">
		<view class="top">
			<view class="point">
				<view class="label">真实姓名</view>
				<input placeholder="与支付宝姓名一致" v-model="name"/>
			</view>
			<view class="point">
				<view class="label">支付宝号</view>
				<input placeholder="请输入支付宝账号" v-model="zfb_id"/>
			</view>
			<view class="point">
				<view class="label">手机号码</view>
				<input placeholder="请输入手机号码" v-model="phone"/>
			</view>
		</view>
		<view class="bottom">
			<view class="point">
				<view class="label">提现金额</view>
				<input placeholder="请输入提现金额" v-model="money"/>
			</view>
			<view class="total">当前可提现123，456.89元，<text class="red">全部提现</text></view>
			<view class="confirm" @click="confirm">提交</view>
		</view>
		<view class="errorPopFrame" @click="errorToggle" v-if="errorPop">
			<view class="errorPop" @click.stop="stopEvent">
				<view class="errorTitle">提现失败</view>
				<view class="errorBottom">
					<image class="errorIcon" src="/static/txError.png"></image>
					<view class="errorDsc">抱歉，提现没有成功，请您检查一下~</view>
					<view class="errorButton" @click="errorToggle">返回</view>
				</view>
			</view>
		</view>
	</view>
	</pageCP>
</template>

<script>
	import {postFetch} from '@/util/request_UT.js'
	export default {
		data() {
			return {
				errorPop:false,
				withdrawal_typ:1,
				name:'',
				zfb_id:'',
				phone:'',
				money:0
			};
		},
		onLoad(option){
			if(option.money){
				this.money = Number(option.money)
			}
		},
		methods:{
			stopEvent(){},
			errorToggle(){
				this.errorPop = !this.errorPop
			},
			confirm(){
				let _this = this;
				postFetch('index.php/index/order/save_withdrawal',{
					id:this.$store.state.userST.id,
					user_token:this.$store.state.userST.user_tooken,
					withdrawal_type:this.withdrawal_type,
					name:this.name,
					zfb_id:this.zfb_id,
					phone:this.phone,
					money:this.money
					},false,function(res){
					if(res.data.status != 200){
						_this.errorToggle()
					}else{
						uni.navigateTo({
							url:'/pages/tx/txSuccess'
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.container{
		width:750rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: fixed;
		top:0;
		left:0;
		bottom:0;
		.point{
			width:100%;
			height: 97rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px solid rgba(241,242,246,1);
			.label{
				font-size:28rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(34,34,34,1);
				flex-shrink: 0;
			}
			input{
				text-align: right;
				flex-grow: 1;
				font-size:28rpx;
				font-family:PingFang SC;
				font-weight:500;
			}
		}
		.top{
			width:750rpx;
			padding: 0 37rpx;
			background-color: #fff;
			flex-shrink: 0;
		}
		.bottom{
			width: 750rpx;
			margin-top: 19rpx;
			flex-grow: 1;
			padding: 0 37rpx;
			position: relative;
			.total{
				font-size:22rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(153,153,153,1);
				margin-top: 30rpx;
				text-align: right;
				.red{
					color:#FF7785;
				}
			}
			.confirm{
				width:625rpx;
				height:83rpx;
				background:rgba(239,65,83,1);
				border-radius:42rpx;
				position: absolute;
				left: 63rpx;
				bottom:134rpx;
				line-height: 83rpx;
				text-align: center;
				font-size:28rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(255,255,255,1);
			}
		}
	}
</style>
