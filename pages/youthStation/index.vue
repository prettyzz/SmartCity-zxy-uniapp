<template>
	<view>
		<image src="/static/qinnian.webp" mode="" style="width: 750rpx;height: 300rpx;"></image>
		<uni-card title="驿站简介" :isFull="true">
			内容主体，可自定义内容及样式
		</uni-card>
		<uni-section title="各区标志性建筑" sub-title="" type="circle">
		</uni-section>
		 <u-grid :col="3">
		 	<u-grid-item v-for="item in hot" :key="item.id" style="text-align: center;" @click="goArea(item.id)">
		 		<u-image :src="item.imgUrl" width="230" height="250" border-radius="25"></u-image>
		 		<view class="title" style="width: 250rpx;">{{item.name}}</view>
		 	</u-grid-item>
		 </u-grid>
		 <uni-section title="驿站列表" sub-title="" type="line">
		 </uni-section>
		 <uni-card :isFull="true" v-for="item in List" :key="item.id" style="margin-bottom: 10rpx;">
		 	<view class="newItem" @click="goDetail(item.id)">
				<u-image :src="item.coverImgUrl" width="250" height="250"></u-image>
				<view class="right">
					<uni-title :title="'驿站名称:'+item.name" type="h4"></uni-title>
					<view class="">剩余床位：男{{item.bedsCountBoy}}个 --- 女：{{item.bedsCountGirl}}个</view>
					<view class="">详细地址：{{item.address}}</view>
				</view>
			</view>
			<uni-collapse>
				<uni-collapse-item title="站点介绍">
					【公寓介绍】：{{item.introduce}}
				</uni-collapse-item>
			</uni-collapse>
		 </uni-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hot:[],
				List:[]
			}
		},
		onLoad(){
			this.getHot()
			this.getList()
		},
		methods: {
			async getHot(){
				const res=await this.$u.get('/prod-api/api/youth-inn/talent-policy-area/list')
				this.hot=res.data
			},
			async getList(){
				const res=await this.$u.get('/prod-api/api/youth-inn/youth-inn/list')
				this.List=res.rows
			},
			goDetail(id){
				uni.navigateTo({
					url:'/pages/youthStation/detail/detail?id='+id
				})
			},
			goArea(id){
				uni.navigateTo({
					url:'/pages/youthStation/area/area?id='+id
				})
			}
		}
	}
</script>

<style>

</style>
