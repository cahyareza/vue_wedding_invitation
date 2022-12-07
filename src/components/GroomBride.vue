<template>
    <div :class="theme">
        <section class="hero is-info is-fullheight">
            <div class="columns">
                <div class="column is-half-tablet is-offset-one-quarter-tablet">
                    <section class="section pt-4">
                        <div class="container">
                            <p class="subtitle2 is-uppercase is-size-5 mt-1 p-1 mb-6">
                                Pengantin<br>
                                <img class="filter mt-1" :src="themeproduct.theme?.line">
                            </p>

                            <div class="columns is-multiline is-centered">
                                <div class="column is-full">
                                    <figure class="image is-inline-block mb-4" style="height:180px; width: 180px;">
                                        <img class="mb-3" :src="portofolio.ppicture" style="height:180px; width: 180px; position: absolute;">
                                        <div class="sprocket-mosaic-image-container"></div>
                                    </figure> <br>

                                    <div v-if="portofolio.pinsta_link">
                                        <a :href="portofolio.pinsta_link"><font-awesome-icon class="icon" icon="fa-brands fa-4x fa-instagram" /></a>
                                    </div>
                                    
                                    <!-- <p class="title mt-5 mb-6" v-for="couple in couples.perempuan" :key="couple.id">{{ couple }}</p> -->
                                    <p class="title2 is-capitalized is-size-3 mt-3 mb-4">{{ portofolio.pname }}</p>

                                    <p class="subtitle2 is-size-6 has-text-weight-bold mb-1">Putri {{ portofolio.panak_ke }} dari</p>
                                    <p class="subtitle2 is-size-6 mt-1">Bapak {{ portofolio.pnama_ayah }} & Ibu {{ portofolio.pnama_ibu }}</p>

                                    <p class="subtitle2 is-size-5 has-text-weight-bold mt-3">&</p>


                                </div>
                                <div class="column is-full mt-4">
                                    <figure class="image is-inline-block mb-4" style="height:180px; width: 180px;">
                                        <img class="mb-3" :src="portofolio.lpicture" style="height:180px; width: 180px; position: absolute;">
                                        <div class="sprocket-mosaic-image-container"></div>
                                    </figure> <br>

                                    <div v-if="portofolio.linsta_link">
                                        <a :href="portofolio.linsta_link"><font-awesome-icon class="icon" icon="fa-brands fa-4x fa-instagram" /></a>
                                    </div>

                                    <p class="title2 is-capitalized is-size-3 mt-3 mb-4">{{ portofolio.lname }}</p>

                                    <p class="subtitle2 is-size-6 has-text-weight-bold mb-1">Putra {{ portofolio.lanak_ke }} dari</p>
                                    <p class="subtitle2 is-size-6 mt-1">Bapak {{ portofolio.lnama_ayah }} & Ibu {{ portofolio.lnama_ibu }}</p>
                                </div>
                            </div>


                        </div>
                    </section>
                </div>
            </div>

        </section>
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
// @import "../styles/global.scss";
</style>