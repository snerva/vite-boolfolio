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
    <AppBanner initial="c" title="ontact." />
    <section class="content">
        <div class="container">
            <h2>Send me an email.</h2>

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
                    <textarea class="form-control" id="message" v-model="message" rows="3"></textarea>

                    <p class="text-danger" v-for="{ error, index } in errors.message">! {{ error }}</p>
                </div>
                <button type="submit" class="btn btn-dark" :disabled="loading">{{
                    loading? 'Sending...': 'Send'
                }}</button>
            </form>
        </div>
    </section>
</template>

<style lang="scss" scoped>

</style>