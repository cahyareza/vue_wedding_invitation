<template>
    <div v-if="portofolio.video || multiimage.length != 0">
        <div v-if="themeproduct.fitur === 'PLATINUM' || themeproduct.fitur === 'GOLD'">
            <div :class="theme">
                <section class="hero is-info is-medium">
                    <div class="section py-0">
                        <div class="columns">
                            <div class="column is-half-tablet is-offset-one-quarter-tablet">
                                <section class="section pt-4 pb-3">
                                    <p class="subtitle-2 is-uppercase is-size-5 mt-1 p-1">
                                        Moment yang berharga<br>
                                        <img class="filter mt-1" :src="themeproduct.theme?.line">
                                    </p>
                                    <div v-if="portofolio.kata_moment" data-aos="fade-right"
                                        data-aos-offset="300" data-aos-duration="1000"
                                        data-aos-easing="ease-in-sine" data-aos-delay="500">
                                        <p class="subtitle-3 mt-5 is-size-6">{{ portofolio.kata_moment }}</p>
                                    </div>
                                    <div v-else data-aos="fade-right"
                                        data-aos-offset="300" data-aos-duration="1000"
                                        data-aos-easing="ease-in-sine" data-aos-delay="500">
                                        <p class="subtitle-3 mt-5 is-size-6">"Tiada janji terindah yang didengar oleh wanita dari lisan laki-laki, kecuali janji akad pernikahan"</p>
                                    </div>
                                </section>

                                <OurVideo :portofolio="portofolio"></OurVideo>
                                <div v-if="multiimage.length != 0">
                                    <OurGallery :multiimage="multiimage"></OurGallery>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script setup>
import OurVideo from '@/components/parts/ourmoment/OurVideo.vue'
import OurGallery from '@/components/parts/ourmoment/OurGallery.vue'

import { defineProps } from 'vue'

// GET PORTOFOLIO
defineProps({
  portofolio: { type: Object },
  theme: { type: Object },
  themeproduct: { type: Object },
  multiimage: { type: Array },
});
</script>

<style lang="scss" scoped>
@import "../styles/component/ourmoment.scss";
// @import "../styles/global.scss";
</style>
