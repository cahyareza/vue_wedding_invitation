<template>
    <section class="hero is-info is-fullheight">
        <div class="columns">
            <div class="column is-half-tablet is-offset-one-quarter-tablet">
                <section class="section pt-4">
                    <div class="container">
                        <p class="title mt-5 p-6">Pengantin</p>

                        <div class="columns is-multiline is-centered mt-1">
                            <div class="column is-full">
                                <figure class="image is-inline-block" style="height:180px; width: 180px;">
                                    <img class="is-rounded mb-3" :src="portofolio.ppicture">
                                    <a :href="portofolio.pinsta_link"><font-awesome-icon icon="fa-brands fa-4x fa-instagram" /></a>
                                </figure>

                                <!-- <p class="title mt-5 mb-6" v-for="couple in couples.perempuan" :key="couple.id">{{ couple }}</p> -->
                                <p class="title mt-5 mb-6">{{ portofolio.pname }}</p>

                                <p class="subtitle is-size-6 has-text-weight-bold mb-1">Putri {{ portofolio.panak_ke }} dari</p>
                                <p class="subtitle is-size-6 mt-1">Bapak {{ portofolio.pnama_ayah }} & Ibu {{ portofolio.pnama_ibu }}</p>

                                <p class="subtitle is-size-5 has-text-weight-bold mt-3">&</p>


                            </div>
                            <div class="column is-full mt-4">
                                <figure class="image is-inline-block" style="height:180px; width: 180px;">
                                    <img class="is-rounded mb-3" :src="portofolio.lpicture">
                                    <a :href="portofolio.linsta_link"><font-awesome-icon icon="fa-brands fa-4x fa-instagram" /></a>
                                </figure>

                                <p class="title mt-5 mb-6">{{ portofolio.lname }}</p>

                                <p class="subtitle is-size-6 has-text-weight-bold mb-1">Putra {{ portofolio.lanak_ke }} dari</p>
                                <p class="subtitle is-size-6 mt-1">Bapak {{ portofolio.lnama_ayah }} & Ibu {{ portofolio.lnama_ibu }}</p>
                            </div>
                        </div>


                    </div>
                </section>
            </div>
        </div>

    </section>
</template>


<script setup>
import { inject, computed, onMounted } from 'vue'

// PORTOFOLIO

const store = inject('store');

const portofolio = computed(() => store.state.portofolio);

onMounted(() => {  
    store.actions.getPortofolio();
});

// const store = inject('store');

// const couples = computed(() => store.state.couples);

// store.actions.getCouples();
</script>