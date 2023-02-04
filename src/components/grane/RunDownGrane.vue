<template>
    <div v-if="acara.length != 0">
        <div :class="theme">
            <figure class="image is-3by2">
                <img :src="multiimage[0]">
            </figure>
            <section class="hero is-large">
                <div class="box m-4">
                    <p class="subtitle2 is-size-5-tablet is-size-6-mobile mb-1">Kepada Yth.</p>
                    <p class="subtitle2 is-size-5-tablet is-size-6-mobile has-text-weight-bold mt-1">{{ direction }}</p>
                    <p class="subtitle2 is-size-4-tablet is-size-5-mobile mt-2">Salam Sejahtera</p>
                    <p class="subtitle2 is-size-5-tablet is-size-6-mobile mt-2 mb-5">
                        Atas Karunia Tuhan Yang Maha Esa, perkenankanlah kami menyampaikan kabar bahagia kepada Bapak/Ibu/Saudara/i mengenai pernikahan kami yang akan dilaksanakan pada:
                    </p>
                    <div class="container">
                        <div class="columns is-multiline is-vcentered">
                            <div class="column
                            is-7-tablet
                            is-12-mobile">
                                <!-- <div class="notification is-marginless" data-aos="zoom-out-down" data-aos-duration="1000"> -->
                                    <div class="columns is-multiline">
                                        <div v-for="(piece, index) in acara" :key="piece.id">
                                            <div class="notification low-opacity-bg-image mb-4" :style="{ 'background-image': 'url(' + multiimage[index+1] + ')' }" style="background-size: cover;background-position: center;  " data-aos="fade-up"
                                            data-aos-offset="300" data-aos-duration="1000"
                                            data-aos-easing="ease-in-sine" data-aos-delay="100">
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
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <!-- </div> -->
                            </div>
                            <div class="column
                            is-5-tablet
                            is-12-mobile">
                                <GoToOurWedding :portofolio="portofolio"></GoToOurWedding>

                                <GuestBook></GuestBook>
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
import GuestBook from '@/components/parts/timelines/GuestBook.vue'


// GET PORTOFOLIO
defineProps({
  portofolio: { type: Object },
  theme: { type: Object },
  themeproduct: { type: Object },
  acara: { type: Object },
  multiimage: { type: Array },
  direction: { type: Object },
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