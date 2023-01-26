<script>

export default {
    name: 'AppHeader'
}
</script>

<template>
    <a name="back"></a>
    <header>
        <nav class="navbar navbar-dark navbar-expand-sm">
            <div class="container">
                <router-link class="navbar-brand" :to="{ name: 'home' }" aria-current="page">
                    <img class="img-fluid logo" src="/images/logo.png" alt="">
                </router-link>
                <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <router-link active-class="active" class="nav-link" :to="{ name: 'home' }"
                                aria-current="page">home
                                <span class="visually-hidden">(current)</span></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link active-class="active" class="nav-link"
                                :to="{ name: 'about' }">about</router-link>
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
        </nav>

    </header>
</template>

<style lang="scss" scoped>

</style>
