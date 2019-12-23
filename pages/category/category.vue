<template>
	<view class="content">
		<scroll-view scroll-y class="left-aside">
			<view v-for="item in leftList" :key="item.id" class="f-item b-b" :class="{active: item.id === currentId}" @click="getRight(item.id)" v-if="leftList.length">
				{{item.name}}
			</view>
		</scroll-view>
		<scroll-view scroll-with-animation scroll-y class="right-aside" :scroll-top="tabScrollTop">
			<view v-for="item in rightList" :key="item.id" class="s-list" :id="'main-'+item.id"  v-if="rightList.length">
				<view class="s-item">{{item.name}}</view>
				<view class="t-list">
					<view @click="navToList(titem.name)" v-if="item.c_class.length" class="t-item" v-for="titem in item.c_class" :key="titem.id">
						<image :src="titem.img_url"></image>
						<text>{{titem.name}}</text>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import allpage from '@/mixin/allPage'
	import {postFetch} from '@/util/request_UT.js';
	export default {
		mixins:[allpage],
		data() {
			return {
				sizeCalcState: false,
				tabScrollTop: 0,
				currentId: 1,
				flist: [],
				slist: [],
				tlist: [],
				leftList:[],
				rightList:[]
			}
		},
		onLoad(){
			// this.loadData();
			let _this=this;
			postFetch('index.php/index/index/f_class',{},false,function(res){
				if(res.data.status!==200){
					uni.showToast({
						title:res.data.msg,
						icon:'none'
					})
				}else{
					_this.$set(_this,'leftList',res.data.data)
					_this.getRight(res.data.data[0].id)
				}
			})
		},
		methods: {
			getRight(id){
				let _this = this;
				this.currentId = id
				this.tabScrollTop = 0
				postFetch('index.php/index/index/c_class',{id:id},false,function(res){
					if(res.data.status!==200){
						uni.showToast({
							title:res.data.msg,
							icon:'none'
						})
					}else{
						_this.$set(_this,'rightList',res.data.data)
					}
				})
			},
			async loadData(){
				let list = await this.$api.json('cateList');
				list.forEach(item=>{
					if(!item.pid){
						this.flist.push(item);  //pid为父级id, 没有pid或者pid=0是一级分类
					}else if(!item.picture){
						this.slist.push(item); //没有图的是2级分类
					}else{
						this.tlist.push(item); //3级分类
					}
				}) 
			},
			//一级分类点击
			tabtap(item){
				if(!this.sizeCalcState){
					this.calcSize();
				}
				
				this.currentId = item.id;
				let index = this.slist.findIndex(sitem=>sitem.pid === item.id);
				this.tabScrollTop = this.slist[index].top;
			},
			//右侧栏滚动
			asideScroll(e){
				if(!this.sizeCalcState){
					this.calcSize();
				}
				let scrollTop = e.detail.scrollTop;
				let tabs = this.slist.filter(item=>item.top <= scrollTop).reverse();
				if(tabs.length > 0){
					this.currentId = tabs[0].pid;
				}
			},
			//计算右侧栏每个tab的高度等信息
			calcSize(){
				let h = 0;
				this.slist.forEach(item=>{
					let view = uni.createSelectorQuery().select("#main-" + item.id);
					view.fields({
						size: true
					}, data => {
						item.top = h;
						h += data.height;
						item.bottom = h;
					}).exec();
				})
				this.sizeCalcState = true;
			},
			navToList(keyword){
				uni.navigateTo({
					url: '/pages/search/search?keywork='+keyword
				})
			}
		}
	}
</script>

<style lang='scss'>
	page,
	.content {
		height: 100%;
		background-color: #f8f8f8;
	}

	.content {
		display: flex;
	}
	.left-aside {
		flex-shrink: 0;
		width: 200upx;
		height: 100%;
		background-color: #fff;
	}
	.f-item {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100upx;
		font-size: 25upx;
		color: #666666;
		position: relative;
		font-family:PingFang SC;
		font-weight:500;
		&.active{
			color: #222222;
			background: #f8f8f8;
			&:before{
				content: '';
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				height: 42upx;
				width: 8upx;
				background-color: #222222;
				border-radius: 0 4px 4px 0;
				opacity: .8;
			}
		}
	}

	.right-aside{
		flex: 1;
		overflow: hidden;
		padding: 0 13upx;
	}
	.s-item{
		height: 90upx;
		padding-top: 44upx;
		font-size:25rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(11,12,14,1);
	}
	.t-list{
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		background: #fff;
		justify-content: space-between;
		padding-top: 21upx;
		/* &:after{
			content: '';
			flex: 99;
			height: 0;
		} */
	}
	.t-item{
		flex-shrink: 0;
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 171upx;
		font-size:25rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(66,66,66,1);
		padding-bottom: 32upx;
		padding-left: 34rpx;
		padding-right: 22rpx;
		image{
			width: 115upx;
			height: 115upx;
			margin-bottom: 14rpx;
		}
		text{
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
</style>
