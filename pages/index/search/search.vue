<template>
	<view>
		<uni-section title="搜索结果列表" sub-title="" type="line">5
		</uni-section>
		<u-empty text="未搜索到相关结果" v-if="newList.length===0"></u-empty>
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
				keyword:'',
				newList:[]
			}
		},
		onLoad(options){
			this.keyword=options.keyword
			this.getNewList()
		},
		methods: {
			async getNewList(){
				const res=await this.$u.get('/prod-api/press/press/list?title='+this.keyword)
				console.log(res);
				this.newList=res.rows
			},
		}
	}
</script>

<style>

</style>
