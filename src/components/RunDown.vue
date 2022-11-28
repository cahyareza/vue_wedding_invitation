<template>
    <div v-if="acara.length != 0">
        <div :class="theme">
            <section class="hero is-large">
                <div class="columns">
                    <div class="column is-half-tablet is-offset-one-quarter-tablet">
                        <section class="section is-paddingless">
                            <div class="container">
                                <div class="notification m-5">
                                    <img class="filter center mt-1 mb-1" :src="themeproduct.theme?.rundown_fitur">
                                    <div v-for="piece in acara" :key="piece.id">
                                        <div class="columns is-multiline">
                                            <div class="column is-12">
                                                <p class="title2 is-size-4 mb-3">{{ piece.nama_acara }}</p>

                                                <p class="subtitle2 is-size-7 has-text-weight-bold mb-1">{{ tanggal(piece.tanggal_acara) }}</p>
                                                <p class="subtitle2 is-size-7 mt-1 mb-1"><font-awesome-icon icon="fa-solid fa-clock" /> pukul {{ waktu(piece.waktu_mulai_acara) }} - {{ waktu(piece.waktu_selesai_acara) }} {{ portofolio.timeZone }}</p>
                                                <p class="subtitle2 is-size-7 mt-1 mb-3"><font-awesome-icon icon="fa-solid fa-location-pin" /> {{ piece.tempat_acara }}</p>

                                                <a class="button is-rounded is-size-7 px-2 mb-2" :href="piece.link_gmap_acara">
                                                    <font-awesome-icon icon="fa-solid fa-location-dot" />&nbsp;Buka di Google Map
                                                </a><br>

                                                <img class="filter mt-3" :src="themeproduct.theme?.space">
                                            </div>
                                        </div>
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
import { inject, computed, onMounted, onBeforeMount } from 'vue'
import moment from 'moment';

// LOAD STATE
const store = inject('store');

// PORTOFOLIO
const portofolio = computed(() => store.state.portofolio);

// ACARA
const acara = computed(() => store.state.acara);

// THEME
const theme = computed(() => store.state.theme); 
const themeproduct = computed(() => store.state.themeproduct); 

// METHOD
const tanggal = (value) => {
    return moment(value).locale('id').format('dddd, DD MMMM YYYY');
}
const waktu = (value) => {
    return moment(value, "HH:mm:ss").format("HH:mm");
}

// LIFECYCLE
onBeforeMount(() => {
    store.actions.getTheme();
    store.actions.getThemeProduct();
    store.actions.getAcara();
});

onMounted(() => {  
    store.actions.getPortofolio();
});
</script>

<style lang="scss" scoped>
@import "../styles/component/rundown.scss";
// @import "../styles/global.scss";
</style>