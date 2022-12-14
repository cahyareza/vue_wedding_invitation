<template>
    <!--    Modal        -->
    <div class="modal" :class="{'is-active': visible}">
        <div class="modal-background"></div>
            <button class="delete" aria-label="close" @click="$emit('update:visible', false)" style="float: right; position:absolute; top:20px; right:20px;"></button>
            <div class="modal-content">
                <swiper
                    :slidesPerView="1"
                    :pagination="{
                    type: 'fraction',
                    }"
                    :navigation="true"
                    class="mySwiper is-paddingless is-marginless"
                >
                    <swiper-slide v-for="stori in story" :key="stori.id">
                        <div class="columns is-multiline">
                            <div class="column mt-6 pt-6">
                                <p class="title has-text-white">{{ stori.year }}</p>
                                <p class="subtitle has-text-white">{{ stori.cerita }}</p>
                                <figure class="image is-480x480">
                                    <img class="" :src="stori.image">
                                </figure>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
    </div>
</template>

<script setup>
import { defineProps, inject, computed, onBeforeMount } from 'vue'

// LOAD STATE
const store = inject('store');

// STORY
const story = computed(() => store.state.story); 


// MODAL
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
})

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

// LIFECYCLE
onBeforeMount(() => {
    store.actions.getStory();
});

</script>


<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 100%;
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
  width: 100vw;
  height: 70vh;
}
</style>