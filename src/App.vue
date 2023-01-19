<script>
import axios from 'axios';

export default {
    components: {

    },
    data() {
        return {
            projects: null,
            base_url: 'http://localhost:8000',
            loading: true,
            error: null,
            max: 100
        }

    },
    methods: {
        getProjects(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response.data.results)
                    this.projects = response.data.results;
                    this.loading = false;
                })
                .catch(error => {
                    error.log(error.message);
                    this.error = error.message;
                })
        }
    },
    mounted() {
        this.getProjects(this.base_url + '/api/projects')
    }
}
</script>

<template>
    <section class="vue-home">
        <div class="container">
            <h1>Projects</h1>
        </div>
    </section>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
