<script>

export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <nav class="navbar navbar-dark sticky-top  navbar-expand">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Logo.</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link text-white" :to="{ name: 'home' }" aria-current="page">home
                            <span class="visually-hidden">(current)</span></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-white" :to="{ name: 'about' }">about</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-white" :to="{ name: 'projects' }">projects</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-white" :to="{ name: 'contact' }">contact</router-link>
                    </li>
                </ul>
            </div>
        </nav>

    </header>
</template>

<style lang="scss" scoped>

</style>
