<template>
    <div :class="theme">
        <div class="low-opacity-bg-image" :style="{ 'background-image': 'url(' + multiimage[0] + ')' }">
            <section class="hero is-fullheight">
                <div class="hero-body p-3">
                    <div class="container">
                        <section class="section is-paddingless">
                            <div class="columns is-multiline is-vcentered is-mobile is-gapless">
                                <div class="column
                                is-6 has-text-left
                                "> 
                                    <p class="title2 is-capitalized is-size-2-tablet is-size-2-mobile has-text-weight-bold">{{ portofolio.psurename }}</p>
                                    <p class="title2 is-capitalized is-size-6-tablet is-size-7-mobile has-text-weight-bold">{{ portofolio.pname }}</p>

                                    <p class="subtitle3 is-size-6-tablet is-size-7-mobile has-text-weight-bold mb-1">Putri {{ portofolio.panak_ke }} dari</p>
                                    <p class="subtitle3 is-size-6-tablet is-size-7-mobile has-text-weight-bold mt-1">Bapak {{ portofolio.pnama_ayah }} &</p>
                                    <p class="subtitle3 is-size-6-tablet is-size-7-mobile has-text-weight-bold mt-1">Ibu {{ portofolio.pnama_ibu }}</p>

                                    <div v-if="portofolio.pinsta_link">
                                        <a :href="portofolio.pinsta_link" target="_blank"><font-awesome-icon class="icon" icon="fa-brands fa-4x fa-instagram" /></a>
                                    </div>
                                </div>
                                <div class="column
                                is-6 has-text-right
                                ">
                                    <p class="title2 is-capitalized is-size-2-tablet is-size-2-mobile has-text-weight-bold">{{ portofolio.lsurename }}</p>
                                    <p class="title2 is-capitalized is-size-6-tablet has-text-weight-bold is-size-7-mobile">{{ portofolio.lname }}</p>

                                    <p class="subtitle3 is-size-6-tablet is-size-7-mobile has-text-weight-bold mb-1">Putra {{ portofolio.lanak_ke }} dari</p>
                                    <p class="subtitle3 is-size-6-tablet is-size-7-mobile has-text-weight-bold mt-1">Bapak {{ portofolio.lnama_ayah }} &</p>
                                    <p class="subtitle3 is-size-6-tablet is-size-7-mobile has-text-weight-bold mt-1">Ibu {{ portofolio.lnama_ibu }}</p>
                                
                                    <div v-if="portofolio.linsta_link">
                                        <a :href="portofolio.linsta_link" target="_blank"><font-awesome-icon class="icon" icon="fa-brands fa-4x fa-instagram" /></a>
                                    </div>
                                </div>
                            </div>
                        </section>
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