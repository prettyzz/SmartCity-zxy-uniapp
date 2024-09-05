<template>
	<view>
		<u-card>
			<template v-slot:body>
				<uni-title title="智慧城市" type="h2" align="center"></uni-title>
				<u-field v-if="other" label="选择诉求分类:" label-width="180" v-model="cate" input-align="right" :disabled="true" right-icon="arrow-down" @click="show=true"></u-field>
				<u-action-sheet :list="list" v-model="show" @click="click"></u-action-sheet>
				<u-field label="标题:" v-model="title" :border-top="true" rightIcon="dot"></u-field>
				<u-field label="内容:" v-model="content" :border-top="true" type="textarea"></u-field>
				<u-field label="承办单位:" v-model="undertaker"  :border-top="true"></u-field>
				<u-field label="反馈手机号:" v-model="tel" label-width="150"  :border-top="true"></u-field>
				<uni-section title="图片信息" sub-title="" type="circle">
				</uni-section>
				<u-upload ref="upload" :auto-upload="true" action="http://124.93.196.45:10001/prod-api/common/upload" :header="header" :show-progress="true"></u-upload>
				<u-button type="primary" @click="submit">提交</u-button>
			</template>
		</u-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				other:0,
				id:'',
				cate:'',
				show:false,
				header:{Authorization:uni.getStorageSync('token')},
				title:'',
				content:'',
				undertaker:'',
				tel:'',
				imgUrl:'',
				list:[]
			}
		},
		onLoad(options){
			this.id=options.id
			if(options.other){
				this.other=options.other
			}
			console.log(this.id);
			this.getList()
		},
		methods: {
			async getList(){
				const res=await this.$u.get('/prod-api/api/gov-service-hotline/appeal-category/list')
				res.rows.forEach(item=>this.list.push({text:item.name,id:item.id}))
			},
			click(e){
				this.cate=this.list[e].text
				this.id=this.list[e].id
			},
			async submit(){
				const arr=[]
				this.$refs.upload.lists.forEach(item=>{
					arr.push(item.response.fileName)
				})
				this.imgUrl=arr.join()
				const res=await this.$u.post('/prod-api/api/gov-service-hotline/appeal',{appealCategoryId:this.id,title:this.title,content:this.content,undertaker:this.undertaker,imgUrl:this.imgUrl})
				console.log(res);
				if(res.code===200){
					uni.showToast({
						title:'新建诉求成功'
					})
					this.title=""
					this.content=""
					this.undertaker=""
					this.tel=""
					this.imgUrl=""
				}else{
					uni.showToast({
						title:'新建诉求失败'
					})
				}
			}
		}
	}
</script>

<style>

</style>
