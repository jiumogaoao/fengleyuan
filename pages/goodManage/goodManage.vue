<template>
	<view class="container">
		<tabbarCP :tab="['出售中','已下架']" :hl="tap" @change="tabChange"/>
		<scroll-view class="sc">
			<view class="frame">
				<view class="point">
					<image class="pImg" src="/static/found1.png"></image>
					<view class="right">
						<view class="title">
							BABYHOST 纽约时装周新款 柠檬 黄连衣裙 好看好看好看好看好…
						</view>
						<view class="info">
							<view>销量：2553</view>
							<view>库存：14555</view>
							<view>上架时间：2016-07-15 14：00</view>
						</view>
						<view class="bottom">
							<view class="price">￥1999.00<text class="oldPrice">￥3799</text></view>
							<image class="edit" src="/static/goodManageEdit.png" @click="go('/pages/business/uploadGood?edit=1')"></image>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import tabbarCP from '@/components/tabbar_CP.vue'
	export default {
		components:{tabbarCP},
		data() {
			return {
				tap:0
			};
		},
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) {
				uni.navigateTo({
					url:'/pages/business/uploadGood'
				})
			}
		},
		methods:{
			go(url){
				uni.navigateTo({
					url
				})
			},
			tabChange(i){
				this.tap = i
			}
		}
	}
</script>

<style lang="scss">
	.container{
		position: fixed;
		top:0;
		left: 0;
		width: 750rpx;
		bottom:0;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		
		.sc{
			flex-grow: 1;
			width: 750rpx;
			margin-top: 21rpx;
			overflow: hidden;
			.frame{
				width:750rpx;
				.point{
					width:750rpx;
					height: 249rpx;
					padding: 19rpx 45rpx 19rpx 28rpx;
					border-bottom: 1px solid rgba(241,241,241,1);
					display: flex;
					justify-content: space-between;
					align-items: center;
					.pImg{
						width:210rpx;
						height:210rpx;
						flex-shrink: 0;
					}
					.right{
						margin-left: 19rpx;
						flex-grow: 1;
						.title{
							font-size:29rpx;
							font-family:PingFang SC;
							font-weight:500;
							color:rgba(12,12,12,1);
							width:438rpx;
							height: 82rpx;
							overflow: hidden;
							text-overflow: ellipsis;
							display:-webkit-box; //作为弹性伸缩盒子模型显示。
							-webkit-box-orient:vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
							-webkit-line-clamp:2; //显示的行
							white-space: normal;
							line-height:45rpx;
						}
						.info{
							display: flex;
							flex-wrap: wrap;
							view{
								font-size:24rpx;
								font-family:PingFang SC;
								font-weight:500;
								color:rgba(153,153,153,1);
								line-height:40rpx;
								margin-right: 53rpx;
							}
						}
						.bottom{
							margin-top: 24rpx;
							width: 100%;
							display: flex;
							justify-content: space-between;
							align-items: center;
							.price{
								font-size:33rpx;
								font-family:PingFang SC;
								font-weight:800;
								color:rgba(239,30,99,1);
								.oldPrice{
									font-size:20rpx;
									font-family:PingFang SC;
									font-weight:400;
									text-decoration:line-through;
									color:rgba(153,153,153,1);
									margin-left: 15rpx;
								}
							}
							.edit{
								width:97rpx;
								height:35rpx;
							}
						}
					}
				}
			}
		}
	}
	
</style>
