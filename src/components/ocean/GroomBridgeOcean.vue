<template>
    <div :class="theme">
        <section class="hero">
            <div class="section py-5">
                <div class="box">
                    <div class="columns is-vcentered is-multiline">
                        <div class="column 
                        is-full-mobile
                        is-12-tablet">
                            <div class="columns is-multiline is-vcentered has-text-left" data-aos="fade-up"
                            data-aos-offset="300" data-aos-duration="1000"
                            data-aos-easing="ease-in-sine" data-aos-delay="100">
                                <div class="column
                                is-4">
                                    <figure class="image is-2by3">
                                        <img :src="portofolio.ppicture">
                                    </figure>
                                </div>
                                                                    
                                <div class="column
                                is-6
                                ">                                    
                                    <p class="title2 is-capitalized has-text-weight-bold is-size-3-tablet is-size-4-mobile">{{ portofolio.pname }}</p>

                                    <p class="subtitle3 is-size-6-mobile is-size-5-tablet has-text-weight-bold mb-1">Putri {{ portofolio.panak_ke }} dari</p>
                                    <p class="subtitle3 is-size-6-mobile is-size-5-tablet mt-1">Bapak {{ portofolio.pnama_ayah }} &</p>
                                    <p class="subtitle3 is-size-6-mobile is-size-5-tablet mt-1">Ibu {{ portofolio.pnama_ibu }}</p>

                                    <div v-if="portofolio.pinsta_link">
                                        <a :href="portofolio.pinsta_link" target="_blank"><font-awesome-icon class="icon" icon="fa-brands fa-4x fa-instagram" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="column
                        is-12-tablet
                        is-full-mobile">
                            <div class="columns is-multiline is-vcentered has-text-left" data-aos="fade-up"
                            data-aos-offset="300" data-aos-duration="1000"
                            data-aos-easing="ease-in-sine" data-aos-delay="100">
                                <div class="column
                                is-4
                                "> 
                                    <figure class="image is-2by3">
                                        <img :src="portofolio.lpicture">
                                    </figure>
                                </div>
                                <div class="column
                                is-6
                                ">
                                    <p class="title2 is-capitalized has-text-weight-bold is-size-3-tablet is-size-4-mobile">{{ portofolio.lname }}</p>

                                    <p class="subtitle3 is-size-6-mobile is-size-5-tablet has-text-weight-bold mb-1">Putra {{ portofolio.lanak_ke }} dari</p>
                                    <p class="subtitle3 is-size-6-mobile is-size-5-tablet mt-1">Bapak {{ portofolio.lnama_ayah }} &</p>
                                    <p class="subtitle3 is-size-6-mobile is-size-5-tablet mt-1">Ibu {{ portofolio.lnama_ibu }}</p>
                                
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