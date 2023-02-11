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
                <div class="section py-3">
                        <section class="section pt-4">
                            <div class="container">
                                <p class="title2 is-size-2-mobile is-size-1-tablet">
                                    guestbook
                                </p>
                                <p class="subtitle is-size-7">
                                    Leave your message here
                                </p>
                            </div>
                        </section>
                        <MessageForm></MessageForm>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import MessageForm from '@/components/bright/parts/messagebox/MessageForm.vue'

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

