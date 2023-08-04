<template>
  <section>
    <div v-if="portofolio.track">
        <div v-if="audio.isPlaying">
            <div @click.prevent="audio.isPlaying ? pause() : play()" class="button1 is-rounded p-2">
                <span class="icon has-text-dark">
                    <font-awesome-icon icon="fa-solid fa-volume-high" />
                </span>
            </div>
        </div>
        <div v-else>
            <div @click.prevent="audio.isPlaying ? pause() : play()" class="button1 is-rounded p-2">
                <span class="icon has-text-dark">
                    <font-awesome-icon icon="fa-solid fa-volume-xmark" />
                </span>
            </div>
        </div>
    </div>

    <!-- Music -->
    <audio 
        ref="player_audio"
        :src="audio.file" 
        controls 
        loop 
        class="is-hidden">
    </audio>
    <!-- End Music -->
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, defineProps, defineExpose } from "vue";
import injectStore from '@/hooks/injectStore.js'
import axios from 'axios';

const {slug, web_url} = injectStore()

defineProps({
  portofolio: { type: Object },
});

// Music
const player_audio = ref(null)

const play = () => {
    player_audio.value.play();
    audio.isPlaying = true;
}

const pause = () => {
    player_audio.value.pause();
    audio.isPlaying = false;
}

// ("https://docs.google.com/uc?export=open&id=1ZpoE6Vl6ypE4dpppG12dxQtVIHPzYruo"),
const audio = reactive({
    file: null,
    isPlaying: true,
})

defineExpose({
  play
});

onMounted( () => {
  axios
  .get(`${web_url}portofolio/api/portofolio/?slug=${slug}`)
  .then((response) => {
      // eslint-disable-next-line
      let myregex = /https\:\/\/drive\.google\.com\/file\/d\/([a-z0-9\-_]+)\&?/i
      if (response.data[0].track !== null) {
          let text = response.data[0].track.url
          let result = text.match(myregex)[1]
          audio.file = `https://docs.google.com/uc?export=open&id=${result}`
      }
  })
  .catch((err) => console.log(err));
  pause();
})

</script>

<style lang="scss" scoped>
.button1 {
    position: fixed;
    height: 40px;
    top: 20px;
    right: 10px;
    color: #fff;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 2px 2px 3px #999;
}
</style>