<template>
    <div>
        <div class="city-search">
            <input v-model="keyword" class="search-in" type="text" placeholder="请输入城市（中文）" />
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item border-bottom" v-for="item of list" :key="item.id"
                    @click="handleCityclick(item.name)">{{
                        item.name }}</li>
                <li class="search-item border-bottom" v-show="hasNoData">没有匹配到当前数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Bscroll from 'better-scroll'
export default {
    name: 'CitySearch',
    props: {
        cities: Object
    },
    data() {
        return {
            keyword: '',
            list: [],
            timer: null
        }
    },
    methods: {
        handleCityclick(city) {
            this.changeCity(city)
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
    },
    computed: {
        hasNoData() {
            return !this.list.length
        }
    },
    watch: {
        keyword() {
            if (this.timer) {
                clearTimeout(this.timer)
            }
            if (!this.keyword) {
                this.list = []
                return
            }
            this.timer = setTimeout(() => {
                const result = []
                for (let i in this.cities) {
                    this.cities[i].forEach((value) => {
                        if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                            result.push(value)
                        }
                    })
                }
                this.list = result
            }, 100)
        }
    },
    mounted() {
        this.scroll = new Bscroll(this.$refs.search)
    }

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
 .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
       line-height: .62rem
       padding-left: .2rem
       background: #fff
       color: #666
        
</style>