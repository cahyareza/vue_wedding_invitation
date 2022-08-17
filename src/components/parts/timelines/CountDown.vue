<template>
  <div class="columns is-centered mt-6 mb-6">
    <div v-for="(value, name, index) in countdown" :key="index">
      <div class="column">
        <p class="subtitle is-size-5 mb-1">{{ value }}</p>
        <p class="subtitle is-size-5 mt-1">{{ name }}</p>
      </div>
    </div>
  </div>
</template>


<script setup>
import { inject, computed } from 'vue'
import useTimer from "../../../hooks/useTimer";

const store = inject('store');
// console.log(store);

const acara = computed(() => store.state.acara); 

store.actions.getAcara();
// console.log(acara.value.tanggal_resepsi);

const { createTimer, countdown } = useTimer();

const timer = setInterval(() => {
  createTimer(new Date(acara.value.tanggal_resepsi).getTime(), countdown, () => {
    clearInterval(timer)
  })
}, 1000)
</script>