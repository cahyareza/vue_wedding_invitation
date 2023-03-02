<template>
    <div v-if="portofolio.video || multiimage.length != 0">
        <div :class="theme">
            <div class="low-opacity-bg-image" :style="{ 'background-image': 'url(' + themeproduct.theme?.background_5 + ')' }">
                <section class="hero is-medium">
                    <div class="section py-0">
                        <section class="section pt-4 pb-3">
                            <div v-if="themeproduct.theme?.slug === 'theme-1' || themeproduct.theme?.slug === 'theme-2' || themeproduct.theme?.slug === 'theme-3'
                                || themeproduct.theme?.slug === 'theme-4' || themeproduct.theme?.slug === 'theme-5'">
                                <p class="subtitle-2 is-uppercase is-size-5 mt-1 p-1">
                                    Moment yang berharga<br>
                                </p>
                            </div>
                            <div v-else-if="themeproduct.theme?.slug === 'theme-6' || themeproduct.theme?.slug === 'theme-7' || themeproduct.theme?.slug === 'theme-8' || themeproduct.theme?.slug === 'theme-9'">
                                <p class="subtitle-2 is-size-3-tablet is-size-4-mobile mt-1 p-1">
                                    Moment yang berharga<br>
                                </p>
                            </div>
                            <div v-else-if="themeproduct.theme?.slug === 'theme-10'">
                                <p class="title is-capitalized is-size-3-mobile is-size-2-tablet">
                                    Moment<br>
                                </p>
                            </div>

                            <div v-if="themeproduct.theme?.line">
                                <img class="filter mt-1" :src="themeproduct.theme?.line">
                            </div>
                            <div v-if="portofolio.kata_moment" data-aos="fade-right"
                                data-aos-offset="300" data-aos-duration="1000"
                                data-aos-easing="ease-in-sine" data-aos-delay="100">
                                <p class="subtitle-3 mt-3 is-size-6">{{ portofolio.kata_moment }}</p>
                            </div>
                            <div v-else data-aos="fade-right"
                                data-aos-offset="300" data-aos-duration="1000"
                                data-aos-easing="ease-in-sine" data-aos-delay="100">
                                <p class="subtitle-3 mt-3 is-size-6">"Tiada janji terindah yang didengar oleh wanita dari lisan laki-laki, kecuali janji akad pernikahan"</p>
                            </div>
                        </section>

                        <div v-if="themeproduct.theme?.slug === 'theme-8'">
                            <OurVideoCosmos :portofolio="portofolio"></OurVideoCosmos>
                        </div>
                        <div v-else-if="themeproduct.theme?.slug === 'theme-9' || themeproduct.theme?.slug === 'theme-10'">
                            <OurVideoOcean :portofolio="portofolio"></OurVideoOcean>
                        </div>
                        <div v-else>
                            <OurVideo :portofolio="portofolio"></OurVideo>
                        </div>


                        <div v-if="multiimage.length != 0">
                            <div v-if="themeproduct.theme?.slug === 'theme-1' || themeproduct.theme?.slug === 'theme-2' || themeproduct.theme?.slug === 'theme-3'
                                || themeproduct.theme?.slug === 'theme-4' || themeproduct.theme?.slug === 'theme-5' || themeproduct.theme?.slug === 'theme-10'">
                                <OurGallery :multiimage="multiimage"></OurGallery>
                            </div>
                            <div v-else-if="themeproduct.theme?.slug === 'theme-6' || themeproduct.theme?.slug === 'theme-7' || themeproduct.theme?.slug === 'theme-11'">
                                <OurGalleryCardo :multiimage="multiimage"></OurGalleryCardo>
                            </div>
                            <div v-else-if="themeproduct.theme?.slug === 'theme-8'">
                                <OurGalleryCosmos :multiimage="multiimage"></OurGalleryCosmos>
                            </div>
                            <div v-else-if="themeproduct.theme?.slug === 'theme-9'">
                                <OurGalleryOcean :multiimage="multiimage"></OurGalleryOcean>
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
import OurGalleryCardo from '@/components/cardo/parts/ourmoment/OurGalleryCardo.vue'
import OurVideoCosmos from '@/components/cosmos/parts/ourmoment/OurVideoCosmos.vue'
import OurGalleryCosmos from '@/components/cosmos/parts/ourmoment/OurGalleryCosmos.vue'
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
@import "../styles/component/ourmoment.scss";
</style>
