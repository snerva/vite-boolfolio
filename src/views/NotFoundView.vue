<script>
import AppBanner from '../components/AppBanner.vue';

export default {
    name: 'NotFoundView',
    components: { AppBanner }
}
</script>

<template>
    <AppBanner title="404." />
    <div class="container pt-5 text-center">
        <h2>Oops, page not found!</h2>
        <router-link to="/">Homepage</router-link>
    </div>
</template>

<style lang="scss" scoped>

</style>