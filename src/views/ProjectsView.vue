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
    <AppBanner title="projects."></AppBanner>
    <ProjectsList></ProjectsList>
</template>

<style lang="scss" scoped>

</style>