<template>
    <div :class="theme">
        <section class="hero is-light is-large">
            <div class="columns">
                <div class="column is-half-tablet is-offset-one-quarter-tablet">
                    <section class="section pt-3 pb-1">
                        <div class="container">
                            <p class="subtitle-2 is-uppercase is-size-5 mt-3 p-3">
                                Acara Akan Diselenggarakan<br>
                                <img class="filter mt-1" :src="themeproduct.theme?.line">
                            </p>

                            <CountDown></CountDown>

                            <AddtoCalender></AddtoCalender>

                        </div>
                    </section>

                    <div class="container px-5">
                        <GuestBook></GuestBook>
                    </div>
                </div>
            </div>

        </section>
        <GoToOurWedding></GoToOurWedding>
    </div>
</template>


<script setup>

import CountDown from '@/components/parts/timelines/CountDown.vue'
import GuestBook from '@/components/parts/timelines/GuestBook.vue'
import GoToOurWedding from '@/components/parts/timelines/GoToOurWedding.vue'
import AddtoCalender from '@/components/parts/timelines/AddtoCalender.vue'

import { inject, computed, onBeforeMount } from 'vue'

// LOAD STATE
const store = inject('store');

// THEME
const theme = computed(() => store.state.theme); 
const themeproduct = computed(() => store.state.themeproduct);

// LIFECYCLE
onBeforeMount(() => {
    store.actions.getTheme();
    store.actions.getThemeProduct();
});
</script>

<style lang="scss" scoped>
@import "../styles/component/timelines.scss";
// @import "../styles/global.scss";
</style>