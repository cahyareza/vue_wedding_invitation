<template>
    <div v-if="portofolio.video">
        <section class="container">
            <iframe width="320" height="220" :src="portofolio.video"></iframe>
        </section>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

// GET PORTOFOLIO
defineProps({
  portofolio: { type: Object },
});
</script>