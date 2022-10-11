<template>
    <div :class="theme">
        <section class="hero is-fullheight">
            <div class="columns is-multiline">
                <div class="column is-half-tablet is-offset-one-quarter-tablet">
                    <section class="section">
                        <p class="subtitle">Undangan Pernikahan</p>
                    
                        <p class="title mt-5">{{ portofolio.pname }} & {{ portofolio.lname }}</p>

                        <p class="subtitle mt-4 is-size-6">{{ portofolio.tanggal_resepsi }}</p>
                    </section>
                </div>
            </div>

            
            <div class="columns is-multiline">
                <div class="column is-half-tablet is-offset-one-quarter-tablet">
                    <section class="hero-footer mb-6 p-6">
                        <font-awesome-icon icon="angles-down" />

                        <p class="subtitle is-size-7">scroll kebawah</p>
                    </section>
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
@import "../styles/component/maincover.scss";
// @import "../styles/global.scss";
</style>