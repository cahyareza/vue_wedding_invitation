<template>
    <div v-if="portofolio.video || multiimage.length != 0">
        <div v-if="themeproduct.fitur === 'PLATINUM' || themeproduct.fitur === 'GOLD'">
            <div :class="theme">
                <div class="low-opacity-bg-image" :style="{ 'background-image': 'url(' + themeproduct.theme?.background_5 + ')' }">
                    <section class="hero is-medium">
                        <div class="section py-0">
                            <section class="section pt-4 pb-3">
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

                            <OurVideo :portofolio="portofolio"></OurVideo>
                            <div v-if="multiimage.length != 0">
                                <OurGalleryCardo :multiimage="multiimage"></OurGalleryCardo>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import OurVideo from '@/components/parts/ourmoment/OurVideo.vue'
import OurGalleryCardo from '@/components/cardo/parts/ourmoment/OurGalleryCardo.vue'

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
