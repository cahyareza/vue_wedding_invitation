<template>
  <section>
    <!-- <OpenCover id="openCover"></OpenCover> -->
    <OpenCover 
      :portofolio="portofolio"
      :theme="theme"
      :themeproduct="themeproduct" 
    >
    </OpenCover>
  </section>
</template>

<script setup>
import { inject, defineEmits, defineProps, onMounted } from 'vue'
import OpenCover from '@/components/OpenCover.vue'

// LOAD STATE
const store = inject('store');

// EMIT
const emit = defineEmits(['slug']);
const getSlug = () => {
    emit("slug", store.actions.getSlug().value)
}

// GET PROPS
defineProps({
  portofolio: { type: Object },
  theme: { type: Object },
  themeproduct: { type: Object },
});

// LIFECYCLE
onMounted(() => {
    getSlug();
});

</script>