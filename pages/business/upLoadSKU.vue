<template>
	<pageCP>
	<view class="content">
		<view class="list" v-if="SKU.length" v-for="(v,i) in SKU" :key="i">
			<view class="row b-b">
				<text class="tit">商品规格名<text class="must">*</text></text>
				<input class="input" type="text" placeholder="请输入商品规格(例:黑色M码)" placeholder-class="placeholder" v-model="v.name"/>
			</view>
			<view class="row b-b">
				<text class="tit">商品原价<text class="must">*</text><text class="tdes">（对应规格）</text></text>
				<input class="input" type="number" placeholder="请输入商品价格" placeholder-class="placeholder" v-model="v.reserve_price"/>
			</view>
			<view class="row b-b">
				<view class="tit">商品折扣价</view>
				<input class="input" type="number" placeholder="请输入商品折扣价" placeholder-class="placeholder" v-model="v.zk_final_price"/>
			</view>
			<view class="row b-b">
				<text class="tit">分佣金额<text class="must">*</text><text class="tdes">（对应花粉）</text></text>
				<view class="rowRight">
					<image class="hf" src="/static/hf.png"></image><input class="input" type="number" placeholder="请输入分佣金额" placeholder-class="placeholder" v-model="v.commission"/>
					<view class="placeholder">（1元=100花粉）</view>
				</view>
				
			</view>
			<view class="row b-b">
				<text class="tit">库存<text class="must">*</text><text class="tdes">（对应规格）</text></text>
				<input class="input" type="number" placeholder="请输入库存" placeholder-class="placeholder" v-model="v.stock"/>
			</view>
			<image class="remove" src="/static/removePic.png" v-if="i" @click="removeSKU(i)"></image>
		</view>
		<image class="addSKU" src="/static/uploadSKU.png" @click="pushSKU"></image>
		<button class="add-btn" @click="confirm">{{edit?'修改商品':'上传商品'}}</button>
	</view>
	</pageCP>
</template>

<script>
	import allpage from '@/mixin/allPage'
	import simpleAddress from "@/components/simple-address/simple-address.nvue"
	import cityJSON from "@/static/city_code.json"
	import {postFetch} from '@/util/request_UT.js'
	export default {
		mixins:[allpage],
		comments:{
			simpleAddress
		},
		data() {
			return {
				SKU:[{
					"name":'',
					"reserve_price":'',
					"zk_final_price":'',
					"commission":'',
					"stock":''
				}],
				guarantee:[],
				edit:false,
				prePage:{}
			}
		},
		computed:{
			
		},
		onLoad(option){
			let _this =this;
			let p=this.$api.prePage()
			this.prePage={
				title:p.title,//标题
				brief:p.brief,//邮价（否）
				desc:p.desc,//产品简述（否）
				classid:p.classid,//分类id（是int）
				thumb_url:p.thumb_url,//封面图（数组形式）
				img_url:p.img_url,//详情图（数组形式）
			}
			if(p.edit){
				this.edit=p.edit
				uni.setNavigationBarTitle({
					title:'商品修改'
				})
				_this.$set(_this,'SKU',p.c_list)
			}
			for (let item in p.guarantee) {
			  if(p.guarantee[item]){
				  _this.guarantee.push(item)
			  }
			}
		},
		methods: {
			pushSKU(){
				this.$set(this,'SKU',[...this.SKU,{
					"name":'',
					"reserve_price":'',
					"zk_final_price":'',
					"commission":'',
					"stock":''
				}])
			},
			removeSKU(i){
				let newA=[]
				this.SKU.map(function(v,vi){if(i!==vi){newA.push(v)}})
				this.$set(this,"SKU",newA)
			},
			emptyCheck(){
				let pass=true;
				this.SKU.map(function(v,i){
					if(!pass){return;}
					if(!v.name){
						uni.showToast({
							title:'商品规格名不能为空',
							icon:'none'
						})
						pass=false;
						return;
					}
					if(!v.reserve_price){
						uni.showToast({
							title:'商品原价不能为空',
							icon:'none'
						})
						pass=false;
						return;
					}
					if(!v.commission){
						uni.showToast({
							title:'分佣金额不能为空',
							icon:'none'
						})
						pass=false;
						return;
					}
				})
				return pass;
			},
			confirm(){
				if(!this.emptyCheck()){
					return;
				}
				if(this.edit){
					postFetch('index.php/index/selfgoods/update',{
						id:this.$store.state.userST.id,
						user_token:this.$store.state.userST.user_tooken,
						data:{
							id:this.edit,
							title:this.prePage.title,//标题
							brief:this.prePage.brief,//邮价（否）
							desc:this.prePage.desc,//产品简述（否）
							classid:this.prePage.classid,//分类id（是int）
							thumb_url:this.prePage.thumb_url,//封面图（数组形式）
							img_url:this.prePage.img_url,//详情图（数组形式）
							guarantee:this.guarantee,
						},
						data_list:this.SKU
					},false,function(res){
						console.log('edit',res)
						if(res.data.status!=200){
							uni.showToast({
								title:res.data.msg,
								icon:'none'
							})
						}else{
							uni.showToast({
								title:'修改成功',
								icon:'none'
							})
							setTimeout(function(){
								uni.navigateBack({
									delta:2
								})
							},2000)
						}
					})
					
				}else{
					postFetch('index.php/index/selfgoods/save',{
						id:this.$store.state.userST.id,
						user_token:this.$store.state.userST.user_tooken,
						title:this.prePage.title,//标题
						brief:this.prePage.brief,//邮价（否）
						desc:this.prePage.desc,//产品简述（否）
						classid:this.prePage.classid,//分类id（是int）
						thumb_url:this.prePage.thumb_url,//封面图（数组形式）
						img_url:this.prePage.img_url,//详情图（数组形式）
						endtime:this.prePage.endtime,
						guarantee:this.guarantee,
						data:this.SKU
					},false,function(res){
						console.log('save',res)
						if(res.data.status !== 200){
							uni.showToast({
								title:res.data.msg,
								icon:'none'
							})
						}else{
							uni.showToast({
								title:'发布成功，请耐心等待审核',
								icon:'none'
							})
							setTimeout(function(){
								uni.navigateBack({
									delta:2
								})
							},2000)
						}
					})
				}
				
			}
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
		.rowRight{
			display: flex;
			align-items: center;
			.hf{
					width:22upx;
					height:22upx;
			}
			.placeholder{
				font-size:26rpx;
			}
		}
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
		z-index: 3;
	}
</style>