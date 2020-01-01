<template>
	<view class="content">
		<view class="list">
			<view class="row b-b">
				<text class="tit">商品规格名<text class="must">*</text></text>
				<input class="input" type="text" placeholder="请输入商品规格(例:黑色M码)" placeholder-class="placeholder" />
			</view>
			<view class="row b-b">
				<text class="tit">商品原价<text class="must">*</text><text class="tdes">（对应规格）</text></text>
				<input class="input" type="text" placeholder="请输入商品价格" placeholder-class="placeholder" />
			</view>
			<view class="row b-b">
				<view class="tit">商品折扣价</view>
				<input class="input" type="text" placeholder="请输入商品折扣价" placeholder-class="placeholder" />
			</view>
			<view class="row b-b">
				<text class="tit">分佣金额<text class="must">*</text><text class="tdes">（对应规格）</text></text>
				<view class="input">请输入商品分佣金额</view>
			</view>
			<image class="remove" src="/static/removePic.png"></image>
		</view>
		<image class="addSKU" src="/static/uploadSKU.png"></image>
		<button class="add-btn" @click="confirm">新增规格</button>
	</view>
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
				uni.navigateTo({
					url:'/pages/business/business2'
				})
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
		width:730rpx;
		background-color: #fff;
		margin:auto;
		margin-top: 19rpx;
		padding: 0 15rpx;
		border-radius: 10px;
		box-shadow: 3rpx 3rpx 3rpx rgba(0,0,0,0.3);
		position: relative;
		.remove{
			width: 29rpx;
			height: 29rpx;
			position: absolute;
			left:350rpx;
			top:-15rpx;
		}
		.must{
			font-size:28rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:#FE1818;
		}
		.tdes{
			font-size:28rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:#999999;
		}
	}
	.row{
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		height: 77upx;
		.tit{
			flex-shrink: 0;
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
			text-align: right;
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
	.picRow{
		width: 100%;
		padding: 35rpx 0 19rpx 0;
		.tit{
			font-size:26rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(34,34,34,1);
		}
		.dsc{
			font-size:21rpx;
			font-family:PingFang SC;
			color:rgba(153,153,153,1);
			opacity:0.6;
			margin-top: 10rpx;
		}
		.picList{
			margin-top: 15rpx;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			// <view class="newPicFrame">
			// 	<image src="/static/found0.png"></image>
			// 	<image class="removePic" src="/static/removePic.png"></image>
			// </view>
			.newPicFrame{
				width:167rpx;
				height:167rpx;
				margin-right: 10rpx;
				position: relative;
				.newPic{
					width:167rpx;
					height:167rpx;
				}
				.removePic{
					width:24rpx;
					height:24rpx;
					position: absolute;
					right:-12rpx;
					top:-12rpx;
				}
			}
			.pic{
				width:167rpx;
				height:167rpx;
			}
		}
	}
	// <view class="areaRow b-b">
	// 	<view class="tit">商品简介</view>
	// 	<textarea placeholder="请输入商品的简介(100字内)"></textarea>
	// </view>
	.areaRow{
		width: 100%;
		padding: 35rpx 0 19rpx 0;
		border-bottom: 1px solid #E4E7ED;
		.tit{
			font-size:26rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(34,34,34,1);
		}
		textarea{
			margin-top: 10rpx;
			font-size:26rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(34,34,34,1);
			height: 150rpx;
		}
	}
	.addSKU{
		width:625rpx;
		height:83rpx;
		display: block;
		margin: auto;
		margin-top: 63rpx;
	}
	.add-btn{
		width:750rpx;
		height:83rpx;
		background:rgba(250,197,35,1);
		font-size:28rpx;
		font-family:PingFang SC;
		font-weight:bold;
		color:rgba(255,255,255,1);
		line-height:83rpx;
		text-align: center;
		position: fixed;
		left: 0rpx;
		bottom:0rpx;
		border-radius: 0 !important;
	}
</style>