<template>
    <div class="city-header">
        城市选择
        <router-link to="/">
            <div class="city-back"><span class="iconfont icon-fanhui"></span></div>
        </router-link>

    </div>
</template>

<script>
export default {
    name: 'CityChoice',
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'

.city-header
    position: relative
    overflow: hidden
    height:$headerHeight
    line-height:$headerHeight
    color: #fff
    text-align:center
    background: $bgColor
    font-size:.32rem 
    .city-back
        position: absolute 
        top: 0
        left: 0
        width: .64rem
        text-align: center
        font-size: .4rem 
        color: #fff  
        
</style>