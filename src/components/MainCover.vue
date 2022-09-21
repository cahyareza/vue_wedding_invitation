<template>
    <section class="hero is-fullheight">
        <div class="columns is-multiline">
            <div class="column is-half-tablet is-offset-one-quarter-tablet">
                <section class="section">
                    <p class="subtitle is-family-sans-serif">Undangan Pernikahan</p>
                
                    <p class="title mt-5 is-family-sans-serif">{{couples.perempuan?.name }} & {{couples.laki_laki?.name }}</p>

                    <p class="subtitle mt-4 is-size-6 is-family-sans-serif">{{ acara.tanggal_resepsi }}</p>
                </section>
            </div>
        </div>

        
        <div class="columns is-multiline">
            <div class="column is-half-tablet is-offset-one-quarter-tablet">
                <section class="hero-footer mb-6 p-6">
                    <font-awesome-icon icon="angles-down" />

                    <p class="subtitle is-size-7">scroll kebawah</p>
                </section>
            </div>
        </div>
    </section>
</template>

<script setup>
import { inject, computed } from 'vue'
// import moment from 'moment'

const store = inject('store');

const couples = computed(() => store.state.couples); 

store.actions.getCouples();

const acara = computed(() => store.state.acara); 

store.actions.getAcara();

// const tanggal_resepsi = computed(() => moment(String(new Date("05 October 2011 14:48 UTC").getTime())).format('MM/DD/YYYY'))
</script>

<style lang="scss" scoped>
@import "../styles/component/maincover.scss";
</style>