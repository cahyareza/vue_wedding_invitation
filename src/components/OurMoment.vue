<template>
    <div :class="theme">
        <section class="hero is-info is-medium">
            <div class="columns">
                <div class="column is-half-tablet is-offset-one-quarter-tablet">
                    <section class="section pt-4">
                        <p class="subtitle-2 is-uppercase is-size-5 mt-1 p-1">
                            Moment yang berharga
                            <img class="mt-1" src="../assets/contents/line_blue.png" style="width: 180px; height: 27px;">
                        </p>
                        <p class="subtitle-3 mt-5 is-size-6">"Tiada janji terindah yang didengar oleh wanita dari lisan laki-laki, kecuali janji akad pernikahan"</p>
                    </section>

                    <OurVideo></OurVideo>
                    <OurGallery></OurGallery>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import OurVideo from '@/components/parts/ourmoment/OurVideo.vue'
import OurGallery from '@/components/parts/ourmoment/OurGallery.vue'

import { inject, computed, onBeforeMount } from 'vue'

// LOAD STATE
const store = inject('store');

// THEME
const theme = computed(() => store.state.theme); 

// LIFECYCLE
onBeforeMount(() => {
    store.actions.getTheme();
});
</script>

<style lang="scss" scoped>
@import "../styles/component/ourmoment.scss";
// @import "../styles/global.scss";
</style>
