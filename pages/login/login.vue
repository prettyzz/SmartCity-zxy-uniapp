<template>
	<view>
		<uni-card>
			<uni-title title="智慧城市" type="h1" align="center"></uni-title>
			<u-field label="账户:" placeholder="请输入用户密码" v-model="username" icon="account" ></u-field>
			<u-field label="密码" v-model="password" type="password" icon="lock" placeholder="请输入用户密码"></u-field>
			<u-button type="success" @click="login">登入</u-button>
		</uni-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username:'',
				password:''
			}
		},
		methods: {
			async login(){
				const res=await this.$u.post('/prod-api/api/login',{username:this.username,password:this.password})
				if(res.code===200){
					uni.showToast({
						title:'登入成功'
					})
					uni.setStorageSync('token',res.token)
					setTimeout(()=>{
						uni.reLaunch({
							url:'/pages/index/index'
						})
					})
				}
			}
		}
	}
</script>

<style>

</style>
