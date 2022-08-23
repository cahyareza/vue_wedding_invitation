<template v-slot:prev-btn="{ prev }">
  <div class="section">

    <!-- single -->
    <!-- <div class="grid">
      <div v-for="piece in ourmoment?.photo" v-bind:key="piece.id">
        <img @click="showSingle(piece)" :src="piece">
      </div>
    </div> -->

    <!-- multiple-->
    <div class="grid">
      <div v-for="(piece, index) in ourmoment?.photo" v-bind:key="piece.id">
        <img @click="showMultiple(ourmoment?.photo, index)" :src="piece">
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
// If VueApp is already registered with VueEasyLightbox, there is no need to register it here.
import VueEasyLightbox from 'vue-easy-lightbox'
import { ref, defineComponent } from 'vue'
import { inject, computed, onBeforeMount } from 'vue'
import axios from 'axios';
// import moment from 'moment'


export default defineComponent({
  components: {
    VueEasyLightbox
  },
  setup() {
    const store = inject('store');

    const ourmoment = computed(() => store.state.ourmoment); 

    store.actions.getOurmoment();

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

    onBeforeMount( async () => {
      await axios
      .get("http://localhost:3000/ourMoment")
      .then((response) => {
        imgsRef.value = response.data
        console.log(imgsRef.value.photo)
      })
    })

    return {
      visibleRef,
      indexRef,
      imgsRef,
      showSingle,
      showMultiple,
      onHide,
      ourmoment
    }
  }
})
</script>




<style lang="scss" scoped>

body {
  margin: 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 160px);
  justify-content: center;
  align-content: center;
  grid-gap: 10px;
  height: 780px;
}

.grid img {
  width: 200px;
  height: 190px;
  cursor: pointer;
}

#lightbox {
  position: fixed;
  z-index: 1000;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .8);
  display: none;
}

#lightbox.active {
  display: flex;
  justify-content: center;
  align-items: center;
}

#lightbox img {
  max-width: 90%;
  max-height: 80%;
  padding: 4px;
  background-color: black;
  border: 2px solid white;
}

</style>