<template>
    <div v-if="portofolio.video || multiimage.length != 0">
        <div v-if="themeproduct.fitur === 'PLATINUM' || themeproduct.fitur === 'GOLD' || themeproduct.fitur === 'DIAMOND'">
            <div :class="theme">
                <div class="low-opacity-bg-image" :style="{ 'background-image': 'url(' + themeproduct.theme?.background_5 + ')' }">
                    <section class="hero is-medium">
                        <div class="section is-paddingless is-marginless">
                            <section class="section is-paddingless is-marginless">
                                <p class="subtitle-2 is-uppercase is-size-5 mt-5 p-1">
                                    Moment yang berharga<br>
                                    <img class="filter mt-1" :src="themeproduct.theme?.line">
                                </p>
                                <div v-if="portofolio.kata_moment" data-aos="fade-right"
                                    data-aos-offset="300" data-aos-duration="1000"
                                    data-aos-easing="ease-in-sine" data-aos-delay="100">
                                    <p class="subtitle-3 is-size-6 mb-3">{{ portofolio.kata_moment }}</p>
                                </div>
                                <div v-else data-aos="fade-right"
                                    data-aos-offset="300" data-aos-duration="1000"
                                    data-aos-easing="ease-in-sine" data-aos-delay="100">
                                    <p class="subtitle-3 is-size-6 mb-3">"Tiada janji terindah yang didengar oleh wanita dari lisan laki-laki, kecuali janji akad pernikahan"</p>
                                </div>
                            </section>

                            <OurVideoCosmos :portofolio="portofolio"></OurVideoCosmos>
                            <div v-if="multiimage.length != 0">
                                <OurGalleryCosmos :multiimage="multiimage"></OurGalleryCosmos>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import OurVideoCosmos from '@/components/cosmos/parts/ourmoment/OurVideoCosmos.vue'
import OurGalleryCosmos from '@/components/cosmos/parts/ourmoment/OurGalleryCosmos.vue'

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
