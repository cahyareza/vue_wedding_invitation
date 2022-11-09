<template>
    <div :class="theme">
        <section class="hero is-fullheight">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-multiline">
                        <div class="column is-half-tablet is-offset-one-quarter-tablet">
                            <div class="">
                                <p class="title is-size-3 mb-3">
                                    {{ portofolio.pname }}
                                </p>
                                <img class="filter is-rounded mb-3" :src="themeproduct.theme?.open_fitur">
                                <p class="title is-size-3">
                                    {{ portofolio.lname }} 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hero-footer">
                <button class="button">
                    <router-link :to="`/main/${slug}`">Buka Undangan</router-link>
                    <!-- <a :href="`/main/${slug}`">Buka Undangan</a> -->
                </button>
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
const themeproduct = computed(() => store.state.themeproduct); 

// SLUG
const slug = store.actions.getSlug().value;

// LIFECYCLE
onBeforeMount(() => {
    store.actions.getTheme();
    store.actions.getThemeProduct();
});

onMounted(() => {
    store.actions.getPortofolio();
})
</script>


<style lang="scss" scoped>
@import "../styles/component/opencover.scss";
// @import "../styles/global.scss";
</style>