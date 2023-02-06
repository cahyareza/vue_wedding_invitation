<template>
    <div v-if="story.length != 0">
        <div v-if="themeproduct.fitur === 'PLATINUM' || themeproduct.fitur === 'GOLD'">
            <div :class="theme">
                <section class="hero is-large">
                    <div class="section py-0">
                        <p class="subtitle2 is-size-3-tablet is-size-4-mobile mt-3">
                            Cerita Kita<br>
                        </p>
                        <figure class="image is-3by2">
                            <img :src="multiimage[4]">
                        </figure>
                        <div class="section pt-3 px-0">
                            <div class="columns is-multiline">
                                <div v-for="stori in story" :key="stori" class="column is-one-third-desktop is-one-half-tablet is-full-mobile">
                                    <div class="notification p-4">
                                        <p class="subtitle3 is-size-5-tablet is-size-6-mobile has-text-weight-bold has-text-left">{{ stori.year}}</p>
                                        <p class="subtitle3 is-size-6-tablet is-size-7-mobile has-text-left">{{ stori.cerita}}</p>
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
  multiimage: { type: Array },
});

</script>




<style lang="scss" scoped>
@import "../../styles/component/storypage.scss";
// @import "../styles/global.scss";

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

