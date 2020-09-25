<template>
	<view class="content">
		<view class="adSwiper">
			<swiper  class="adsImg" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular='true'>
				<swiper-item v-for="(item,index) in adImg" :key='index'>
					<image :src="item.image_url" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="navs">
			<view class="navsContent" v-for="(item,index) in navs" :key='index'>
			  <navigator :url="item.url">
				<text :class="item.icon"></text>
			    <text class="text">{{item.text}}</text>
			  </navigator>   	
			</view>
		</view>
		<view class="category" v-for="(item,index) in goods" :key='index'>	
				<view class="cover" :style="'background:url('+item.banner+');background-size: 100% auto;'">
					<text>{{item.name}}</text>
				</view>
				<view class="goods">
					<view class="goodsCover" v-for="(item,index) in item.goodsList" :key='index'>
					  <image class="goodsImg"  :src="item.list_pic_url" mode='aspectFit' @click="goodsDetail(item.id)"></image>
					  <view class="goodsTitle">
					  	{{item.name}}
					  </view>
					  <view class="goodsPrice">￥{{item.min_retail_price}}</view>
				    </view>
				</view>
				<view class="more" @click="clickLink(index)">
					点击查看更多{{item.name}}
				</view>
		</view>
	</view>
</template>

<script>
	import api from "../../config/api.js"
	export default {
		data() {
			return {
				adImg:[],
				navs:[
					{
						url:'#',
						icon:'iconfont icon-ruanshafa',
						text:'居家',
						
					},
					{
						url:'#',
						icon:'iconfont icon-pengren',
						text:'餐厨',
					},
					{
						url:'#',
						icon:'iconfont icon-zhuangshi',
						text:'配件',
					},
					{
						url:'#',
						icon:'iconfont icon-ziyuan',
						text:'杂货',
					},
					{
						url:'#',
						icon:'iconfont icon-mumawanju',
						text:'饰物',
					}
				],
				goods:[]
			}
		},
		onLoad() {
		// this.getGoods()
		uni.request({
			// url:'http://127.0.0.1:8360/api/index/appInfo',
			url:api.IndexUrl,
			success: (res) => {
				console.log(res.data.data),
				this.adImg=res.data.data.banner,
				this.goods=res.data.data.categoryList
			}
		})
		
	},
	methods: {
		clickLink(index){
			console.log('click')
			getApp().globalData.index=index;
			uni.switchTab({
				url:"../category/category"
				
			})
		},
         goodsDetail(id){
				 console.log('idclick',id)
				 uni.navigateTo({
				 	url:'../detail/detail?id='+id
				 })
			 }
		}
}
</script>

<style>
	
.adsImg{
	height: 400rpx;
}
.adsImg image{
		width: 100%;
		height:100% ;
		}
 .navs {
      display: flex;
      margin: 50rpx auto;
}
.navs .navsContent{
	flex: 1;
}
.navs .navsContent .iconfont{
	display: block;
	font-size: 60rpx;
	text-align: center;
}
.navs .navsContent .text{
	margin-top: 20rpx;
	display: block;
	text-align: center;
	font-size: 20rpx;
}
.category{
	margin:30rpx 20rpx
}
.category .more {
	margin: 18rpx auto 0;
	width: 100%;
	font-size: 16rpx;
	text-align: center;
}
.category .cover{
	/* background: url(../../static/navs/01.jpg) no-repeat; */
	text-align: center;
	line-height: 160rpx;
	height: 160rpx;
	color: rgb(255,254,250);
	border-radius: 10rpx;
}
.category .goods {
	display: flex;
	margin-top: 20rpx;
	flex-wrap: wrap;
}
.category .goods .goodsCover{
	width: 200rpx;
	margin: 10rpx 16rpx;
}
.category .goods .goodsCover .goodsImg{
	width: 100%;
	height: 200rpx;
	background-color: #f9f9f9;
}
.category .goods .goodsCover .goodsTitle{
	text-align: center;
	font-size: 20rpx;
}
.category .goods .goodsCover .goodsPrice{
	text-align: center;
	color:#ff5370 ;
	font-size: 18rpx;
}
</style>
