<template>
	<view>
		<u-image :src="detail.imgUrl" width="750" height="300"></u-image>
		<uni-card title="该区简介" :isFull="true">
			{{detail.introduce}}
		</uni-card>
		<uni-section title="该区人才政策文件列表" sub-title="" type="line">
		</uni-section>
		<uni-list>
			<uni-list-item :to="'/pages/youthStation/policy-detail/policy-detail?id='+item.id" :note="'日期：'+item.createTime" v-for="item in policyList" :key="item.id" direction="column" :title="'标题:'+item.title" :ellipsis="1" :showArrow="true" :clickable="true">
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:'',
				detail:{},
				policyList:[]
			}
		},
		onLoad(options){
			this.id=options.id
			this.getDetail()
			this.getpolicyList()
		},
		methods: {
			async getDetail(){
				const res=await this.$u.get('/prod-api/api/youth-inn/talent-policy-area/'+this.id)
				console.log(res);
				this.detail=res.data
			},
			async getpolicyList(){
				const res=await this.$u.get('/prod-api/api/youth-inn/talent-policy/list?areaId='+this.id)
				this.policyList=res.data
			}
		}
	}
</script>

<style>

</style>
