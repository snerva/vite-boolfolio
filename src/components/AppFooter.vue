<script>
export default {
    name: 'AppFooter'
}
</script>

<template>
    <footer>
        <a href="#back" class="turn-back">
            <font-awesome-icon icon="fa-solid fa-angles-up" inverse size="2xl" />
        </a>
        <div class="container d-flex justify-content-between align-items-center">
            <div class="copyright">
                <a class="text-decoration-none text-white px-3 py-2" href="#">&copy; 2023 Selene Nerva</a>
            </div>
            <div class="footer-menu">
                <ul class="nav">
                    <li class="nav-item">
                        <router-link active-class="active" class="nav-link" :to="{ name: 'home' }"
                            aria-current="page">home
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
                        <router-link active-class="active" class="nav-link"
                            :to="{ name: 'contact' }">contact</router-link>
                    </li>
                </ul>
            </div>
            <div class="footer-logo">
                <router-link class="logo-link" :to="{ name: 'home' }" aria-current="page">
                    <img class="img-fluid logo" src="/images/logo.png" alt="">
                </router-link>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>

</style>