<script>

export default {
    name: 'AppHeader',
}
</script>

<template>
    <a name="back"></a>
    <header>
        <div class="nav-menu container d-flex flex-wrap align-items-center justify-content-between p-3">
            <router-link class="brand p-2" :to="{ name: 'home' }" aria-current="page">
                <img class="img-fluid logo" src="/images/logo.png" alt="">
            </router-link>
            <div class="menu-toggler d-lg-none">
                <button class="toggler">
                    <span class="toggler-icon"></span>
                </button>
            </div>

            <div class="menu">
                <ul class="d-flex list-unstyled gap-4 ms-auto mt-2 mt-lg-0">
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
        </div>


    </header>
</template>

<style lang="scss" scoped>

</style>
