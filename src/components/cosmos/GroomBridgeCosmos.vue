<template>
    <div :class="theme">
        <div class="low-opacity-bg-image" :style="{ 'background-image': 'url(' + multiimage[0] + ')' }">
            <section class="hero">
                <div class="section py-5">
                    <div class="container">
                        <div class="columns is-multiline is-vcentered">
                            <div class="column 
                            is-full-mobile
                            is-6-tablet">
                                <div class="columns is-multiline is-mobile" data-aos="fade-up"
                                data-aos-offset="300" data-aos-duration="1000"
                                data-aos-easing="ease-in-sine" data-aos-delay="100">
                                    <div class="column
                                    is-6-mobile is-6-tablet">
                                        <figure class="image is-2by3">
                                            <img :src="portofolio.ppicture">
                                        </figure>
                                    </div>
                                                                        
                                    <div class="column
                                    is-6-mobile is-6-tablet
                                    ">                                    
                                        <figure class="image is-2by3">
                                            <img :src="portofolio.lpicture">
                                        </figure>
                                    </div>
                                </div>
                            </div>

                            <div class="column
                            is-6-tablet
                            is-full-mobile p-6-desktop">
                                <div class="columns is-multiline" data-aos="fade-up"
                                data-aos-offset="300" data-aos-duration="1000"
                                data-aos-easing="ease-in-sine" data-aos-delay="100">
                                    <div class="column
                                    is-full has-text-left
                                    "> 
                                        <p class="title2 is-capitalized is-size-3-tablet is-size-4-mobile">{{ portofolio.pname }}</p>

                                        <p class="subtitle3 is-size-6 has-text-weight-bold mb-1">Putri {{ portofolio.panak_ke }} dari</p>
                                        <p class="subtitle3 is-size-6 mt-1">Bapak {{ portofolio.pnama_ayah }} &</p>
                                        <p class="subtitle3 is-size-6 mt-1">Ibu {{ portofolio.pnama_ibu }}</p>

                                        <div v-if="portofolio.pinsta_link">
                                            <a :href="portofolio.pinsta_link" target="_blank"><font-awesome-icon class="icon" icon="fa-brands fa-4x fa-instagram" /></a>
                                        </div>
                                    </div>
                                    <div class="column
                                    is-full has-text-left
                                    ">
                                        <p class="title2 is-capitalized is-size-3-tablet is-size-4-mobile">{{ portofolio.lname }}</p>

                                        <p class="subtitle3 is-size-6 has-text-weight-bold mb-1">Putra {{ portofolio.lanak_ke }} dari</p>
                                        <p class="subtitle3 is-size-6 mt-1">Bapak {{ portofolio.lnama_ayah }} &</p>
                                        <p class="subtitle3 is-size-6 mt-1">Ibu {{ portofolio.lnama_ibu }}</p>
                                    
                                        <div v-if="portofolio.linsta_link">
                                            <a :href="portofolio.linsta_link" target="_blank"><font-awesome-icon class="icon" icon="fa-brands fa-4x fa-instagram" /></a>
                                        </div>
                                    </div>
                                </div>
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
  multiimage: { type: Array },
});
</script>

<style lang="scss" scoped>
@import "@/styles/component/groombride.scss";
</style>