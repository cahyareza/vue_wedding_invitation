<template>
    <div class="notification2 notification">
        <p class="subtitle-4"><strong>{{ jumlahHadir }} tamu</strong> merespon akan datang,</p>
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
                        <p><input type="radio" name="rsvp" value="iya" v-model="konfirmasi.hadir">
                        Iya, saya akan datang</p>
                    </label>
                    <br/>
                    <label class="radio">
                        <p><input type="radio" name="rsvp" value="tidak" v-model="konfirmasi.hadir">
                        Maaf, sepertinya tidak bisa</p>
                    </label>
            </div>  
            <button @click="confirmHadir" class="button is-rounded is-size-6">Kirim sekarang</button>
        </form>
    </div>
</template>

<script setup>

import { ref, reactive, computed, onMounted } from "vue";
import axios from 'axios';
import injectStore from '@/hooks/injectStore.js'

const {store, web_url, slug, hadir} = injectStore()

const show = ref(false);

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
        .post(`${web_url}portofolio/api/hadir/?portofolio__slug=${slug}`, konfirmasi)
        .then(() => {
            console.log('berhasil post');
            showhidebutton();
            konfirmasi.name = "";
            konfirmasi.hadir = "";
                
            axios.get(`${web_url}portofolio/api/hadir/?portofolio__slug=${slug}`).then((response) => {
                store.mutations.updateHadir(response.data);
            });
        })
        .catch((err) => console.log(err));

}


onMounted(() => {
    store.actions.getHadir();
});
</script>