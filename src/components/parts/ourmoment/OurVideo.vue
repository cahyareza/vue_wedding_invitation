<template>
    <section class="container">
        <iframe width="350" height="220" :src="ourmoment?.video"></iframe>
    </section>
</template>

<script setup>
import { inject, computed } from 'vue'

const store = inject('store');

const ourmoment = computed(() => store.state.ourmoment); 

store.actions.getOurmoment();


</script>