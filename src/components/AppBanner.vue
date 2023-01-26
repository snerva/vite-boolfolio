<script>
export default {
    name: 'AppBanner',
    props: ['initial', 'title', 'subtitle', 'text', 'image', 'style']
}
</script>

<template>
    <div class="banner">
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2">
                <div class="col">
                    <h1><span class="initial">{{ initial }}</span>{{ title }}</h1>
                    <h3>{{ subtitle }}</h3>
                    <p>{{ text }}</p>
                </div>
                <div class="col d-flex justify-content-center">
                    <img class="img-fluid" :style="style" :src="image" alt="">
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>