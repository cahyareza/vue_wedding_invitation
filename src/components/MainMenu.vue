<template>
    <div class="columns">
        <div class="column is-half-tablet is-offset-one-quarter-tablet is-marginless is-paddingless">
            <div class="container">
                <!--  Music     -->
                <button-music @onload="play" @click.prevent="audio.isPlaying ? pause() : play()" class="button is-rounded is-light p-3">
                    <span class="icon has-text-dark">
                        <font-awesome-icon icon="fa-solid fa-music" />
                    </span>
                </button-music>

                <!--  Amplop    -->
                <button-amplop @click="showModal" class="button is-rounded is-primary p-3">
                    <span class="icon has-text-dark">
                        <font-awesome-icon icon="fa-solid fa-money-bill-wave" />
                    </span>
                </button-amplop>

                <!--    Modal        -->
                <div class="modal p-3" :class="{'is-active': modal_data.showModalFlag}">
                    <div class="modal-background"></div>
                    <div class="modal-card m-4" style="padding: 4vw;">
                        <header class="modal-card-head">
                            <p class="modal-card-title">Amplop Digital</p>
                            <button class="delete" aria-label="close" @click="cancelModal"></button>
                        </header>
                        <section class="modal-card-body">
                            <p class="has-text-left mb-4">Transfer langsung ke rekening berikut ini;</p>
                            <div class="columns is-multiline">
                                <div v-for="info in dompet" :key="info.id">
                                    <div class="column pb-1 is-gapless has-text-left">
                                        <p>{{ info.rekening }}</p>
                                        <p><strong>{{ info.nomor }}</strong> <button class="button-copy" @click="copy(info.nomor)">copy</button></p>
                                        
                                        <p>a/n {{ info.pemilik }}</p>
                                        <hr class="m-1">
                                    </div>
                                </div>
                            </div>
                        </section>
                        <footer class="modal-card-foot">
                            <!-- <button class="button is-success" @click="okModal">Ok</button>
                            <button class="button" @click="cancelModal">Cancel</button> -->
                        </footer>
                    </div>
                </div>
            </div>

            
            <div class="container">
                <div class="notification is-primary p-2">
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
                        <!-- <span>Moment</span> -->
                        <span @click="navPage('moment')" class="icon">
                            <font-awesome-icon icon="fa-solid fa-images" />
                        </span>
                         <!-- <span>Wishes</span> -->
                        <span @click="navPage('message')" class="icon">
                            <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                        </span>
                    </span>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { reactive, inject, computed, onMounted, defineEmits } from "vue";
import trumpetSfx from '../assets/contents/mp3/sample.mp3';
import useClipboard from 'vue-clipboard3'

const emit = defineEmits(['page']);

// emit
const navPage = (value) => {
    emit("page", value)
}

// Audio
var audio = {
    file: new Audio(trumpetSfx),
    isPlaying: false
}

const play = () => {
    audio.isPlaying = true;
    audio.file.play();
    // // set to default
    // audio.isPlaying = false;
}

const pause = () => {
    audio.isPlaying = false;
    audio.file.pause();
}

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


const store = inject('store');

const dompet = computed(() => store.state.dompet); 

store.actions.getDompet();

onMounted(() => {
    store.actions.getDompet();
});


// Copy clipboard

const { toClipboard } = useClipboard()

const copy = async (vari) => {
    try {
        await toClipboard(vari)
        console.log('Copied to clipboard')
    } catch (e) {
        console.error(e)
    }
}

</script>

<style lang="scss" scoped>

.notification {
    position: fixed;
    height: 40px;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 2px 2px 3px #999;
}

button-music.button {
    position: fixed;
    height: 40px;
    top: 20px;
    right: 20px;
    color: #fff;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 2px 2px 3px #999;
}

button-amplop.button {
    position: fixed;
    height: 40px;
    top: 70px;
    right: 20px;
    color: #fff;
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
