<template>
    <div>
        <CityChoice></CityChoice>
        <CitySearch></CitySearch>
        <CityList :cities="cities" :hot="hotCities" :city="city"></CityList>
        <LetterList :cities="cities"></LetterList>
    </div>
</template>

<script>
import axios from 'axios';
import CityChoice from './components/CityHeader.vue'
import CitySearch from './components/CitySearch.vue'
import CityList from './components/CityList.vue'
import LetterList from './components/LetterList.vue'
export default {
    name: 'CityPage',
    components: {
        CityChoice,
        CitySearch,
        CityList,
        LetterList
    },
    data() {
        return {
            hotCities: [],
            cities: {},
            city: ''
        }
    },
    methods: {
        getCityInfo() {
            axios.get('/api/city.json')
                .then(this.getCityInfoSucc)
        },
        getCityInfoSucc(res) {
            res = res.data;
            console.log(res);
            if (res.ret && res.data) {
                const data = res.data;
                this.hotCities = data.hotCities;
                this.cities = data.cities;
                this.city = data.city;
            }
        }
    },
    mounted() {
        this.getCityInfo()
    },
};
</script>

<style lang="stylus" scoped>
</style>