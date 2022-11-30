<template>
    <div :class="theme">
        <div class="low-opacity-bg-image" :style="{ 'background-image': 'url(' + portofolio.cover_background + ')' }">
            <section class="hero is-fullheight">
                <div class="columns is-multiline">
                    <div class="column is-half-tablet is-offset-one-quarter-tablet">
                        <section class="section">
                            <p class="subtitle is-uppercase is-size-5">Undangan Pernikahan</p>

                            <img class="filter" :src="themeproduct.theme?.cover_fitur">
                            
                            <p class="title is-size-3 is-capitalized mb-2">
                                {{ portofolio.pname }} <br>
                                & <br>
                                {{ portofolio.lname }}
                            </p>

                            <img class="filter" :src="themeproduct.theme?.cover_fitur" style="transform: rotate(180deg);">

                            <p class="subtitle mt-4 is-size-6">{{ tanggal(portofolio.tanggal_countdown) }}</p>
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
import moment from 'moment';

// LOAD STATE
const store = inject('store');

// PORTOFOLIO
const portofolio = computed(() => store.state.portofolio);

// THEME
const theme = computed(() => store.state.theme); 
const themeproduct = computed(() => store.state.themeproduct); 

// METHOD
const tanggal = (value) => {
    return moment(value).locale('id').format('dddd, DD MMMM YYYY');
}

// LIFECYCLE
onBeforeMount(() => {
    store.actions.getTheme();
    store.actions.getThemeProduct();
});

onMounted(() => {  
    store.actions.getPortofolio();
});

</script>

<style lang="scss" scoped>
@import "../styles/component/maincover.scss";
</style>