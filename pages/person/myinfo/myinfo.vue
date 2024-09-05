<template>
	<view>
		<u-field label="头像" :disabled="true">
			<template v-slot:right>
				<u-avatar :src="$img+user.avatar" @click="upload"></u-avatar>
			</template>
		</u-field>
		<u-field label="昵称:" v-model="user.nickName" input-align="right"></u-field>
		<u-field label="性别:" :placeholder="user.sex==0?'男':'女'" :disabled="true" input-align="right" right-icon="arrow-down" @click="show1=true"></u-field>
		<u-action-sheet v-model="show1" :list="sexList" @click="change" ></u-action-sheet>
		<u-field label="邮箱:" v-model="user.email" input-align="right"></u-field>
		<u-field label="身份证号码:" label-width="150" v-model="idCard" :placeholder="user.idCard" input-align="right"></u-field>
		<u-field label="联系电话" v-model="phonenumber" v-if="user.phonenumber" :placeholder="user.phonenumber.slice(0,7)+'****'" input-align="right"></u-field>
		<u-button type="primary" @click="set">修改</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show1:false,
				pic:'https://uviewui.com/common/logo.png',
				user:{},
				idCard:'',
				phonenumber:'',
				sexList:[
					{
						text:'男'
					},
					{
						text:'女'
					}
				]
			}
		},
		onLoad(){
			this.getUser()
		},
		methods: {
			async upload(){
				const res=await this.$upload
			},
			async getUser(){
				const res=await this.$u.get('/prod-api/api/common/user/getInfo')
				console.log(res);
				this.user=res.user
			},
			change(e){
				this.user.sex=e
			},
			async set(){
				const res=await this.$u.put('/prod-api/api/common/user',{email:this.user.email,idCard:this.idCard||this.user.idCard,nickName:this.user.nickName,phonenumber:this.phonenumber||this.user.phonenumber,sex:this.user.sex})
				if(res.code===200){
					uni.showToast({
						title:'修改成功'
					})
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
