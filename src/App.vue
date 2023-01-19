<script>
import AppMain from './components/AppMain.vue'
import AppHeader from './components/AppHeader.vue'
import AppBanner from './components/AppBanner.vue'

export default {
    components: {
        AppMain,
        AppHeader,
        AppBanner,
    },

}
</script>

<template>
    <AppHeader></AppHeader>
    <main>
        <AppBanner></AppBanner>
        <AppMain></AppMain>
    </main>

</template>

<style lang="scss">
@use './styles/general.scss';
</style>
