<template>
    <!--    Modal        -->
    <div class="modal" v-if="visible">
        <p class="title has-text-white">Modal title</p>
        <div class="modal-background"></div>
            <button class="delete" aria-label="close" style="float: right; position:absolute; top:10px; right:10px;"></button>
            <div class="modal-content">
                <swiper
                    :slidesPerView="1"
                    :pagination="{
                    type: 'fraction',
                    }"
                    :navigation="true"
                    :modules="modules"
                    class="mySwiper is-paddingless is-marginless"
                >
                    <swiper-slide>
                        <figure class="image is-128x128">
                            <img class="" src="https://bulma.io/images/placeholders/128x128.png">
                        </figure>
                    </swiper-slide>
                    <swiper-slide>
                        <figure class="image is-128x128">
                            <img class="" src="https://bulma.io/images/placeholders/128x128.png">
                        </figure>
                    </swiper-slide>
                    <swiper-slide>
                        <figure class="image is-128x128">
                            <img class="" src="https://bulma.io/images/placeholders/128x128.png">
                        </figure>
                    </swiper-slide>
                    <swiper-slide>
                        <figure class="image is-128x128">
                            <img class="" src="https://bulma.io/images/placeholders/128x128.png">
                        </figure>
                    </swiper-slide>
                    <swiper-slide>
                        <figure class="image is-128x128">
                            <img class="" src="https://bulma.io/images/placeholders/128x128.png">
                        </figure>
                    </swiper-slide>
                </swiper>
            </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

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

</script>


<style lang="scss" scoped>
</style>