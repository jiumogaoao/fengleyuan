<template>
	<view id="pageFrame">
		<view id="mainFrame">
			<slot></slot>
		</view>
		<view class="allPopUpMask" v-if="newVersionShow">
			<view id="newVersionFrame">
					<image id="bigPic" src="/static/newVersion.png" @click="submitA" mode="widthFix"></image>
					<image id="closePic" src="/static/newVersionClose.png" @click="cancelA" mode="widthFix"></image>
			</view>
		</view>
		<view class="allPopUpMask" v-if="newLike">
			<view class="popoutwrapper">
				<view class="popouttop">
					<view class="popouttitle">猜你喜欢</view>
					<view class="popoutinfo">{{title}}</view>
				</view>
				<view class="popoutbottom">
					<view class="popoutbuttonCancel" @click="cancelB()">
						<view class="popoutbuttonTextCancel">取消</view>
					</view>
					<view class="popoutbutton submit" @click="submitB()">
						<view class="popoutbuttonText">立即搜索</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>

	export default {
		components:{},
		data() {
			return {
				title:'',
				newVersionShow:0,
				newLike:0
			};
		},
		onShow(){
			let _this=this
			let nowVersion = plus.runtime.version;
			console.log('version',plus.runtime.version)
			postFetch('index.php/index/index/appnumber',{},false,function(res){
				if(res.data.status!=200){
					uni.showToast({
						title:res.data.msg,
						icon:'none'
					})
					_this.checkClipboard()
				}else{
					if(res.data.data.number != nowVersion){
						_this.newVersionShow=1
					}else{
						_this.checkClipboard()
					}
				}
				})
			
		},
		methods:{
			checkClipboard(){
				uni.getClipboardData({
				    success: function (res) {
						if(res.data.length && res.data.replace(/\s*/g,"").length && uni.getStorageSync('firstIn')==1 && uni.getStorageSync('cacheTitle') != res.data && typeof(res.data)=="string"){
							
							_this.title=res.data
							_this.newLike=1
						}
				    }
				});
			},
			submitA(){
				console.log('submit')
				this.newVersionShow=0
				this.checkClipboard()
			},
			cancelA(){
				console.log('cancel')
				this.newVersionShow=0
				this.checkClipboard()
			},
			submitB(){
				console.log('submit')
				this.newLike=0
				uni.navigateTo({
					url:'/pages/search/search?keywork='+this.title
				})
			},
			cancelB(){
				console.log('cancel')
				this.newLike=0
			}
		}
	}
</script>

<style lang="scss" scoped>
	#pageFrame{
		width: 750rpx;
		position: fixed;
		top:0;
		left:0;
		right:0;
		bottom:0;
		overflow: hidden;
		#mainFrame{
			width: 750rpx;
			position: absolute;
			top:0;
			left:0;
			right:0;
			bottom:0;
			overflow: hidden;
		}
		.allPopUpMask{
			position: absolute;
			top:0;
			left:0;
			right:0;
			bottom:0;
			z-index: 99999999999999999;
			background-color: rgba(0,0,0,0.3);
			display: flex;
			align-items: center;
			justify-content: center;
		}
		#newVersionFrame{
			width: 451rpx;
		}
		#bigPic{
			width:451rpx;
		}
		#closePic{
			display: block;
			width:55rpx;
			height:109rpx;
			margin: auto;
			margin-top: -5rpx;
		}
		.popoutwrapper {
			flex-direction: column;
			justify-content: space-between;
			background-color: #fff;
			width: 573rpx;
			overflow:hidden;
			padding: 48rpx 31rpx 47rpx 31rpx;
			border-radius:38upx;
		}
		
		.popouttitle{
			font-size:38rpx;
			font-family:PingFang SC;
			font-weight:bold;
			color:rgba(221,141,69,1);
			text-align: center;
		}
		.popoutinfo{
			width: 453rpx;
			font-size:28rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(51,51,51,1);
			line-height:36rpx;
			margin-left: 28rpx;
			margin-top: 32rpx;
			text-align: center;
		}
		.popoutbottom{
			width: 511rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.popoutbutton{
			width:230rpx;
			height:74rpx;
			background-color:rgba(221,141,69,1);
			border-radius:37rpx;
		}
		.popoutbuttonCancel{
			width:230rpx;
			height:74rpx;
			border-radius:37rpx;
			border-width:1px;
			border-style:solid;
			border-color:rgba(221,141,69,1);
		}
		.popoutbuttonText{
			font-size:29rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(255,255,255,1);
			line-height:36rpx;
			width:245rpx;
			text-align: center;
			padding-top: 23rpx;
		}
		.popoutbuttonTextCancel{
			font-size:29rpx;
			font-family:PingFang SC;
			font-weight:500;
			color: rgba(221,141,69,1);
			line-height:36rpx;
			width:245rpx;
			text-align: center;
			padding-top: 22rpx;
		}
	}
	
</style>
