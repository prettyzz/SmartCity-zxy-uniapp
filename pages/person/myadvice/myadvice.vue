<template>
	<view>
		<uni-easyinput  v-model="advice" placeholder="请输入意见反馈" type="textarea" maxlength="150"/>
		<button type="primary" @click="submit">提交</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				advice:''
			}
		},
		methods: {
			async submit(){
				const res=await this.$u.post('/prod-api/api/common/feedback',{content:this.advice})
				if(res.code===200){
					uni.showToast({
						title:'意见反馈成功'
					})
					this.advice=""
				}else{
					uni.showToast({
						title:res.msg
					})
				}
			}
		}
	}
</script>

<style>

</style>
