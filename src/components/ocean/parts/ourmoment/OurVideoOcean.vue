<template>
    <div v-if="portofolio.video">
        <figure class="image is-16by9">
            <iframe class="has-ratio" width="640" height="360" :src="portofolio.video" frameborder="0" allowfullscreen allow="fullscreen;"></iframe>
        </figure>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

// GET PORTOFOLIO
defineProps({
  portofolio: { type: Object },
});
</script>