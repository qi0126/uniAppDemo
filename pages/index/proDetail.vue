<template>
	<view class="wrap">
		<u-swiper @change="change" :height="700" :list="list" :effect3d="effect3d"
		mode="mode" :interval="3000" @click="click"></u-swiper>
		<u-cell-group>
			<u-cell-item value="" :title="proDetail.product_name" :arrow="false">
			</u-cell-item>
			<u-cell-item value="" :title="'价格：￥'+proDetail.product_uprice?proDetail.product_uprice:0" :arrow="false">
			</u-cell-item>
			<u-cell-item :title="'店铺名称：'+proDetail.shop_name" :value="'地址:'+proDetail.shop_address" :arrow="false">
			</u-cell-item>
			<u-cell-item :title="proDetail.product_detail" value="" :arrow="false">
			</u-cell-item>
			<u-cell-item :arrow="false">
				<u-number-box v-model="proNum" :bg-color="bgColor" :color="color" :min="0"
				:step="step" :disabled="disabled" @change="change" @focus="focus"></u-number-box>
			</u-cell-item>
		</u-cell-group>
		<view class="hBottom"></view>
		<view class="navigation">
			<view class="left">
				<view class="item" @click="toIndex">
					<u-icon name="home" :size="40" :color="$u.color['contentColor']"></u-icon>
					<view class="text u-line-1">首页</view>
				</view>
				<view class="item" :class="proDetail.flowTF?'txtOrange':''" @click="proFlowFun(proDetail)">
					<u-icon :name="proDetail.flowTF?'star-fill':'star'" :size="40"></u-icon>
					<view class="text u-line-1">关注</view>
				</view>
				<view class="item car">
					<u-badge class="car-num" :count="cartNum" type="error" :offset="[-3, -6]"></u-badge>
					<u-icon name="shopping-cart" :size="40" :color="$u.color['contentColor']"></u-icon>
					<view class="text u-line-1">购物车</view>
				</view>
			</view>
			<view class="right">
				<view class="cart btn u-line-1">加入购物车</view>
				<view class="buy btn u-line-1">立即购买</view>
			</view>
		</view>
		<u-toast ref="uToast"></u-toast>
	</view>
	
</template>

<script>
export default {
	data() {
		return {
				list: [],
				proDetail:{},
				mode: 'round',
				effect3d: false,
				cartNum:0,//购物车数据
				proNum:1,//产品下单数量
				bgColor: "#F2F3F5",
				color: '#323233',
				disabled: false,
				step: 1,
		};
	},
	onLoad(e) {
		this.createFun(e);
		this.getCarNum()//购物车数量
	},
	methods: {
		createFun(e){
			this.$u.get('/detail',{mId:e.mId}).then(res => {
				if(res.code == 200){
					res.data.image.forEach(ielem=>{
						ielem.image = ielem.image_url
					})
					this.list = res.data.image
					this.proDetail = res.data
					// console.log("产品详情：",this.proDetail)
				}else{
					this.$refs.uToast.show({
						title: res.msg,
						position: 'top',
						type: 'default',
					});
				}
			})
		},
		//轮播点击事件
		click(e){},
		change(index) {
			// console.log(index);
		},
		//购物车数量
		getCarNum(){
			this.$u.get('/cartNum').then(res => {
				if(res.code == 200){
					this.cartNum = res.cartNum
				}else{
					this.$refs.uToast.show({
						title: res.msg,
						position: 'top',
						type: 'default',
					});
				}
			
			})
		},
		//关注产品和取消关注产品
		proFlowFun(e){
			this.$u.post('/flowProApp',{product_id:e.product_id}).then(res => {
				if(res.code == 200){
					this.proDetail.flowTF = !this.proDetail.flowTF
					this.$refs.uToast.show({
						title: res.msg,
						position: 'top',
						type: 'default',
					});
				}else{
					this.$refs.uToast.show({
						title: res.msg,
						position: 'top',
						type: 'default',
					});
				}
			
			})
		},
		//回到产品列表页
		toIndex(){
			this.$u.route({
				type:  'switchTab',
				params: {},
				url: "/pages/index/index",
				animationType: "slide-in-bottom"
			});
		},
		focus(){
			
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
	
	.navigation {
		display: flex;
		margin-top: 100rpx;
		border: solid 2rpx #f2f2f2;
		background-color: #ffffff;
		padding: 16rpx 0;
		position: fixed;
		bottom:0;
		width:100%;
		.left {
			display: flex;
			font-size: 20rpx;
			.item {
				margin: 0 30rpx;
				&.car {
					text-align: center;
					position: relative;
					.car-num {
						position: absolute;
						top: -10rpx;
						right: -10rpx;
					}
				}
			}
		}
		.right {
			display: flex;
			font-size: 28rpx;
			align-items: center;
			.btn {
				line-height: 66rpx;
				padding: 0 30rpx;
				border-radius: 36rpx;
				color: #ffffff;
			}
			.cart {
				background-color: #ed3f14;
				margin-right: 30rpx;
			}
			.buy {
				background-color: #ff7900;
			}
		}
	}
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
.txtOrange{
	color:#ff9900
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
.hBottom{
	height:100rpx
}
</style>
