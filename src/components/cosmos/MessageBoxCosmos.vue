<template>
    <div v-if="themeproduct.fitur === 'PLATINUM' || themeproduct.fitur === 'GOLD'">
        <div :class="theme">
            <section class="hero is-large">
                <!-- ANIMATED IMAGE -->
                <div class="wrapper">
                    <div class="box-animated">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <!-- ANIMATED IMAGE END -->
                <div class="section py-0">
                        <section class="section pt-4">
                            <div class="container">
                                <p class="subtitle2 is-uppercase is-size-5">
                                    Ucapan
                                </p>
                                <div v-if="themeproduct.theme?.line">
                                    <img class="filter mt-1" :src="themeproduct.theme?.line">
                                </div>
                            </div>
                        </section>
                        <MessageForm></MessageForm>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import MessageForm from '@/components/cosmos/parts/messagebox/MessageForm.vue'

import { defineProps } from 'vue'

// GET PORTOFOLIO
defineProps({
  theme: { type: Object },
  themeproduct: { type: Object },
});
</script>

<style lang="scss" scoped>
@import "@/styles/component/messagebox.scss";
// @import "../styles/global.scss";
</style>

