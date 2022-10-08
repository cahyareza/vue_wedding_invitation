<template>
  <section class="hero is-large">
    <section class="container mt-7">
        <div class="mt-4">
        <iframe 
            data-aos="zoom-in"
            class="w-10/12 mx-auto mt-4 mb-8" style="border: 5px solid black; border-radius: 4px;" height="300" 
            :src= "portofolio.link_iframe"
            frameborder="0" scrolling="no" 
            marginheight="0" marginwidth="0"></iframe>
        </div>
        <p class="subtitle is-size-7 mt-3 mb-3 p-2">{{ portofolio.lokasi }}</p>
        <button class="button is-rounded is-size-7 px-2  mb-3">
            <a :href="portofolio.link_gmap">Buka di Google Map
            </a>
        </button>
        
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