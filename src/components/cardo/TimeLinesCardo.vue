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
                                <img :src="multiimage[0]">
                            </figure>
                        </div>
                        <div class="column
                        is-6-tablet
                        is-12-mobile">
                            <p class="subtitle-2 is-uppercase is-size-4-tablet is-size-5-mobile mt-3">
                                {{ tanggal(portofolio.tanggal_countdown) }}
                            </p>

                            <CountDown></CountDown>

                            <AddtoCalender></AddtoCalender>

                            <GuestBook></GuestBook>
                        </div>
                    </div>
                </div>
                
                <div class="container px-5">
                    
                </div>            
            </div>
        </section>
    </div>
</template>


<script setup>

import CountDown from '@/components/parts/timelines/CountDown.vue'
import GuestBook from '@/components/parts/timelines/GuestBook.vue'
import AddtoCalender from '@/components/parts/timelines/AddtoCalender.vue'
import useMethod from '@/hooks/useMethod.js'

const {tanggal} = useMethod()

import { defineProps } from 'vue'

// GET PORTOFOLIO
defineProps({
  portofolio: { type: Object },
  theme: { type: Object },
  themeproduct: { type: Object },
  multiimage: { type: Array },
});
</script>

<style lang="scss" scoped>
@import "@/styles/component/timelines.scss";
</style>