<template>
    <div :class="theme">
        <div class="low-opacity-bg-image">
            <section class="hero is-fullheight">
                <div class="columns is-multiline">
                    <div class="column is-half-tablet is-offset-one-quarter-tablet">
                        <section class="section">
                            <p class="subtitle is-uppercase is-size-5">Undangan Pernikahan</p>

                            <img class="" src="../assets/contents/ukiran.png" style="width: 180px; height: 31px;">
                            
                            <p class="title is-size-3 is-capitalized">{{ portofolio.pname }} & {{ portofolio.lname }}</p>

                            <img class="" src="../assets/contents/ukiran.png" style="width: 180px; height: 31px; transform: rotate(180deg);">

                            <p class="subtitle mt-4 is-size-6">{{ portofolio.tanggal_resepsi }}</p>
                        </section>
                    </div>
                </div>

                
                <div class="columns is-multiline">
                    <div class="column is-half-tablet is-offset-one-quarter-tablet">
                        <section class="hero-footer mb-6 p-6">
                            <span class="icon">
                                <font-awesome-icon icon="angles-down" />
                            </span>

                            <p class="subtitle is-size-7">scroll kebawah</p>
                        </section>
                    </div>
                </div>
            
            </section>
        </div>
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