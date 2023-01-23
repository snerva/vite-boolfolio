<script>
import axios from 'axios';
import AppBanner from '../components/AppBanner.vue';

export default {
    name: 'SingleProjectView',
    components: {
        AppBanner
    },
    data() {
        return {
            project: null,
            loading: true,
            api_url: 'http://localhost:8000'
        }
    },
    mounted() {
        //console.log(this.$route.params.slug);
        const url = this.api_url + '/api/projects/' + this.$route.params.slug
        //console.log(url);
        axios.get(url)
            .then(response => {
                if (response.data.success) {
                    this.project = response.data.results
                    this.loading = false
                }
            }).catch(error => {
                console.log(error)
            })
    }
}
</script>

<template>
    <AppBanner :title="$route.params.slug" />

    <section class="content">
        <div class="container">
            <template v-if="project">
                <div class="row">
                    <div class="col-7">
                        <p class="description">{{ project.description }}</p>
                    </div>
                    <div class="col-5">
                        <img class="img-fluid" :src="api_url + '/storage/app/public/' + project.cover_image"
                            :alt="project.title">
                    </div>
                </div>
            </template>
        </div>
    </section>

</template>

<style lang="scss" scoped>

</style>