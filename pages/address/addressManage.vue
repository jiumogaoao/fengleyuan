<template>
	<view class="content">
		<view class="list">
			<view class="row b-b">
				<text class="tit">收货人</text>
				<input class="input" type="text" v-model="addressData.name" placeholder="请填写收货人" placeholder-class="placeholder" />
			</view>
			<view class="row b-b">
				<text class="tit">手机号</text>
				<input class="input" type="number" v-model="addressData.mobile" placeholder="请填写收货人手机号" placeholder-class="placeholder" :maxlength="11"/>
			</view>
			<view class="row b-b">
				<text class="tit">选择地区</text>
				<input class="input" type="text" v-model="addressData.province" placeholder="某" placeholder-class="placeholder" />
				<text class="addressLabel">省</text>
				<input class="input" type="text" v-model="addressData.city" placeholder="某" placeholder-class="placeholder" />
				<text class="addressLabel">市</text>
				<input class="input" type="text" v-model="addressData.area" placeholder="某" placeholder-class="placeholder" />
				<text class="addressLabel">区</text>
			</view>
			<view class="row b-b"> 
				<text class="tit">详细地址</text>
				<input class="input" type="text" v-model="addressData.address" placeholder="请填写详细地址" placeholder-class="placeholder" />
			</view>
		</view>
		<!-- <view class="row default-row">
			<text class="tit">设为默认</text>
			<switch :checked="addressData.defaule" color="#fa436a" @change="switchChange" />
		</view> -->
		<button class="add-btn" @click="confirm">提交</button>
	</view>
</template>

<script>
	import simpleAddress from "@/components/simple-address/simple-address.nvue"
	export default {
		comments:{
			simpleAddress
		},
		data() {
			return {
				manageType:'',
				manageId:'',
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
	.add-btn{
		width:625rpx;
		height:83rpx;
		background:linear-gradient(-90deg,rgba(221,141,69,1) 0%,rgba(250,197,35,1) 99%);
		border-radius:42rpx;
		margin: auto;
		margin-top: 134rpx;
		font-size:42rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(255,255,255,1);
		line-height:83rpx;
		text-align: center;
	}
</style>
