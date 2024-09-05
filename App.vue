<script>
	export default {
		// 此处globalData为了演示其作用，不是uView框架的一部分
		globalData: {
			username: '白居易'
		},
		onLaunch() {
			// 1.1.0版本之前关于http拦截器代码，已平滑移动到/common/http.interceptor.js中
			// 注意，需要在/main.js中实例化Vue之后引入如下(详见文档说明)：
			// import httpInterceptor from '@/common/http.interceptor.js'
			// Vue.use(httpInterceptor, app)
			// process.env.VUE_APP_PLATFORM 为通过js判断平台名称的方法，结果分别如下：
			/**
			 * h5，app-plus(nvue下也为app-plus)，mp-weixin，mp-alipay......
			 */
		},
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	@import "common/demo.scss";
	page{
		background-color: $u-bg-color;
		.title{
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
			width: 100%;
		}
		.newItem{
	       width: 700rpx;
		   display: flex;
		   justify-content: space-between;
		   uni-image{
			   width: 250rpx;
			   height: 250rpx;
		   }
		   .right{
			   width: 450rpx;
			   margin-left: 10rpx;
			   .content{
				  height: 150rpx;
				  display: -webkit-box;
				  -webkit-box-orient:vertical;
				  -webkit-line-clamp:3;
				  overflow: hidden;
				  text-overflow: ellipsis;
			   }
		   }
		}
	}
</style>