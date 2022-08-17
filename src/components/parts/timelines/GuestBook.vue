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

const show = ref(false);

const showhidebutton = () => {
    show.value = !show.value
 }



const konfirmasi = reactive({
    name: null,
    hadir: null,
});


const confirmHadir = () => {

    axios
        .post("http://localhost:3000/hadir", konfirmasi)
        .then(() => {
            console.log('berhasil post');
            showhidebutton();
            konfirmasi.name = "";
            konfirmasi.hadir = "";
            store.actions.getHadir();
        })
        .catch((err) => console.log(err));
}

const store = inject('store');
const hadir = computed(() => store.state.hadir); 

const jumlahHadir = computed(() => {
    const listhadir = [];
    for (let konfirm of hadir.value) {
        if (konfirm.hadir == "iya") {
            listhadir.push(konfirm);
        }
    }
    return listhadir.length;
});

onMounted(() => {
    store.actions.getHadir();
});
</script>