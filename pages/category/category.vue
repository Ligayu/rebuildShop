<template>

	    <view class="content">

		        <view class="categoryAside">

			            <scroll-view class="menus" scroll-y="true">

				                <view v-for="(menu, index) in categories" :key="index" :class="[index == currentIndex ? 'activeBar' : 'staticBar']" @tap="taps(index)">

					                    
					<!-- <navigator url="../pages/scroll-view">{{menu}}</navigator> -->

					                    {{menu.name}}

					                </view>

				            </scroll-view>

			        </view>

		   <view class="category"> 
			  <view class="detail" v-for='(item,index) in showList' :key='index'>
				<view v-if='index==currentIndex'>
					<view class="cover" :style="'background:url('+item.category+');background-size: 100% auto;'">
						<text>{{item.title}}</text>
					</view>
					<view class="goddsList">
						<view class="goods" v-for="(img,index) in item.img" :key='index'>
							<image class="goodsImg" :src="img.url" mode='aspectFit'></image>
						</view>
					</view>
				</view>
			</view>
	     </view>

     </view>

</template>

<script>
	var _this;

	export default {

		data() {
			return {
				currentIndex: 0,
				categories: [

					{
						cateId: 0,
						name: "居家"
					},

					{
						cateId: 1,
						name: "餐厨"
					},
                    {
						cateId: 2,
						name: "配件"
					},
					{
						cateId: 3,
						name: "杂物"
					},

					{
						cateId: 4,
						name: "饰物"
					}
				],
				showList: [
					{
					img: [{
							url: '../../static/navs/07.png'
						},
						{
							url: '../../static/navs/09.png'
						},
						{
							url: '../../static/navs/10.png'
						},
						{
							url: '../../static/navs/11.png'
						},
						{
							url: '../../static/navs/11.png'
						},
						{
							url: '../../static/navs/11.png'
						},
						{
							url: '../../static/navs/11.png'
						},
						{
							url: '../../static/navs/11.png'
						},
						{
							url: '../../static/navs/11.png'
						},
						{
							url: '../../static/navs/11.png'
						},
						{
							url: '../../static/navs/11.png'
						},
						{
							url: '../../static/navs/11.png'
						},
						{
							url: '../../static/navs/11.png'
						}
					],
					category: '../../static/navs/01.jpg',
					title: '居家'
				    },
					{
						img:[{
								url:'../../static/navs/12.png'
							},
							{
								url:'../../static/navs/13.png'
							},
							{
								url:'../../static/navs/13.png'
							},
							{
								url:'../../static/navs/14.png'
							}],
						category:'../../static/navs/02.jpg',
						title:'餐厨'
					},
					{
						img:
						[{
								url:'../../static/navs/22.png'
							},
							{
								url:'../../static/navs/23.png'
							},
							{
								url:'../../static/navs/24.png'
							},
							{
								url:'../../static/navs/25.png'
							}],
						category:'../../static/navs/04.jpg',
						title:'配件'
					},
					{
						img:[{
								url:'../../static/navs/15.png'
							},
							{
								url:'../../static/navs/16.png'
							},
							{
								url:'../../static/navs/17.png'
							},
							{
								url:'../../static/navs/15.png'
							}],
						category:'../../static/navs/03.jpg',
						title:'杂货'
					},
					{
						img:
						[{
								url:'../../static/navs/18.png'
							},
							{
								url:'../../static/navs/19.png'
							},
							{
								url:'../../static/navs/20.png'
							},
							{
								url:'../../static/navs/21.png'
							}],
						category:'../../static/navs/05.jpg',
						title:'饰物'
					}
				]
				
			}


		},

		onLoad: function(options) {
			
			
		},

		onHide: function() {

			console.log("onHide");    

		},  

		onShow: function() {
			console.log("onShow");
console.log(getApp().globalData.index);
     	    this.currentIndex=getApp().globalData.index;
		},

		methods: {

			taps(index) {

				console.log(index)

				this.currentIndex = index;

			}

		}

	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.content {
		display: flex;
		height: 100%;
	}

	.categoryAside {
		flex: 1;
	}

	.menus {
		height: 100%;
		background-color: #f1f3f4;
	}

	.activeBar {
		border-radius: 14rpx 0 0 14rpx;
		height: 60rpx;
		width: 200rpx;
		padding: 10rpx 0;
		text-align: center;
		background-color:white;
	}

	.staticBar {
		height: 60rpx;
		width: 200rpx;
		padding: 10rpx 0;
		text-align: center;

	}

	.category {
		flex: 3;
		padding: 16rpx 10rpx 0;
		overflow: auto;
	}

	.category .cover {
		text-align: center;
		line-height: 110rpx;
		height: 110rpx;
		border-radius: 14rpx;
	}
.category .goddsList{
	margin-top: 18rpx;
	display: flex;
	flex-wrap: wrap;
}
.category .goods{
   width:49%;
   border: 1rpx solid #E7E1CD;
}
.category .goddsList .goodsImg{
	width:100%;
	height: 260rpx;
}
</style>
