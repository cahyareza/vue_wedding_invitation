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
                            <div v-if="modal_data.showNotifFlag">
                                <div class="notification">
                                    <button @click="hideNotif" class="delete"></button>
                                    Bagi yang ingin mengirimkan tanda kasih pernikahan dapat mengklik fitur disamping.
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
                                    <div class="section is-paddingless is-marginless">
                                        <div class="container is-paddingless is-marginless">
                                            <div class="columns is-multiline is-mobile is-centered mt-4">
                                                <div v-if="portofolio.alamat_rumah">
                                                    <div class="column is-12 has-text-center">
                                                        <p class="mb-2">{{ portofolio.alamat_rumah }}</p>
                                                        <button @click="copy(portofolio.alamat_rumah)" class="button is-black mt-2">Salin Alamat</button>
                                                    </div>
                                                </div>
                                                <div v-for="info in dompet" :key="info.id" class="column is-one-half has-text-center">
                                                    <p class="subtitle is-size-6-mobile is-size-5-tablet mb-1"><strong>{{ info.rekening }}</strong></p>
                                                    <div v-if="info.bar_code">
                                                        <figure class="image is-1by1">
                                                            <img :src="info.bar_code">
                                                        </figure>
                                                    </div>
                                                    <p class="subtitle is-size-6-mobile is-size-5-tablet mb-1 mt-1">{{ info.nomor }}</p>
                                                    <p class="subtitle is-size-6-mobile is-size-5-tablet mb-1">a/n {{ info.pemilik }}</p>
                                                    <button @click="copy(info.nomor)" class="button is-black mt-1">Salin Nomor</button>
                                                </div>
                                                <div class="column is-12 has-text-center">
                                                    <form class="form" v-on:submit.prevent>
                                                        <p class="subtitle3 has-text-weight-bold mb-4"> Mohon isi form di bawah ini</p>
                                                        <!-- New Item Field -->
                                                        <div class="field">
                                                            <div class="control">
                                                                <input class="input" v-model="fields.nama" type="text" placeholder="Nama lengkap">
                                                                <span class="subtitle is-size-7" style="color: red">{{ fieldErrors.nama }}</span>
                                                            </div>
                                                        </div>

                                                        <!-- Email Field -->
                                                        <div class="field">
                                                            <div class="control">
                                                                <input class="input" v-model="fields.jumlah" type="text" placeholder="Jumlah">
                                                                <span class="subtitle is-size-7" style="color: red">{{ fieldErrors.jumlah }}</span>
                                                            </div>
                                                        </div>  

                                                        <!-- Urgency Field -->
                                                        <div class="field">
                                                            <div class="control">
                                                                <input class="input" v-model="fields.pesan" placeholder="Pesan">
                                                                <span class="subtitle is-size-7" style="color: red">{{ fieldErrors.pesan }}</span>
                                                            </div>
                                                        </div>

                                                        <!-- Urgency Field -->
                                                        <!-- <div class="field">
                                                            <div class="control">
                                                                <input class="input" v-model="fields.ditransfer_ke" placeholder="Ditransfer ke-">
                                                                <span class="subtitle is-size-7" style="color: red">{{ fieldErrors.ditransfer_ke }}</span>
                                                            </div>
                                                        </div> -->
                                                        
                                                        <div class="field has-text-left">
                                                            <p>Dikirim ke-:</p>
                                                            <div v-for="dompet in dompets" :key="dompet.id">
                                                                <label class="radio">
                                                                    <input type="radio" name="rsvp" :value="dompet.rekening" v-model="fields.ditransfer_ke">
                                                                    {{ dompet.rekening}} a/n {{ dompet.pemilik }}
                                                                </label>
                                                            </div>
                                                            <span class="subtitle is-size-7" style="color: red">{{ fieldErrors.ditransfer_ke }}</span>
                                                        </div>

                                                        <!-- <div class="select">
                                                            <div v-for="dompet in dompets" :key="dompet.id">
                                                                <select v-model="fields.ditransfer_ke">  
                                                                    <option>Select dropdown</option>
                                                                    <option value="{{ dompet }}">{{ dompet.rekening}} a/n {{ dompet.pemilik }}</option> 
                                                                </select>
                                                                <span class="subtitle is-size-7" style="color: red">{{ fieldErrors.ditransfer_ke }}</span>
                                                            </div>
                                                        </div><br> -->
                                                                        
                                                        <button @click="confirmDana" class="button is-rounded is-size-6">Kirim</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <footer class="modal-card-foot">
                                    <p class="subtitle has-text-danger">{{ fields.message }}</p>
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
                                <!-- <span>Rundown</span> -->
                                <span @click="navPage('run')" class="icon">
                                    <font-awesome-icon icon="fa-solid fa-calendar-days" />
                                </span>
                                <div v-if="themeproduct.fitur === 'PLATINUM' || themeproduct.fitur === 'GOLD'">
                                    <!-- <span>Moment</span> -->
                                    <span @click="navPage('moment')" class="icon">
                                        <font-awesome-icon icon="fa-solid fa-images" />
                                    </span>

                                    <!-- <span>Date</span> -->
                                    <span @click="navPage('time')" class="icon">
                                        <font-awesome-icon icon="fa-solid fa-clock" />
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
import { reactive, defineEmits, defineProps, onMounted, inject, ref, computed } from "vue";
// import trumpetSfx from '../assets/contents/mp3/sample.mp3';
import useClipboard from 'vue-clipboard3'
import axios from 'axios';

var web_url = process.env.VUE_APP_WEB_URL_FIX

var store = inject('store');

var slug = store.actions.getSlug().value;

var dompets = computed(() => store.state.dompet);

// FORMS
const fields = reactive({
    portofolio: slug,
    nama: null,
    jumlah: null,
    pesan: null,
    ditransfer_ke: null,
    message: null,
});

const fieldErrors = reactive({
    nama: undefined,
    jumlah: undefined,
    pesan: undefined,
    ditransfer_ke: undefined,
    error: 0
});

const confirmDana = () => {
    fieldErrors.nama= undefined;
    fieldErrors.jumlah= undefined;
    fieldErrors.pesan= undefined;
    fieldErrors.ditransfer_ke= undefined;
    fieldErrors.error= 0;

    validateForm(fields);
    if (fieldErrors.error != 0) return;

    axios
        .post(`${web_url}portofolio/api/dana/?portofolio__slug=${slug}`, fields)
        .then(() => {
            console.log('berhasil post');
            fields.nama = null;
            fields.jumlah = null;
            fields.pesan = null;
            fields.ditransfer_ke = null;


            axios.get(`${web_url}portofolio/api/dana/?portofolio__slug=${slug}`).then((response) => {
                // console.log(response.data)
                store.mutations.updateDana(response.data);
            });

            fields.message = "Terimakasih telah mengisi form"

        })
        .catch((err) => console.log(err));
}

const validateForm = (fields) => {
    const errors = {};

    if (!fields.nama) {
        fieldErrors.nama = "Nama Required";
        fieldErrors.error += 1;
    }
    if (!fields.jumlah) {
        fieldErrors.jumlah = "Jumlah Required"; 
        fieldErrors.error += 1;
    }
    if (!fields.pesan) {
        fieldErrors.pesan = "Pesan Required"; 
        fieldErrors.error += 1;
    }
    if (!fields.ditransfer_ke) {
        fieldErrors.ditransfer_ke = "Ditransfer Required"; 
        fieldErrors.error += 1;
    }

    if (fields.jumlah && !numbervalid(fields.jumlah)) {
        fieldErrors.jumlah = "Just number required!";
        fieldErrors.error += 1;
    }

    return errors;
};

const numbervalid = (numberfield) => {
    const re = /^\d+\.?\d*$/;
    return re.test(numberfield);
}

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
})

// Dompet
const modal_data = reactive({
    showModalFlag: false,
    okPressed: false,
    // notif dompet
    showNotifFlag: false,
})

const showModal= () => {
    modal_data.okPressed = false;
    modal_data.showModalFlag = true;
}

const cancelModal = () => {
    modal_data.okPressed = false;
    modal_data.showModalFlag = false;
}

const showNotif = () => {
    modal_data.showNotifFlag = true;
}

const hideNotif = () => {
    modal_data.showNotifFlag = false;
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
    setTimeout(() => {
        showNotif();
    }, 10000);
})

</script>

<style lang="scss" scoped>
@import "@/styles/component/mainmenu.scss";

.notification {
    position: fixed;
    height: 60px;
    width: 220px;
    font-size: 10px;
    top: 85px;
    right: 55px;
    z-index: 1;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 30px;
    padding-left: 10px;
}

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
