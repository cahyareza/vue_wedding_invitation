<template>
    <section class="hero is-info is-fullheight">
        <section class="section pt-4">
            <div class="container">
                <p class="title mt-5 p-6">Pengantin</p>

                <div class="columns is-multiline is-centered mt-1">
                    <div class="column is-full">
                        <figure class="image is-inline-block" style="height:180px; width: 180px;">
                            <img class="is-rounded mb-3" src="https://bulma.io/images/placeholders/128x128.png">
                            <a :href="couples.perempuan?.instagram_link"><font-awesome-icon icon="fa-brands fa-4x fa-instagram" /></a>
                        </figure>

                        <!-- <p class="title mt-5 mb-6" v-for="couple in couples.perempuan" :key="couple.id">{{ couple }}</p> -->
                        <p class="title mt-5 mb-6">{{ couples.perempuan?.name }}</p>

                        <p class="subtitle is-size-6 has-text-weight-bold mb-1">Putri ke{{ couples.perempuan?.anak_ke }} dari</p>
                        <p class="subtitle is-size-6 mt-1">Bapak {{ couples.perempuan?.nama_ayah }} & Ibu {{ couples.perempuan?.nama_ibu }}</p>

                        <p class="subtitle is-size-5 has-text-weight-bold mt-3">&</p>


                    </div>
                    <div class="column is-full mt-4">
                        <figure class="image is-inline-block" style="height:180px; width: 180px;">
                            <img class="is-rounded mb-3" src="https://bulma.io/images/placeholders/128x128.png">
                            <a :href="couples.laki_laki?.instagram_link"><font-awesome-icon icon="fa-brands fa-4x fa-instagram" /></a>
                        </figure>

                        <p class="title mt-5 mb-6">{{ couples.laki_laki?.name }}</p>

                        <p class="subtitle is-size-6 has-text-weight-bold mb-1">Putra ke{{couples.laki_laki?.anak_ke }} dari</p>
                        <p class="subtitle is-size-6 mt-1">Bapak {{ couples.laki_laki?.nama_ayah }} & Ibu {{ couples.laki_laki?.nama_ibu }}</p>
                    </div>
                </div>


            </div>
        </section>
        

    </section>
</template>


<script setup>
import { inject, computed } from 'vue'

const store = inject('store');

const couples = computed(() => store.state.couples); 

store.actions.getCouples();

</script>