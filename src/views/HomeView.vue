<script>
import AppBanner from '../components/AppBanner.vue';

export default {
    name: 'HomeView',
    components: { AppBanner }
}
</script>

<template>
    <main>
        <AppBanner initial="h" title="ello, i'm Selene." subtitle="I write code. Love making pages come to life."
            text="And i love pizza." image="" style="" />
        <section class="content">
            <div class="container">
                <h2 class="text-center"><span class="initial-pink">My</span> latest project</h2>
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