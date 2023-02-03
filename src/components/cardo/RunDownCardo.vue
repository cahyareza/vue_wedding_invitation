<template>
    <div v-if="acara.length != 0">
        <div :class="theme">
            <section class="hero is-large">
                <div class="section py-0">
                    <div class="container">
                        <div class="columns is-multiline is-vcentered">
                            <div class="column
                            is-7-tablet
                            is-12-mobile">
                                <div class="notification m-5" data-aos="zoom-out-down" data-aos-duration="1000">
                                    <div v-for="piece in acara" :key="piece.id">
                                        <div class="columns is-multiline">
                                            <div class="column is-12">
                                                <p class="title2 is-size-3-tablet is-size-3-mobile mb-3">{{ piece.nama_acara }}</p>

                                                <p class="subtitle3 is-size-6-tablet is-size-6-mobile mb-1">{{ tanggal(piece.tanggal_acara) }}</p>
                                                <div v-if="piece.waktu_selesai_acara">
                                                    <p class="subtitle3 is-size-7-tablet is-size-7-mobile mt-1 mb-1"><font-awesome-icon icon="fa-solid fa-clock" /> pukul {{ waktu(piece.waktu_mulai_acara) }} - {{ waktu(piece.waktu_selesai_acara) }} {{ change_timezone(portofolio.timeZone) }}</p>
                                                </div>
                                                <div v-else>
                                                    <p class="subtitle3 is-size-7-tablet is-size-7-mobile mt-1 mb-1"><font-awesome-icon icon="fa-solid fa-clock" /> pukul {{ waktu(piece.waktu_mulai_acara) }} - selesai {{ change_timezone(portofolio.timeZone) }}</p>
                                                </div>
                                                <p class="subtitle3 is-size-7 mt-1 mb-3"><font-awesome-icon icon="fa-solid fa-location-pin" /> {{ piece.tempat_acara }}</p>
                                                <div v-if="piece.link_gmap_acara">
                                                    <a class="button is-rounded is-size-7 px-2 mb-2" :href="piece.link_gmap_acara" target="_blank">
                                                        <font-awesome-icon icon="fa-solid fa-location-dot" />&nbsp;Google Map
                                                    </a><br>
                                                </div>

                                                <img class="filter mt-3" :src="themeproduct.theme?.space">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="column
                            is-5-tablet
                            is-12-mobile">
                                <GoToOurWedding :portofolio="portofolio"></GoToOurWedding>
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
import moment from 'moment';
import GoToOurWedding from '@/components/parts/timelines/GoToOurWedding.vue'


// GET PORTOFOLIO
defineProps({
  portofolio: { type: Object },
  theme: { type: Object },
  themeproduct: { type: Object },
  acara: { type: Object },
});

// METHOD
const tanggal = (value) => {
    return moment(value).locale('id').format('dddd, DD MMMM YYYY');
}
const waktu = (value) => {
    return moment(value, "HH:mm:ss").format("HH:mm");
}

const change_timezone = (value) => {
    if (value == 'Asia/Jakarta') {
        return "WIB"
    } else if (value == 'Asia/Makassar') {
        return "WITA"
    } else if (value == 'Asia/Jayapura'){
        return "WIT"
    } else {
        return value
    }
}
</script>

<style lang="scss" scoped>
@import "../../styles/component/rundown.scss";
// @import "../styles/global.scss";
</style>