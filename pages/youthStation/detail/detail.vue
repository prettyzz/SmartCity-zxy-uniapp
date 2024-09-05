<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in lunbo" :key="index">
				<u-image :src="item" width="750" height="300"></u-image>
			</swiper-item>
		</swiper>
		<uni-card :isFull="true" style="margin-bottom: 10rpx;">
			【驿站地址】：{{detail.address}}<br>
			【联系电话】：{{detail.phone}}<br>
			【办理入住时间】：{{detail.workTime}}<br>
			【剩余床位数】：男：{{detail.bedsCountBoy}}个 ---女：{{detail.bedsCountGirl}}个
		</uni-card>
		<uni-card title="驿站详细信息" :isFull="true">
			<view class=""> <uni-title title="驿站简介:" type="h4"></uni-title>{{detail.introduce}}</view>
			<view class=""> <uni-title title="房间配置:" type="h4"></uni-title>{{detail.internalFacilities}}</view>
			<view class=""> <uni-title title="周边配套:" type="h4"></uni-title>{{detail.surroundingFacilities}}</view>
			<view class=""> <uni-title title="特色服务:" type="h4"></uni-title>{{detail.specialService}}</view>
		</uni-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:'',
				lunbo:[],
				detail:{}
			}
		},
		onLoad(options){
			this.id=options.id
			this.getDetail()
		},
		methods: {
			async getDetail(){
				const res=await this.$u.get('/prod-api/api/youth-inn/youth-inn/'+this.id)
				this.detail=res.data
				this.lunbo=res.data.imageUrlList
			}
		}
	}
</script>

<style>

</style>
