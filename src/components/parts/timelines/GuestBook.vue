<template>
    <div class="notification-2 notification is-info is-light">
        <p><strong>{{ jumlahHadir }} tamu</strong> merespon akan datang,</p>
        <button @click="showhidebutton" class="button is-rounded mt-4 mb-4">
            <font-awesome-icon icon="fa-solid fa-calendar-check" />&nbsp;Konfirmasi Kehadiran
        </button>
        
        <form v-if="show" class="form" v-on:submit.prevent>
            <div class="field">
                <div class="control">
                    <input class="input" type="text" placeholder="Nama lengkap" v-model="konfirmasi.name">
                    <span style="color: red"></span>
                </div>
            </div>
            <div class="field has-text-left">
                <p>konfirmasi kehadiran:</p>
                    <label class="radio">
                        <input type="radio" name="rsvp" value="iya" v-model="konfirmasi.hadir">
                        Iya, saya akan datang
                    </label>
                    <br/>
                    <label class="radio">
                        <input type="radio" name="rsvp" value="tidak" v-model="konfirmasi.hadir">
                        Maaf, sepertinya tidak bisa
                    </label>
            </div>  
            <button @click="confirmHadir" class="button is-rounded is-size-6">Kirim sekarang</button>
        </form>
    </div>
</template>

<script setup>

import { ref, reactive, inject, computed, onMounted } from "vue";
import axios from 'axios';

var store = inject('store');
const show = ref(false);

var slug = store.actions.getSlug().value;

const hadir = computed(() => store.state.hadir); 

const showhidebutton = () => {
    show.value = !show.value
 }

const konfirmasi = reactive({
    portofolio: slug,
    name: null,
    hadir: null,
});

var jumlahHadir = computed(() => {
    const listhadir = [];
    for (let konfirm of hadir.value) {
        if (konfirm.hadir == "iya") {
            listhadir.push(konfirm);
        }
    }
    return listhadir.length;
});

const confirmHadir = () => {
    axios
        .post(`http://127.0.0.1:8000/portofolio/api/hadir/?portofolio__slug=${slug}`, konfirmasi)
        .then(() => {
            console.log('berhasil post');
            showhidebutton();
            konfirmasi.name = "";
            konfirmasi.hadir = "";
                
            axios.get(`http://127.0.0.1:8000/portofolio/api/hadir/?portofolio__slug=${slug}`).then((response) => {
                store.mutations.updateHadir(response.data);
            });
        })
        .catch((err) => console.log(err));

}


onMounted(() => {
    store.actions.getHadir();
});
</script>