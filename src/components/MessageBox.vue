<template>
    <div v-if="themeproduct.fitur === 'platinum' || themeproduct.fitur === 'gold'">
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
                <div class="columns">
                    <div class="column is-half-tablet is-offset-one-quarter-tablet">
                        <section class="section pt-4">
                            <div class="container">
                                <p class="subtitle2 is-uppercase is-size-5">
                                    Ucapan<br>
                                    <img class="filter mt-1" :src="themeproduct.theme?.line">
                                </p>
                            </div>
                        </section>
                        <MessageForm></MessageForm>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import MessageForm from '@/components/parts/messagebox/MessageForm.vue'

import { defineProps } from 'vue'

// GET PORTOFOLIO
defineProps({
  theme: { type: Object },
  themeproduct: { type: Object },
});
</script>

<style lang="scss" scoped>
@import "../styles/component/messagebox.scss";
// @import "../styles/global.scss";
</style>

