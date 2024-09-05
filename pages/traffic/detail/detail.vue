<template>
	<view>
		<uni-title :title="'标题：'+detail.title" type="h1" align="center"></uni-title>
		<view class="" style="display: flex;">
			<uni-title :title="'提交时间：'+detail.createTime" type="h5" align="left"></uni-title>
			<uni-title :title="'承办单位：'+detail.undertaker" type="h5" align="right"></uni-title>
		</view>
		内容：{{detail.content}}
		<uni-section title="图片信息" sub-title="" type="circle">
		</uni-section>
		<u-image :src="detail.imgUrl" width="200" height="200"></u-image>
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
			this.detail=JSON.parse(options.detail)
		},
		methods: {
		}
	}
</script>

<style>

</style>
