<template>
	<view>
		<uni-search-bar @confirm="search" cancelText="搜索" @cancel="search" v-model="keyword"/>
		<uni-section title="房源展示分类" sub-title="" type="circle">
		</uni-section>
			<u-grid :col="4">
				<u-grid-item v-for="item in service" :key="item.id" >
					<image :src="item.imgUrl" mode="" style="width: 80rpx;height: 80rpx;"></image>
					<view class="">{{item.name}}</view>
				</u-grid-item>
			</u-grid>
		<uni-section title="房源列表信息" sub-title="" type="line">
		</uni-section>
		<uni-card :title="item.sourceName" :thumbnail="$img+item.pic" @click="goDetail(item.id)" mode="style" v-for="item in houseList" :key="item.id">
		  <view class="">房源面积：{{item.areaSize}}平方米</view>
		  <view class="">房源价格：{{item.price.replace('/','元/')}}</view>
		  <view class="">房源简介：{{item.description||'无'}}</view>
		</uni-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword:'',
				houseList:[],
				houseType:'',
				service:[
					{
						id:'0',
						name:'二手',
						imgUrl:require('@/static/ershou.png')
					},
					{
						id:'1',
						name:'楼盘',
						imgUrl:require('@/static/loupan.png')
					},
					{
						id:'2',
						name:'租房',
						imgUrl:require('@/static/zufang.png')
					},
					{
						id:'3',
						name:'中介',
						imgUrl:require('@/static/zhongjie.png')
					}
				]
			}
		},
		onLoad(){
		 this.getHouseList()
		},
		methods: {
			async getHouseList(){
				const res=await this.$u.get('/prod-api/api/house/housing/list',{houseType:this.houseType,sourceName:this.keyword})
				this.houseList=res.rows
			},
			goDetail(id){
				uni.navigateTo({
					url:'/pages/house/detail/detail?id='+id
				})
			}
		},
	}
</script>

<style>

</style>
