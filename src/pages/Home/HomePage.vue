<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
    </div>
</template>

<script>
import HomeHeader from './components/HeaderPage.vue';
import HomeSwiper from './components/SwiperPage.vue';

export default {
    name: 'HomePage',
    components: {
        HomeHeader,
        HomeSwiper
    }

};
</script>

<style lang="scss" scoped></style>