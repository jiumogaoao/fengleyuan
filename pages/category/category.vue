<template>
	<view class="content">
		<scroll-view scroll-y class="left-aside">
			<view v-for="(item,i) in leftList" :key="item.id" class="f-item b-b" :class="{active: i === currentId}" @click="scrollRight(i)" v-if="leftList.length">
				{{item.name}}
			</view>
		</scroll-view>
		<scroll-view scroll-with-animation scroll-y class="right-aside" @scroll="asideScroll" :scroll-top="tabScrollTop">
			<view class="group" v-if="rightList.length" v-for="(g,i) in rightList" :key="i" :id="'group'+i">
				<view v-for="item in g" :key="item.id" class="s-list" :id="'main-'+item.id"  v-if="g.length">
					<view class="s-item">{{item.name}}</view>
					<view class="t-list">
						<view @click="navToList(titem.id)" v-if="item.c_class.length" class="t-item" v-for="titem in item.c_class" :key="titem.id">
							<image :src="titem.img_url"></image>
							<text>{{titem.name}}</text>
						</view>
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
				currentId: 0,
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
					res.data.data.map(function(v,i){
						_this.getRight(v.id,i)
					})
				}
			})
		},
		methods: {
			scrollRight(i){
				let _this = this;
				this.currentId = i
				if(!this.sizeCalcState){
					this.calcSize();
					setTimeout(function(){
						_this.tabScrollTop = _this.leftList[i].top
					},500)
				}
				this.tabScrollTop = this.leftList[i].top
			},
			getRight(id,i){
				let _this = this;
				this.tabScrollTop = 0
				postFetch('index.php/index/index/c_class',{id:id},false,function(res){
					if(res.data.status!==200){
						uni.showToast({
							title:res.data.msg,
							icon:'none'
						})
					}else{
						_this.$set(_this.rightList,i,res.data.data)
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
				let _this =this;
				if(!this.sizeCalcState){
					this.calcSize();
					this.currentId=0
					console.log('noSizeCalcState',this.currentId)
				}else{
					let scrollTop = e.detail.scrollTop;
					console.log('scrollTopE',e)
					this.leftList.map(function(v,i){
						if(i != _this.leftList.length-1){
							if(scrollTop>=v.top&&scrollTop<_this.leftList[i+1].top){
								_this.currentId=i
								console.log('notLast',_this.currentId)
							}
						}else{
							if(scrollTop>=e.detail.scrollHeight-uni.getSystemInfoSync().windowHeight){
								_this.currentId=i
								console.log('last',_this.currentId)
							}
						}
					})
				}
			},
			//计算右侧栏每个tab的高度等信息
			calcSize(){
				let h = 0;
				this.leftList.map((item,i)=>{
					let view = uni.createSelectorQuery().select("#group" + i);
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
			navToList(id){
				uni.navigateTo({
					url: '/pages/search/search?classid='+id
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
