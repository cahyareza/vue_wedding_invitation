<template>
    <div v-if="portofolio.video || multiimage.length != 0">
        <div v-if="themeproduct.fitur === 'PLATINUM' || themeproduct.fitur === 'GOLD' || themeproduct.fitur === 'DIAMOND'">
            <div :class="theme">
                <div class="low-opacity-bg-image" :style="{ 'background-image': 'url(' + themeproduct.theme?.background_5 + ')' }">
                    <section class="hero is-medium">
                        <div class="section">
                            <section class="section is-paddingless is-marginless">
                                <p class="subtitle-2 is-size-3-tablet is-size-4-mobile mt-1 p-1">
                                    Moment yang berharga<br>
                                </p>
                                <div v-if="portofolio.kata_moment" data-aos="fade-right"
                                    data-aos-offset="300" data-aos-duration="1000"
                                    data-aos-easing="ease-in-sine" data-aos-delay="100">
                                    <p class="subtitle-3 mt-2 mb-2 is-size-6-mobile is-size-5-tablet">{{ portofolio.kata_moment }}</p>
                                </div>
                                <div v-else data-aos="fade-right"
                                    data-aos-offset="300" data-aos-duration="1000"
                                    data-aos-easing="ease-in-sine" data-aos-delay="100">
                                    <p class="subtitle-3 mt-2 mb-2 is-size-6-mobile is-size-5-tablet">"Tiada janji terindah yang didengar oleh wanita dari lisan laki-laki, kecuali janji akad pernikahan"</p>
                                </div>
                            </section>

                            <OurVideoOcean :portofolio="portofolio"></OurVideoOcean>
                            <div v-if="multiimage.length != 0">
                                <OurGalleryOcean :multiimage="multiimage"></OurGalleryOcean>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import OurVideoOcean from '@/components/ocean/parts/ourmoment/OurVideoOcean.vue'
import OurGalleryOcean from '@/components/ocean/parts/ourmoment/OurGalleryOcean.vue'

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
@import "../../styles/component/ourmoment.scss";
// @import "../styles/global.scss";
</style>
