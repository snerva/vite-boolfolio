<script>
import AppBanner from '../components/AppBanner.vue';
import axios from 'axios';
import { state } from '../state';

export default {
    name: 'ContactView',
    components: { AppBanner },
    data() {
        return {
            state,
            name: '',
            email: '',
            message: '',
            success: false,
            errors: {}
        }
    },
    methods: {
        sendForm() {
            //console.log('name', this.name);
            this.loading = true;

            const data = {
                name: this.name,
                email: this.email,
                message: this.message

            }
            axios.post(`${this.state.api_url}/api/contacts`, data).then((response) => {
                this.success = response.data.success;
                console.log(response);

                if (this.success) {
                    this.name = '',
                        this.email = '',
                        this.message = ''
                } else {
                    this.errors = response.data.errors;
                }

                this.loading = false;
            });
        }
    }
}
</script>

<template>
    <main>
        <AppBanner initial="c" title="ontact." subtitle="Get in touch if you have any questions."
            image="/images/email.gif" style="width:208px" />
        <section class="content">
            <div class="container">
                <h2 class="text-center"><span class="initial-pink">via social</span> media.</h2>
                <ul class="list-unstyled d-flex pt-5">
                    <li class="text-center">
                        <a href="">
                            <img class="img-fluid w-50" src="/images/linkedin.png" alt="">
                        </a>
                        <h4 style="color:#2864b4"><strong>Linkedin</strong></h4>
                    </li>
                    <li class="text-center">
                        <a href="">
                            <img class="img-fluid w-50" src="/images/github.png" alt="">
                        </a>
                        <h4 style="color:#2d2d2d"><strong>Github</strong></h4>
                    </li>
                    <li class="text-center">
                        <a href="">
                            <img class="img-fluid w-50" src="/images/instagram.png" alt="">
                        </a>
                        <h4 style="color:#ff3a55"><strong>Instagram</strong></h4>
                    </li>
                </ul>
            </div>
        </section>
        <!--/.social media-->
        <section class="content-white">
            <div class="container">
                <h2 class="text-center"><span class="initial-pink">or send</span> me an email.</h2>
                <div class="row">
                    <div class="col">
                        <form @submit.prevent="sendForm()">
                            <div class="mb-3">
                                <label for="name" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="name" v-model="name" placeholder="">

                                <p class="text-danger" v-for="{ error, index } in errors.name">! {{ error }}</p>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" v-model="email" placeholder="">

                                <p class="text-danger" v-for="{ error, index } in errors.email">! {{ error }}</p>
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">Message</label>
                                <textarea class="form-control" id="message" v-model="message" rows="4"></textarea>

                                <p class="text-danger" v-for="{ error, index } in errors.message">! {{ error }}</p>
                            </div>
                            <button type="submit" class="btn btn-dark" :disabled="loading">{{
                                loading? 'Sending...': 'Send'
                            }}</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <!--/.email-->
    </main>
</template>

<style lang="scss" scoped>

</style>