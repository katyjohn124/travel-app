<template>
    <div>
        <div class="title">猜你喜欢</div>
        <ul>
            <li class="item border-bottom" v-for="item of list" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" />
                </div>
                <div class="item-info">
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-desc">{{ item.desc }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    props: {
        list: Array
    }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.title
    
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    //height: 0
    padding-bottom: 33.9%
    position relative
    .item-img
        height: 100%
        position: absolute
        width: 100%
        top: 0
        left: 0
        object-fit: cover
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
    
</style>