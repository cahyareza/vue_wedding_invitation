<template>
    <div :class="theme">
        <section class="hero is-fullheight">
            <div class="columns is-multiline">
                <div class="column is-half-tablet is-offset-one-quarter-tablet">
                    <section class="section">
                        <p class="subtitle">Undangan Pernikahan</p>
                    
                        <p class="title mt-5">{{couples.perempuan?.name }} & {{couples.laki_laki?.name }}</p>

                        <p class="subtitle mt-4 is-size-6">{{ acara.tanggal_resepsi }}</p>
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
    </div>
</template>

<script setup>
import { inject, computed, onMounted } from 'vue'
// import moment from 'moment'

const store = inject('store');

const couples = computed(() => store.state.couples); 

store.actions.getCouples();

const acara = computed(() => store.state.acara); 

store.actions.getAcara();


// THEME
const theme = computed(() => store.state.theme); 

store.actions.getTheme();

onMounted(() => {  
    store.actions.getTheme();
});

console.log(theme)

// const tanggal_resepsi = computed(() => moment(String(new Date("05 October 2011 14:48 UTC").getTime())).format('MM/DD/YYYY'))
</script>

<style lang="scss" scoped>
@import "../styles/component/maincover.scss";
</style>