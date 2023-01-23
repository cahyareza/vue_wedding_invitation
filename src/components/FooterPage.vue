<template>
    <div :class="theme">
        <section class="hero is-small">
            <div class="hero-body">
                <div class="section py-0">
                    <div class="columns">
                        <div class="column is-half-tablet is-offset-one-quarter-tablet">
                            <section class="section is-paddingless">
                                <div class="container">
                                    <p class="subtitle2 is-size-7 mb-1">presented by</p>
                                    <!-- <a class="subtitle2 is-size-6 has-text-weigth-bold mt-1" :href="web_url">einvitation.net</a> -->
                                    <a :href="web_url" target="_blank">
                                        <img src="../assets/logo_fix2.svg" width="112" height="28">
                                    </a>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

var web_url = process.env.VUE_APP_WEB_URL_FIX

// GET PROPS
defineProps({
  theme: { type: Object },
});
</script>


<style lang="scss" scoped>
@import "../styles/component/footerpage.scss";
</style>