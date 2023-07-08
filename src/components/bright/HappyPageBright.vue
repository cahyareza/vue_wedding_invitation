<template>
    <div :class="theme">
        <div class="low-opacity-bg-image" style="min-height: 300px;" :style="{ 'background-image': 'url(' + multiimagetheme[5] + ')' }">
            <section class="hero is-large">
                <div class="hero-header">
                    <div class="section py-0">
                        <section class="section is-paddingless" data-aos="fade-down" data-aos-duration="1000">
                            <div class="columns is-multiline is-vcentered">
                                <div class="column is-12-tablet is-12-mobile">
                                    <div class="container">
                                        <p class="subtitle2 is-capitalized is-size-5-mobile is-size-4-tablet mb-2 mt-5">Thank you</p>
                                        <p class="title2 is-capitalized is-size-3 has-text-weigth-bold mt-1">{{ portofolio.lsurename }} & {{ portofolio.psurename }}</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

// GET PROPS
defineProps({
  portofolio: { type: Object },
  theme: { type: Object },
  themeproduct: { type: Object },
  multiimagetheme: { type: Array },
});
</script>


<style lang="scss" scoped>
@import "@/styles/component/happypage.scss";
</style>