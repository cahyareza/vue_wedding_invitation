<template>
  <div class="columns is-centered mt-3 mb-6 is-mobile">
    <div v-for="(value, name, index) in countdown" :key="index">
      <div class="column">
        <div class="conto">
          <p class="subtitle-2  is-size-5-mobile is-size-4-tablet mb-1">{{ value }}</p>
          <p class="subtitle-2  is-size-5-mobile is-size-4-tablet mt-1">{{ name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { inject, computed, onMounted } from 'vue'
import useTimer from "../../../hooks/useTimer";

// LOAD STATE
const store = inject('store');

// PORTOFOLIO
const portofolio = computed(() => store.state.portofolio);

// HOOKS
const { createTimer, countdown } = useTimer();

const timer = setInterval(() => {
  createTimer(new Date(portofolio.value.datetime_resepsi).getTime(), countdown, () => {
    clearInterval(timer)
  })
}, 1000)

// // THEME
// const theme = computed(() => store.state.theme); 

// // LIFECYCLE
// onBeforeMount(() => {
//     store.actions.getTheme();
// });

onMounted(() => {  
    store.actions.getPortofolio();
});

</script>

<style lang="scss" scoped>
// @import "../../../styles/component/parts/timelines/countdown.scss";
// @import "../styles/global.scss";

// .subtitle {
//   color: blue;
// }

</style>