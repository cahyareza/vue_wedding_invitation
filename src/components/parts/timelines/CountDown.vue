<template>
  <div class="columns is-centered mt-3 mb-6 is-mobile">
    <div v-for="(value, name, index) in countdown" :key="index">
      <div class="column">
        <p class="subtitle is-size-5-mobile is-size-4-tablet mb-1">{{ value }}</p>
        <p class="subtitle is-size-5-mobile is-size-4-tablet mt-1">{{ name }}</p>
      </div>
    </div>
  </div>
</template>


<script setup>
import { inject, computed } from 'vue'
import useTimer from "../../../hooks/useTimer";

const store = inject('store');

const portofolio = computed(() => store.state.portofolio);

store.actions.getPortofolio();

const { createTimer, countdown } = useTimer();

const timer = setInterval(() => {
  createTimer(new Date(portofolio.value.datetime_resepsi).getTime(), countdown, () => {
    clearInterval(timer)
  })
}, 1000)
</script>