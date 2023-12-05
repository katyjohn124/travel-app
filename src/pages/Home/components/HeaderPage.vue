<template>
    <div class="header">
        <div class="headerLeft"><span class="iconfont icon-fanhui"></span></div>
        <div class="headerInput"><span class="iconfont icon-a-dangan_huaban1fuben5"></span>输入城市/景点/游玩主题</div>
        <router-link to="/city">
            <div class="headerRight">{{ this.city }}<span class="iconfont icon-diquxialajiantou"></span></div>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'HomeHeader',
    computed: {
        ...mapState(['city'])
    }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    align-items: center // 确保所有子项垂直居中
    color: #fff
    text-align: center
    font-size: .32rem
    justify-content: space-between // 添加这个属性来分散子元素
    .headerLeft
        width: .64rem
        //float: left
    .headerInput
        height : .64rem
        line-height: .64rem
        border-radius: .1rem
        flex: 1
        margin-top: .12rem
        margin-left: .1rem
        padding-left: .1rem
        margin-right: .1rem
        background: #fff
        color: #ccc
        
    .headerRight
        //width: .98rem
        //float: right
        display: flex
        align-items: center // 如果里面有多个元素，确保它们垂直居中
        //flex-direction: row 
        color: #fff
        min-width: 1.04rem
        padding: 0 .1rem
</style>