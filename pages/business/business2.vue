<template>
	<pageCP>
	<view class="content">
		<view class="list">
			<view class="row b-b">
				<text class="tit">所在地址</text>
				<picker mode="multiSelector" :range="optionList" range-key="name" @columnchange="placeChange" @change="placeChange2" @cancel="placeCancel">
					<view class="input" v-if="!addressData.province&&!addressData.city&&!addressData.area">省-市-区</view>
					<view class="input" v-else>{{addressData.province||'--'}} {{addressData.city||'--'}} {{addressData.area||'--'}}</view>
				</picker>
			</view>
			<view class="row b-b">
				<text class="tit">详细地址</text>
				<input class="input" type="text" placeholder="如:街道/小区/门牌号" placeholder-class="placeholder" />
			</view>
			<view class="row b-b">
				<text class="tit">联系电话</text>
				<input class="input" type="text" placeholder="请输入联系电话" placeholder-class="placeholder" />
			</view>

		</view>
		<button class="add-btn">提交申请</button>
		<view class="bottomText">
			<view class="dsc">点击“确认申请”后，即表示已阅读并同意</view>
			<view class="low">《法律条款与隐私政策》</view>
		</view>
	</view>
	</pageCP>
</template>

<script>
	import allpage from '@/mixin/allPage'
	import simpleAddress from "@/components/simple-address/simple-address.nvue"
	import cityJSON from "@/static/city_code.json"
	export default {
		mixins:[allpage],
		comments:{
			simpleAddress
		},
		data() {
			return {
				manageType:'',
				manageId:'',
				optionProvince:cityJSON,
				optionCity:cityJSON[0].city,
				optionArea:cityJSON[0].city[0].area,
				addressData: {
					name: '',
					mobile: '',
					addressName: '在地图选择',
					province:'',
					city:'',
					address: '',
					area: '',
					default: false,
					cityPickerValueDefault: [0, 0, 1],
					pickerText: '',
					isshowPopup:false
				}
			}
		},
		computed:{
			optionList(){
				return [this.optionProvince,this.optionCity,this.optionArea]
			}
		},
		onLoad(option){
			let title = '新增收货地址';
			if(option.type==='edit'){
				
				title = '编辑收货地址'
				
				this.addressData = uni.getStorageSync('addressList')[option.id]
			}
			this.manageType = option.type;
			this.manageId = option.id;
			uni.setNavigationBarTitle({
				title
			})
		},
		methods: {
			placeChange(e){
				let _this = this;
				console.log('placeChange',e.detail)
				if(e.detail.column==0){
					_this.$set(_this,'optionCity',_this.optionProvince[e.detail.value].city)
					_this.$set(_this,'optionArea',_this.optionProvince[e.detail.value].city[0].area)
				}else if(e.detail.column==1){
					_this.$set(_this,'optionArea',_this.optionCity[e.detail.value].area)
				}
			},
			placeChange2(e){
				console.log('placeChange2',e.detail)
				this.addressData.province=this.optionProvince[e.detail.value[0]].name
				this.addressData.city=this.optionCity[e.detail.value[1]].name
				this.addressData.area=this.optionArea[e.detail.value[2]].name
			},
			placeCancel(e){
				console.log('placeCancel',e.detail)
			},
			openFn(fn){
				console.log('openFn',fn)
			},
			openAddres() {
				console.log('isshowPopup',this.$children)
			                this.isshowPopup=true;
			            },
			onConfirm(e) {
			                this.pickerText = JSON.stringify(e)
			            },
			switchChange(e){
				this.addressData.default = e.detail;
			},
			nameCheck(){
				if(this.addressData.name){
					return true
				}else{
					uni.showToast({
						title:'请填写收货人'
					})
					return false
				}
			},
			mobileCheck(){
				if(this.addressData.mobile){
					return true
				}else if(!(/^1[3456789]\d{9}$/.test(this.addressData.phone))){
					uni.showToast({
						title:'手机号格式不正确'
					})
					return false
				}else{
					uni.showToast({
						title:'请填写收货人手机号'
					})
					return false
				}
			},
			provinceCheck(){
				if(this.addressData.province){
					return true
				}else{
					uni.showToast({
						title:'请填写省'
					})
					return false
				}
			},
			cityCheck(){
				if(this.addressData.address){
					return true
				}else{
					uni.showToast({
						title:'请填写市'
					})
					return false
				}
			},
			areaCheck(){
				if(this.addressData.area){
					return true
				}else{
					uni.showToast({
						title:'请填写区'
					})
					return false
				}
			},
			addressCheck(){
				if(this.addressData.address){
					return true
				}else{
					uni.showToast({
						title:'请填写详细地址'
					})
					return false
				}
			},
			//地图选择地址
			chooseLocation(){
				uni.chooseLocation({
					success: (data)=> {
						this.addressData.addressName = data.name;
						this.addressData.address = data.name;
					}
				})
			},
			
			//提交
			confirm(){
				let data = this.addressData;
				if(this.nameCheck()&&this.mobileCheck()&&this.provinceCheck()&&this.cityCheck()&&this.areaCheck()&&this.addressCheck()){
					//this.$api.prePage()获取上一页实例，可直接调用上页所有数据和方法，在App.vue定义
					let d=uni.getStorageSync('addressList')||[]
					if(this.manageType==='edit'){
						d[this.manageId]=data
					}else{
						d.push(data)
					}
					// this.$api.prePage().refreshList(data, this.manageType);
					uni.setStorageSync('addressList',d)
					this.$api.msg(`地址${this.manageType=='edit' ? '修改': '添加'}成功`);
					setTimeout(()=>{
						uni.navigateBack()
					}, 800)
				}
			},
		}
	}
</script>

<style lang="scss">
	page{
		background: $page-color-base;
		padding-top: 16upx;
	}
	.b-t:after{
		border: 0 !important;
	}
	.list{
		width:750rpx;
		background-color: #fff;
		margin-top: 19rpx;
		padding: 0 25rpx 38rpx 48rpx;
	}
	.row{
		display: flex;
		align-items: center;
		position: relative;
		height: 77upx;
		.tit{
			flex-shrink: 0;
			width: 177rpx;
			font-size:26rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(34,34,34,1);
		}
		.addressLabel{
			font-size:26rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(34,34,34,1);
			margin:0 20rpx;
		}
		.input{
			flex: 1;
			font-size:26rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(34,34,34,1);
		}
		.icon-shouhuodizhi{
			font-size: 36upx;
			color: $font-color-light;
		}
	}
	.default-row{
		margin-top: 16upx;
		.tit{
			flex: 1;
		}
		switch{
			transform: translateX(16upx) scale(.9);
		}
	}
	// <view class="picRow">
	// 			<view class="tit">营业执照照片</view>
	// 			<image class="pic" src="/static/uploadPIC.png"></image>
	// 		</view>
	.picRow{
		width: 100%;
		padding: 35rpx 0 19rpx 0;
		.tit{
			font-size:26rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(34,34,34,1);
		}
		.picList{
			margin-top: 15rpx;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			.pic{
				width:167rpx;
				height:167rpx;
			}
		}
	}
	.add-btn{
		width:625rpx;
		height:83rpx;
		background:rgba(250,197,35,1);
		border-radius:42rpx;
		font-size:28rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(255,255,255,1);
		line-height:83rpx;
		text-align: center;
		position: fixed;
		left: 63rpx;
		bottom:133rpx;
	}
	.bottomText{
		width: 750rpx;
		position: fixed;
		left: 0;
		bottom:47rpx;
		.dsc{
			font-size:23rpx;
			font-family:PingFang SC;
			font-weight:400;
			color:rgba(153,153,153,1);
			text-align: center;
		}
		.low{
			font-size:23rpx;
			font-family:PingFang SC;
			font-weight:400;
			color:#222222;
			text-align: center;
			margin-top: 10rpx;
		}
	}
</style>