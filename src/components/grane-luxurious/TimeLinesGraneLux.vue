<template>
    <div :class="theme">
        <section class="hero is-large">
            <div class="section py-0">
                <div class="columns is-multiline is-vcentered p-3">
                    <div class="column
                    is-6-tablet
                    is-12-mobile">
                        <figure class="image is-3by2">
                            <img :src="multiimagetheme[5]">
                        </figure>
                    </div>
                    <div class="column
                    is-6-tablet
                    is-12-mobile">
                        <GuestBook></GuestBook>
                    </div>
                </div>               
            </div>
        </section>
    </div>
</template>


<script setup>
import GuestBook from '@/components/grane-luxurious/timelines/GuestBook.vue'

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
</style>