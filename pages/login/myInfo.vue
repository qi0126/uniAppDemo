<template>
	<view class="wrap">
		<view class="top"></view>
		<view class="content">
			<view class="title">{{userInfo.user_name}}欢迎登录</view>
			<u-toast ref="uToast"></u-toast>
			<u-cell-group title="用户信息">
				<u-cell-item center title="用户名"  :value="userInfo.user_namesub" index="index"  v-if="!changePasTF">
				</u-cell-item>
				<u-cell-item center title="用户名" index="index"  v-if="changePasTF">
					<u-input type="text" v-model="userInfo.user_namesub" placeholder="请输入用户别名"></u-input>
				</u-cell-item>
				<u-cell-item center title="购物车"  index="index" @click="toMyCart">
					<u-badge :absolute="false"  :count="userNumObj.cartNum" slot="right-icon"></u-badge>
				</u-cell-item>
				<u-cell-item center title="关注商品"   index="index" @click="toMyFlow">
					<u-badge :absolute="false"  :count="userNumObj.flowNum" slot="right-icon"></u-badge>
				</u-cell-item>
				<u-cell-item center title="浏览记录" index="index" @click="toMyHistory">
					<u-badge :absolute="false"  :count="userNumObj.historyNum" slot="right-icon"></u-badge>
				</u-cell-item>
				<u-cell-item center title="修改密码" index="index" @click="changePasTFFun">
				</u-cell-item>
				<u-cell-item center title="密码"  width="100" index="index" :arrow="false" v-if="changePasTF">
					<u-input :password-icon="true" type="password" v-model="userInfo.password" placeholder="请输入密码"></u-input>
				</u-cell-item>
				<u-cell-item center title="确认密码" width="100" index="index" :arrow="false" v-if="changePasTF">
					<u-input type="password" v-model="userInfo.rePassword" placeholder="请确认密码"></u-input>
				</u-cell-item>
				<u-cell-item v-if="changePasTF" :arrow="false">
					<u-button @click="changePasFun" data-name="3333" >修改密码</u-button>
				</u-cell-item>
				<u-cell-item :arrow="false">
					<u-button @click="exitFun" data-name="3333" type="warning" >退出登录</u-button>
					<u-modal ref="uModal" v-model="exitTF" :show-cancel-button="true"
						@confirm="confirmExit"
					>
						<view class="warp">
							确认退出登录吗？
						</view>
					</u-modal>
				</u-cell-item>
				
			</u-cell-group>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			userInfo:{},//用户信息
			changePasTF:false,//修改密码层显示/隐藏
			exitTF:false,//确认退出弹窗
			userNumObj:{cartNum:0,historyNum:0,flowNum:0},//用户数量放这个对象
		}
	},
	computed: {
		inputStyle() {
			let style = {};
			if(this.tel) {
				style.color = "#fff";
				style.backgroundColor = this.$u.color['warning'];
			}
			return style;
		}
	},
	onLoad(){
		this.created_fun()
	},
	onPullDownRefresh() {
		this.created_fun()
		setTimeout(function () {
			uni.stopPullDownRefresh();
		}, 1000);
	},
	methods: {
		created_fun(){
			// console.log("bbb:",uni.getStorageSync("userInfo"))
			this.userInfo = uni.getStorageSync("userInfo")
			this.getCarNum()//购物车数量
			this.getHistoryNum()//浏览产品数量
			this.getFlowNum()//关注产品数量
		},
		//购物车数量
		getCarNum(){
			this.$u.get('/cartNum').then(res => {
				if(res.code == 200){
					// console.log("res:",res.cartNum)
					this.userNumObj.cartNum = res.cartNum
				}else{
					this.$refs.uToast.show({
						title: res.msg,
						position: 'top',
						type: 'default',
					});
				}
			
			})
		},
		//浏览产品数量
		getHistoryNum(){
			this.$u.get('/historyNum').then(res => {
				if(res.code == 200){
					this.userNumObj.historyNum = res.historyNum
				}else{
					this.$refs.uToast.show({
						title: res.msg,
						position: 'top',
						type: 'default',
					});
				}
			
			})
		},
		//关注产品数量
		getFlowNum(){
			this.$u.get('/flowNum').then(res => {
				if(res.code == 200){
					this.userNumObj.flowNum = res.flowNum
				}else{
					this.$refs.uToast.show({
						title: res.msg,
						position: 'top',
						type: 'default',
					});
				}
			
			})
		},
		//修改密码层显示/隐藏
		changePasTFFun(){
			this.changePasTF = !this.changePasTF
		},
		//修改密码事件
		changePasFun(){
			// console.log("修改密码：",this.userInfo)
			if(this.userInfo.password != this.userInfo.rePassword &&this.userInfo.password.length<6){
				this.$refs.uToast.show({
					title: "两次密码不一致或密码长度小于6！",
					position: 'top',
					type: 'default',
				});
				return false
			}
			let params=this.userInfo
			this.$u.post('/editUserApp', params).then(res => {
				if(res.code == 200){
					uni.setStorageSync('userInfo', this.userInfo);
					this.changePasTF = false
					// uni.setStorageSync('accesstoken', res.data.accesstoken);
					this.$refs.uToast.show({
						title: "修改成功！",
						position: 'top',
						type: 'success',
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
		//确认退出登录
		exitFun(){
			this.exitTF = true
		},
		//确认退出登录
		confirmExit(){
			// console.log("确认退出登录！")
			//清除缓存
			uni.clearStorageSync();	
			this.$u.route({
				type: "navigateTo",
				params: {},
				url: "/pages/login/login",
				animationType: "slide-in-bottom"
			});
		},
		//跳转到购物车
		toMyCart(){
			this.$u.route({
				type: "navigateTo",
				params: {},
				url: "/pages/index/myCart",
				animationType: "slide-in-bottom"
			});
			this.$u.route({
				type: 'switchTab',
				params: {},
				url: "/pages/index/myCart",
				animationType: "slide-in-bottom"
			});
			
		},
		//跳转到关注产品
		toMyFlow(){
			this.$u.route({
				type: "navigateTo",
				params: {},
				url: "/pages/index/myFlow",
				animationType: "slide-in-bottom"
			});
		},
		//跳转到浏览历史
		toMyHistory(){
			this.$u.route({
				type: "navigateTo",
				params: {},
				url: "/pages/index/myHistory",
				animationType: "slide-in-bottom"
			});
		}
		
	}
};
</script>

<style lang="scss" scoped>
.wrap {
	font-size: 28rpx;
	.content {
		width: 600rpx;
		margin: 80rpx auto 0;

		.title {
			text-align: left;
			font-size: 60rpx;
			font-weight: 500;
			margin-bottom: 100rpx;
		}
		input {
			text-align: left;
			margin-bottom: 10rpx;
			padding-bottom: 6rpx;
		}
		.tips {
			color: $u-type-info;
			margin-bottom: 60rpx;
			margin-top: 8rpx;
		}
		.getCaptcha {
			background-color: rgb(253, 243, 208);
			color: $u-tips-color;
			border: none;
			font-size: 30rpx;
			padding: 12rpx 0;
			
			&::after {
				border: none;
			}
		}
		.alternative {
			color: $u-tips-color;
			display: flex;
			justify-content: space-between;
			margin-top: 30rpx;
		}
	}
	.warp{text-align: center;}
	.buttom {
		.loginType {
			display: flex;
			padding: 350rpx 150rpx 150rpx 150rpx;
			justify-content:space-between;
			
			.item {
				display: flex;
				flex-direction: column;
				align-items: center;
				color: $u-content-color;
				font-size: 28rpx;
			}
		}
		
		.hint {
			padding: 20rpx 40rpx;
			font-size: 20rpx;
			color: $u-tips-color;
			
			.link {
				color: $u-type-warning;
			}
		}
	}
}
</style>
