<script>
import AppBanner from '../components/AppBanner.vue';

export default {
    name: 'AboutView',
    components: { AppBanner }
}
</script>

<template>
    <AppBanner initial="a" title="bout me." subtitle="I'm a junior full stack web developer based in Italy."
        text="I've enjoyed for creating intuitive, dynamic user experiences. When i'm not coding, you'll find me travelling around or cooking." />
    <section class="content skills">
        <div class="container">
            <div class="row ">
                <div class="col ">
                    <h2 class="mb-4"><span class="initial-pink">tech </span>skills.</h2>

                    <span>img here</span>
                </div>
                <div class="col bars-wrapper d-flex flex-column">
                    <div class="bar d-flex justify-content-end">
                        <div class="bar fill" style="width:90%">
                            <div class="tag d-flex justify-content-center text-white"><span>HTML5</span></div>
                        </div>
                        <span class="percentage">80%</span>
                    </div>
                    <!--/html-->
                    <div class="bar d-flex justify-content-end">
                        <div class="bar fill" style="width:90%">
                            <div class="tag d-flex justify-content-center text-white"><span>CSS3</span></div>
                        </div>
                        <span class="percentage">80%</span>
                    </div>
                    <!--/css-->
                    <div class="bar d-flex justify-content-end">
                        <div class="bar fill" style="width:70%">
                            <div class="tag d-flex justify-content-center text-white"><span>Javascript</span></div>
                        </div>
                        <span class="percentage">70%</span>
                    </div>
                    <!--/javascript-->
                    <div class="bar d-flex justify-content-end">
                        <div class="bar fill" style="width:70%">
                            <div class="tag d-flex justify-content-center text-white"><span>Vue.js</span></div>
                        </div>
                        <span class="percentage">70%</span>
                    </div>
                    <!--/vue-->
                    <div class="bar d-flex justify-content-end">
                        <div class="bar fill" style="width:70%">
                            <div class="tag d-flex justify-content-center text-white"><span>PHP</span></div>
                        </div>
                        <span class="percentage">70%</span>
                    </div>
                    <!--/php-->
                    <div class="bar d-flex justify-content-end">
                        <div class="bar fill" style="width:70%">
                            <div class="tag d-flex justify-content-center text-white"><span>MySQL</span></div>
                        </div>
                        <span class="percentage">70%</span>
                    </div>
                    <!--/mysql-->
                    <div class="bar d-flex justify-content-end">
                        <div class="bar fill" style="width:70%">
                            <div class="tag d-flex justify-content-center text-white"><span>Laravel</span></div>
                        </div>
                        <span class="percentage">70%</span>
                    </div>
                    <!--/laravel-->
                </div>
            </div>
        </div>
    </section>
    <section class="content-white">
        <div class="container">
            <div class="row">
                <h2 class="text-center mb-5"><span class="initial-pink">my </span>skills.</h2>
                <div class="col text-center">
                    <div class="skill-icons multidevice">
                        <font-awesome-icon icon="fa-solid fa-laptop" size="2xl" />
                        <font-awesome-icon icon="fa-solid fa-mobile-screen-button" size="lg" />
                    </div>
                    <h3><span class="initial">r</span>esponsive</h3>
                    <p>Layouts will work on any device.</p>
                </div>
                <div class="col text-center">
                    <div class="skill-icons">
                        <font-awesome-icon icon="fa-regular fa-lightbulb" size="2xl" />
                    </div>
                    <h3><span class="initial">i</span>ntuitive</h3>
                    <p>Complex problems into simple, intuitive design.</p>
                </div>
                <div class="col text-center">
                    <div class="skill-icons">
                        <font-awesome-icon icon="fa-solid fa-rocket" size="2xl" />
                    </div>
                    <h3><span class="initial">d</span>ynamic</h3>
                    <p>Making pages come to life.</p>
                </div>
            </div>
        </div>
    </section>
    <section class="content">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h2 class="mb-4"><span class="initial">f</span>acts.</h2>

                    <ul class="list-unstyled">
                        <li>I'm a coffee addict</li>
                        <li>I eat a lot of pizza</li>
                        <li>I love interior design</li>
                        <li>I designed my tattoos</li>
                        <li>Bit illustrator</li>
                        <li>Also sous-chef</li>
                    </ul>
                </div>
                <div class="col">
                    <span>img here</span>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

</style>