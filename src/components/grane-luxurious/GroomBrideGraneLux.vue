<template>
    <div :class="theme">
        <section class="hero">
            <div class="section py-5">
                <div class="container">
                    <div class="columns is-multiline is-vcentered is-mobile mt-4 mb-6">
                        <div class="column 
                        is-8-tablet
                        is-full-mobile">
                            <div class="columns is-vcentered is-mobile is-multiline">
                                <div class="column
                                is-6-tablet
                                is-6-mobile is-paddingless">
                                    <p class="subtitle2 is-size-2-tablet is-size-3-mobile has-text-weight-bold">
                                        The Groom<br>
                                    </p>
                                    <!-- <div class="card p-1"> -->
                                        <figure class="image is-3by4">
                                            <img :src="portofolio.lpicture">
                                        </figure>
                                    <!-- </div> -->
                                </div>
                                <div class="column
                                    is-6-tablet
                                    is-6-mobile">
                                    <div class="columns is-vcentered is-mobile is-paddingless">
                                        <div class="column
                                        is-12-tablet
                                        is-12-mobile">
                                            <hr>
                                        </div>
                                    </div>
                                    <div class="columns is-vcentered is-mobile is-hidden-mobile">
                                        <div class="column
                                        is-12-tablet
                                        is-12-mobile has-text-left">
                                            <p class="title2 is-capitalized is-size-3-tablet is-size-4-mobile mt-3 mb-4">{{ portofolio.lname }}</p>

                                            <p class="subtitle3 is-size-6 has-text-weight-bold mb-1">Putra {{ portofolio.lanak_ke }} dari</p>
                                            <p class="subtitle3 is-size-6 mt-1 mb-4">Bapak {{ portofolio.lnama_ayah }} & Ibu {{ portofolio.lnama_ibu }}</p>
                                        
                                            <div v-if="portofolio.linsta_link">
                                                <a class="subtitle3 mt-4" :href="portofolio.linsta_link" target="_blank">INSTAGRAM <font-awesome-icon :icon="['fas', 'circle-chevron-right']" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="column
                                is-12-tablet
                                is-12-mobile has-text-left is-hidden-tablet">
                                    <p class="title2 is-capitalized is-size-3-tablet is-size-4-mobile mt-3 mb-4">{{ portofolio.lname }}</p>

                                    <p class="subtitle3 is-size-6 has-text-weight-bold mb-1">Putra {{ portofolio.lanak_ke }} dari</p>
                                    <p class="subtitle3 is-size-6 mt-1 mb-4">Bapak {{ portofolio.lnama_ayah }} & Ibu {{ portofolio.lnama_ibu }}</p>
                                
                                    <div v-if="portofolio.linsta_link">
                                        <a class="subtitle3 mt-4" :href="portofolio.linsta_link" target="_blank">INSTAGRAM <font-awesome-icon :icon="['fas', 'circle-chevron-right']" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="columns is-multiline is-mobile mt-6 is-vcentered mb-6">
                        <div class="column
                            is-3-tablet is-offset-5-tablet
                            is-6-mobile">
                            <p class="subtitle3 is-size-6 is-uppercase">{{ tanggal(portofolio.tanggal_countdown) }}</p>
                        </div>
                        <div class="column
                        is-4-tablet
                        is-6-mobile is-paddingless">
                            <div class="card p-1">
                                <figure class="image is-4by5">
                                    <img :src="multiimage[3]">
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div class="columns is-vcentered is-multiline mt-6">
                        <div class="column 
                        is-full-mobile
                        is-4-tablets is-hidden-tablet
                        ">
                           <p class="subtitle2 is-size-2-tablet is-size-3-mobile has-text-weight-bold">
                                The Bride<br>
                            </p>
                        </div>
                        <div class="column 
                        is-full-mobile
                        is-8-tablets">

                            <div class="columns is-multiline is-vcentered">
                                <!-- <div class="card p-4"> -->
                                    <div class="column
                                    is-3-tablet is-hidden-mobile
                                    ">
                                        <p class="subtitle2 is-size-2-tablet is-size-3-mobile has-text-weight-bold" style="transform: rotate(-90deg);">
                                            The Bride<br>
                                        </p>
                                    </div>
                                    <div class="column
                                    is-full-mobile
                                    is-9-tablet
                                    ">
                                        <div class="columns is-mobile is-multiline">
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
                                            <div class="column
                                            is-hidden-mobile
                                            is-full-tablet has-text-left
                                            ">                                    
                                                <p class="title2 is-capitalized is-size-3-tablet is-size-4-mobile mt-3 mb-4">{{ portofolio.pname }}</p>

                                                <p class="subtitle3 is-size-6 has-text-weight-bold mb-1">Putri {{ portofolio.panak_ke }} dari</p>
                                                <p class="subtitle3 is-size-6 mt-1 mb-4">Bapak {{ portofolio.pnama_ayah }} & Ibu {{ portofolio.pnama_ibu }}</p>

                                                <div v-if="portofolio.pinsta_link">
                                                    <a class="subtitle3 mt-4" :href="portofolio.pinsta_link" target="_blank">INSTAGRAM <font-awesome-icon :icon="['fas', 'circle-chevron-right']" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="column
                                    is-full-mobile
                                    is-hidden-tablet has-text-left
                                    ">                                    
                                        <p class="title2 is-capitalized is-size-3-tablet is-size-4-mobile mt-3 mb-4">{{ portofolio.pname }}</p>

                                        <p class="subtitle3 is-size-6 has-text-weight-bold mb-1">Putri {{ portofolio.panak_ke }} dari</p>
                                        <p class="subtitle3 is-size-6 mt-1 mb-4">Bapak {{ portofolio.pnama_ayah }} & Ibu {{ portofolio.pnama_ibu }}</p>

                                        <div v-if="portofolio.pinsta_link">
                                            <a class="subtitle3 mt-4" :href="portofolio.pinsta_link" target="_blank">INSTAGRAM <font-awesome-icon :icon="['fas', 'circle-chevron-right']" /></a>
                                        </div>
                                    </div>
                                <!-- </div> -->
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
import useMethod from '@/hooks/useMethod.js'
const {tanggal} = useMethod()

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