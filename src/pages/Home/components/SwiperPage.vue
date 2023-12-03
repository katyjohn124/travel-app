<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <swiper-slide v-for="item of list" :key="item.id">
                <img class="swiperImg" :src="item.imgUrl" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    props: {
        list: Array
    },
    data() {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true,

            },

        }
    },
    computed: {
        showSwiper() {
            //如果传递过来的是空数组，就先等待真正数据传过来，不然会出现细节问题
            return this.list.length
        }
    },


};
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background: #fff
    position: absolute;
    bottom: 30px;
    width: 10px;
    height: 10px;
    //text-align: center;
    //margin: 0 4px
    margin-left: 160px
    border-radius: 50%
    
   
    
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