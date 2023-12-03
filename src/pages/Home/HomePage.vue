<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recommend></home-recommend>
        <home-weekend></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/HeaderPage.vue';
import HomeSwiper from './components/SwiperPage.vue';
import HomeIcons from './components/IconsPage.vue';
import HomeRecommend from './components/RecommendPage.vue';
import HomeWeekend from './components/WeekendPage.vue';

export default {
    name: 'HomePage',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    }

};
</script>

<style lang="scss" scoped></style>