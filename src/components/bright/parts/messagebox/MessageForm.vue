<template>
    <div v-if="ucapan.length" class="container mb-6"> 
        <div class="product-container">
            <div class="product-card center">
                <div class="commentlist is-light mt-5 p-3" v-for="piece in ucapan" :key="piece.id">
                    <!-- <div class="product-image"> -->
                    <article class="media is-paddingless is-marginless">
                        <div class="content is-paddingless is-marginless">
                            <p class="subtitle is-size-7 has-text-weight-bold has-text-left mb-1">{{ piece.nama }} <small> - {{ piece.alamat }}</small></p>
                            <p class="subtitle is-size-7 has-text-left mt-2">{{ piece.pesan }}</p>
                        </div>
                    </article>
                    <!-- </div> -->
                </div>
            </div>
        </div>
    </div>
    <p class="subtitle has-text-light">{{ fields.message }}</p>
    <div v-if="show" class="container">
        <form class="form" v-on:submit.prevent>
            <p class="subtitle3 has-text-weight-bold mb-4"> Send Wish</p>
            <!-- New Item Field -->
            <div class="field is-hidden">
                <div class="control">
                    <input class="input" v-model="fields.nama" type="text" placeholder="Nama lengkap">
                    <span class="subtitle is-size-7" style="color: red">{{ fieldErrors.nama }}</span>
                </div>
            </div>

            <!-- Email Field -->
            <div class="field">
                <div class="control">
                    <input class="input" v-model="fields.alamat" type="text" placeholder="Alamat">
                    <span class="subtitle is-size-7" style="color: red">{{ fieldErrors.alamat }}</span>
                </div>
            </div>  

            <!-- Urgency Field -->
            <div class="field">
                <div class="control">
                    <input class="textarea" v-model="fields.pesan" placeholder="Pesan">
                    <p class="help is-success has-text-left has-text-light">*Hanya tamu undangan yang bisa mengirimkan ucapan</p>
                    <span class="subtitle is-size-7" style="color: red">{{ fieldErrors.pesan }}</span>
                </div>
            </div>
                            
            <button @click="confirmUcapan" class="button is-rounded is-size-6">Kirim</button>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import axios from 'axios';
import {useCounterStore} from '@/stores/store'

import { defineProps } from 'vue'

// GET PORTOFOLIO
var props = defineProps({
  direction: { type: Object },
});

// LOAD STATE
const store = useCounterStore();

var web_url = process.env.VUE_APP_WEB_URL_FIX

const ucapan = computed(() => store.state.ucapan); 


store.actions.getUcapan();

var slug = store.actions.getSlug().value;

const fields = reactive({
    portofolio: slug,
    nama: props.direction,
    alamat: null,
    pesan: null,
    message: null,
});

const fieldErrors = reactive({
    nama: undefined,
    alamat: undefined,
    pesan: undefined,
    error: 0
});

const show = ref(true);

const showhidebutton = () => {
    show.value = !show.value;
    fields.message = "Terimakasih sudah mengirimkan ucapan.";
 }

const confirmUcapan = () => {
    fieldErrors.nama= undefined;
    fieldErrors.alamat= undefined;
    fieldErrors.pesan= undefined;
    fieldErrors.error= 0;

    validateForm(fields);
    if (fieldErrors.error != 0) return;

    axios
        .post(`${web_url}portofolio/api/ucapan/?portofolio__slug=${slug}`, fields)
        .then(() => {
            console.log('berhasil post');
            showhidebutton();
            fields.nama = null;
            fields.alamat = null;
            fields.pesan = null;


            axios.get(`${web_url}portofolio/api/ucapan/?portofolio__slug=${slug}`).then((response) => {
                // console.log(response.data)
                store.mutations.updateUcapan(response.data);
            });

        })
        .catch((err) => console.log(err));
}

const validateForm = (fields) => {
    if (!fields.nama) {
        fieldErrors.nama = "Nama Required";
        fieldErrors.error += 1;
    }
    if (fields.nama == "Violet") {
        fieldErrors.pesan = "Maaf, hanya tamu undangan yang bisa mengirim ucapan!";
        fieldErrors.error += 1;
    }
    if (fields.nama == 'undefined') {
        fieldErrors.pesan = "Maaf, hanya tamu undangan yang bisa mengirim ucapan!";
        fieldErrors.error += 1;
    }
    if (!fields.alamat) {
        fieldErrors.alamat = "Alamat Required"; 
        fieldErrors.error += 1;
    }
    if (!fields.pesan) {
        fieldErrors.pesan = "Pesan Required"; 
        fieldErrors.error += 1;
    }
};
    

</script>

<style lang="scss" scoped>

.product-container {
//   display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
}

.product-container::-webkit-scrollbar {
  display: none;
}

.product-card {
  flex: 1 100%;
  width: 220px;
  height: 280px;
  margin-left: 60px;
}

.product-image {
  position: relative;
  width: 180px;
  height: 80px;
  overflow: hidden;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
}
</style>

// <script>
// export default {
//     name: 'MessageForm',
//     data() {
//         return {
//             fields: {
//                 nama: "",
//                 alamat: "",
//                 pesan: '',
//             },
//             fieldErrors: {
//                 nama: undefined,
//                 alamat: undefined,
//                 pesan: undefined, 
//             },
//         }
//     },
//     methods: {
//         submitForm() {

//             this.fieldErrors = this.validateForm(this.fields); 
//             // test if error length 0, then go to next run
//             if (Object.keys(this.fieldErrors).length) return;

//             this.fields.nama = ''; 
//             this.fields.alamat = ''; 
//             this.fields.pesan = ''; 
//         },
//         validateForm(fields) {
//             const errors = {};
//             if (!fields.nama) errors.nama = "Nama Required";
//             if (!fields.alamat) errors.alamat = "Alamat Required";
//             if (!fields.pesan) errors.pesan = "Pesan Required";
      
//             return errors;
//         },
//     }
// }
// </script>

