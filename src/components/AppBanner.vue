<script>
export default {
    name: 'AppBanner',
    props: ['initial', 'title', 'subtitle', 'text', 'image', 'class']
}
</script>

<template>
    <div class="banner">
        <div class="container-fluid">
            <div class="row row-cols-1 row-cols-md-2">
                <div class="col">
                    <div class="col-content px-5 d-flex">
                        <div class="d-flex">
                            <div class="vr"></div>
                        </div>
                        <div class="text align-self-center ps-4 pe-5">
                            <h1 class="text-white">{{ title }}</h1>
                            <h3 class="text-white">{{ subtitle }}</h3>
                        </div>
                    </div>
                </div>
                <div class="col background-mix">
                    <div class="col-mix">
                        <img class="img-fluid" :class="class" :src="image" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>