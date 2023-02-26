<template>
    <div :class="theme">
        <div class="low-opacity-bg-image" :style="{ 'background-image': 'url(' + portofolio.cover_background + ')' }">
            <section class="hero is-fullheight py-6" style="position: relative;">
                <div class="custom-shape-divider-bottom-1677224903">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
                    </svg>
                </div>
                <div class="hero-body">
                </div>
                <div class="hero-footer py-6">
                    <p class="subtitle is-size-5 mb-3">The Wedding of</p>               
                    <p class="title is-size-3 is-capitalized mb-3 mt-3">
                        {{ portofolio.pname }} <br>
                        & <br>
                        {{ portofolio.lname }}
                    </p>
                    <p class="subtitle mt-0 is-size-6 is-capitalized mt-3">{{ tanggal(portofolio.tanggal_countdown) }}</p>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
import useMethod from '@/hooks/useMethod.js'

const {tanggal} = useMethod()


// GET PORTOFOLIO
defineProps({
  portofolio: { type: Object },
  theme: { type: Object },
  themeproduct: { type: Object },
});
</script>

<style lang="scss" scoped>
@import "@/styles/component/maincover.scss";
</style>