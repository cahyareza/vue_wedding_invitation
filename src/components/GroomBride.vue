<template>
    <div :class="theme">
        <section class="hero is-info is-fullheight">
            <div class="columns">
                <div class="column is-half-tablet is-offset-one-quarter-tablet">
                    <section class="section pt-4">
                        <div class="container">
                            <p class="subtitle is-uppercase is-size-5 mt-1 p-1">
                                Pengantin<br>
                                <img class="mt-1" src="../assets/contents/line.png" style="width: 180px; height: 30px;">
                            </p>

                            <div class="columns is-multiline is-centered">
                                <div class="column is-full">
                                    <figure class="image is-inline-block mb-4" style="height:180px; width: 180px;">
                                        <img class="mb-3" :src="portofolio.ppicture" style="height:180px; width: 180px; position: absolute;">
                                        <div class="sprocket-mosaic-image-container"></div>
                                    </figure> <br>

                                    <a :href="portofolio.pinsta_link"><font-awesome-icon icon="fa-brands fa-4x fa-instagram" /></a>

                                    <!-- <p class="title mt-5 mb-6" v-for="couple in couples.perempuan" :key="couple.id">{{ couple }}</p> -->
                                    <p class="title is-size-3 mt-3 mb-6">{{ portofolio.pname }}</p>

                                    <p class="subtitle is-size-6 has-text-weight-bold mb-1">Putri {{ portofolio.panak_ke }} dari</p>
                                    <p class="subtitle is-size-6 mt-1">Bapak {{ portofolio.pnama_ayah }} & Ibu {{ portofolio.pnama_ibu }}</p>

                                    <p class="subtitle is-size-5 has-text-weight-bold mt-3">&</p>


                                </div>
                                <div class="column is-full mt-4">
                                    <figure class="image is-inline-block mb-4" style="height:180px; width: 180px;">
                                        <img class="mb-3" :src="portofolio.lpicture" style="height:180px; width: 180px; position: absolute;">
                                        <div class="sprocket-mosaic-image-container"></div>
                                    </figure> <br>

                                    <a :href="portofolio.linsta_link"><font-awesome-icon icon="fa-brands fa-4x fa-instagram" /></a>

                                    <p class="title is-size-3 mt-5 mb-6">{{ portofolio.lname }}</p>

                                    <p class="subtitle is-size-6 has-text-weight-bold mb-1">Putra {{ portofolio.lanak_ke }} dari</p>
                                    <p class="subtitle is-size-6 mt-1">Bapak {{ portofolio.lnama_ayah }} & Ibu {{ portofolio.lnama_ibu }}</p>
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
import { inject, computed, onMounted, onBeforeMount } from 'vue'

// LOAD STATE
const store = inject('store');

// PORTOFOLIO
const portofolio = computed(() => store.state.portofolio);

// THEME
const theme = computed(() => store.state.theme); 

// LIFECYCLE
onBeforeMount(() => {
    store.actions.getTheme();
});

onMounted(() => {  
    store.actions.getPortofolio();
});

</script>

<style lang="scss" scoped>
@import "../styles/component/groombride.scss";
// @import "../styles/global.scss";
</style>