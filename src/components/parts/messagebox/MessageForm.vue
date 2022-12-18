<template>
    <div v-if="ucapan.length" class="container mb-6"> 
        <div class="product-container">
            <div class="product-card center">
                <div class="commentlist notification is-light mt-5 p-3" v-for="piece in ucapan" :key="piece.id">
                    <!-- <div class="product-image"> -->
                    <article class="media is-paddingless is-marginless">
                        <div class="content is-paddingless is-marginless">
                            <p class="subtitle is-size-7 has-text-black has-text-weight-bold has-text-left mb-1">{{ piece.nama }} <small> - {{ piece.alamat }}</small></p>
                            <p class="subtitle is-size-7 has-text-black has-text-left mt-2">{{ piece.pesan }}</p>
                        </div>
                    </article>
                    <!-- </div> -->
                </div>
            </div>
        </div>
    </div>
    <div class="container m-4 mt-2 mb-6">
        <div class="box">
            <form class="form" v-on:submit.prevent>
                <p class="has-text-weight-bold mb-4"> Kirim Ucapan</p>
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
                        <input class="input" v-model="fields.alamat" type="text" placeholder="Alamat">
                        <span class="subtitle is-size-7" style="color: red">{{ fieldErrors.alamat }}</span>
                    </div>
                </div>  

                <!-- Urgency Field -->
                <div class="field">
                    <div class="control">
                        <input class="textarea" v-model="fields.pesan" placeholder="Pesan">
                        <span class="subtitle is-size-7" style="color: red">{{ fieldErrors.pesan }}</span>
                    </div>
                </div>
                                
                <button @click="confirmUcapan" class="button is-rounded is-size-6">Kirim</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { reactive, inject, computed } from "vue";
import axios from 'axios';


const store = inject('store');
const ucapan = computed(() => store.state.ucapan); 


store.actions.getUcapan();

var slug = store.actions.getSlug().value;

const fields = reactive({
    portofolio: slug,
    nama: null,
    alamat: null,
    pesan: null,
});

const fieldErrors = reactive({
    nama: undefined,
    alamat: undefined,
    pesan: undefined,
    error: 0
});


const confirmUcapan = () => {
    fieldErrors.nama= undefined;
    fieldErrors.alamat= undefined;
    fieldErrors.pesan= undefined;
    fieldErrors.error= 0;

    validateForm(fields);
    console.log(fieldErrors)
    if (fieldErrors.error != 0) return;

    axios
        .post(`http://127.0.0.1:8000/portofolio/api/ucapan/?portofolio__slug=${slug}`, fields)
        .then(() => {
            console.log('berhasil post');
            fields.nama = null;
            fields.alamat = null;
            fields.pesan = null;


            axios.get(`http://127.0.0.1:8000/portofolio/api/ucapan/?portofolio__slug=${slug}`).then((response) => {
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

