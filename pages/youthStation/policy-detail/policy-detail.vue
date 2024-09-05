<template>
	<view>
		<uni-title :title="detail.title" type="h1" align="center"></uni-title>
		<view class="" style="display: flex;">
			<uni-title :title="'日期:'+detail.createTime" type="h5" align="left"></uni-title>
			<uni-title :title="'发布者:'+detail.author" type="h5" align="right"></uni-title>
		</view>
		<u-parse :html="detail.content" :selectable="true"></u-parse>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:"",
				detail:{}
			}
		},
		onLoad(options){
			this.id=options.id
			this.getDetail()
		},
		methods: {
			async getDetail(){
				const res=await this.$u.get('/prod-api/api/youth-inn/talent-policy/'+this.id)
				this.detail=res.data
			}
		}
	}
</script>

<style>

</style>
