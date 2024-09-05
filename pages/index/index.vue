<template>
	<view>
		<uni-search-bar @confirm="search" v-model="keyword" />
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in lunbo" :key="item.id" @click="goDetail(item.id)">
				<u-image :src="item.advImg" width="750" height="300"></u-image>
			</swiper-item>
		</swiper>
		<uni-section title="服务入口" sub-title="" type="circle">
		</uni-section>
			<u-grid :col="5">
				<u-grid-item v-for="item in service" :key="item.id" @click="goPage(item.link)">
					<u-image :src="item.imgUrl" width="80" height="80" border-radius="25"></u-image>
					<view class="">{{item.serviceName}}</view>
				</u-grid-item>
			</u-grid>
		<uni-section title="热门主题" sub-title="" type="circle">
		</uni-section>
			<u-grid :col="2">
				<u-grid-item v-for="item in hot" :key="item.id">
					<u-image :src="item.cover" width="250" height="250" border-radius="25"></u-image>
					<view class="title" style="width: 250rpx;">{{item.title}}</view>
				</u-grid-item>
			</u-grid>
		<uni-section title="新闻专栏" sub-title="" type="circle">
		</uni-section>
		<scroll-view scroll-x="true"  style="display: flex;white-space: nowrap;overflow: hidden;">
			<view :class="item.id===id?'active':''" style="width: 150rpx;height: 100rpx;text-align: center;line-height: 100rpx;display: inline-block;" v-for="item in newCate" :key="item.id" @click="click(item.id)">{{item.name}}</view>
		</scroll-view>
		<uni-section title="新闻列表" sub-title="" type="line">5
		</uni-section>
		<uni-card :isFull="true" v-for="item in newList" :key="item.id" @click="goDetail(item.id)">
			<view class="newItem">
				<u-image :src="item.cover" width="250" height="250" border-radius="25"></u-image>
				<view class="right">
					<view class="title">标题:{{item.title}}</view>
					<view class="content">
					<rich-text :nodes="'内容：'+item.content"></rich-text>
					</view>
					<view class="">评论数：{{item.commentNum}}个</view>
					<view class="">发布日期：{{item.publishDate}}</view>
				</view>
			</view>
		</uni-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:'',
				keyword:'',
				lunbo:[],
				service:[],
				hot:[],
				newCate:[],
				newList:[]
			}
		},
		onLoad(){
			this.getlunbo()
			this.getService()
			this.getHot()
			this.getNewCate()
			this.getNewList()
		},
		methods: {
			search(){
				uni.navigateTo({
					url:'/pages/index/search/search?keyword='+this.keyword
				})
			},
			async getlunbo(){
				const res=await this.$u.get('/prod-api/api/rotation/list')
				console.log(res);
				this.lunbo=res.rows
			},
			async getService(){
				const res=await this.$u.get('/prod-api/api/service/list')
				console.log(res);
				this.service=res.rows
			},
			goPage(link){
				console.log(link);
				uni.navigateTo({
					url:'/pages/'+link
				})
			},
			async getHot(){
				const res=await this.$u.get('/prod-api/press/press/list?hot=Y')
				console.log(res);
				this.hot=res.rows
			},
			async getNewCate(){
				const res=await this.$u.get('/prod-api/press/category/list')
				console.log(res);
				this.newCate=res.data
			},
			click(id){
				this.id=id
				this.getNewList()
			},
			async getNewList(){
				const res=await this.$u.get('/prod-api/press/press/list?type='+this.id)
				console.log(res);
				this.newList=res.rows
			},
			goDetail(id){
				uni.navigateTo({
					url:'/pages/index/detail/detail?id='+this.id
				})
			}
		}
	}
</script>

<style lang="scss">
.active{
	color: $u-type-primary;
}
</style>
