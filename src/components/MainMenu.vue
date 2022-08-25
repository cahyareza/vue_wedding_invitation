<template>
    <div class="columns">
        <div class="column is-half-tablet is-offset-one-quarter-tablet">
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
                    <div class="modal-card m-4" style="padding: 10vw;">
                        <header class="modal-card-head">
                            <p class="modal-card-title">Amplop Digital</p>
                            <button class="delete" aria-label="close" @click="cancelModal">></button>
                        </header>
                        <section class="modal-card-body">
                            <p class="has-text-left mb-4">Transfer langsung ke rekening berikut ini;</p>
                            <div class="columns is-multiline">
                                <div v-for="info in dompet" :key="info.id">
                                    <div class="column pb-1 is-gapless has-text-left">
                                        <p>{{ info.rekening }}</p>
                                        <p><strong>{{ info.nomor }}</strong></p>
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
                        <!-- <span class="mr-4" @click="editEvent(day.id, event.details)"><fa :icon="['fas', 'pencil']" /></span>
                        <span @click="deleteEvent(day.id, event.details)"><fa :icon="['fas', 'trash']" /></span> -->
                    <span class="icon-text is-paddingless is-marginless">
                        <span class="icon">
                            <font-awesome-icon icon="fa-solid fa-heart" />
                        </span>
                        <!-- <span>Couple</span> -->
                        <span class="icon">
                            <font-awesome-icon icon="fa-solid fa-calendar-days" />
                        </span>
                        <!-- <span>Date</span> -->
                        <span class="icon">
                            <font-awesome-icon icon="fa-solid fa-map" />
                        </span>
                        <!-- <span>Location</span> -->
                        <span class="icon">
                            <font-awesome-icon icon="fa-solid fa-images" />
                        </span>
                        <!-- <span>Galleries</span> -->
                        <span class="icon">
                            <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                        </span>
                        <!-- <span>Wishes</span> -->
                    </span>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { reactive, inject, computed, onMounted } from "vue";
import trumpetSfx from '../assets/contents/mp3/sample.mp3';

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
</style>
