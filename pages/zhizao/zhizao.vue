<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular>
			<swiper-item v-for="item in lunbo" :key="item.id" @click="goDetail(item.id)">
				<image :src="item.advImg" mode="" style="width: 750rpx; height: 300rpx;"></image>
			</swiper-item>
		</swiper>
		<uni-section title="服务入口" sub-title="" type="circle" >
		</uni-section>
			<u-grid :col="3">
				<u-grid-item v-for="item in service" :key="item.id" @click="goPage(item.link)">
					<image :src="item.imgUrl" style="width: 80rpx;height: 80rpx;"></image>
					<view class="">{{item.serviceName}}</view>
				</u-grid-item>
			</u-grid>
			<uni-section title="新闻动态" sub-title="" type="line">
                 更多 <u-icon name="arrow-right"></u-icon>
			</uni-section>
			<uni-card :isFull="true" v-for="item in newList" :key="item.id" :isShadow="true" style="margin-bottom: 10rpx;">
				<view class="newItem">
					<image :src="item.imgUrl" mode="" style="width: 220rpx;height: 220rpx;"mode="aspectFit"></image>
					<view class="right">
						<uni-title :title="'标题:'+item.title" type="h4"></uni-title>
						<view class="content" style="height: 120rpx;">{{item.content}}</view>
					</view>
				</view>
			</uni-card>
		<uni-section title="推荐厂商:" type="line">
			<view class="" @click="goMore">
				更多 <u-icon name="arrow-right"></u-icon>
			</view>
		</uni-section>
		<uni-card v-if="item.recommend" :isFull="true" v-for="item in factorList" :key="item.id" style="margin-bottom: 10rpx;">
			<uni-title :title="'厂商名称:'+item.name" type="h4"></uni-title>
			<view class="">厂商介绍:{{item.introduce}}</view>
		</uni-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lunbo:[
					{
						id:'0',
						advImg:require('@/static/zhizao/file_20220502cs18.jpg')
					},
					{
						id:'1',
						advImg:require('@/static/zhizao/file_20220502cs19.jpg')
					},
					{
						id:'2',
						advImg:require('@/static/zhizao/file_20220502cs20.jpg')
					},
					{
						id:'3',
						advImg:require('@/static/zhizao/file_20220502cs21.jpg')
					}
				],
				service:[
					{
						id:'0',
						imgUrl:require('@/static/dangjian-active.png'),
						serviceName:'展会活动'
					},
					{
						id:'1',
						imgUrl:require('@/static/g.png'),
						serviceName:'厂商招聘'
					},
					{
						id:'2',
						imgUrl:require('@/static/c.png'),
						serviceName:'厂商入驻'
					}
				],
				factorList:[
					{
						id:'0',
						name:'中国航天',
						recommend:1,
						cate:'智能装备',
						introduce:'中国航天科技集团有限公司是中国航天科技工业的主导力量，主要从事运载火箭、各类卫星、载人飞船、货运飞船、深空探测器、空间站等宇航产品和战略、战术导弹武器系统的研究、设计、生产、试验和发射服务。中国航天科技集团有限公司也是中国唯一的洲际战略核导弹研制生产单位。'
					},
					{
						id:'1',
						name:'华为',
						recommend:1,
						cate:'工业IT',
						introduce:'华为消费者业务产品全面覆盖手机、移动宽带终端、终端云等，凭借自身的全球化网络优势、全球化运营能力，致力于将最新的科技带给消费者，让世界各地享受到技术进步的喜悦，以行践言，实现梦想。'
					},
					{
						id:'2',
						name:'中芯国际',
						recommend:0,
						cate:'工业软件',
						introduce:'中芯国际（证券代码：00981.HK/688981.SH）是世界领先的集成电路晶圆代工企业之一，也是中国大陆集成电路制造业领导者，拥有领先的工艺制造能力、产能优势、服务配套，向全球客户提供0.35微米到14纳米不同技术节点的晶圆代工与技术服务。中芯国际总部位于中国上海，拥有全球化的制造和服务基地，在上海、北京、天津、深圳建有三座8吋晶圆厂和三座12吋晶圆厂；在上海、北京、深圳各有一座12吋晶圆厂在建中。中芯国际还在美国、欧洲、日本和中国台湾设立营销办事处、提供客户服务，同时在中国香港设立了代表处。'
					},
					{
						id:'3',
						name:'中国商飞',
						recommend:0,
						cate:'智能装备',
						introduce:'中国商用飞机有限责任公司（简称中国商飞，英文名称CommercialAircraftCorporationofChinaLtd，缩写COMAC），于2008年5月11日在中国上海成立，是我国实施国家大型飞机重大专项中大型客机项目的主体，也是统筹干线飞机和支线飞机发展、实现我国民用飞机产业化的主要载体。'
					},
					{
						id:'4',
						name:'比亚迪',
						recommend:0,
						cate:'工业自动化',
						introduce:'比亚迪股份有限公司（简称“比亚迪”）成立于1995年2月，总部位于广东省深圳市。公司现有员工超过22万人，业务横跨汽车、轨道交通、新能源和电子四大产业。'
					},
					{
						id:'5',
						name:'中国船舶',
						recommend:0,
						cate:'智能装备',
						introduce:'中国船舶重工集团有限公司（ChinaShipbuildingIndustryGroupCo.,Ltd.）成立于1999年7月1日，是国务院国有资产监督管理委员会管理的中央企业。前身是1963年9月国务院决定将船舶工业从第三机械工业部分出来成立的第六机械工业部。'
					},
					{
						id:'6',
						name:'格力电器',
						recommend:1,
						cate:'工业自动化',
						introduce:'珠海格力电器股份有限公司（下文简称格力电器），成立于1991年，是一家集研发、生产、销售、服务于一体的国际化家电企业，拥有格力、TOSOT、晶弘三大品牌，主营家用空调、中央空调、空气能热水器、手机、生活电器、冰箱等产品。'
					}
				],
				activeList:[
					{
						id:'0',
						title:'2023年第25届中国（广州）国际建筑装饰博览会',
						content:'中国建博会（广州）,全称为中国（广州）国际建筑装饰博览会，是目前世界上该领域里展览面积最大的展览会，由中国对外贸易中心（集团）和中国建筑装饰协会联合主办，中国对外贸易广州展览总公司承办，得到中国林产工业协会、全国工商联家具装饰业商会支持，每年7月8-11日在广州的广交会展馆和广州保利世贸展馆举办。',
						imgUrl:require('@/static/zhizao/file_20220503cs01.jpg')
					},
					{
						id:'1',
						title:'CICEE2023长沙国际工程机械展览会(双年展）',
						content:'长沙国际工程机械展览会将全方位展示工程机械全产业链领域上下游的新产品、新技术、新材料、新方案，全力打造价值交流平台',
						imgUrl:require('@/static/zhizao/file_20220503cs02.jpg')
					},
					{
						id:'2',
						title:'2023第三十五届中国国际塑料橡胶工业展览会',
						content:'「CHINAPLAS 国际橡塑展」伴随着中国塑料及橡胶行业成长逾30年，至今已发展成为亚洲最具规模之橡塑业展会，并对中国橡塑业的发展产生了积极的推动作用。目前，「CHINAPLAS 国际橡塑展」不单是亚洲最大型的塑料及橡胶业展览会，业内人士更公认其影响力仅次于全球第一大橡塑展的德国「K展」，成为橡塑业的世界第二大展会。',
						imgUrl:require('@/static/zhizao/file_20220503cs03.jpg')
					},
					{
						id:'3',
						title:'2023中国长沙国际五金博览会',
						content:'（一）劳保用品展区；劳保用品，五金制品，手工具，扎带，电器，等五金劳保。（二）机械焊接展区。建筑机械、焊接机械及焊接设备。 （三）磨料磨具展区。油石砂轮、磨头、油石、砂瓦、白刚玉磨料、黑碳化硅磨料、金刚石锯片，砂带，玻璃工具，切削工具，金刚石制品，单晶刚玉磨料等。',
						imgUrl:require('@/static/zhizao/file_20220503cs04.jpg')
					},
					{
						id:'4',
						title:'2023第33届国际医疗仪器设备展览会',
						content:'第33届国际医疗仪器设备展览会CHINA MED 2023，将于2023年3月24日至26日在北京国家会议中心举办啦！CHINA MED始于1988年，是中国首家通过国际展览业协会（UFI）认证的国际医疗仪器设备展览会。经过30多年的发展，已经成为国际先进产品和技术亮相的平台、智能化医疗技术及应用展示窗口。',
						imgUrl:require('@/static/zhizao/file_20220503cs05.jpg')
					},
					{
						id:'5',
						title:'AMR2023国际汽车维修检测诊断设备、零部件及美容养护展览会',
						content:'AMR国际汽车维修检测诊断设备、零部件及美容养护展览会（简称：AMR国际汽保汽配展）历经近四十载成长，已成为中国汽车后市场领域的优选商贸平台及年度盛会，多年来不懈助力业界不断壮大和走向世界。展会扎根所在的京津冀地区近年来将在政策推动下发展迅猛，汽车市场供需两旺。',
						imgUrl:require('@/static/zhizao/file_20220503cs06.jpg')
					}
				],
				newList:[
					{
						id:'0',
						title:''
						
					}
				]
			}
		},
		methods: {
			goMore(){
				uni.navigateTo({
					url:'/pages/zhizao/factorList/factorList?factorList='+JSON.stringify(this.factorList)
				})
			}
		}
	}
</script>

<style>

</style>
