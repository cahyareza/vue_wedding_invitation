<template>
    <div :class="theme">
        <div class="section py-0">
            <div class="columns">
                <div class="column is-marginless is-paddingless">
                    <div class="container is-marginless is-paddingless">
                        <!--  Music     -->
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
                        <audio 
                            ref="player_audio"
                            :src="audio.file" 
                            controls 
                            loop 
                            class="is-hidden">
                        </audio>
                    </div>

                    
                    <div class="container">
                        <div class="notification2 p-2">
                            <div v-if="themeproduct.theme?.slug === 'theme-10'">
                                <span class="icon-text is-paddingless is-marginless">
                                    <!-- <span>Couple</span> -->
                                    <span @click="navPage('groom')" class="icon">
                                        <font-awesome-icon icon="fa-solid fa-heart" />
                                    </span>
                                    <!-- <span>Rundown</span> -->
                                    <span @click="navPage('run')" class="icon">
                                        <font-awesome-icon icon="fa-solid fa-calendar-days" />
                                    </span>
                                    <!-- <span>Moment</span> -->
                                    <span @click="navPage('moment')" class="icon">
                                        <font-awesome-icon icon="fa-solid fa-images" />
                                    </span>
                                
                                    <!-- <span>Wishes</span> -->
                                    <span @click="navPage('message')" class="icon">
                                        <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                                    </span>
                                    <div v-if="themeproduct.fitur === 'PLATINUM' || themeproduct.fitur === 'GOLD'">
                                        <!-- <span>Date</span> -->
                                        <span @click="navPage('time')" class="icon">
                                            <font-awesome-icon icon="fa-solid fa-gift" />
                                        </span>
                                    </div>
                                </span>
                            </div>
                            <div v-else-if="themeproduct.theme?.slug === 'theme-11'">
                                <span class="icon-text is-paddingless is-marginless">
                                    <!-- <span>Couple</span> -->
                                    <span @click="navPage('groom')" class="icon">
                                        <font-awesome-icon icon="fa-solid fa-heart" />
                                    </span>
                                    <!-- <span>Rundown</span> -->
                                    <span @click="navPage('run')" class="icon">
                                        <font-awesome-icon icon="fa-solid fa-calendar-days" />
                                    </span>

                                    <!-- <span>Moment</span> -->
                                    <span @click="navPage('moment')" class="icon">
                                        <font-awesome-icon icon="fa-solid fa-images" />
                                    </span>
                                    <div v-if="themeproduct.fitur === 'PLATINUM' || themeproduct.fitur === 'GOLD'">
                                        <!-- <span>Date</span> -->
                                        <span @click="navPage('time')" class="icon">
                                            <font-awesome-icon icon="fa-solid fa-gift" />
                                        </span>
                                    </div>
                                    <!-- <span>Wishes</span> -->
                                    <span @click="navPage('message')" class="icon">
                                        <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, defineEmits, defineProps, onMounted, ref } from "vue";
import axios from 'axios';
import injectStore from '@/hooks/injectStore.js'

const {slug, web_url} = injectStore()

// GET PROPS
defineProps({
  theme: { type: Object },
  themeproduct: { type: Object },
  dompet: { type: Object },
  portofolio: { type: Object },
});

const emit = defineEmits(['page']);

// emit
const navPage = (value) => {
    emit("page", value)
}

// audio
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
    isPlaying: false,
})


onMounted(() => {
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

    play();
})

</script>

<style lang="scss" scoped>
@import "@/styles/component/mainmenu.scss";

.notification2 {
    position: fixed;
    height: 40px;
    bottom: 0.1%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 2px 2px 3px #999;
}

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

.button2 {
    position: fixed;
    height: 40px;
    top: 70px;
    right: 10px;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 2px 2px 3px #999;
}

</style>
