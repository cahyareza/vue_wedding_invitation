<template>
    <div v-if="themeproduct.fitur === 'platinum' || themeproduct.fitur === 'gold'">
        <div :class="theme">
            <section class="hero is-info is-medium">
                <div class="columns">
                    <div class="column is-half-tablet is-offset-one-quarter-tablet">
                        <section class="section pt-4">
                            <p class="subtitle-2 is-uppercase is-size-5 mt-1 p-1">
                                Moment yang berharga
                                <img class="filter mt-1" :src="themeproduct.theme?.line">
                            </p>
                            <div v-if="portofolio.kata_moment">
                                <p class="subtitle-3 mt-5 is-size-6">{{ portofolio.kata_moment }}</p>
                            </div>
                            <div v-else>
                                <p class="subtitle-3 mt-5 is-size-6">"Tiada janji terindah yang didengar oleh wanita dari lisan laki-laki, kecuali janji akad pernikahan"</p>
                            </div>
                        </section>

                        <OurVideo></OurVideo>
                        <OurGallery></OurGallery>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import OurVideo from '@/components/parts/ourmoment/OurVideo.vue'
import OurGallery from '@/components/parts/ourmoment/OurGallery.vue'

import { inject, computed, onBeforeMount } from 'vue'

// LOAD STATE
const store = inject('store');

// PORTOFOLIO
const portofolio = computed(() => store.state.portofolio);

// THEME
const theme = computed(() => store.state.theme); 
const themeproduct = computed(() => store.state.themeproduct); 

// LIFECYCLE
onBeforeMount(() => {
    store.actions.getTheme();
    store.actions.getThemeProduct();
    store.actions.getPortofolio();
});
</script>

<style lang="scss" scoped>
@import "../styles/component/ourmoment.scss";
// @import "../styles/global.scss";
</style>
