<script>
import axios from 'axios';
import { state } from '../state';

export default {
    name: "ProjectsList",
    data() {
        return {
            projects: null,
            state,
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
                    this.loading = false;
                })
        },
        getImage(path) {
            console.log(path);
            if (path) {
                return this.state.api_url + '/storage/app/public/' + path
            }
            return '/images/placeholder.png'

        },
        trimBody(text) {
            if (text.length > this.max) {
                return text.slice(0, this.max) + '...'
            }
            return text
        },
        prevPage(url) {
            console.log(url)
            this.getProjects(url)
        },
        nextPage(url) {
            console.log(url)
            this.getProjects(url)
        }
    },
    mounted() {
        this.getProjects(this.state.api_url + '/api/projects')
    }
}
</script>

<template>
    <section class="content">
        <div class="container">
            <template v-if="projects && !loading">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col" v-for="project in projects.data">
                        <div class="card border-0 shadow-sm rounded-0 rounded-bottom">
                            <img class="card-image rounded-top" :src="getImage(project.cover_image)" alt="">
                            <div class="card-body">
                                <h4>{{ project.title }}</h4>
                                <p>{{ trimBody(project.description) }}</p>
                                <router-link :to="{ name: 'single-project', params: { slug: project.slug } }">Read
                                    more</router-link>
                            </div>
                            <div class="card-footer">
                                <div class="type">
                                    <small><strong>Type:</strong></small>
                                    <span v-if="project.type">{{ project.type.name }}</span>
                                    <span v-else>No type matched.</span>
                                </div>
                                <div class="technologies">
                                    <small><strong>Technologies:</strong></small>
                                    <template v-if="project.technologies.length > 0">
                                        <small v-for="technology in project.technologies">#{{
                                            technology.name
                                        }}</small>
                                    </template>
                                    <template v-else>
                                        <small>No technologies.</small>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <nav class="d-flex justify-content-center pt-5" aria-label="Page navigation">
                    <ul class="pagination">
                        <li class="page-item" v-if="projects.prev_page_url" @click="prevPage(projects.prev_page_url)">
                            <a href="" class="page-link" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="page-item active" aria-current="page">
                            <a href="#" class="page-link">{{ projects.current_page }}</a>
                        </li>
                        <li class="page-item" v-if="projects.next_page_url" @click="nextPage(projects.next_page_url)">
                            <a href="" class="page-link" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </template>

            <template v-else-if="loading">
                <div class="loader-page">
                    <div class="loader-wrapper">
                        <div class="loader">
                            <div class="loader loader-inner-ring"></div>
                        </div>
                    </div>
                </div>
            </template>
            <div v-else>
                <p>No projects here.</p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

</style>