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

                        <!--  Amplop    -->
                        <div v-if="themeproduct.fitur === 'PLATINUM' || themeproduct.fitur === 'GOLD'">
                            <div v-if="dompet.length != 0">
                                <div @click="showModal" class="button2 is-rounded p-2">
                                    <span class="icon has-text-dark">
                                        <font-awesome-icon icon="fa-solid fa-gift" />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <!--    Modal        -->
                        <div class="modal" :class="{'is-active': modal_data.showModalFlag}">
                            <div class="modal-background"></div>
                            <div class="modal-card">
                                <header class="modal-card-head">
                                    <p class="modal-card-title">Tanda Kasih</p>
                                    <button class="delete" aria-label="close" @click="cancelModal" style="float: right; position:absolute; top:20px; right:20px;"></button>
                                </header>
                                <section class="modal-card-body">
                                    <p class="has-text-left mb-4">Doa restu keluarga, sahabat, serta rekan-rekan semua di pernikahan kami sudah sangat cukup sebagai hadiah, namun jika memberi merupakan tanda kasih, kami dengan senang hati menerimanya dan tentunya semakin melengkapi kebahagiaan kami.;</p>
                                    <div class="columns is-multiline is-mobile mt-4">
                                        <div v-for="info in dompet" :key="info.id" class="column is-one-half has-text-center">
                                            <p class="subtitle is-size-6-mobile is-size-5-tablet mb-6"><strong>{{ info.rekening }}</strong></p>
                                            <p class="subtitle is-size-6-mobile is-size-5-tablet mb-6">{{ info.nomor }}</p>
                                            
                                            <p class="subtitle is-size-6-mobile is-size-5-tablet">a/n {{ info.pemilik }}</p>
                                            <button @click="copy(info.nomor)" class="button is-black mt-3">Salin Nomor</button>
                                            
                                        </div>
                                    </div>
                                </section>
                                <footer class="modal-card-foot">
                                </footer>
                            </div>
                        </div>
                    </div>

                    
                    <div class="container">
                        <div class="notification2 p-2">
                            <span class="icon-text is-paddingless is-marginless">
                                <!-- <span>Couple</span> -->
                                <span @click="navPage('groom')" class="icon">
                                    <font-awesome-icon icon="fa-solid fa-heart" />
                                </span>
                                <!-- <span>Date</span> -->
                                <span @click="navPage('time')" class="icon">
                                    <font-awesome-icon icon="fa-solid fa-map" />
                                </span>
                                <!-- <span>Rundown</span> -->
                                <span @click="navPage('run')" class="icon">
                                    <font-awesome-icon icon="fa-solid fa-calendar-days" />
                                </span>
                                <div v-if="themeproduct.fitur === 'PLATINUM' || themeproduct.fitur === 'GOLD'">
                                    <!-- <span>Moment</span> -->
                                    <span @click="navPage('moment')" class="icon">
                                        <font-awesome-icon icon="fa-solid fa-images" />
                                    </span>
                                
                                    <!-- <span>Wishes</span> -->
                                    <span @click="navPage('message')" class="icon">
                                        <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                                    </span>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, defineEmits, defineProps, onMounted, inject, ref } from "vue";
// import trumpetSfx from '../assets/contents/mp3/sample.mp3';
import useClipboard from 'vue-clipboard3'
import axios from 'axios';

var web_url = process.env.VUE_APP_WEB_URL_FIX

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


var store = inject('store');

var slug = store.actions.getSlug().value;

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
})

// Dompet
const modal_data = reactive({
    showModalFlag: false,
    okPressed: false,
    message: "Press 'Ok' or 'Cancel'."
})

const showModal= () => {
    modal_data.okPressed = false;
    modal_data.showModalFlag = true;
}
// const okModal = () => {
//     modal_data.okPressed = true;
//     modal_data.showModalFlag = false;
// }
const cancelModal = () => {
    modal_data.okPressed = false;
    modal_data.showModalFlag = false;
}

// Copy clipboard

const { toClipboard } = useClipboard()

const copy = async (vari) => {
    try {
        await toClipboard(vari)
        // console.log('Copied to clipboard')
    } catch (e) {
        console.error(e)
    }
}

onMounted(() => {
    play();
})

</script>

<style lang="scss" scoped>
@import "../../styles/component/mainmenu.scss";


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


.button-copy{
  position: relative;
  background-color: #D3D3D3;
  border-radius: 4em;
  font-size: 12px;
  color: black;
  padding: 0.1em 0.4em;
  cursor:pointer;
  user-select:none;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s; /* Safari */
}

.button-copy:hover {
  transition-duration: 0.1s;
  background-color: #3A3A3A;
}

.button-copy:after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 4em;
  left: 0;
  top:0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.5s;
  box-shadow: 0 0 10px 40px white;
}

.button-copy:active:after {
  box-shadow: 0 0 0 0 white;
  position: absolute;
  border-radius: 4em;
  left: 0;
  top:0;
  opacity: 1;
  transition: 0s;
}

.button-copy:active {
  top: 1px;
}

</style>
