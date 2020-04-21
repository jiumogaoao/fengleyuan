<template>
	<pageCP>
	<view class="container">
		<view class="p">
			1.提现额度分为15元和30元两档，每次提现时您可以所选选择所需的一档提现额度，剩余金额可在下次满足前述提现额度时申请提现。 
		</view>
		<view class="p">
			2.提现一般3~5天内到账（您理解并同意如遇提现高峰，提现到账时间会延长）。 
		</view>
		<view class="p">
			3.您理解并同意我们应用先进的人工智能分析您的行为，如发现造假等违规操作，我们有权阻止您使用（填写邀请码、领取金币、提现、奖励）以及取消您获得的奖励，具体可参考“赚钱攻略——异常行为处理”。 
		</view>
		<view class="p">
			4.为保证用户顺利提现，提现需用户按照提现页面规范操作，如用户未按提现要求操作或不符合第三方支付平台的要求等原因导致不能收款（如未做实名认证或提现前与平台账号解绑等），所获得的红包将无法提现，本平台无需承担任何责任。 5.如果您连续30日未登录本APP，那么此前发放的奖励将过期，系统会在奖励到期前发送提现提醒，逾期未提现则视为用户自愿放弃提现的权利，红包账户金额将被清零。
		</view>
	</view>
	</pageCP>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.container{
	width:750rpx;
	background-color: #fff;
	padding: 38rpx 48rpx;
	.p{
		font-size:28rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:42rpx;
		margin-bottom: 30rpx;
	}
}
</style>
