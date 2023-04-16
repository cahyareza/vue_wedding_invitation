<template>
    <div v-if="story.length != 0">
        <div v-if="themeproduct.fitur === 'PLATINUM' || themeproduct.fitur === 'GOLD' || themeproduct.fitur === 'DIAMOND'">
            <div :class="theme">
                <section class="hero is-large">
                    <div class="section py-5">
                        <div class="container">
                            <p class="subtitle2 is-size-2-tablet is-size-3-mobile mt-3 is-uppercase py-0">
                                Cerita Kita<br>
                            </p>
                            <div class="section py-0">
                                <div class="columns is-multiline">
                                    <div v-for="stori in story" :key="stori" class="column is-one-third-desktop is-one-half-tablet is-full-mobile">
                                        <p class="subtitle3 is-size-5-tablet is-size-6-mobile has-text-weight-bold">{{ stori.year}}</p>
                                        <p class="subtitle3 is-size-6-tablet is-size-7-mobile">{{ stori.cerita}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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

