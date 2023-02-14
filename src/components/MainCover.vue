<template>
    <div :class="theme">
        <div v-if="themeproduct.theme?.slug === 'theme-9'"> 
            <div :class="theme">
                <section class="hero is-fullheight">
                    <div class="hero-body has-text-centered">
                        <div class="container"> 
                            <section class="box">   
                                <div class="column
                                is-three-fifths
                                is-offset-one-fifth
                                ">                
                                    <p class="title1 is-size-3 is-capitalized mb-2 has-text-weight-bold mb-1">
                                        {{ portofolio.pname }}
                                    </p>
                                    <hr class="line p-1 is-marginless">
                                    <p class="title1 is-size-3 is-capitalized mb-2 has-text-weight-bold mt-1">
                                        {{ portofolio.lname }}
                                    </p>
                                    <p class="subtitle1 mt-0 is-size-6 is-uppercase has-text-weight-bold">{{ tanggal(portofolio.tanggal_countdown) }}</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <div v-else>
            <div v-if="themeproduct.theme?.background_cover">
                <div class="low-opacity-bg-image" :style="{ 'background-image': 'url(' + themeproduct.theme?.background_cover + ')' }">
                    <section class="hero is-fullheight">
                        <div class="section pt-2">
                            <div class="columns is-multiline">
                                <div class="column is-half-tablet is-offset-one-quarter-tablet mt-4">
                                    <section class="section">
                                        <p class="subtitle is-uppercase is-size-5">THE WEDDING OF</p>

                                        <img class="filter" :src="themeproduct.theme?.cover_fitur">
                                        
                                        <p class="title is-size-3 is-capitalized mb-2">
                                            {{ portofolio.pname }} <br>
                                            & <br>
                                            {{ portofolio.lname }}
                                        </p>

                                        <img class="filter" :src="themeproduct.theme?.cover_fitur" style="transform: rotate(180deg);">

                                        <p class="subtitle mt-0 is-size-6 is-uppercase">{{ tanggal(portofolio.tanggal_countdown) }}</p>
                                    </section>
                                </div>
                            </div>
                        </div>

                        <div class="section pb-1">
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
                        </div>
                    </section>
                </div>
            </div>
            <div v-else>
                <div class="low-opacity-bg-image" :style="{ 'background-image': 'url(' + portofolio.cover_background + ')' }">
                    <section class="hero is-fullheight">
                        <div class="section pt-2">
                            <div class="columns is-multiline">
                                <div class="column is-half-tablet is-offset-one-quarter-tablet">
                                    <section class="section">
                                        <p class="subtitle is-uppercase is-size-5">THE WEDDING OF</p>

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
                        </div>

                        <div class="section pb-1">
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
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
import useMethod from '@/hooks/useMethod.js'

// GET PORTOFOLIO
defineProps({
  portofolio: { type: Object },
  theme: { type: Object },
  themeproduct: { type: Object },
  quote: { type: Object },
});

const {tanggal} = useMethod()
</script>

<style lang="scss" scoped>
@import "../styles/component/maincover.scss";
</style>