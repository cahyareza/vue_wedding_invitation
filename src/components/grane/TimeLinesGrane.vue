<template>
    <div :class="theme">
        <section class="hero is-large">
            <div class="section py-0">
                <div class="container">
                    <div class="columns is-multiline is-vcentered p-3">
                        <div class="column
                        is-6-tablet
                        is-12-mobile p-5">
                            <figure class="image is-4by5">
                                <img :src="multiimagetheme[5]">
                            </figure>
                        </div>
                        <div class="column
                        is-6-tablet
                        is-12-mobile">
                            <CountDown></CountDown>

                            <AddtoCalender></AddtoCalender>
                        </div>
                    </div>
                </div>
                          
            </div>
        </section>
    </div>
</template>


<script setup>

import CountDown from '@/components/parts/timelines/CountDown.vue'
import AddtoCalender from '@/components/parts/timelines/AddtoCalender.vue'

import { defineProps } from 'vue'

// GET PORTOFOLIO
defineProps({
  portofolio: { type: Object },
  theme: { type: Object },
  themeproduct: { type: Object },
  multiimagetheme: { type: Array },
});
</script>

<style lang="scss" scoped>
@import "@/styles/component/timelines.scss";
// @import "../styles/global.scss";
</style>