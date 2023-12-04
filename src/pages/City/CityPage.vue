<template>
    <div>
        <CityChoice></CityChoice>
        <CitySearch></CitySearch>
    </div>
</template>

<script>
import CityChoice from './components/CityHeader.vue'
import CitySearch from './components/CitySearch.vue'
export default {
    name: 'CityPage',
    components: {
        CityChoice,
        CitySearch
    }
};
</script>

<style lang="stylus" scoped>
</style>