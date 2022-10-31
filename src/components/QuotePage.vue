<template>
    <div :class="theme">
        <section class="hero is-small">
            <div class="hero-body">
                <div class="columns">
                    <div class="column is-half-tablet is-offset-one-quarter-tablet">
                        <section class="section is-paddingless">
                            <div class="container">
                                <img class="" src="../assets/contents/flower.png" style="width: 200px; height: 50px;">
                                <div class="notification is-light mt-2">
                                    <p class="subtitle is-size-4-tablet is-size-6-mobile">
                                        "{{ quote.kutipan }}"
                                    </p>
                                    <p class="subtitle is-size-4-tablet is-size-6-mobile is-capitalized is-italic"> {{ quote.ayat }} </p>       
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

// LIFECYCLE
onBeforeMount(() => {
    store.actions.getTheme();
});

onMounted(() => {
    store.actions.getQuote();
})

</script>


<style lang="scss" scoped>
@import "../styles/component/quotepage.scss";
// @import "../styles/global.scss";
</style>