<script>

export default {
    name: 'AppHeader',
    data() {
        return {
            showMobileMenu: false,
        };
    },
    methods: {
        showMenu() {
            this.showMobileMenu = !this.showMobileMenu;
        },
    },
}
</script>

<template>
    <a name="back"></a>
    <header>
        <div class="nav-menu container-fluid d-flex flex-wrap align-items-center justify-content-between p-3">
            <router-link class="brand p-2" :to="{ name: 'home' }" aria-current="page">
                <img class="img-fluid logo" src="/images/logo.png" alt="">
            </router-link>
            <button class="toggler btn btn-link p-2" @click="showMenu()">
                <span class="toggler-icon"><font-awesome-icon icon="fa-solid fa-bars" /></span>
            </button>


            <ul class="menu d-flex list-unstyled gap-4 ms-auto mt-2 mt-lg-0"
                :class="this.showMobileMenu ? 'open-menu' : 'close-menu'">
                <li class="nav-item">
                    <router-link active-class="active" class="nav-link" :to="{ name: 'home' }" aria-current="page">home
                        <span class="visually-hidden">(current)</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link active-class="active" class="nav-link" :to="{ name: 'about' }">about</router-link>
                </li>
                <li class="nav-item">
                    <router-link active-class="active" class="nav-link"
                        :to="{ name: 'projects' }">projects</router-link>
                </li>
                <li class="nav-item">
                    <router-link active-class="active" class="nav-link" :to="{ name: 'contact' }">contact</router-link>
                </li>
            </ul>

        </div>


    </header>
</template>

<style lang="scss" scoped>

</style>
