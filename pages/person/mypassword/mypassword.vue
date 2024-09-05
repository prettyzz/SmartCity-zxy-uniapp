<template>
	<view>
		<uni-easyinput  v-model="old" placeholder="请输入旧密码" type="password"/>
		<uni-easyinput  v-model="ne" placeholder="请输入新密码" type="password"/>
		<button type="primary" @click="submit">确定</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				old:'',
				ne:''
			}
		},
		methods: {
			async submit(){
				const res=await this.$u.put('/prod-api/api/common/user/resetPwd',{newPassword:this.ne,oldPassword:this.old})
				if(res.code===200){
					uni.showToast({
						title:'修改密码成功'
					})
					this.ne=""
					this.old=""
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
view{
	margin-bottom: 10rpx;
}
</style>
