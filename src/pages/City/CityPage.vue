<template>
    <div>
        <CityChoice></CityChoice>
        <CitySearch></CitySearch>
        <CityList :cities="cities" :hot="hotCities" :city="city" :letter="letter"></CityList>
        <LetterList :cities="cities" @change="handleLetterChange"></LetterList>
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
            city: '',
            letter: ''
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
        },
        handleLetterChange(letter) {
            this.letter = letter;
        }
    },
    mounted() {
        this.getCityInfo()
    },
};
</script>

<style lang="stylus" scoped>
</style>