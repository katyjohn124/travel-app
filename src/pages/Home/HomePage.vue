<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
    </div>
</template>

<script>
import HomeHeader from './components/HeaderPage.vue';
import HomeSwiper from './components/SwiperPage.vue';
import HomeIcons from './components/IconsPage.vue';

export default {
    name: 'HomePage',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons
    }

};
</script>

<style lang="scss" scoped></style>