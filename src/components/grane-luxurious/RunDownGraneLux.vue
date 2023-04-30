<template>
    <div v-if="acara.length != 0">
        <div :class="theme">
            <section class="hero is-large">
                <div class="section">
                    <div class="columns is-multiline is-vcentered has-text-centered">
                        <div class="column
                        is-6-tablet
                        is-12-mobile">
                            <figure class="image is-3by2">
                                <img :src="multiimage[0]">
                            </figure>
                        </div>
                        <div class="column
                        is-6-tablet
                        is-12-mobile">
                            <!-- <div class="notification is-marginless" data-aos="zoom-out-down" data-aos-duration="1000"> -->
                                <div class="columns is-multiline has-text-centered">
                                    <div v-for="(piece) in acara" :key="piece.id" class="column is-one-half has-text-center">
                                        <p class="title2 is-size-3-tablet is-capitalized is-size-3-mobile mb-3">{{ piece.nama_acara }}</p>
                                        <p class="subtitle3 is-size-6-tablet is-size-6-mobile mb-1">{{ tanggal(piece.tanggal_acara) }}</p>
                                        <div v-if="piece.waktu_selesai_acara">
                                            <p class="subtitle3 is-size-7-tablet is-size-7-mobile mt-1 mb-1">pukul {{ waktu(piece.waktu_mulai_acara) }} - {{ waktu(piece.waktu_selesai_acara) }} {{ change_timezone(portofolio.timeZone) }}</p>
                                        </div>
                                        <div v-else>
                                            <p class="subtitle3 is-size-7-tablet is-size-7-mobile mt-1 mb-1">pukul {{ waktu(piece.waktu_mulai_acara) }} - selesai {{ change_timezone(portofolio.timeZone) }}</p>
                                        </div>
                                        <p class="subtitle3 is-size-7 mt-3 mb-3">{{ piece.tempat_acara }}</p>
                                        <div v-if="piece.link_gmap_acara">
                                            <a class="button is-size-7 px-2 mb-2" :href="piece.link_gmap_acara" target="_blank">
                                                Google Map
                                            </a><br>
                                        </div>
                                    </div>
                                    <div class="column is-12">
                                        <AddtoCalender></AddtoCalender>
                                    </div>
                                </div>
                            <!-- </div> -->
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
import useMethod from '@/hooks/useMethod.js'
import AddtoCalender from '@/components/parts/timelines/AddtoCalender.vue'

const {tanggal, waktu, change_timezone} = useMethod()

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