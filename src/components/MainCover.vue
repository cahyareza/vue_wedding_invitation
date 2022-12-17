<template>
    <div :class="theme">
        <div class="low-opacity-bg-image" :style="{ 'background-image': 'url(' + portofolio.cover_background + ')' }">
            <section class="hero is-fullheight">
                <div class="section pt-2">
                    <div class="columns is-multiline">
                        <div class="column is-half-tablet is-offset-one-quarter-tablet">
                            <section class="section">
                                <p class="subtitle is-uppercase is-size-5">Undangan Pernikahan</p>

                                <img class="filter" :src="themeproduct.theme?.cover_fitur">
                                
                                <p class="title is-size-1 is-capitalized mb-2">
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
</template>

<script setup>
import { defineProps } from 'vue'
import moment from 'moment';

// GET PORTOFOLIO
defineProps({
  portofolio: { type: Object },
  theme: { type: Object },
  themeproduct: { type: Object },
});

// METHOD
const tanggal = (value) => {
    return moment(value).locale('id').format('dddd, DD MMMM YYYY');
}
</script>

<style lang="scss" scoped>
@import "../styles/component/maincover.scss";
</style>