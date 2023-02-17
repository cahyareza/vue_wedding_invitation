<template>
    <div v-if="acara.length != 0">
        <div :class="theme">
            <section class="hero is-medium" :style="{ 'background-image': 'url(' + multiimage[1] + ')' }" style="min-height: 300px; background-position: center; position: relative; background-attachment: fixed; background-size: cover;
                object-fit: cover;">
                <div class="custom-shape-divider-top-1676040590">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
                    </svg>
                </div>
                <div class="custom-shape-divider-bottom-1676040656">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
                    </svg>
                </div>
                <div class="section">
                    <div class="container">
                        <p class="title is-size-3-tablet is-size-3-mobile"> Save the Date</p>
                        <CountDown></CountDown>
                    </div>
                </div>

            </section>
            <section class="hero is-large">
                <div class="notification low-opacity-bg-image m-6" :style="{ 'background-image': 'url(' + multiimage[2] + ')' }" style="background-size: cover;background-position: center;  " data-aos="fade-up"
                data-aos-offset="300" data-aos-duration="1000"
                data-aos-easing="ease-in-sine" data-aos-delay="100">
                    <div v-for="(piece) in acara" :key="piece.id">
                        <div class="columns is-multiline">
                            <div class="column is-12">
                                <p class="title2 is-size-3-tablet is-capitalized is-size-3-mobile mb-3">{{ piece.nama_acara }}</p>
                                <p class="subtitle3 is-size-6-tablet is-size-6-mobile mb-1">{{ tanggal(piece.tanggal_acara) }}</p>
                                <div v-if="piece.waktu_selesai_acara">
                                    <p class="subtitle3 is-size-7-tablet is-size-7-mobile mt-1 mb-1"><font-awesome-icon icon="fa-solid fa-clock" /> pukul {{ waktu(piece.waktu_mulai_acara) }} - {{ waktu(piece.waktu_selesai_acara) }} {{ change_timezone(portofolio.timeZone) }}</p>
                                </div>
                                <div v-else>
                                    <p class="subtitle3 is-size-7-tablet is-size-7-mobile mt-1 mb-1"><font-awesome-icon icon="fa-solid fa-clock" /> pukul {{ waktu(piece.waktu_mulai_acara) }} - selesai {{ change_timezone(portofolio.timeZone) }}</p>
                                </div>
                                <p class="subtitle3 is-size-7 mt-1 mb-3"><font-awesome-icon icon="fa-solid fa-location-pin" /> {{ piece.tempat_acara }}</p>
                                <div v-if="piece.link_gmap_acara">
                                    <a class="button is-size-7 px-2 mb-2" :href="piece.link_gmap_acara" target="_blank">
                                        <font-awesome-icon icon="fa-solid fa-location-dot" />&nbsp;Google Map
                                    </a><br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <GuestBook></GuestBook>
                <GoToOurWedding :portofolio="portofolio"></GoToOurWedding>
            </section>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
import CountDown from '@/components/parts/timelines/CountDown.vue'
import GoToOurWedding from '@/components/parts/timelines/GoToOurWedding.vue'
import GuestBook from '@/components/bright/parts/timelines/GuestBook.vue'
import useMethod from '@/hooks/useMethod.js'

const {change_timezone, tanggal, waktu} = useMethod()


// GET PORTOFOLIO
defineProps({
  portofolio: { type: Object },
  theme: { type: Object },
  themeproduct: { type: Object },
  acara: { type: Object },
  multiimage: { type: Array },
  direction: { type: Object },
});
</script>

<style lang="scss" scoped>
@import "@/styles/component/rundown.scss";
</style>