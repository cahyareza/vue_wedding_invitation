<template>
    <div v-if="portofolio.livestream">
        <div v-if="themeproduct.fitur === 'GOLD' || themeproduct.fitur === 'DIAMOND'">
            <div :class="theme">
                <div class="low-opacity-bg-image" :style="{ 'background-image': 'url(' + multiimagetheme[4] + ')' }">
                    <section class="hero is-medium">
                        <div class="hero-body">
                            <div class="section py-0 has-text-left">
                                <p class="subtitle3 is-uppercase is-size-2 mt-1 p-1">
                                    Live Streaming<br>
                                </p>
                                <div data-aos="flip-down" data-aos-duration="1000" data-aos-delay="300">
                                    <div v-if="portofolio.kata_live_streaming">
                                        <p class="subtitle2 is-size-6-tablet is-size-6-mobile mt-2 mb-3"> {{ portofolio.kata_live_streaming }} </p>
                                    </div>
                                    <div v-else>
                                        <p class="subtitle2 is-size-6-tablet is-size-6-mobile mt-2 mb-3"> Temui kami secara virtual untuk menyaksikan acara pernikahan kami </p>
                                    </div>
                                </div>
                                <br>
                                <br>
                                <br>
                                <br>
                                <p class="subtitle2 is-size-6 is-uppercase">{{ tanggal(portofolio.tanggal_countdown) }}</p>
                                <p class="subtitle2 is-size-6 is-uppercase">{{ waktu(portofolio.startTime) }} - {{ waktu(portofolio.endTime) }} {{ change_timezone(portofolio.timeZone) }}</p><br>
                                <a class="button is-size-6 px-2  mb-3" :href="portofolio.livestream" target="_blank">
                                    <font-awesome-icon icon="fa-solid fa-video" />&nbsp;Menuju Streaming
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { defineProps } from 'vue'
import useMethod from '@/hooks/useMethod.js'

const {tanggal, waktu, change_timezone} = useMethod()

// GET PORTOFOLIO
defineProps({
  portofolio: { type: Object },
  theme: { type: Object },
  themeproduct: { type: Object },
  multiimagetheme: { type: Array },
});
</script>

<style lang="scss" scoped>
@import "@/styles/component/livestream.scss";
</style>