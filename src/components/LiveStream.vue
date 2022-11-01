<template>
    <div :class="theme">
        <section class="hero is-danger is-small">
            <div class="hero-body">
                <div class="columns">
                    <div class="column is-half-tablet is-offset-one-quarter-tablet">
                        <p class="subtitle2 is-uppercase is-size-5 mt-1 p-1">
                            Live Streaming<br>
                            <img class="mt-1" src="../assets/contents/line_gray.png" style="width: 180px; height: 27px;">
                        </p>
                        <p class="subtitle2 is-size-6-tablet is-size-6-mobile mt-2 mb-3"> Temui kami secara virtual untuk menyaksikan acara pernikahan kami </p>
                        <button class="button is-rounded is-size-7 px-2  mb-3">
                            <a :href="portofolio.livestream"><font-awesome-icon icon="fa-solid fa-video" />&nbsp;Menuju Streaming
                            </a>
                        </button>
                        <hr class="is-paddingless mt-2 mb-3">
                        <p class="subtitle2 is-size-6-tablet is-size-6-mobile">Silahkan untuk join live streaming.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>

import { inject, computed, onMounted, onBeforeMount } from 'vue'

// LOAD STATE
const store = inject('store');

// PORTOFOLIO
const portofolio = computed(() => store.state.portofolio);

// THEME
const theme = computed(() => store.state.theme); 

// LIFECYCLE
onBeforeMount(() => {
    store.actions.getTheme();
});

onMounted(() => {  
    store.actions.getPortofolio();
});
</script>

<style lang="scss" scoped>
@import "../styles/component/livestream.scss";
// @import "../styles/global.scss";
</style>