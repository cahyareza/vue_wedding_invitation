<template>
    <div :class="theme">
        <div style="position: relative;">
            <div class="custom-shape-divider-bottom-1676035094">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                </svg>
            </div>
            <div class="custom-shape-divider-top-1676035160">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                </svg>
            </div>
            <figure class="image is-3by2" style="z-index: -1; position: relative;">
                <img :src="multiimage[0]">
            </figure>
        </div>
        <section class="hero">
            <div class="section py-5">
                <div class="container">
                    <div class="columns is-vcentered is-multiline">
                        <div class="column 
                        is-full-mobile
                        is-full-tablet">
                            <div class="columns is-multiline is-vcentered is-mobile" data-aos="fade-up"
                            data-aos-offset="300" data-aos-duration="1000"
                            data-aos-easing="ease-in-sine" data-aos-delay="100">
                                <div class="column
                                is-6 has-text-right
                                ">                                    
                                    <p class="title2 is-capitalized is-size-3-tablet is-size-5-mobile">{{ portofolio.pname }}</p>

                                    <p class="subtitle3 is-size-6-tablet is-size-7-mobile has-text-weight-bold mb-1">Putri {{ portofolio.panak_ke }} dari</p>
                                    <p class="subtitle3 is-size-6-tablet is-size-7-mobile  mt-1">Bapak {{ portofolio.pnama_ayah }}</p>
                                    <p class="subtitle3 is-size-6-tablet is-size-7-mobile mt-1">& Ibu {{ portofolio.pnama_ibu }}</p>

                                    <div v-if="portofolio.pinsta_link">
                                        <a :href="portofolio.pinsta_link" target="_blank"><font-awesome-icon class="icon" icon="fa-brands fa-4x fa-instagram" /></a>
                                    </div>
                                </div>
                                <div class="column
                                is-6">
                                    <figure class="image is-1by1">
                                        <img :src="portofolio.ppicture">
                                    </figure>
                                </div>
                            </div>
                        </div>

                        <div class="column
                        is-full-tablet
                        is-full-mobile">
                            <div class="columns is-multiline is-vcentered is-mobile" data-aos="fade-up"
                            data-aos-offset="300" data-aos-duration="1000"
                            data-aos-easing="ease-in-sine" data-aos-delay="100">
                                <div class="column
                                is-6
                                "> 
                                    <figure class="image is-1by1">
                                        <img :src="portofolio.lpicture">
                                    </figure>
                                </div>
                                <div class="column
                                is-6 has-text-left
                                ">
                                    <p class="title2 is-capitalized is-size-3-tablet is-size-5-mobile">{{ portofolio.lname }}</p>

                                    <p class="subtitle3 is-size-6-tablet is-size-7-mobile has-text-weight-bold mb-1">Putra {{ portofolio.lanak_ke }} dari</p>
                                    <p class="subtitle3 is-size-6-tablet is-size-7-mobile mt-1">Bapak {{ portofolio.lnama_ayah }}</p>
                                    <p class="subtitle3 is-size-6-tablet is-size-7-mobile mt-1">& Ibu {{ portofolio.lnama_ibu }}</p>
                                
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