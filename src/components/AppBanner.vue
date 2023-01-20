<script>
export default {
    name: 'AppBanner',
    props: ['title']
}
</script>

<template>
    <div class="banner">
        <div class="container">
            <div class="row">
                <div class="col-5">
                    <h1>{{ title }}</h1>
                </div>
            </div>
            <div class="col-7"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>