<template>
	<view>
		<view class="wrap">
			<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
						<view class="page-box">
							<view class="order" v-for="(res, index) in dataList" :key="res.id">
								<view class="top">
									<view class="left">
										<u-icon name="home" :size="30" color="rgb(94,94,94)"></u-icon>
										<view class="store">{{ res.shop_name }}</view>
										<u-icon name="arrow-right" color="rgb(203,203,203)" :size="26"></u-icon>
									</view>
								</view>
								<view class="item" :key="index">
									<view class="left"><image :src="res.product_img_url" mode="aspectFill"></image></view>
									<view class="content">
										<view class="title u-line-2">{{res.product_name}}</view>
										<view class="type u-line-2">{{res.product_detail}}</view>
										<view class="delivery-time">发货时间 </view>
									</view>
									<view class="right">
										<view class="price">
											￥{{ priceInt(res.product_uprice) }}
											<text class="decimal">.{{ priceDecimal(res.product_uprice) }}</text>
										</view>
										<view class="number">x{{res.goods_num}}</view>
									</view>
								</view>
								<view class="total">
									共{{res.goods_num}}件商品 合计:
									<text class="total-price">
										￥{{ priceInt(res.priceSum) }}
										<text class="decimal">.{{ priceDecimal(res.priceSum) }}</text>
									</text>
								</view>
								<view class="bottom">
									<view class="more"><u-icon name="more-dot-fill" color="rgb(203,203,203)"></u-icon></view>
									<u-number-box v-model="res.goods_num" :bg-color="bgColor" :color="color" :min="1"
									:step="step" :disabled="disabled" @change="changeCartNum"></u-number-box>
<!-- 									<view class="logistics btn">查看物流</view>
									<view class="exchange btn">卖了换钱</view>
									<view class="evaluate btn">评价</view> -->
								</view>
							</view>
							<u-loadmore :status="loadStatus[0]" bgColor="#f2f2f2"></u-loadmore>
						</view>
					</scroll-view>
				</swiper-item>
				</swiper-item>
			</swiper>
			
			<view class="hBottom"></view>
			<view class="navigation">
				<view class="left">
					<view class="item" @click="toIndex">
						<u-icon name="home" :size="40" :color="$u.color['contentColor']"></u-icon>
						<view class="text u-line-1">首页</view>
					</view>
					<view class="item car">
						<u-badge class="car-num" :count="cartNum" type="error" :offset="[-3, -6]"></u-badge>
						<u-icon name="shopping-cart" :size="40" :color="$u.color['contentColor']"></u-icon>
						<view class="text u-line-1">购物车</view>
					</view>
				</view>
				<view class="right">
					
					<view class="buy btn u-line-1">立退下单</view>
				</view>
			</view>
			<u-toast ref="uToast"></u-toast>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			dataList: [],
			current: 0,
			swiperCurrent: 0,
			tabsHeight: 0,
			dx: 0,
			loadStatus: ['loadmore','loadmore','loadmore','loadmore'],
			cartNum:0,//购物车数据
			bgColor: "#F2F3F5",
			color: '#323233',
			disabled: false,
			step: 1,
		};
	},
	onLoad() {
		this.getOrderList();
		this.getCarNum()//购物车数量
	},
	computed: {
		// 价格小数
		priceDecimal() {
			return val => {
				if (val !== parseInt(val)) return val.slice(-2);
				else return '00';
			};
		},
		// 价格整数
		priceInt() {
			return val => {
				if (val !== parseInt(val)) return val.split('.')[0];
				else return val;
			};
		}
	},
	methods: {
		reachBottom() {
			// 此tab为空数据
			if(this.current != 2) {
				this.loadStatus.splice(this.current,1,"loading")
				setTimeout(() => {
					this.getOrderList(this.current);
				}, 1200);
			}
		},
		// 页面数据
		getOrderList() {
			this.$u.get('/cart').then(res => {
				// console.log("res:",res.data)
				let newList = res.data
				newList.forEach(ielem=>{
					//算个总价合计
					ielem.priceSum = parseFloat((ielem.goods_num * ielem.product_uprice).toFixed(2))
				})
				this.dataList = newList
			})
		},
		transition({ detail: { dx } }) {
			// this.$refs.tabs.setDx(dx);
		},
		animationfinish({ detail: { current } }) {
			// this.$refs.tabs.setFinishCurrent(current);
			this.swiperCurrent = current;
			this.current = current;
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
		//修改购物车产品数据
		changeCartNum(){
			this.dataList.forEach(ielem=>{
				ielem.priceSum = parseFloat((ielem.goods_num * ielem.product_uprice).toFixed(2))
				console.log("修改数量ielem",ielem,ielem.goods_num)
			})
		},
		//返回产品首页
		toIndex(){
			console.log("toindex")
			this.$u.route({
				type:  'navigateTo',
				params: {"mId":e.product_id},
				url: "/pages/index/index",
				animationType: "slide-in-bottom"
			});
			
		}
	}
};
</script>

<style>
/* #ifndef H5 */
page {
	height: 100%;
	background-color: #f2f2f2;
}
/* #endif */
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
	
.order {
	width: 710rpx;
	background-color: #ffffff;
	margin: 20rpx auto;
	border-radius: 20rpx;
	box-sizing: border-box;
	padding: 20rpx;
	font-size: 28rpx;
	.top {
		display: flex;
		justify-content: space-between;
		.left {
			display: flex;
			align-items: center;
			.store {
				margin: 0 10rpx;
				font-size: 32rpx;
				font-weight: bold;
			}
		}
		.right {
			color: $u-type-warning-dark;
		}
	}
	.item {
		display: flex;
		margin: 20rpx 0 0;
		.left {
			margin-right: 20rpx;
			image {
				width: 200rpx;
				height: 200rpx;
				border-radius: 10rpx;
			}
		}
		.content {
			.title {
				font-size: 28rpx;
				line-height: 50rpx;
			}
			.type {
				margin: 10rpx 0;
				font-size: 24rpx;
				color: $u-tips-color;
			}
			.delivery-time {
				color: #e5d001;
				font-size: 24rpx;
			}
		}
		.right {
			margin-left: 10rpx;
			padding-top: 20rpx;
			text-align: right;
			.decimal {
				font-size: 24rpx;
				margin-top: 4rpx;
			}
			.number {
				color: $u-tips-color;
				font-size: 24rpx;
			}
		}
	}
	.total {
		margin-top: 20rpx;
		text-align: right;
		font-size: 24rpx;
		.total-price {
			font-size: 32rpx;
		}
	}
	.bottom {
		display: flex;
		margin-top: 40rpx;
		padding: 0 10rpx;
		justify-content: space-between;
		align-items: center;
		.btn {
			line-height: 52rpx;
			width: 160rpx;
			border-radius: 26rpx;
			border: 2rpx solid $u-border-color;
			font-size: 26rpx;
			text-align: center;
			color: $u-type-info-dark;
		}
		.evaluate {
			color: $u-type-warning-dark;
			border-color: $u-type-warning-dark;
		}
	}
}
.centre {
	text-align: center;
	margin: 200rpx auto;
	font-size: 32rpx;
	image {
		width: 164rpx;
		height: 164rpx;
		border-radius: 50%;
		margin-bottom: 20rpx;
	}
	.tips {
		font-size: 24rpx;
		color: #999999;
		margin-top: 20rpx;
	}
	.btn {
		margin: 80rpx auto;
		width: 200rpx;
		border-radius: 32rpx;
		line-height: 64rpx;
		color: #ffffff;
		font-size: 26rpx;
		background: linear-gradient(270deg, rgba(249, 116, 90, 1) 0%, rgba(255, 158, 1, 1) 100%);
	}
}
.wrap {
	display: flex;
	flex-direction: column;
	height: calc(100vh - var(--window-top));
	width: 100%;
}
.swiper-box {
	flex: 1;
}
.swiper-item {
	height: 100%;
}
.hBottom{
	height:100rpx
}
</style>
