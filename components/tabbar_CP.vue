<template>
	<view class="tabFrame">
		<view class="tab" :class="i==hl?'hl':''" v-if="tab.length" v-for="(v,i) in tab" :key='i' @click="tabClick(i)">{{v}}</view>
	</view>
</template>

<script>
	export default {
		props:['tab','hl'],
		data() {
			return {
				
			};
		},
		methods:{
			tabClick(i){
				this.$emit('change',i)
			}
		}
	}
</script>

<style lang="scss">
	.tabFrame{
		width:750rpx;
		height: 90rpx;
		background-color: #fff;
		display: flex;
		align-items: center;
		flex-shrink: 0;
		.tab{
			width:50%;
			height: 100%;
			line-height: 90rpx;
			text-align: center;
			font-size:32rpx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(34,34,34,1);
			&.hl{
				color: #FAC523;
				border-bottom: 4px solid #FAC523;
			}
		}
	}
</style>
