<template>
  <router-view @slug='navigate' />
  <!-- <RouterView :portofolio="portofolio" /> -->
</template>

<script setup>
import { inject, computed } from 'vue'

// LOAD STATE
const store = inject('store');

// PORTOFOLIO
// eslint-disable-next-line no-unused-vars
const portofolio = computed(() => store.state.portofolio);

const navigate = val => {
  store.actions.getPortofolio2(val);
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
