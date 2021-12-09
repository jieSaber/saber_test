<template>
	<view class="content">
		
		<view class="charts-box">
		    <qiun-data-charts type="column" :chartData="chartData" />
		</view>
		<!-- <image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
			<van-button > aaa </van-button>
		</view> -->
	</view>
</template>
	
<script>
	export default {
		data() {
			return {
				title: 'Hello',
				chartData:{
				  categories: ["2016", "2017", "2018", "2019", "2020", "2021"],
				  series: [{
				    name: "目标值",
				    data: [35, 36, 31, 33, 13, 34]
				  }, {
				    name: "完成量",
				    data: [18, 27, 21, 24, 6, 28]
				  }]
				}
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.charts-box{
		width: 800rpx;
		height: 800rpx;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
