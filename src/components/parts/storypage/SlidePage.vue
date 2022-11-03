<template>
    <!--    Modal        -->
    <div class="modal" :class="{'is-active': visible}">
        <p class="title has-text-white">Modal title</p>
        <div class="modal-background"></div>
            <button class="delete" aria-label="close" @click="$emit('update:visible', false)" style="float: right; position:absolute; top:10px; right:10px;"></button>
            <div class="modal-content">
                <swiper
                    :slidesPerView="1"
                    :pagination="{
                    type: 'fraction',
                    }"
                    :navigation="true"
                    class="mySwiper is-paddingless is-marginless"
                >
                    <swiper-slide>
                        <figure class="image is-128x128">
                            <img class="" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.planetware.com%2Fpictures%2Ffrance-f.htm&psig=AOvVaw0fkZ0Tv4CIuW2MXe_rfrhQ&ust=1667563026330000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKjEi8D6kfsCFQAAAAAdAAAAABAE">
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
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>