<template>
    <div class="notification is-primary is-light">
        <p><strong>{{ jumlahHadir }} tamu</strong> merespon akan datang,</p>
        <button @click="showhidebutton" class="button is-rounded mt-4">
            <font-awesome-icon icon="fa-solid fa-calendar-check" />&nbsp;Konfirmasi Kehadiran
        </button>
        
        <form v-if="show" class="form" v-on:submit.prevent>
            <hr>
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

const store = inject('store');
const show = ref(false);

const slug = store.actions.getSlug().value;

var hadir = computed(() => store.state.hadir); 

const showhidebutton = () => {
    show.value = !show.value
 }

const konfirmasi = reactive({
    portofolio: slug,
    name: null,
    hadir: null,
});

var getHadir = store.actions.getHadir()

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
        .post(`http://127.0.0.1:8000/portofolio/api/hadir/?slug=${slug}`, konfirmasi)
        .then(() => {
            console.log('berhasil post');
            showhidebutton();
            konfirmasi.name = "";
            konfirmasi.hadir = "";
     
            getHadir
            console.log(jumlahHadir)
        })
        .catch((err) => console.log(err));

}


onMounted(() => {
    store.actions.getHadir();
});
</script>