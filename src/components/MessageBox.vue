<template>
    <div :class="theme">
        <section class="hero is-large">
            <div class="columns">
                <div class="column is-half-tablet is-offset-one-quarter-tablet">
                    <section class="section pt-4">
                        <div class="container">
                            <p class="subtitle2 is-uppercase is-size-5">
                                Ucapan<br>
                                <img class="mt-1" src="../assets/contents/line.png" style="width: 180px; height: 30px;">
                            </p>
                        </div>
                    </section>
                    <MessageForm></MessageForm>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import MessageForm from '@/components/parts/messagebox/MessageForm.vue'

import { inject, computed, onBeforeMount } from 'vue'

// LOAD STATE
const store = inject('store');

// THEME
const theme = computed(() => store.state.theme); 

// LIFECYCLE
onBeforeMount(() => {
    store.actions.getTheme();
});
</script>

<style lang="scss" scoped>
@import "../styles/component/messagebox.scss";
// @import "../styles/global.scss";
</style>

