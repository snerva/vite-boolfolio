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
            <div class="container-fluid">
                <h2 class="text-center"><span class="initial-pink">My</span> projects</h2>
                <hr class="initial-pink">
                <div class="row row-cols-1 row-cols-md-2 align-items-center">
                    <div class="col">
                        <img class="img-fluid" src="/images/185.jpg" alt="">
                    </div>
                    <div class="col ">
                        <p>I've worked on many types of front-ends and back-ends projects,
                            including websites and mobile
                            app.</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>

</style>