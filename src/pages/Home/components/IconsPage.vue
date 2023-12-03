<template>
    <div class="icons" v-if="this.list && this.list.length">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="iconImg">
                        <img class="icon-img-content" :src="item.imgUrl" />
                    </div>
                    <p class="icon-desc">{{ item.desc }}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { swiper } from 'vue-awesome-swiper';

export default {
    name: 'HomeIcons',
    props: {
        list: Array
    },
    data() {
        return {
            swiperOption: {
                autoplay: false
            }
        }
    },
    components: { swiper },
    computed: {
        pages() {
            const pages = [];
            this.list.forEach((item, index) => {
                // 0-7 8-15 16-23, 8个（长度）一组
                const page = Math.floor(index / 8);
                if (!pages[page]) {
                    pages[page] = [];
                }
                pages[page].push(item);
            })
            return pages;
        }
    },
    mounted() {
        console.log(this.list); // 打印出 list prop
    }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    .iconImg
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: .44rem
      box-sizing: border-box
      padding: .1rem
      .icon-img-content
        display: block
        margin: 0 auto
        height: 100%
    .icon-desc
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height: .44rem
      line-height: .44rem
      text-align: center
      color: $darkTextColor
      ellipsis()
</style>