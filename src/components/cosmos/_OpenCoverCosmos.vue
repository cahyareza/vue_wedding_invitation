<template>
    <div :class="theme">
        <div class="low-opacity-bg-image" :style="{ 'background-image': 'url(' + portofolio.open_background + ')' }">
            <section class="hero is-fullheight">
                <div class="hero-body">
                    <div class="container">
                        <div class="columns is-multiline">
                            <div class="column is-half-tablet is-offset-one-quarter-tablet">
                            </div>
                            <div class="column is-half-tablet is-offset-one-quarter-tablet mt-6"></div>
                            <div class="column is-half-tablet is-offset-one-quarter-tablet mt-6">
                                <div v-if="direction">
                                    <div class="mt-6">
                                        <p class="subtitle is-size-5 mb-0 has-text-white">
                                            Kepada Yth.
                                        </p>
                                        <p class="subtitle is-size-5 mt-0 has-text-white mb-1">
                                            {{ direction }}
                                        </p>
                                        <p class="is-size-7 has-text-white mt-1 is-italic">
                                            Mohon maaf apabila ada kesalahan penulisan nama/gelar
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="column is-half-tablet is-offset-one-quarter-tablet">
                                <div class="">
                                    <p class="title is-size-3-mobile is-capitalized is-size-2-tablet mb-1 has-text-white">
                                        {{ portofolio.pname }}
                                    </p>
                                    <div v-if="themeproduct.theme?.open_fitur">
                                        <img class="filter is-rounded mb-1" :src="themeproduct.theme?.open_fitur">
                                    </div>
                                    <div v-else>
                                        <p class="title is-size-3 mb-1 has-text-white">&</p>
                                    </div>
                                    <p class="title is-size-3-mobile is-capitalized  is-size-2-tablet has-text-white">
                                        {{ portofolio.lname }} 
                                    </p>
                                    <p class="subtitle mt-4 is-size-6 has-text-white">{{ tanggal(portofolio.tanggal_countdown) }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="demo" style="padding: 20px">
                    <div id="inner-demo">
                        <VueParticle domId="demo" :config="obj.particleConfig"/>
                    </div>
                </div>
                <div class="hero-footer">
                    <div class="container">
                        <router-link :to="`/main/cosmos/${slug}/${direction}`" class="button mt-4">
                            Buka Undangan
                        </router-link>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import VueParticle from 'vue-particlejs';
import { inject, reactive, computed, defineProps } from 'vue'
import moment from 'moment';

// GET PROPS
// eslint-disable-next-line no-unused-vars
defineProps({
  direction: { type: Object },
});

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

// METHOD
const tanggal = (value) => {
    return moment(value).locale('id').format('dddd, DD MMMM YYYY');
}

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
@import "../../styles/component/opencover.scss";
// @import "../styles/global.scss";
</style>