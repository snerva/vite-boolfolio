<script>

export default {
    name: 'AboutView'
}
</script>

<template>
    <main>
        <section class="background-up about">
            <div class="container-fluid">
                <div class="row row-cols-1 row-cols-md-2">
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
        <section class="content tech-skills">
            <div class="container">
                <h2 class="mb-4"><span class="initial-pink">tech </span>skills.</h2>
                <div class="row row-cols-1 row-cols-md-2">
                    <div class="col">
                    </div>
                    <div class="col">
                    </div>
                </div>
            </div>
        </section>
        <!--/.tech skills-->
        <section class="content personal-skills">
            <div class="container">
                <h2 class="text-center mb-5"><span class="initial-pink">my </span>skills.</h2>
                <div class="row row-cols-1 row-cols-md-3">
                    <div class="col text-center p-2">
                        <div class="skill">
                            <div class="skill-icons multidevice">
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
        <section class="background-down fun-facts">
            <div class="container-fluid">
                <div class="row  row-cols-1 row-cols-md-2">
                    <div class="col">
                        <div class="col-content d-flex ">
                            <div class="d-flex">
                                <div class="vr"></div>
                            </div>
                            <div class="fun-facts-text  text-end">
                                <h2 class="px-5"><span class="initial">f</span>acts.</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col">

                    </div>
                </div>
            </div>
        </section>
        <!--/.fun facts-->
    </main>
</template>

<style lang="scss" scoped>

</style>