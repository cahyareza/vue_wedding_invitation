<template>
    <section class="hero is-info is-large">
        <div class="container">
            
            <div class="columns is-multiline mt-1 mb-1">
                <div class="notification is-primary m-4">
                    <div class="column is-full">
                        <p class="title is-size-4 mb-6">Akad Nikah</p>

                        <p class="subtitle is-size-7 has-text-weight-bold mb-1">{{ acara.tanggal_akad }}</p>
                        <p class="subtitle is-size-7 mt-1 mb-1"><font-awesome-icon icon="fa-solid fa-clock" /> pukul {{ acara.tanggal_akad }}- selesai</p>
                        <p class="subtitle is-size-7 mt-1"><font-awesome-icon icon="fa-solid fa-location-pin" /> {{ acara.tempat_akad }}</p>

                        <button class="button is-rounded is-size-7 px-2 mb-3">
                            <a :href="acara?.link_gmap_akad">Buka di Google Map
                            </a>
                        </button>
                    </div>
                    <div class="column is-full">
                        <p class="title is-size-4 mb-6">Resepsi</p>

                        <p class="subtitle is-size-7 has-text-weight-bold mb-1">{{ acara.tanggal_resepsi }}</p>
                        <p class="subtitle is-size-7 mt-1 mb-1"><font-awesome-icon icon="fa-solid fa-clock" /> pukul {{ acara.tanggal_resepsi }} - selesai</p>
                        <p class="subtitle is-size-7 mt-1"><font-awesome-icon icon="fa-solid fa-location-pin" /> {{ acara.tempat_resepsi }}</p>

                        <button class="button is-rounded is-size-7 px-2 mb-3">
                            <a :href="acara?.link_gmap_resepsi">Buka di Google Map
                            </a>
                        </button>

                    </div>
                    <div class="column is-full">
                        <p class="title is-size-4 mb-6">Unduh Mantu</p>

                        <p class="subtitle is-size-7 has-text-weight-bold mb-1">Selasa, 18 oktober 2022</p>
                        <p class="subtitle is-size-7 mt-1 mb-1"><font-awesome-icon icon="fa-solid fa-clock" /> pukul 18.20 WIB - selesai</p>
                        <p class="subtitle is-size-7 mt-1"><font-awesome-icon icon="fa-solid fa-location-pin" /> {{ acara.tempat_unduh_mantu }}</p>

                        <button class="button is-rounded is-size-7 px-2 mb-3">
                            <a :href="acara?.link_gmap_unduh_mantu">Buka di Google Map
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { inject, computed } from 'vue'

const store = inject('store');

const acara = computed(() => store.state.acara);

store.actions.getAcara();
</script>

