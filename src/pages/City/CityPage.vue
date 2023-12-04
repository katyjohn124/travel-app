<template>
    <div>
        <CityChoice></CityChoice>
        <CitySearch></CitySearch>
        <CityList></CityList>
        <LetterList></LetterList>
    </div>
</template>

<script>
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
    }
};
</script>

<style lang="stylus" scoped>
</style>