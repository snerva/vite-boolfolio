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
        <section class="background-up single-project">
            <div class="container-fluid">
                <div class="row row-cols-1 row-cols-md-2 pb-0">
                    <div class="col">
                        <div class="col-content ps-5 d-flex">
                            <div class="d-flex">
                                <div class="vr"></div>
                            </div>
                            <div class="text align-self-center ps-4 pe-5">
                                <h1>{{ $route.params.slug }}</h1>
                            </div>
                        </div>
                    </div>
                    <div class="col"></div>
                </div>
            </div>
        </section>
        <section class="content project">
            <div class="container-fluid">
                <template v-if="project" class="d-flex flex-column justify-content-between">
                    <div class="text">
                        <h2>{{ project.title }}</h2>
                        <p class="description">{{ project.description }}</p>
                    </div>
                    <div class="image py-5">
                        <img class="img-fluid" :src="state.api_url + '/storage/app/public/' + project.cover_image"
                            :alt="project.title">
                    </div>
                    <div class="info">
                        <p><strong>Type: </strong><small class="initial">{{
                            project.type
                        }}</small></p>
                        <p><strong>Technologies: </strong><small v-for="technology in project.technologies"
                                class="initial">#{{
    technology.name
                                }} </small></p>

                    </div>

                </template>
            </div>
        </section>
    </main>

</template>

<style lang="scss" scoped>
.project {
    background-image: url(/images/bck_3.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;

    .row {
        padding: 6.4rem 0;
    }
}
</style>