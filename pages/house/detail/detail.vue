<template>
	<view>
		<uni-card :title="detail.sourceName" :thumbnail="$img+detail.pic" mode="style" :isFull="true">
		  <view class="">房源面积：{{detail.areaSize}}平方米</view>
		  <view class="" v-if="detail.price">房源单价：{{detail.price.replace('/','元/')}}</view>
		  <view class="">房源类型：{{detail.houseType}}</view>
		  <view class="">房源简介：{{detail.description||'无'}}</view>
		</uni-card>
		<button type="primary" @click="goHome">主页</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:'',
				detail:{}
			}
		},
		onLoad(options){
			this.id=options.id
			this.getDetail()
		},
		methods: {
			async getDetail(){
				const res=await this.$u.get('/prod-api/api/house/housing/'+this.id)
				this.detail=res.data
			},
			goHome(){
				uni.navigateTo({
					url:'/pages/house/index'
				})
			}
		}
	}
</script>

<style>

</style>
