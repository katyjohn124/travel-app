<template>
    <div>
        <div class="title">猜你喜欢</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
    data() {
        return {
            recommendList: [
                {
                    id: '0001',
                    title: '我在冬天很想你，夏天',
                    desc: '我在冬天很想你，夏天很想你，秋天很想你',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_140x140_73fda71d.jpg'
                },
                {
                    id: '0002',
                    title: '我在冬天很想你，夏天',
                    desc: '我在冬天很想你，夏天很想你，秋天很想你',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_140x140_73fda71d.jpg'
                },
                {
                    id: '0003',
                    title: '我在冬天很想你，夏天',
                    desc: '我在冬天很想你，夏天很想你，秋天很想你',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_140x140_73fda71d.jpg'
                },
            ]
        };
    },

};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.title
    margin-top: .2rem
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