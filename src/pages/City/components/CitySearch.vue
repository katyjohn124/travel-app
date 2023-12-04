<template>
    <div class="city-search">
        <input class="search-in" type="text" placeholder="请输入城市（中文）" />
    </div>
</template>

<script>
export default {
    name: 'CitySearch',
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'

.city-search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-in
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
        
</style>