<template v-slot:prev-btn="{ prev }">
    <swiper
        :slidesPerView="2"
        :pagination="{
        type: 'fraction',
        }"
        :navigation="true"
        class="mySwiper"
    >
        <swiper-slide v-for="(slide, index) in multiimage" :key="slide">
            <figure class="image">
                <img @click="showMultiple(multiimage, index)" :src="slide">
            </figure>
        </swiper-slide>
    </swiper>

    <vue-easy-lightbox
        :visible="visibleRef"
        :imgs="imgsRef"
        :index="indexRef"
        @hide="onHide"
    ></vue-easy-lightbox>
</template>

<script setup>
import VueEasyLightbox from 'vue-easy-lightbox'
import { ref, defineProps } from 'vue'

import 'vue3-carousel/dist/carousel.css';

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

defineProps ({
    multiimage: Array,
})

const visibleRef = ref(false)
const indexRef = ref(0) // default 0
const imgsRef = ref([])

const onShow = () => {
  visibleRef.value = true
}
// const showSingle = (vari) => {
//   imgsRef.value = vari

//   onShow()
// }
const showMultiple = (vari, ids) => {
  imgsRef.value = vari

  indexRef.value = ids // index of imgList
  onShow()
}
const onHide = () => (visibleRef.value = false)

</script>


<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 100%;
  z-index: 1;
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
  object-fit: cover;
  width: 80vw;
  height: 40vh;
}
</style>