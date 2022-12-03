<template>
  <section class="hero is-large">
    <section class="container mt-7">
        <div class="mt-4">
        <iframe 
            data-aos="zoom-in"
            class="iframe mx-auto mt-4 mb-1" height="300" 
            :src= "portofolio.link_iframe"
            frameborder="0" scrolling="no" 
            marginheight="0" marginwidth="0"></iframe>
        </div>
        <p class="subtitle is-size-7 mt-1 mb-3">{{ portofolio.lokasi }}</p>
        <a class="button is-rounded is-size-7 mb-5" :href="portofolio.link_gmap">
           <font-awesome-icon icon="fa-solid fa-location-dot" />
           &nbsp;Google Map
        </a>
        
    </section>
  </section>
</template>

<script setup>
import { inject, computed, onMounted } from 'vue'

const store = inject('store');

const portofolio = computed(() => store.state.portofolio);

store.actions.getPortofolio();

onMounted(() => {  
    store.actions.getPortofolio();
});

</script>