<template>
	<view class="goodsDetail">
		<view class="goodsCover" v-if="goodsInfo">
			<swiper class="goodSwiper" @change="getIndex" :autoplay="false" :duration="1000">
				<swiper-item v-for="(item,index) in goodsInfo.gallery" :key='index' >
					<image :src="item.img_url" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
			<text class="iconfont icon-asmkticon0151">{{index+1}}/4</text>
		</view>
		<view class="goodsSelect">
			<view class="selector" @click="select">
			选择规格和数量
		    </view>
		   <uni-popup ref="popup" type="bottom">
			<view class="selectBox"></view>
		   </uni-popup>
		</view>
		<view class="bottomNav">
			<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import api from "../../config/api.js"
	export default{
		data(){
			return{
				  options: [{
				            icon: 'headphones',
				            text: '客服'
				        }, {
				            icon: 'shop',
				            text: '店铺',
				            info: 2,
				            infoBackgroundColor:'#ff0000',
				            infoColor:"#fff"
				        }, {
				            icon: 'cart',
				            text: '购物车',
				            info: 2
				        }],
				        buttonGroup: [{
				          text: '加入购物车',
				          backgroundColor: '#ff0000',
				          color: '#fff'
				        },
				        {
				          text: '立即购买',
				          backgroundColor: '#ffa200',
				          color: '#fff'
				        }],
						
				goodsInfo:[]
			}
		},
		onLoad(pa) {
			console.log('id',pa.id)
			uni.request({
				url:api.GoodsDetail,
								data:{
									id:pa.id
								},
								success:(res)=>{
									console.log('detail',res.data)
									this.goodsInfo=res.data.data
								}
			})
		},
		methods:{
			select(){
				this.$refs.popup.open()
			},
			 onClick (e) {
			        uni.showToast({
			          title: `点击${e.content.text}`,
			          icon: 'none'
			        })
			      },
			buttonClick (e) {
			        console.log(e)
			        this.options[2].info++
			      },
		    getIndex(detail){
			console.log('de',detail)
		}
	},
	}
</script>

<style>
	page{
		height: 100%;
		position: relative;
	}
	.goodsDetail{
		
	}
	.goodsCover{
		position: relative;
	}
	.goodsCover .goodSwiper{
		height: 460rpx;
	}
	.goodsCover image{
		width: 100%;
	}
	.goodsCover .iconfont{
		position: absolute;
         bottom: 24rpx;
		 right: 70rpx;
	}
	.selectBox{
		width: 100%;
		height: 380rpx;
		margin-bottom: 101rpx;
		border-radius: 10rpx;
		background-color: #B3D4FC;
	}
	 .goodsDetail .bottomNav{
		position: absolute;
		width: 100%;
		bottom: 0rpx;
	}
</style>
