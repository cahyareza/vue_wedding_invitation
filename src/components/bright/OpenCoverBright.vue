<template>
    <div :class="theme">
        <div class="low-opacity-bg-image" :style="{ 'background-image': 'url(' + portofolio.open_background + ')' }">
            <section class="hero is-fullheight">
                <div class="hero-header">
                    <div class="container">
                        <div class="columns is-multiline">
                            <div class="column is-half-tablet is-offset-one-quarter-tablet mt-6">
                                <div v-if="direction">
                                    <div class="mt-6">
                                        <p class="subtitle is-size-7 mb-1 has-text-white">
                                            Dear
                                        </p>
                                        <p class="subtitle is-size-5 mt-1 mb-1 has-text-white mb-1">
                                            {{ direction }}
                                        </p>
                                        <p class="is-size-7 has-text-white mt-1">
                                            You Are Invited!
                                        </p>
                                    </div>
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
                <div class="hero-foot">
                    <div class="section">
                        <div class="container">
                            <div class="columns is-multiline">
                                <div class="column is-12-mobile is-half-tablet is-offset-one-quarter-tablet mt-6">
                                    <div class="">
                                        <div v-if="themeproduct.theme?.slug === 'theme-10'">
                                            <p class="subtitle is-size-6-mobile is-size-5-tablet has-text-white mb-6">
                                                The Wedding Celebration of
                                            </p>
                                            <p class="title is-size-2-mobile is-capitalized  is-size-1-tablet has-text-white">
                                                {{ portofolio.psurename }} & {{ portofolio.lsurename }}
                                            </p>
                                            <p class="subtitle mt-4 is-size-6 has-text-white">{{ tanggal(portofolio.tanggal_countdown) }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="column is-12 mt-6">
                                    <router-link :to="`/main/bright/${slug}/${direction}`" class="button mt-4">
                                        Open Invitation
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import VueParticle from 'vue-particlejs';
import {reactive, defineProps } from 'vue'
import injectStore from '@/hooks/injectStore.js'
import moment from 'moment';

// GET PROPS
defineProps({
  direction: { type: Object },
  themeproduct: { type: Object },
});

const {store, slug, portofolio, theme, themeproduct} = injectStore()

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
@import "@/styles/component/opencover.scss";
// @import "../styles/global.scss";
</style>