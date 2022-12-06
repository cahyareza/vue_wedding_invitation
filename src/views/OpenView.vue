<template>
  <section>
    <!-- <OpenCover id="openCover"></OpenCover> -->
    <OpenCover @onload="getSlug()" :portofolio="portofolio"></OpenCover>
  </section>
</template>

<script setup>
import { inject, computed, onMounted, defineEmits } from 'vue'
import OpenCover from '@/components/OpenCover.vue'

const emit = defineEmits(['slug']);

// emit
const getSlug = () => {
    emit("slug", store.actions.getSlug().value)
}

// LOAD STATE
const store = inject('store');

// PORTOFOLIO
// eslint-disable-next-line no-unused-vars
const portofolio = computed(() => store.state.portofolio);
// eslint-disable-next-line no-unused-vars
const theme = computed(() => store.state.theme); 
// eslint-disable-next-line no-unused-vars
const themeproduct = computed(() => store.state.themeproduct); 

onMounted(() => {
    store.actions.getTheme();
    store.actions.getThemeProduct();
    store.actions.getPortofolio();
})

</script>