<template>
    <div v-if="story.length != 0">
        <div v-if="themeproduct.fitur === 'PLATINUM' || themeproduct.fitur === 'GOLD' || themeproduct.fitur === 'DIAMOND'">
            <div :class="theme">
                 <div class="low-opacity-bg-image" :style="{ 'background-image': 'url(' + themeproduct.theme?.background_1 + ')' }">
                    <section class="hero is-large" style="position: relative;">
                        <div v-if="themeproduct.theme?.slug === 'theme-11'">
                            <div class="custom-shape-divider-bottom-1677268738">
                                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                    <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="section py-3">
                            <div v-if="themeproduct.theme?.slug === 'theme-10'">
                                <p class="title2 is-size-3-mobile is-size-2-tablet">
                                    Story
                                </p>
                            </div>
                            <div v-else>
                                <p class="subtitle2 is-size-3-tablet is-size-3-mobile mt-3">
                                    Cerita Kita<br>
                                </p>
                            </div>
                            <div class="section">
                                <div class="columns is-multiline">
                                    <div v-for="stori in story" :key="stori" class="column is-one-third-desktop is-one-half-tablet is-full-mobile">
                                        <p class="subtitle3 is-size-5-tablet is-size-6-mobile has-text-weight-bold">{{ stori.year}}</p>
                                        <p class="subtitle3 is-size-6-tablet is-size-7-mobile">{{ stori.cerita}}</p>
                                    </div>
                                </div>
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

// GET PORTOFOLIO
defineProps({
  story: { type: Object },
  theme: { type: Object },
  themeproduct: { type: Object },
  portofolio: { type: Object },
});

</script>




<style lang="scss" scoped>
@import "@/styles/component/storypage.scss";

.swiper {
  width: 100%;
  height: 200px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>

