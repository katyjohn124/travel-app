<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="content"></div>
    </div>
</template>

<script>
import DetailBanner from './components/DetailBanner.vue';
import DetailHeader from './components/DetailHeader.vue';

export default {
    name: 'DetailPage',
    components: {
        DetailBanner,
        DetailHeader
    },


};
</script>

<style lang="stylus" scoped>
.content
    height:50rem
</style>