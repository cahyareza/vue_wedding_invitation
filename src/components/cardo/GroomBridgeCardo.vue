<template>
    <div :class="theme">
        <section class="hero">
            <div class="section py-5">
                <div class="container">
                    <div class="columns is-vcentered is-multiline">
                        <div class="column 
                        is-full-mobile
                        is-4-tablets
                        ">
                           <p class="subtitle2 is-size-2-tablet is-size-3-mobile has-text-weight-bold">
                                The Bride<br>
                            </p>
                        </div>
                        <div class="column 
                        is-full-mobile
                        is-8-tablets">

                            <div class="columns is-multiline">
                                <div class="card p-4">
                                    <div class="column
                                    is-full
                                    ">
                                        <div class="columns is-mobile">
                                            <div class="column
                                            is-6 is-paddingless is-marginless
                                            ">
                                                <figure class="image is-3by4">
                                                    <img :src="portofolio.ppicture">
                                                </figure>
                                            </div>
                                            <div class="column
                                            is-6
                                            ">
                                                <div class="columns is-multiline">
                                                    <div class="column
                                                    is-full is-paddingless is-marginless
                                                    ">
                                                        <figure class="image is-3by2">
                                                            <img :src="multiimage[2]">
                                                        </figure>
                                                    </div>
                                                    <div class="column
                                                    is-full is-paddingless is-marginless
                                                    ">
                                                        <figure class="image is-3by2">
                                                            <img :src="multiimage[1]">
                                                        </figure>
                                                    </div>
                                                </div>
                                            </div>                                       
                                        </div>
                                    </div>
                                    
                                    <div class="column
                                    is-full has-text-left
                                    ">                                    
                                        <p class="title2 is-capitalized is-size-3-tablet is-size-4-mobile mt-3 mb-4">{{ portofolio.pname }}</p>

                                        <p class="subtitle3 is-size-6 has-text-weight-bold mb-1">Putri {{ portofolio.panak_ke }} dari</p>
                                        <p class="subtitle3 is-size-6 mt-1">Bapak {{ portofolio.pnama_ayah }} & Ibu {{ portofolio.pnama_ibu }}</p>

                                        <div v-if="portofolio.pinsta_link">
                                            <a :href="portofolio.pinsta_link" target="_blank"><font-awesome-icon class="icon" icon="fa-brands fa-4x fa-instagram" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="columns is-multiline is-vcentered is-mobile mt-4">
                        <div class="column 
                        is-full-mobile
                        is-4-tablet
                        ">
                            <p class="subtitle2 is-size-2-tablet is-size-3-mobile has-text-weight-bold">
                                The Groom<br>
                            </p>
                        </div>
                        <div class="column 
                        is-8-tablet
                        is-full-mobile">
                            <div class="columns is-vcentered is-mobile">
                                <div class="column
                                is-6-tablet
                                is-6-mobile is-paddingless">
                                    <div class="card p-1">
                                        <figure class="image is-3by4">
                                            <img :src="portofolio.lpicture">
                                        </figure>
                                    </div>
                                </div>
                                <div class="column
                                is-6-tablet
                                is-6-mobile has-text-left">
                                    <p class="title2 is-capitalized is-size-3-tablet is-size-4-mobile mt-3 mb-4">{{ portofolio.lname }}</p>

                                    <p class="subtitle3 is-size-6 has-text-weight-bold mb-1">Putra {{ portofolio.lanak_ke }} dari</p>
                                    <p class="subtitle3 is-size-6 mt-1">Bapak {{ portofolio.lnama_ayah }} & Ibu {{ portofolio.lnama_ibu }}</p>
                                
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