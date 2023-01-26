<script>
import axios from 'axios';
import AppBanner from '../components/AppBanner.vue';
import { state } from '../state';

export default {
    name: 'SingleProjectView',
    components: {
        AppBanner
    },
    data() {
        return {
            project: null,
            loading: true,
            state
        }
    },
    mounted() {
        //console.log(this.$route.params.slug);
        const url = this.state.api_url + '/api/projects/' + this.$route.params.slug
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
    <main>
        <AppBanner :title="$route.params.slug" />

        <section class="content">
            <div class="container">
                <template v-if="project">
                    <div class="row">
                        <div class="col-7">
                            <p class="description">{{ project.description }}</p>
                        </div>
                        <div class="col-5">
                            <img class="img-fluid" :src="state.api_url + '/storage/app/public/' + project.cover_image"
                                :alt="project.title">
                        </div>
                    </div>
                </template>
            </div>
        </section>
    </main>

</template>

<style lang="scss" scoped>

</style>