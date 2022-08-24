<template>
    <div class="container m-4 mt-2 mb-6">
        <div class="box">
            <form class="form" v-on:submit.prevent>
                <p class="has-text-weight-bold mb-4"> Kirim ucapan:</p>
                <!-- New Item Field -->
                <div class="field">
                    <div class="control">
                        <input class="input" v-model="fields.name" type="text" placeholder="Nama lengkap">
                        <span style="color: red">{{ fieldErrors.name }}</span>
                    </div>
                </div>

                <!-- Email Field -->
                <div class="field">
                    <div class="control">
                        <input class="input" v-model="fields.alamat" type="text" placeholder="Alamat">
                        <span style="color: red">{{ fieldErrors.alamat }}</span>
                    </div>
                </div>  

                <!-- Urgency Field -->
                <div class="field">
                    <div class="control">
                        <input class="textarea" v-model="fields.pesan" placeholder="Pesan">
                        <span style="color: red">{{ fieldErrors.pesan }}</span>
                    </div>
                </div>
                                
                <button @click="confirmUcapan" class="button is-rounded is-size-6">Kirim sekarang</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { reactive, inject } from "vue";
import axios from 'axios';

const fields = reactive({
    name: null,
    alamat: null,
    pesan: null,
});

const fieldErrors = reactive({
    name: undefined,
    alamat: undefined,
    pesan: undefined
});



const store = inject('store');

const confirmUcapan = () => {

    axios
        .post("http://localhost:3000/ucapan", fields)
        .then(() => {
            console.log('berhasil post');
            fields.name = "";
            fields.alamat = "";
            fields.pesan = "";
            store.actions.getUcapan();
        })
        .catch((err) => console.log(err));
}

</script>

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