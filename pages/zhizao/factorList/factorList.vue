<template>
	<view>
		<scroll-view scroll-x="true"  style="display: flex;white-space: nowrap;overflow: hidden;">
			<view :class="item===cate?'active':''" style="width: 180rpx;height: 100rpx;text-align: center;line-height: 100rpx;display: inline-block;" v-for="(item,index) in Cate" @click="click(item)" :key="index">{{item}}</view>
		</scroll-view>
      <uni-card :isFull="true" v-for="item in list1" :key="item.id" style="margin-bottom: 10rpx;">
      	<uni-title :title="'厂商名称:'+item.name" type="h4"></uni-title>
      	<view class="">厂商介绍:{{item.introduce}}</view>
      </uni-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cate:'',
				id:'',
				list:[],
				Cate:['全部','智能装备','工业IT','工业软件','工业自动化']
			}
		},
		onLoad(options){
			this.list=JSON.parse(options.factorList)
			console.log(this.list);
		},
		computed:{
			list1(){
				if(this.cate!=="全部"){
					const reg=new RegExp(this.cate)
					return this.list.filter(item=>reg.test(item.cate))||this.list
				}else{
					return this.list
				}
			}
		},
		methods: {
			click(item){
				this.cate=item
			}
		}
	}
</script>

<style lang="scss">
.active{
	color: $u-type-primary;
}
</style>
