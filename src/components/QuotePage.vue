<template>
    <div :class="theme">
        <section class="hero is-small">
            <div class="hero-body">
                <div class="columns">
                    <div class="column is-half-tablet is-offset-one-quarter-tablet">
                        <section class="section is-paddingless">
                            <div class="container">
                                <img class="filter" :src="themeproduct.theme?.quote_fitur">
                                <div class="notification mt-2">
                                    <div v-if="quote.kutipan">
                                        <p class="subtitle is-size-4-tablet is-size-7-mobile">
                                            "{{ quote.kutipan }}"
                                        </p>
                                        <p class="subtitle is-size-4-tablet is-size-7-mobile is-capitalized is-italic"> {{ quote.ayat }} </p>       
                                    </div>
                                    <div v-else>
                                        <p class="subtitle is-size-4-tablet is-size-7-mobile mb-1">
                                            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
                                        </p>
                                        <p class="subtitle is-size-4-tablet is-size-7-mobile mt-1 mb-2">
                                            Assalamu’alaikum Warrahmatullahi Wabarakatuh
                                        </p>
                                        <p class="subtitle is-size-4-tablet is-size-7-mobile mt-2">
                                            Dengan memohon Ridho dan Rahmat Allah SWT. Ya Allah, dengan segala kemurahan hati-Mu, kami hendak memohon Ridha-Mu, dan melaksanakan Sunnah Rasul-Mu, untuk menyelenggarakan acara pernikahan putra dan putri kami, untuk membentuk keluarga yang sakinah, mawaddah, warahmah.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
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

// QUOTE
const quote = computed(() => store.state.quote); 

// THEME
const theme = computed(() => store.state.theme);
const themeproduct = computed(() => store.state.themeproduct);  

// LIFECYCLE
onBeforeMount(() => {
    store.actions.getTheme();
    store.actions.getThemeProduct();
});

onMounted(() => {
    store.actions.getQuote();
})

</script>


<style lang="scss" scoped>
@import "../styles/component/quotepage.scss";
// @import "../styles/global.scss";
</style>