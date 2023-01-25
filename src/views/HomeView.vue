<script>
import AppBanner from '../components/AppBanner.vue';

export default {
    name: 'HomeView',
    components: { AppBanner }
}
</script>

<template>
    <AppBanner initial="h" title="ello, i'm Selene." subtitle="I write code." />
    <section class="content">
        <div class="container">
            <h2 class="text-center"><span class="initial-pink">My</span> latest project</h2>
            <hr class="initial-pink">
            <div class="row">
                <div class="col">

                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

</style>