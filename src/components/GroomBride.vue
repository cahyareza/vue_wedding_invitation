<template>
    <div :class="theme">
        <div class="low-opacity-bg-image" :style="{ 'background-image': 'url(' + themeproduct.theme?.background_2 + ')' }">
            <section class="hero is-fullheight">
                <div class="section py-5">
                    <div class="container">
                        <p class="subtitle2 is-uppercase is-size-5 mt-1 p-1 mb-6">
                            Pengantin<br>
                            <img class="filter mt-1" :src="themeproduct.theme?.line">
                        </p>

                        <div class="columns is-multiline">
                            <div class="column is-full">
                                <figure class="image is-inline-block mb-4" style="height:180px; width: 180px;" data-aos="fade-down" data-aos-offset="300"
                                    data-aos-easing="ease-in-sine" data-aos-duration="1000">
                                    <img class="mb-3" :src="portofolio.ppicture" style="height:180px; width: 180px; position: absolute;">
                                    <div class="sprocket-mosaic-image-container"></div>
                                </figure> <br>

                                <div v-if="portofolio.pinsta_link">
                                    <a :href="portofolio.pinsta_link" target="_blank"><font-awesome-icon class="icon" icon="fa-brands fa-4x fa-instagram" /></a>
                                </div>
                                
                                <!-- <p class="title mt-5 mb-6" v-for="couple in couples.perempuan" :key="couple.id">{{ couple }}</p> -->
                                <p class="title2 is-capitalized is-size-3 mt-3 mb-4">{{ portofolio.pname }}</p>

                                <p class="subtitle3 is-size-6 has-text-weight-bold mb-1">Putri {{ portofolio.panak_ke }} dari</p>
                                <p class="subtitle3 is-size-6 mt-1">Bapak {{ portofolio.pnama_ayah }} & Ibu {{ portofolio.pnama_ibu }}</p>
                            </div>

                            <div class="column is-full mt-4">
                                <figure class="image is-inline-block mb-4" style="height:180px; width: 180px;" data-aos="fade-up" data-aos-offset="300"
                                    data-aos-easing="ease-in-sine" data-aos-duration="1000" data-aos-delay="100">
                                    <img class="mb-3" :src="portofolio.lpicture" style="height:180px; width: 180px; position: absolute;">
                                    <div class="sprocket-mosaic-image-container"></div>
                                </figure> <br>

                                <div v-if="portofolio.linsta_link">
                                    <a :href="portofolio.linsta_link" target="_blank"><font-awesome-icon class="icon" icon="fa-brands fa-4x fa-instagram" /></a>
                                </div>

                                <p class="title2 is-capitalized is-size-3 mt-3 mb-4">{{ portofolio.lname }}</p>

                                <p class="subtitle3 is-size-6 has-text-weight-bold mb-1">Putra {{ portofolio.lanak_ke }} dari</p>
                                <p class="subtitle3 is-size-6 mt-1">Bapak {{ portofolio.lnama_ayah }} & Ibu {{ portofolio.lnama_ibu }}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    </div>
</template>


<script setup>
import { defineProps } from 'vue'

// GET PROPS
defineProps({
  portofolio: { type: Object },
  theme: { type: Object },
  themeproduct: { type: Object },
});
</script>

<style lang="scss" scoped>
@import "../styles/component/groombride.scss";
</style>