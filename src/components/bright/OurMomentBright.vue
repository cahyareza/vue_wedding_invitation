<template>
    <div v-if="portofolio.video || multiimage.length != 0">
        <div v-if="themeproduct.fitur === 'PLATINUM' || themeproduct.fitur === 'GOLD'">
            <div :class="theme">
                <div class="low-opacity-bg-image" :style="{ 'background-image': 'url(' + themeproduct.theme?.background_5 + ')' }">
                    <section class="hero is-medium">
                        <div class="section py-0">
                            <div class="columns">
                                <div class="column is-half-tablet is-offset-one-quarter-tablet">
                                    <section class="section pt-4 pb-3">
                                        <p class="title is-capitalized is-size-3-mobile is-size-2-tablet">
                                            Our Moment
                                        </p>
                                        <div v-if="portofolio.kata_moment" data-aos="fade-right"
                                            data-aos-offset="300" data-aos-duration="1000"
                                            data-aos-easing="ease-in-sine" data-aos-delay="100">
                                            <p class="subtitle-3 is-size-6">{{ portofolio.kata_moment }}</p>
                                        </div>
                                        <div v-else data-aos="fade-right"
                                            data-aos-offset="300" data-aos-duration="1000"
                                            data-aos-easing="ease-in-sine" data-aos-delay="100">
                                            <p class="subtitle-3 is-size-6">"Tiada janji terindah yang didengar oleh wanita dari lisan laki-laki, kecuali janji akad pernikahan"</p>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <OurVideoOcean :portofolio="portofolio"></OurVideoOcean><br>
                <div v-if="multiimage.length != 0">
                    <OurGallery :multiimage="multiimage"></OurGallery><br>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import OurGallery from '@/components/bright/parts/ourmoment/OurGallery.vue'
import OurVideoOcean from '@/components/ocean/parts/ourmoment/OurVideoOcean.vue'

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
@import "@/styles/component/ourmoment.scss";
// @import "../styles/global.scss";
</style>
