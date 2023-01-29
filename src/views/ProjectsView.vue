<script>
import AppBanner from '../components/AppBanner.vue';
import ProjectsList from '../components/ProjectsList.vue';

export default {
    name: 'ProjectsView',
    components: {
        AppBanner,
        ProjectsList
    }
}
</script>

<template>
    <AppBanner title="Projects." subtitle="Check out some of my latest works: websites and apps.">
    </AppBanner>
    <main>
        <ProjectsList></ProjectsList>
    </main>
</template>

<style lang="scss" scoped>

</style>