<template>
    <div class="notification is-primary is-light">
        <p><strong>6 tamu</strong> merespon akan datang,</p>
        <p class="mb-1">kirim konfirmasi</p>
        <hr>
        <button @click="showhidebutton" class="button is-rounded mt-1">
            <font-awesome-icon icon="fa-solid fa-calendar-check" />&nbsp;Konfirmasi Kehadiran
        </button>
        
        <form v-if="show" class="form" v-on:submit.prevent>
            <hr>
            <div class="field">
                <div class="control">
                    <input class="input" type="text" placeholder="Nama lengkap" v-model="hadir.name">
                    <span style="color: red"></span>
                </div>
            </div>
            <div class="field has-text-left">
                <p>konfirmasi kehadiran:</p>
                    <label class="radio">
                        <input type="radio" name="rsvp" value="hadir" v-model="hadir.konfirmasi">
                        Iya, saya akan datang
                    </label>
                    <br/>
                    <label class="radio">
                        <input type="radio" name="rsvp" value="tidak hadir" v-model="hadir.konfirmasi">
                        Maaf, sepertinya tidak bisa
                    </label>
            </div>  
            <button @click="confirmHadir" class="button is-rounded is-size-6">Kirim sekarang</button>
        </form>
    </div>
</template>

<script setup>

import { ref, reactive } from "vue";
import axios from 'axios';

const show = ref(false);

const hadir = reactive({
    name: null,
    konfirmasi: null,
});

const showhidebutton = () => {
    show.value = !show.value
 }

const confirmHadir = () => {

    axios
        .post("http://localhost:3000/hadir", hadir)
        .then(() => {
            console.log('berhasil post');
            showhidebutton();
            hadir.name = "";
        })
        .catch((err) => console.log(err));
}

 

//  const showhidebutton = computed(() => show.value = !show.value);

</script>