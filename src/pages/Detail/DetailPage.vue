<template>
    <div>
        <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs">
        </detail-banner>
        <detail-header :sightName="sightName"></detail-header>

        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from './components/DetailBanner.vue';
import DetailHeader from './components/DetailHeader.vue';
import DetailList from './components/DetailList.vue';
import axios from 'axios';

export default {
    name: 'DetailPage',
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data() {
        return {
            sightName: '',
            bannerImg: '',
            gallaryImgs: [],
            list: []
        }
    },
    methods: {
        getDetailInfo() {
            axios.get('/api/detail.json', {
                params: {
                    id: this.$route.params.id
                }
            }).then(this.getDetailSucc);
        },
        getDetailSucc(res) {
            res = res.data;
            if (res.ret && res.data) {
                const data = res.data;
                console.log(data);//
                this.sightName = data.sightName
                this.bannerImg = data.bannerImg
                this.gallaryImgs = data.gallaryImgs
                this.list = data.categoryList
            }
        }
    },
    mounted() {
        this.getDetailInfo();
    }
}
</script>

<style lang="stylus" scoped>
.content
    height:50rem
</style>