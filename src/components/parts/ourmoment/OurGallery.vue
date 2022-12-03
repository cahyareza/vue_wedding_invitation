<template v-slot:prev-btn="{ prev }">
  <div class="section pt-3">
    <Carousel :autoplay="6000" :wrap-around="true">
      <Slide v-for="(slide, index) in multiimage" :key="slide">
        <div class="carousel__item">
          <img @click="showMultiple(multiimage, index)" :src="slide">
        </div>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>

    <!-- single -->
    <!-- <div class="grid">
      <div v-for="piece in ourmoment?.photo" v-bind:key="piece.id">
        <img @click="showSingle(piece)" :src="piece">
      </div>
    </div> -->

    <!-- multiple-->
    <!-- <div class="grid">
      <div v-for="(piece, index) in ourmoment?.photo" v-bind:key="piece.id">
        <img @click="showMultiple(ourmoment?.photo, index)" :src="piece">
      </div>

    </div> -->

    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="imgsRef"
      :index="indexRef"
      @hide="onHide"
    ></vue-easy-lightbox>
  </div>
</template>

<script>
// If VueApp is already registered with VueEasyLightbox, there is no need to register it here.
import VueEasyLightbox from 'vue-easy-lightbox'
import { ref, defineComponent } from 'vue'
import { inject, computed, onMounted } from 'vue'

import { Carousel, Pagination, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';


export default defineComponent({
  components: {
    VueEasyLightbox,
    Carousel,
    Slide,
    Pagination
  },
  setup() {
    const store = inject('store');

    const multiimage = computed(() => store.state.multiimage); 

    onMounted(async() => {  
      store.actions.getMultiimage();
    });

    const visibleRef = ref(false)
    const indexRef = ref(0) // default 0
    const imgsRef = ref([])
    // Img Url , string or Array of string
    // ImgObj { src: '', title: '', alt: '' }
    // 'src' is required
    // allow mixing


    const onShow = () => {
      visibleRef.value = true
    }
    const showSingle = (vari) => {
      imgsRef.value = vari
      // or
      // imgsRef.value  = {
      //   title: 'this is a placeholder',
      //   src: 'http://via.placeholder.com/350x150'
      // }
      onShow()
    }
    const showMultiple = (vari, ids) => {
      imgsRef.value = vari

      // or
      // imgsRef.value = [
      //   { title: 'test img', src: 'http://via.placeholder.com/350x150' },
      //   'http://via.placeholder.com/350x150'
      // ]
      indexRef.value = ids // index of imgList
      onShow()
    }
    const onHide = () => (visibleRef.value = false)

    // onBeforeMount( async () => {
    //   await axios
    //   .get("http://localhost:3000/ourMoment")
    //   .then((response) => {
    //     imgsRef.value = response.data
    //     // console.log(imgsRef.value.photo)
    //   })
    // })

    return {
      visibleRef,
      indexRef,
      imgsRef,
      showSingle,
      showMultiple,
      onHide,
      multiimage
    }
  }
})
</script>




<style lang="scss" scoped>
</style>