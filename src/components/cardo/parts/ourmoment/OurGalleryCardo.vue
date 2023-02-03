<template v-slot:prev-btn="{ prev }">
  <div class="section pt-3">
        <div class="container">
            <div v-for="(slide, index) in multiimage" :key="slide">
                
                <figure>
                    <img @click="showMultiple(multiimage, index)" :src="slide">
                </figure>
                
            </div>
        </div>

    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="imgsRef"
      :index="indexRef"
      @hide="onHide"
    ></vue-easy-lightbox>
  </div>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'
import { ref, defineComponent } from 'vue'

import 'vue3-carousel/dist/carousel.css';


export default defineComponent({
  components: {
    VueEasyLightbox,
  },
  props: {
    multiimage: Array,
  },
  setup() {
    const visibleRef = ref(false)
    const indexRef = ref(0) // default 0
    const imgsRef = ref([])

    const onShow = () => {
      visibleRef.value = true
    }
    const showSingle = (vari) => {
      imgsRef.value = vari

      onShow()
    }
    const showMultiple = (vari, ids) => {
      imgsRef.value = vari

      indexRef.value = ids // index of imgList
      onShow()
    }
    const onHide = () => (visibleRef.value = false)

    return {
      visibleRef,
      indexRef,
      imgsRef,
      showSingle,
      showMultiple,
      onHide,
    }
  }
})
</script>


<style lang="scss" scoped>

body {
  background-color: #000;
  font: 1.1em Arial, Helvetica, sans-serif;
}

img {
  max-width: 100%;
  display: block;
}

figure {
  margin: 0;
  display: grid;
  grid-template-rows: 1fr auto;
  margin-bottom: 10px;
  break-inside: avoid;
}

figure > img {
  grid-row: 1 / -1;
  grid-column: 1;
}

figure a {
  color: black;
  text-decoration: none;
}

figcaption {
  grid-row: 2;
  grid-column: 1;
  background-color: rgba(255,255,255,.5);
  padding: .2em .5em;
  justify-self: start;
}

.container {
  column-count: 2;
  column-gap: 10px;
}
</style>