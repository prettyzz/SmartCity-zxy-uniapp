<template>
	<view>
		<uni-popup ref="popup" type="dialog">
			<uni-popup-dialog content="您未登入,是否去登入" @confirm="outer"></uni-popup-dialog>
		</uni-popup>
		<u-navbar :is-back="false" title="　" :border-bottom="false">
			<view class="u-flex u-row-right" style="width: 100%;">
				<view class="camera u-flex u-row-center">
					<u-icon name="camera-fill" color="#000000" size="48"></u-icon>
				</view>
			</view>
		</u-navbar>
		<view class="u-flex user-box u-p-l-30 u-p-r-20 u-p-b-30">
			<view class="u-m-r-10">
				<u-avatar :src="$img+user.avatar||pic" size="140"></u-avatar>
			</view>
			<view class="u-flex-1">
				<view class="u-font-18 u-p-b-20" v-if="user">{{user.userName}}</view>
				<view class="u-font-14 u-tips-color" v-if="user">账户:{{user.userId}}</view>
				<view class="u-font-18 u-p-b-20" v-if="!user">请登入</view>
			</view>
		</view>
		
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="account" title="个人信息" to="/pages/person/myinfo/myinfo"></u-cell-item>
			</u-cell-group>
		</view>
		
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="order" title="订单列表" to="/pages/person/myorder/myorder"></u-cell-item>
				<u-cell-item icon="lock" title="修改密码" to="/pages/person/mypassword/mypassword"></u-cell-item>
				<u-cell-item icon="coupon" title="意见反馈" to="/pages/person/myadvice/myadvice"></u-cell-item>
			</u-cell-group>
		</view>
		
		<view class="u-m-t-20">
			<u-cell-group>
				<u-button type="error" @click="outer">退出</u-button>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pic:'https://uviewui.com/common/logo.png',
				user:{},
				show:true
			}
		},
		onLoad() {
			if(uni.getStorageSync('token')){
				this.getUser()
			}else{
				setTimeout(()=>{
					this.$refs.popup.open()
				},1000)
			}
		},
		methods: {
			async getUser(){
				const res=await this.$u.get('/prod-api/api/common/user/getInfo')
				console.log(res);
				this.user=res.user
			},
			outer(){
				uni.removeStorageSync('token')
				uni.reLaunch({
					url:'/pages/login/login'
				})
			}
		}
	}
</script>

<style lang="scss">
page{
	background-color: #ededed;
}

.camera{
	width: 54px;
	height: 44px;
	
	&:active{
		background-color: #ededed;
	}
}
.user-box{
	background-color: #fff;
}
</style>