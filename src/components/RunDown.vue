<template>
    <section class="hero is-info is-large">
        <div class="container">
            
            <div class="columns is-multiline mt-1 mb-1">
                <div class="notification is-primary m-4">
                    <div class="column is-full">
                        <p class="title is-size-4 mb-6">Akad Nikah</p>

                        <p class="subtitle is-size-7 has-text-weight-bold mb-1">{{ portofolio.tanggal_akad }}</p>
                        <p class="subtitle is-size-7 mt-1 mb-1"><font-awesome-icon icon="fa-solid fa-clock" /> pukul {{ portofolio.waktu_akad }}- selesai</p>
                        <p class="subtitle is-size-7 mt-1"><font-awesome-icon icon="fa-solid fa-location-pin" /> {{ portofolio.tempat_akad }}</p>

                        <button class="button is-rounded is-size-7 px-2 mb-3">
                            <a :href="portofolio.link_gmap_akad">Buka di Google Map
                            </a>
                        </button>
                    </div>
                    <div class="column is-full">
                        <p class="title is-size-4 mb-6">Resepsi</p>

                        <p class="subtitle is-size-7 has-text-weight-bold mb-1">{{ portofolio.tanggal_resepsi }}</p>
                        <p class="subtitle is-size-7 mt-1 mb-1"><font-awesome-icon icon="fa-solid fa-clock" /> pukul {{ portofolio.waktu_resepsi }} - {{ portofolio.waktu_selesai_resepsi }}</p>
                        <p class="subtitle is-size-7 mt-1"><font-awesome-icon icon="fa-solid fa-location-pin" /> {{ portofolio.tempat_resepsi }}</p>

                        <button class="button is-rounded is-size-7 px-2 mb-3">
                            <a :href="portofolio.link_gmap_resepsi">Buka di Google Map
                            </a>
                        </button>

                    </div>
                    <div class="column is-full">
                        <p class="title is-size-4 mb-6">Unduh Mantu</p>

                        <p class="subtitle is-size-7 has-text-weight-bold mb-1">{{ portofolio.tanggal_unduhmantu }}</p>
                        <p class="subtitle is-size-7 mt-1 mb-1"><font-awesome-icon icon="fa-solid fa-clock" /> pukul {{ portofolio.waktu_unduhmantu }} - selesai</p>
                        <p class="subtitle is-size-7 mt-1"><font-awesome-icon icon="fa-solid fa-location-pin" /> {{ portofolio.tempat_unduhmantu }}</p>

                        <button class="button is-rounded is-size-7 px-2 mb-3">
                            <a :href="portofolio.link_gmap_unduh_mantu">Buka di Google Map
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { inject, computed, onMounted } from 'vue'

const store = inject('store');

const portofolio = computed(() => store.state.portofolio);

onMounted(() => {  
    store.actions.getPortofolio();
});
</script>

