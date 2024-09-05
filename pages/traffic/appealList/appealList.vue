<template>
	<view>
		<uni-section title="诉求列表" type="line" >
		</uni-section>
		<uni-card :title="'标题:'+item.title" thumbnail="" v-for="item in appealList" :key="item.id" :isFull="true" @click="goDetail(item.id)" style="margin-bottom: 10rpx;">
			<view class="">承办单位：{{item.undertaker}}</view>
			<view class="">提交时间：{{item.createTime}}</view>
			<view class="">处理状态：{{item.state==="0"?'未处理':'已处理'}}</view>
		</uni-card>
		<button type="primary" @click="put" style="position: fixed;bottom: 0;width: 750rpx; z-index: 5;">发布诉求</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:'',
				appealList:[]
			}
		},
		onLoad(options){
			this.id=options.id
			this.getAppealList()
		},
		methods: {
			async getAppealList(){
				const res=await this.$u.get('/prod-api/api/gov-service-hotline/appeal/list?appealCategoryId='+this.id)
				this.appealList=res.rows
			},
			goDetail(id){
				const reg=new RegExp(id)
				const detail=this.appealList.filter(item=>reg.test(item.id))[0]
				uni.navigateTo({
					url:'/pages/traffic/detail/detail?id='+id+'&detail='+JSON.stringify(detail)
				})
			},
			put(){
				uni.navigateTo({
					url:'/pages/traffic/new/new?id='+this.id
				})
			}
		}
	}
</script>

<style>

</style>
