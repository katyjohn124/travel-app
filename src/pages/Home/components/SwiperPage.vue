<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiperImg" :src="item.imgUrl" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    data() {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true,

            },
            swiperList: [
                {
                    id: '0001',
                    imgUrl: "https://ad-dapp-osscp.qunarzz.com/ad_dapp_oss_oper/9f64aa5050c770f88033e1b6ef21e258.jpg"
                },
                {
                    id: '0002',
                    imgUrl: "https://ad-dapp-osscp.qunarzz.com/ad_dapp_oss_oper/a8fe422f63cd04c880d423cb5a9b8145.jpg"
                }
            ],
        }
    }


};
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background: #fff
    position: absolute;
    bottom: 30px;
    width: 100%;
    //text-align: center;
    //margin: 0 4px
    margin-left: 175px
    
   
    
  .wrapper
    overflow: hidden
    position: relative
    width: 100%
    height: 0
    padding-bottom: 30.48%
    //background: #eee
    .swiperImg
      width: 100%
      
</style>