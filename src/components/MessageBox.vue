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
                    <div class="columns mb-3">
                        <div class="column is-half-tablet is-offset-one-quarter-tablet">
                            <section class="section pt-4">
                                <div class="container">
                                    <div v-if="themeproduct.theme?.slug === 'theme-10'"> 
                                        <p class="title2 is-size-2-mobile is-size-1-tablet">
                                            guestbook
                                        </p>
                                        <p class="subtitle is-size-7">
                                            Leave your message here
                                        </p>
                                    </div>
                                    <div v-else> 
                                        <p class="subtitle2 is-uppercase is-size-3-mobile">
                                            Ucapan
                                        </p>
                                        <div v-if="themeproduct.theme?.line">
                                            <img class="filter mt-1" :src="themeproduct.theme?.line">
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <div v-if="themeproduct.theme?.slug === 'theme-1' || themeproduct.theme?.slug === 'theme-2' || themeproduct.theme?.slug === 'theme-3'
                                || themeproduct.theme?.slug === 'theme-4' || themeproduct.theme?.slug === 'theme-5' || themeproduct.theme?.slug === 'theme-6'
                                || themeproduct.theme?.slug === 'theme-7'">
                                <MessageForm></MessageForm>
                            </div>
                            <div v-else-if="themeproduct.theme?.slug === 'theme-8' || themeproduct.theme?.slug === 'theme-9' || themeproduct.theme?.slug === 'theme-11'"> 
                                <MessageFormCosmos></MessageFormCosmos>
                            </div>
                            <div v-else-if="themeproduct.theme?.slug === 'theme-10'"> 
                                <MessageFormBright></MessageFormBright>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import MessageForm from '@/components/parts/messagebox/MessageForm.vue'
import MessageFormCosmos from '@/components/cosmos/parts/messagebox/MessageForm.vue'
import MessageFormBright from '@/components/bright/parts/messagebox/MessageForm.vue'

import { defineProps } from 'vue'

// GET PORTOFOLIO
defineProps({
  theme: { type: Object },
  themeproduct: { type: Object },
});
</script>

<style lang="scss" scoped>
@import "@/styles/component/messagebox.scss";
</style>

