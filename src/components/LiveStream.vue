<template>
    <section class="hero is-danger is-small">
        <div class="hero-body">
            <div class="columns">
                <div class="column is-half-tablet is-offset-one-quarter-tablet">
                    <p class="title is-size-4-mobile mt-2 p-2 mb-2">Live Streaming</p>
                    <p class="is-size-6-tablet is-size-7-mobile mt-2 mb-3"> Temui kami secara virtual untuk menyaksikan acara pernikahan kami </p>
                    <button class="button is-rounded is-size-7 px-2  mb-3">
                        <a :href="portofolio.livestream"><font-awesome-icon icon="fa-solid fa-video" />&nbsp;Menuju Streaming
                        </a>
                    </button>
                    <hr class="is-paddingless mt-2 mb-3">
                    <p class="is-size-6-tablet is-size-7-mobile">Silahkan untuk join live streaming.</p>
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