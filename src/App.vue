<template>
  <router-view 
    @slug='navigate'
    :portofolio="portofolio" 
    :theme="theme"
    :themeproduct="themeproduct" 
    :quote="quote"
    :acara="acara" 
    :invitation="invitation"
    :story="story" 
    :dompet="dompet" 
    :multiimage="multiimage"
    :multiimagetheme="multiimagetheme"
    :portobackground="portobackground"
  />
  <!-- <RouterView :portofolio="portofolio" /> -->
</template>

<script setup>
import { onMounted } from 'vue'
import injectStore from '@/hooks/injectStore.js'
import AOS from "aos";

const {store, portofolio, theme, themeproduct, quote, acara, 
  invitation, story, dompet, multiimage, multiimagetheme, portobackground } = injectStore()

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
  store.actions.getMultiimageTheme2(val);
  store.actions.getPortoBackground2(val);
}

onMounted(() => {
    AOS.init();
})
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
