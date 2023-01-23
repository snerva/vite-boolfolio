<script>

export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <nav class="navbar navbar-dark sticky-top  navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Logo.</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
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
