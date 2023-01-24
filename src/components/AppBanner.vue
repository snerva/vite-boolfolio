<script>
export default {
    name: 'AppBanner',
    props: ['initial', 'title', 'subtitle', 'text']
}
</script>

<template>
    <div class="banner">
        <div class="container">
            <div class="row">
                <div class="col col-md-5">
                    <h1><span class="initial">{{ initial }}</span>{{ title }}</h1>
                    <h3>{{ subtitle }}</h3>
                    <p>{{ text }}</p>
                </div>
            </div>
            <div class="col col-md-7"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>