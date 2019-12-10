<template>
	<view>
		<view class="top">
			<view class="topTop">
				<view class="compass">
					<text class="iconfont">&#xe60e;</text>
					<text class="compasser">您的推荐人</text>
				</view>
				<view class="user">
					<image src="/static/f0.png" class="avatar"></image>
					<view class="userInfo">
						<view class="userName">用户A1234</view>
						<view class="userPhone">186****0380</view>
					</view>
				</view>
			</view>
			<view class="topBottom">
				<view class="item hl">
					<view class="number">4</view>
					<view class="title">直属粉丝</view>
				</view>
				<view class="item">
					<view class="number">32</view>
					<view class="title">二代粉丝</view>
				</view>
				<view class="item">
					<view class="number">108</view>
					<view class="title">二代以后粉丝</view>
				</view>
			</view>
		</view>
		<view class="bar">
			<view class="item">
				<view class="title"><image src="/static/ft0.png"></image>粉丝信息</view>
			</view>
			<view class="item">
				<view class="title"><image src="/static/ft1.png"></image>累积获得乐币</view>
			</view>
			<view class="item">
				<view class="title"><image src="/static/ft2.png"></image>关系</view>
			</view>
		</view>
		<view class="listFrame">
			<view class="list">
				<view class="fans">
					<image src="/static/f1.png" class="avatar"></image>
					<view class="fansInfo">
						<view class="fansName">用户A1234</view>
						<view class="fansPhone">130****6687</view>
					</view>
				</view>
				<view class="number">1234.56</view>
				<view class="relation">直属粉丝</view>
			</view>
		</view>
		<view class="listFrame">
			<view class="list">
				<view class="fans">
					<image src="/static/f1.png" class="avatar"></image>
					<view class="fansInfo">
						<view class="fansName">用户A45678</view>
						<view class="fansPhone">130****5411</view>
					</view>
				</view>
				<view class="number">754.14</view>
				<view class="relation">二代粉丝</view>
			</view>
		</view>
		<view class="listFrame">
			<view class="list">
				<view class="fans">
					<image src="/static/f1.png" class="avatar"></image>
					<view class="fansInfo">
						<view class="fansName">开心第一</view>
						<view class="fansPhone">130****1234</view>
					</view>
				</view>
				<view class="number">5477.12</view>
				<view class="relation">二代以后粉丝</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: #f7f7f7;
	}
	.top{
		width: 750rpx;
		height: 380rpx;
		background-image: linear-gradient(to top right, #494949, #15171D);
		display: flex;
		justify-content:space-between;
		align-items: center;
		flex-direction: column;
		padding-top: 60rpx;
		.topTop{
			width: 100%;
			padding-top: 20rpx;
			.compass{
				font-size: 22rpx;
				color: #fff;
				margin-left: 83rpx;
				.compasser{margin-left: 12rpx;}
			}
			.user{
				margin-left: 83rpx;
				display: flex;
				align-items: center;
				margin-top: 22rpx;
				.avatar{
					width:79rpx;
					height:79rpx;
					border-radius: 79rpx;
				}
				.userInfo{
					margin-left: 28rpx;
					.userName{
						font-size: 23rpx;
						color: #fff;
					}
					.userPhone{
						font-size: 19rpx;
						color: #fff;
						margin-top: 14rpx;
					}
				}
			}
		}
		.topBottom{
			display: flex;
			justify-content: space-between;
			width: 93%;
			.item{
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				width: 220rpx;
				height:107rpx;
				border-radius: 10rpx 10rpx 0 0;
				background-image: linear-gradient(to right, #ffffff, #a0a0a0);
				.title{
					font-size: 22rpx;
					margin-top: 10rpx;
				}
				.number{
					font-size: 28rpx;
				}
			}
			.hl.item{
				background-image: linear-gradient(to right, #fffad7, #ffbb40);
			}
		}
	}
	.bar{
		width:750rpx;
		background-color: #fff;
		height:82rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.item{
			height: 100%;
			flex-grow: 1;
			flex-shrink: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;
			.title{
				font-size: 28rpx;
				image{
					width: 30rpx;
					height:30rpx;
					margin-right: 20rpx;
				}
			}
		}
	}
	.listFrame{
		width:712rpx;
		margin: auto;
		.list{
			width: 631rpx;
			height: 199rpx;
			margin: auto;
			border-bottom: 1px solid #ddd;
			display: flex;
			align-items: center;
			.fans{
				display: flex;
				align-items: center;
				width: 301rpx;
				.avatar{
					width:79rpx;
					height:79rpx;
					border-radius: 79rpx;
				}
				.fansInfo{
					margin-left: 10rpx;
				}
				.fansName{
					font-size: 19rpx;
					color: #333333;
				}
				.fansPhone{
					font-size: 16rpx;
					color: #ccc;
					margin-top: 14rpx;
				}
			}
			.number{
				font-size: 19rpx;
				color: #333;
				width: 222rpx;
			}
			.relation{
				font-size: 23rpx;
				color: #333;
			}
		}
	}
</style>
