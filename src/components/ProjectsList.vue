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
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col" v-for="project in projects.data">
                        <div class="card border-0 shadow rounded-0 text-bg-dark">
                            <img class="card-img" :src="getImage(project.cover_image)" alt="">
                            <div class="card-img-overlay p-5 bg-dark bg-opacity-50">
                                <div class="text-top">
                                    <h3 class="mb-4 fs-1" style=" font-family:'Allison', cursive">{{ project.title }}
                                    </h3>
                                    <p>{{ trimBody(project.description) }}</p>
                                </div>

                                <div class="links d-flex justify-content-between align-content-center py-3">
                                    <router-link :to="{ name: 'single-project', params: { slug: project.slug } }"
                                        class="text-decoration-none fs-5 initial">Read
                                        more <font-awesome-icon icon="fa-solid fa-arrow-right" /></router-link>
                                </div>

                                <div class="text-bottom">
                                    <div class="type">
                                        <span class="fs-6" v-if="project.type"><strong>Type:</strong>{{
                                            project.type.name
                                        }}
                                        </span>
                                        <span class="fs-6" v-else>No type matched.</span>
                                    </div>
                                    <div class="technologies">
                                        <span class="fs-6"><strong>Technologies: </strong></span>
                                        <template v-if="project.technologies.length > 0">
                                            <small v-for="technology in project.technologies">#{{
                                                technology.name
                                            }} </small>
                                        </template>
                                        <template v-else>
                                            <small>No technologies.</small>
                                        </template>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <nav class="d-flex justify-content-center pt-5" aria-label="Page navigation">
                    <ul class="pagination">
                        <li class="page-item" v-if="projects.prev_page_url" @click="prevPage(projects.prev_page_url)">
                            <a class="page-link" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="page-item active" aria-current="page">
                            <a href="#" class="page-link">{{ projects.current_page }}</a>
                        </li>
                        <li class="page-item" v-if="projects.next_page_url" @click="nextPage(projects.next_page_url)">
                            <a class="page-link" aria-label="Next">
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
.card-img-overlay {
    display: none;

    a:hover {
        color: #01a3a2 !important;
        opacity: 0.7;
    }
}

.card:hover {
    cursor: pointer;

    .card-img-overlay {
        display: flex;
        flex-direction: column;
        justify-content: space-between;


    }
}

.active {

    .page-link {
        background-color: #01a3a2 !important;
        border-color: #01a3a2 !important;
    }

}
</style>