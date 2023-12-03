<template>
    <div>
        <home-header :city="city"></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/HeaderPage.vue';
import HomeSwiper from './components/SwiperPage.vue';
import HomeIcons from './components/IconsPage.vue';
import HomeRecommend from './components/RecommendPage.vue';
import HomeWeekend from './components/WeekendPage.vue';
import axios from 'axios';

export default {
    name: 'HomePage',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data() {
        return {
            city: '',
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: []
        }
    },
    methods: {
        getHomeInfo() {
            axios.get('/api/index.json')
                .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res) {
            res = res.data;
            if (res.ret && res.data) {
                const data = res.data;
                this.city = data.city;
                this.swiperList = data.swiperList;
                this.iconList = data.iconList;
                this.recommendList = data.recommendList;
                this.weekendList = data.weekendList;
            }
            console.log(res)
        }
    },
    mounted() {
        this.getHomeInfo();
    },

};
</script>

<style lang="scss" scoped></style>