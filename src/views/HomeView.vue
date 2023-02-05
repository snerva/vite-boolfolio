<script>
import AppBanner from '../components/AppBanner.vue';

export default {
    name: 'HomeView',
    components: { AppBanner }
}
</script>

<template>
    <AppBanner title="Hi there, i'm Selene." subtitle="Jr Full Stack Web Developer" image="/images/sn-photo.png"
        class="photo-banner-home" />
    <main>
        <section class="content">
            <div class="container">
                <h2 class="text-center"><span class="initial-pink">My</span> latest projects</h2>
                <hr class="initial-pink">
                <div class="row">
                    <div class="col">

                    </div>
                    <div class="col">

                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>

</style>