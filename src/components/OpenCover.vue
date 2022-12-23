<template>
    <div :class="theme">
        <div class="low-opacity-bg-image" :style="{ 'background-image': 'url(' + portofolio.open_background + ')' }">
            <section class="hero is-fullheight">
                <div class="hero-body">
                    <div class="container">
                        <div class="columns is-multiline">
                            <div class="column is-half-tablet is-offset-one-quarter-tablet">
                                <div class="">
                                    <p class="title is-size-3 mb-3">
                                        {{ portofolio.pname }}
                                    </p>
                                    <div v-if="themeproduct.theme?.open_fitur">
                                        <img class="filter is-rounded mb-3" :src="themeproduct.theme?.open_fitur">
                                    </div>
                                    <div v-else>
                                        <p class="title is-size-3 mb-3">&</p>
                                    </div>
                                    <p class="title is-size-3">
                                        {{ portofolio.lname }} 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="demo">
                    <div id="inner-demo">
                        <VueParticle domId="demo" :config="obj.particleConfig"/>
                    </div>
                </div>
                <div class="hero-footer">
                    <button class="button">
                        <router-link :to="`/main/${slug}`">Buka Undangan</router-link>
                        <!-- <a :href="`/main/${slug}`">Buka Undangan</a> -->
                    </button>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import VueParticle from 'vue-particlejs';
import { inject, reactive, computed } from 'vue'

// LOAD STATE
const store = inject('store');

// SLUG
const slug = store.actions.getSlug().value;

// PORTOFOLIO
const portofolio = computed(() => store.state.portofolio);

// THEME
const theme = computed(() => store.state.theme);
const themeproduct = computed(() => store.state.themeproduct); 

const getProps = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    store.actions.getPortofolio2(slug);
    store.actions.getTheme2(slug);
    store.actions.getThemeProduct2(slug);
}

await getProps();

// PARTICLE
const obj = reactive({particleConfig: {}})

obj.particleConfig = {
    particles: {
        number: { value: 300, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
        },
        line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
        },
        move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true
        },
        modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
        },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
}
</script>


<style lang="scss" scoped>
@import "../styles/component/opencover.scss";
// @import "../styles/global.scss";
</style>