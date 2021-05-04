<template>
	<view class="wrap">
		<u-waterfall v-model="flowList" ref="uWaterfall">
			<template v-slot:left="{ leftList }">
				<view class="demo-warter" v-for="(item, index) in leftList" :key="index" @click="toDetail(item)">
					<!-- 微信小程序需要hx2.8.11版本才支持在template中引入其他组件，比如下方的u-lazy-load组件 -->
					<u-lazy-load threshold="-450" border-radius="10" :image="item.product_img_url" :index="index"></u-lazy-load>
					<view class="demo-title">{{ item.product_name }}</view>
					<view class="demo-price">{{ item.product_price }}元</view>
					<view class="demo-tag">
						<view class="demo-tag-owner">自营</view>
						<view class="demo-tag-text">放心购</view>
					</view>
					<view class="demo-shop">{{ item.product_uprice }}</view>
<!-- 					<view class="u-close">
						<u-icon name="close-circle-fill" color="#fa3534" size="34" @click="remove(item.product_id)"></u-icon>
					</view> -->
				</view>
			</template>
			<template v-slot:right="{ rightList }">
				<view class="demo-warter" v-for="(item, index) in rightList" :key="index" @click="toDetail(item)">
					<u-lazy-load threshold="-450" border-radius="10" :image="item.product_img_url" :index="index"></u-lazy-load>
					<view class="demo-title">{{ item.product_name }}</view>
					<view class="demo-price">{{ item.product_price }}元</view>
					<view class="demo-tag">
						<view class="demo-tag-owner">自营</view>
						<view class="demo-tag-text">放心购</view>
					</view>
					<view class="demo-shop">{{ item.product_uprice }}</view>
<!-- 					<view class="u-close">
						<u-icon name="close-circle-fill" color="#fa3534" size="34" @click="remove(item.id)"></u-icon>
					</view> -->
				</view>
			</template>
		</u-waterfall>
		<u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="created"></u-loadmore>
	</view>
</template>

<script>
export default {
	data() {
		return {
			loadStatus: 'loadmore',
			flowList: [],
			list: []
		};
	},
	onLoad() {
		this.created();
	},
	onReachBottom() {
		this.loadStatus = 'loading';
		// 模拟数据加载
		setTimeout(() => {
			this.created();
			this.loadStatus = 'loadmore';
		}, 1000);
	},
	methods: {
		created() {
			this.$u.get('/home').then(res => {
				// console.log("res:",res)
				this.flowList = res
			})
			// for (let i = 0; i < 10; i++) {
			// 	let index = this.$u.random(0, this.list.length - 1);
			// 	// 先转成字符串再转成对象，避免数组对象引用导致数据混乱
			// 	let item = JSON.parse(JSON.stringify(this.list[index]));
			// 	item.id = this.$u.guid();
			// 	this.flowList.push(item);
			// }
		},
		remove(id) {
			this.$refs.uWaterfall.remove(id);
		},
		clear() {
			this.$refs.uWaterfall.clear();
		},
		//to产品详情
		toDetail(e){
			
			this.$u.route({
				type:  'navigateTo',
				params: {"mId":e.product_id},
				url: "/pages/index/proDetail",
				animationType: "slide-in-bottom"
			});
			// console.log("去产品详情页",e,e.product_id)
		}
	}
};
</script>

<style>
/* page不能写带scope的style标签中，否则无效 */
page {
	background-color: rgb(240, 240, 240);
}
</style>

<style lang="scss" scoped>
.demo-warter {
	border-radius: 8px;
	margin: 5px;
	background-color: #ffffff;
	padding: 8px;
	position: relative;
}

.u-close {
	position: absolute;
	top: 32rpx;
	right: 32rpx;
}

.demo-img-wrap {
}

.demo-image {
	width: 100%;
	border-radius: 4px;
}

.demo-title {
	font-size: 30rpx;
	margin-top: 5px;
	color: $u-main-color;
	word-break: break-all;
}

.demo-tag {
	display: flex;
	margin-top: 5px;
}

.demo-tag-owner {
	background-color: $u-type-error;
	color: #ffffff;
	display: flex;
	align-items: center;
	padding: 4rpx 14rpx;
	border-radius: 50rpx;
	font-size: 20rpx;
	line-height: 1;
}

.demo-tag-text {
	border: 1px solid $u-type-primary;
	color: $u-type-primary;
	margin-left: 10px;
	border-radius: 50rpx;
	line-height: 1;
	padding: 4rpx 14rpx;
	display: flex;
	align-items: center;
	border-radius: 50rpx;
	font-size: 20rpx;
}

.demo-price {
	font-size: 30rpx;
	color: $u-type-error;
	margin-top: 5px;
}

.demo-shop {
	font-size: 22rpx;
	color: $u-tips-color;
	margin-top: 5px;
}
</style>
