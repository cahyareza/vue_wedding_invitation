<template>
    <div v-if="story.length != 0">
        <div v-if="themeproduct.fitur === 'PLATINUM' || themeproduct.fitur === 'GOLD' || themeproduct.fitur === 'DIAMOND'">
            <div :class="theme">
                <section class="hero is-large">
                    <div class="section py-0">
                        <p class="subtitle2 is-uppercase is-size-5 mt-4 mb-5">
                            Cerita Kita<br>
                            <img class="filter mt-1" :src="themeproduct.theme?.line">
                        </p>
                        <div class="box mx-1 pt-1 px-0">
                            <swiper
                                :slidesPerView="2"
                                :pagination="{
                                type: 'fraction',
                                }"
                                :navigation="true"
                                class="mySwiper is-paddingless is-marginless"
                            >
                                <swiper-slide v-for="stori in story" :key="stori.id">
                                    <div class="columns is-multiline">
                                        <div class="column mt-1">
                                            <p class="subtitle3 mb-1">{{ stori.year }}</p>
                                            <figure @click="showForm = true" class="image is-128x128 mt-1">
                                                <img class="is-rounded" :src="stori.image">
                                            </figure>
                                        </div>
                                    </div>
                                </swiper-slide>
                            </swiper>
                        </div>

                        <SlidePage v-model:visible="showForm"></SlidePage>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>


<script setup>
import SlidePage from '@/components/parts/storypage/SlidePage.vue'
import { ref, defineProps } from 'vue'

// GET PORTOFOLIO
defineProps({
  story: { type: Object },
  theme: { type: Object },
  themeproduct: { type: Object },
});

const showForm = ref(false)

// swiper core
import SwiperCore, { Pagination, Navigation } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/scss";

import "swiper/scss/pagination";
import "swiper/scss/navigation";

// import required modules
// eslint-disable-next-line no-unused-vars
// import { Pagination, Navigation } from "swiper";

SwiperCore.use([Navigation, Pagination]);
</script>




<style lang="scss" scoped>
@import "../styles/component/storypage.scss";

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

