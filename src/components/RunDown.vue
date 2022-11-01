<template>
    <div :class="theme">
        <section class="hero is-large px-6">
            <div class="columns is-multiline mb-1">
                <img class="mt-4" src="../assets/contents/wedding_ring.png" style="width: 150px; height: 150px;">
            
                <div class="notification mb-3">
                    <div class="column is-full">
                        <p class="title2 is-size-4 mb-4">Akad Nikah</p>

                        <p class="subtitle2 is-size-6 has-text-weight-bold mb-1">{{ portofolio.tanggal_akad }}</p>
                        <p class="subtitle2 is-size-7 mt-1 mb-1"><font-awesome-icon icon="fa-solid fa-clock" /> pukul {{ portofolio.waktu_akad }}- selesai</p>
                        <p class="subtitle2 is-size-7 mt-1 mb-3"><font-awesome-icon icon="fa-solid fa-location-pin" /> {{ portofolio.tempat_akad }}</p>

                        <a class="button is-rounded is-size-7 px-2 mb-2" :href="portofolio.link_gmap_akad">
                            <font-awesome-icon icon="fa-solid fa-location-dot" />&nbsp;Buka di Google Map
                        </a>
                    </div>
                    <img class="" src="../assets/contents/line_space.png" style="width: 150px; height: 25px;">
                    <div class="column is-full">
                        <p class="title2 is-size-4 mb-4">Resepsi</p>

                        <p class="subtitle2 is-size-6 has-text-weight-bold mb-1">{{ portofolio.tanggal_resepsi }}</p>
                        <p class="subtitle2 is-size-7 mt-1 mb-1"><font-awesome-icon icon="fa-solid fa-clock" /> pukul {{ portofolio.waktu_resepsi }} - {{ portofolio.waktu_selesai_resepsi }}</p>
                        <p class="subtitle2 is-size-7 mt-1 mb-3"><font-awesome-icon icon="fa-solid fa-location-pin" /> {{ portofolio.tempat_resepsi }}</p>

                        <a class="button is-rounded is-size-7 px-2 mb-2" :href="portofolio.link_gmap_resepsi">
                            <font-awesome-icon icon="fa-solid fa-location-dot" />&nbsp;Buka di Google Map
                        </a>

                    </div>
                    <img class="" src="../assets/contents/line_space.png" style="width: 150px; height: 25px;">
                    <div class="column is-full">
                        <p class="title2 is-size-4 mb-4">Unduh Mantu</p>

                        <p class="subtitle2 is-size-6 has-text-weight-bold mb-1">{{ portofolio.tanggal_unduhmantu }}</p>
                        <p class="subtitle2 is-size-7 mt-1 mb-1"><font-awesome-icon icon="fa-solid fa-clock" /> pukul {{ portofolio.waktu_unduhmantu }} - selesai</p>
                        <p class="subtitle2 is-size-7 mt-1 mb-3"><font-awesome-icon icon="fa-solid fa-location-pin" /> {{ portofolio.tempat_unduhmantu }}</p>

                        <a class="button is-rounded is-size-7 px-2 mb-2" :href="portofolio.link_gmap_unduh_mantu">
                            <font-awesome-icon icon="fa-solid fa-location-dot" />&nbsp;Buka di Google Map
                        </a>
                    </div>
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
@import "../styles/component/rundown.scss";
// @import "../styles/global.scss";
</style>