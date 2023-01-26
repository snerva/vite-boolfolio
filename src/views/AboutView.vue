<script>
import AppBanner from '../components/AppBanner.vue';

export default {
    name: 'AboutView',
    components: { AppBanner }
}
</script>

<template>
    <AppBanner initial="a" title="bout me." subtitle="I'm a junior full stack web developer based in Italy."
        text="I've enjoyed for creating intuitive, dynamic user experiences. When i'm not coding, you'll find me travelling around or cooking."
        image="/images/sn-portrait.png" style="height:460px" />
    <!--/AppBanner-->
    <section class="content tech-skills">
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2">
                <div class="col bars-wrapper d-flex flex-column">
                    <h2 class="mb-4"><span class="initial-pink">tech </span>skills.</h2>
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
                <div class="col">
                    <div class="tech-icons d-flex justify-content-center">

                        <div class="gear p-2">
                            <h3><span class="initial">o</span>thers.</h3>
                            <img class="img-fluid  static-icon" src="/images/settings.png" alt="">
                        </div>
                        <div class="others text-center p-2">
                            <h3><span class="initial">o</span>thers.</h3>
                            <img class="img-fluid animated-icon" src="/images/settings.gif" alt="">
                            <p>Node.js, Bootstrap, Sass, Figma</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <!--/.tech skills-->
    <section class="content-white personal-skills">
        <div class="container">
            <h2 class="text-center mb-5"><span class="initial-pink">my </span>skills.</h2>
            <div class="row row-cols-1 row-cols-md-3">
                <div class="col text-center p-2">
                    <div class="skill">
                        <div class="skill-icons multidevice">
                            <img class="img-fluid  static-icon" src="/images/computer.png" alt="">
                            <img class="img-fluid animated-icon" src="/images/computer.gif" alt="">
                        </div>
                        <h3><span class="initial">r</span>esponsive</h3>
                        <p>Layouts will work on any device.</p>
                    </div>
                </div>
                <div class="col text-center p-2">
                    <div class="skill">
                        <div class="skill-icons">
                            <img class="img-fluid  static-icon" src="/images/idea.png" alt="">
                            <img class="img-fluid animated-icon" src="/images/idea.gif" alt="">
                        </div>
                        <h3><span class="initial">i</span>ntuitive</h3>
                        <p>Complex problems into simple, intuitive design.</p>
                    </div>
                </div>
                <div class="col text-center p-2">
                    <div class="skill">
                        <div class="skill-icons">
                            <img class="img-fluid  static-icon" src="/images/rocket.png" alt="">
                            <img class="img-fluid animated-icon" src="/images/rocket.gif" alt="">
                        </div>
                        <h3><span class="initial">d</span>ynamic</h3>
                        <p>I love making pages come to life.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--/.personal skills-->
    <section class="content fun-facts">
        <div class="container facts p-3">
            <h2 class="mb-4 ms-5"><span class="initial">f</span>acts.</h2>
            <div class="row  row-cols-1 row-cols-md-2">
                <div class="col d-flex justify-content-center">
                    <div class="facts-img">
                        <img class="img-fluid  static-icon" src="/images/coffee-cup.png" alt="">
                        <img class="img-fluid animated-icon" src="/images/coffee-cup.gif" alt="">
                    </div>

                </div>
                <div class="col">
                    <ul class="list-unstyled pe-2">
                        <li>
                            <h3 class="text-center">&#10094;<span class="pink-facts">coffee</span><span
                                    class="none-facts"> addict</span>.&#10095;</h3>
                        </li>
                        <li>
                            <h3>&#10094;<span class="none-facts">eat a lot of </span><span
                                    class="pink-facts acqua">pizza</span>.&#10095;</h3>
                        </li>
                        <li>
                            <h3 class="text-end">&#10094;<span class="none-facts">love </span><span
                                    class="pink-facts">interior design</span>.&#10095;
                            </h3>
                        </li>
                        <li>
                            <h3>&#10094;<span class="none-facts">i designed my </span><span
                                    class="pink-facts acqua">tattoos</span>.&#10095;</h3>
                        </li>
                        <li>
                            <h3 class="text-end">&#10094;<span class="none-facts">bit </span><span
                                    class="pink-facts">illustrator</span>.&#10095;</h3>
                        </li>
                        <li>
                            <h3 class="text-center">&#10094;<span class="none-facts">i'm a </span><span
                                    class="pink-facts acqua">sous-chef</span>.&#10095;</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <!--/.fun facts-->
</template>

<style lang="scss" scoped>

</style>