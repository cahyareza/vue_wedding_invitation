<template>
    <div v-if="portofolio.livestream">
        <div v-if="themeproduct.fitur === 'GOLD'">
            <div :class="theme">
                <section class="hero is-danger is-small">
                    <div class="hero-body">
                        <div class="section py-0">
                            <p class="subtitle3 is-uppercase is-size-5 mt-1 p-1">
                                Live Streaming<br>
                                <img class="filter mt-1" :src="themeproduct.theme?.line">
                            </p>
                            <div data-aos="flip-down" data-aos-duration="1000" data-aos-delay="300">
                                <div v-if="portofolio.kata_live_streaming">
                                    <p class="subtitle2 is-size-6-tablet is-size-6-mobile mt-2 mb-3"> {{ portofolio.kata_live_streaming }} </p>
                                </div>
                                <div v-else>
                                    <p class="subtitle2 is-size-6-tablet is-size-6-mobile mt-2 mb-3"> Temui kami secara virtual untuk menyaksikan acara pernikahan kami </p>
                                </div>
                                
                                <button class="button is-rounded is-size-7 px-2  mb-3">
                                    <a :href="portofolio.livestream" target="_blank"><font-awesome-icon icon="fa-solid fa-video" />&nbsp;Menuju Streaming
                                    </a>
                                </button>
                                <p class="subtitle2 is-size-7-tablet is-size-7-mobile">Silahkan untuk join live streaming.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script setup>

import { defineProps } from 'vue'

// PROPS
defineProps({
  portofolio: { type: Object },
  theme: { type: Object },
  themeproduct: { type: Object },
});
</script>

<style lang="scss" scoped>
@import "../styles/component/livestream.scss";
</style>