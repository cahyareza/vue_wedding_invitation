<template>
  <div class="columns is-centered mt-3 mb-6 is-mobile">
    <div v-for="(value, name, index) in countdown" :key="index">
      <div class="column">
        <div class="conto">
          <p class="subtitle-5  is-size-5-mobile is-size-4-tablet mb-1">{{ value }}<br>{{ name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { computed } from 'vue'
import useTimer from "@/hooks/useTimer";
import {useCounterStore} from '@/stores/store'

// LOAD STATE
const store = useCounterStore();

// PORTOFOLIO
const portofolio = computed(() => store.state.portofolio);

// HOOKS
const { createTimer, countdown } = useTimer();

const timer = setInterval(() => {
  createTimer(new Date(portofolio.value.datetime_countdown).getTime(), countdown, () => {
    clearInterval(timer)
  })
}, 1000)
</script>