<template>
    <div v-if="acara.length != 0">
        <div :class="theme">
            <div class="low-opacity-bg-image" :style="{ 'background-image': 'url(' + themeproduct.theme?.background_4 + ')' }">
                <section class="hero is-large">
                    <div class="section py-0">
                        <div class="container">
                            <div v-if="themeproduct.theme?.rundown_fitur">
                                <img class="filter center mt-5 mb-0" :src="themeproduct.theme?.rundown_fitur">
                            </div>
                            <div v-if="themeproduct.theme?.ornament_3">
                                <img class="ornament center mt-5 mb-0" :src="themeproduct.theme?.ornament_3">
                            </div>
                            <div class="notification m-5" data-aos="fade-down" data-aos-offset="300"
                                data-aos-easing="ease-in-sine" data-aos-duration="1000">
                                <div v-for="piece in acara" :key="piece.id">
                                    <div class="columns is-multiline">
                                        <div class="column is-12">
                                            <p class="title2 is-size-3-tablet is-size-3-mobile mb-3">{{ piece.nama_acara }}</p>

                                            <p class="subtitle3 is-size-5-tablet is-size-6-mobile has-text-weight-bold mb-1">{{ tanggal(piece.tanggal_acara) }}</p>
                                            <div v-if="piece.waktu_selesai_acara">
                                                <p class="subtitle3 is-size-6-tablet is-size-7-mobile mt-1 mb-1"><font-awesome-icon icon="fa-solid fa-clock" /> pukul {{ waktu(piece.waktu_mulai_acara) }} - {{ waktu(piece.waktu_selesai_acara) }} {{ portofolio.timeZone }}</p>
                                            </div>
                                            <div v-else>
                                                <p class="subtitle3 is-size-6-tablet is-size-7-mobile mt-1 mb-1"><font-awesome-icon icon="fa-solid fa-clock" /> pukul {{ waktu(piece.waktu_mulai_acara) }} - selesai {{ portofolio.timeZone }}</p>
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
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
import useMethod from '@/hooks/useMethod.js'

const {tanggal, waktu} = useMethod()

// GET PORTOFOLIO
defineProps({
  portofolio: { type: Object },
  theme: { type: Object },
  themeproduct: { type: Object },
  acara: { type: Object },
});
</script>

<style lang="scss" scoped>
@import "../styles/component/rundown.scss";
</style>