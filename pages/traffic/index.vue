<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in lunbo" :key="item.id" @click="goDetail(item.id)">
				<u-image :src="item.imgUrl" width="750" height="300"></u-image>
			</swiper-item>
		</swiper>
		<uni-section title="市民诉求分类" type="circle">
		</uni-section>
			<swiper style="height: 380rpx;">
				<swiper-item>
					<u-grid :col="4">
						<u-grid-item v-for="item in service1" :key="item.id" @click="goPage(item)">
							<u-image :src="item.imgUrl" width="80" height="80" border-radius="25"></u-image>
							<view class="">{{item.name}}</view>
						</u-grid-item>
					</u-grid>
				</swiper-item>
				<swiper-item>
					<u-grid :col="4">
						<u-grid-item v-for="item in service2" :key="item.id" @click="goPage(item)">
							<u-image :src="item.imgUrl" width="80" height="80" border-radius="25"></u-image>
							<view class="">{{item.name}}</view>
						</u-grid-item>
					</u-grid>
				</swiper-item>
			</swiper>
			<uni-section title="我的诉求" sub-title="" type="line">
			</uni-section>
			<uni-card :title="'标题:'+item.title" :isFull="true" v-for="item in my" :key="item.id" style="margin-bottom: 10rpx;">
				<view class="">承办单位：{{item.undertaker}}</view>
				<view class="">承办时间：{{item.createTime}}</view>
				<view class="">处理状态:{{item.state==="0"?'未处理':'已处理'}}</view>
			</uni-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lunbo:[],
				service1:[],
				service2:[],
				my:[]
			}
		},
		onLoad(){
			this.getlunbo()
			this.getService()
			this.getMy()
		},
		methods: {
			async getlunbo(){
				const res=await this.$u.get('/prod-api/api/gov-service-hotline/ad-banner/list')
				this.lunbo=res.data
			},
			async getService(){
				const res=await this.$u.get('/prod-api/api/gov-service-hotline/appeal-category/list',{pageNum:1,pageSize:8})
				this.service1=res.rows
				const res2=await this.$u.get('/prod-api/api/gov-service-hotline/appeal-category/list',{pageNum:2,pageSize:8})
				this.service2=res2.rows
			},
			goPage(item){
				if(item.name==='其他诉求'){
					uni.navigateTo({
						url:'/pages/traffic/new/new?id='+item.id+'&other=1'
					})
				}else{
					uni.navigateTo({
						url:'/pages/traffic/appealList/appealList?id='+item.id
					})
				}
			},
			async getMy(){
				const res=await this.$u.get('/prod-api/api/gov-service-hotline/appeal/my-list')
				this.my=res.rows
			},
		}
	}
</script>

<style>

</style>
