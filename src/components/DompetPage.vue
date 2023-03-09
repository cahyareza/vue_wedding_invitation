<template>
    <div :class="theme">
        <div v-if="themeproduct.fitur === 'PLATINUM' || themeproduct.fitur === 'GOLD' || themeproduct.fitur === 'DIAMOND'">
            <div v-if="dompet.length != 0">
                <div class="hero is-medium">
                    <div class="section py-0">
                        <div class="container">
                            <div class="columns">
                                <div class="column">
                                    <div class="container m-3 mt-5">
                                        <span class="icon has-text-grey is-large">
                                            <font-awesome-icon icon="fa-solid fa-gift" />
                                        </span>
                                        <p class="title is-capitalized is-size-3-mobile is-size-2-tablet mt-5 mb-3">Wedding Gift</p>
                                        <p class="subtitle is-size-6-mobile is-size-5-tablet mt-3">Bagi keluarga dan kerabat yang ingin mengirimkan tanda kasih, silahkan mengirimkan melalui tautan berikut</p>
                                        
                                        <div @click="showModal" class="button p-2">
                                            Kirim
                                        </div>
                                        
                                        <!--    Modal        -->
                                        <div class="modal" :class="{'is-active': modal_data.showModalFlag}">
                                            <div class="modal-background"></div>
                                            <div class="modal-card">
                                                <header class="modal-card-head">
                                                    <p class="modal-card-title">Wedding Gift</p>
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
                                                                    <p class="subtitle2 is-size-6-mobile is-size-5-tablet mb-1 mt-1">{{ info.nomor }}</p>
                                                                    <p class="subtitle2 is-size-6-mobile is-size-5-tablet mb-1">a/n {{ info.pemilik }}</p>
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
                                                                                        
                                                                        <button @click="confirmDana(web_url, store, slug, fieldErrors, fields)" class="button is-rounded is-size-6">Kirim</button>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, defineProps } from "vue";
import injectStore from '@/hooks/injectStore.js'
import useMethod from '@/hooks/useMethod.js'
import axios from 'axios';

// GET PROPS
defineProps({
  theme: { type: Object },
  themeproduct: { type: Object },
  dompet: { type: Object },
  portofolio: { type: Object },
});

const {store, slug, dompets, web_url} = injectStore()
const {copy} = useMethod()

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

// Dompet
const modal_data = reactive({
    showModalFlag: false,
})

const showModal= () => {
    modal_data.showModalFlag = true;
}

const cancelModal = () => {
    modal_data.showModalFlag = false;
}

</script>

<style lang="scss" scoped>
@import "@/styles/component/dompetpage.scss";

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
