<template>
    <div v-if="portofolio.video">
        <section class="container">
            <iframe width="350" height="220" :src="portofolio.video"></iframe>
        </section>
    </div>
</template>

<script setup>
import { inject, computed, onMounted } from 'vue'

const store = inject('store');

const portofolio = computed(() => store.state.portofolio);

onMounted(() => {  
    store.actions.getPortofolio();
});


</script>