<script>

export default {
    name: 'AboutView'
}
</script>

<template>
    <main>
        <section class="background-up about">
            <div class="container-fluid">
                <div class="row row-cols-1 row-cols-md-2 px-5">
                    <div class="col">
                        <div class="col-content d-flex">
                            <div class="d-flex">
                                <div class="vr"></div>
                            </div>
                            <div class="about-text ps-3">
                                <h1><span class="initial">a</span>bout me.</h1>
                                <h3>I'm a junior full stack web developer based in Italy.</h3>
                                <p>I've enjoyed for creating intuitive, dynamic user experiences. When i'm not coding,
                                    you'll
                                    find
                                    me travelling around or cooking or eating pizza.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="photo">
                            <img class="img-fluid" style="height:460px" src="/images/sn-photo.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="background-middle skills">
            <div class="container-fluid">
                <div class="tech-skills pb-5">
                    <h2 class="text-center"><span class="initial-pink">tech </span>skills.</h2>
                    <div class="row row-cols-1 pt-4">
                        <div class="col text-center">
                            <div class="row row-cols-1 row-cols-md-2">
                                <div class="col text-center">
                                    <h3><span class="initial">Front</span>-end</h3>
                                    <ul class="list-unstyled">
                                        <li>Html5</li>
                                        <li>Css3/Scss</li>
                                        <li>Javascript</li>
                                        <li>Css: Bootstrap 4/5, Sass</li>
                                        <li>Js: Vue.js, Vite, Node.js, Axios</li>
                                    </ul>
                                </div>
                                <div class="col text-center">
                                    <h3><span class="initial">Back</span>-end</h3>
                                    <ul class="list-unstyled">
                                        <li>Php</li>
                                        <li>Php: Laravel 9</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col text-center">
                            <div class="row row-cols-1 row-cols-md-3">
                                <div class="col"></div>
                                <div class="col text-center">
                                    <h3><span class="initial">O</span>thers</h3>
                                    <ul class="list-unstyled">
                                        <li>Versioning system: Git</li>
                                        <li>Package manager: Npm, Composer, MySql</li>
                                        <li>Local server: Mamp</li>
                                        <li>API: Postman</li>
                                    </ul>
                                </div>
                                <div class="col"></div>
                            </div>


                        </div>
                    </div>
                </div>
                <div class="my-skills p-5">
                    <h2 class="text-center"><span class="initial-pink">my </span>skills.</h2>
                    <div class="row row-cols-1 row-cols-md-3 align-items-center pt-5">
                        <div class="col text-center p-2">
                            <div class="skill p-3">
                                <h3><span class="initial">R</span>esponsive</h3>
                                <p>Layouts will work on any device.</p>
                            </div>
                        </div>
                        <div class="col text-center p-2">
                            <div class="skill p-3">
                                <h3><span class="initial">I</span>ntuitive</h3>
                                <p>Complex problems into simple, intuitive design.</p>
                            </div>
                        </div>
                        <div class="col text-center p-2">
                            <div class="skill p-3">
                                <h3><span class="initial">D</span>ynamic</h3>
                                <p>I love making pages come to life.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--/.skills-->
        <section class="background-down fun-facts">
            <div class="container-fluid">
                <h2 class="px-5 text-center"><span class="initial-pink">fun</span> facts.</h2>
                <div class="row  row-cols-1 row-cols-md-2 py-5">
                    <div class="col"></div>
                    <div class="col text-center">
                        <ul class="list-unstyled">
                            <li>
                                <h3><span class="key-word">Coffee</span> addict</h3>
                            </li>
                            <li>
                                <h3>Eat a lot of <span class="key-word">Pizza</span></h3>
                            </li>
                            <li>
                                <h3>Love <span class="key-word">Interior Design</span></h3>
                            </li>
                            <li>
                                <h3>I designed my <span class="key-word">Tattoos</span></h3>
                            </li>
                            <li>
                                <h3>Self-Taught <span class="key-word">Illustrator</span></h3>
                            </li>
                            <li>
                                <h3><span class="key-word">Landscapes</span> lover</h3>
                            </li>
                            <li>
                                <h3><span class="key-word">Sous-Chef</span></h3>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <!--/.fun facts-->
    </main>
</template>

<style lang="scss" scoped>

</style>