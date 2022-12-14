<template>
  <router-view 
    @slug='navigate'
    @slug2='navigate2' 
    :portofolio="portofolio" 
    :theme="theme"
    :themeproduct="themeproduct" 
    :quote="quote"
    :acara="acara" 
    :invitation="invitation"
    :story="story" 
    :dompet="dompet" 
    :multiimage="multiimage"
  />
  <!-- <RouterView :portofolio="portofolio" /> -->
</template>

<script setup>
import { inject, computed } from 'vue'

// LOAD STATE
const store = inject('store');

// PORTOFOLIO
const portofolio = computed(() => store.state.portofolio);

// THEME
const theme = computed(() => store.state.theme);
const themeproduct = computed(() => store.state.themeproduct); 

// QUOTE
const quote = computed(() => store.state.quote); 

// ACARA
const acara = computed(() => store.state.acara);

// INVITATION
const invitation = computed(() => store.state.invitation);

// STORY
const story = computed(() => store.state.story); 

// DOMPET
const dompet = computed(() => store.state.dompet); 

// MULTIIMAGE
const multiimage = computed(() => store.state.multiimage); 

const navigate = (val) => {
  store.actions.getPortofolio2(val);
  store.actions.getTheme2(val);
  store.actions.getThemeProduct2(val);
  store.actions.getQuote2(val);
  store.actions.getAcara2(val);
  store.actions.getInvitation2(val);
  store.actions.getStory2(val);
  store.actions.getDompet2(val);
  store.actions.getMultiimage2(val);
}
const navigate2 = (val) => {
  store.actions.getPortofolio2(val);
  store.actions.getTheme2(val);
  store.actions.getThemeProduct2(val);
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
