<template>
  <section>
    <!-- <OpenCover id="openCover"></OpenCover> -->
    <Suspense>
      <template #default>
        <OpenCover></OpenCover>
      </template>
      <template #fallback>
        <form @submit.prevent="submit" class="vl-parent" ref="formContainer">
        <!-- your form inputs goes here-->
        <label class="is-hidden"><input type="checkbox" v-model="fullPage">Full page?</label>
    </form>

      </template>
    </Suspense>
  </section>
</template>

<script setup>
import OpenCover from '@/components/OpenCover.vue'
import { ref, onBeforeMount } from 'vue'
import {useLoading} from 'vue-loading-overlay'

// VUE LOADING
const $loading = useLoading({
    // options
});

const fullPage = ref(true)

const submit = () => {
    const loader = $loading.show({
        // Optional parameters
        color: '#ffffff',
        loader: 'dots',
        width: 90,
        height: 90,
        backgroundColor: 'black',
        opacity: 0.6,
        zIndex: 999,
    });
    // simulate AJAX
    setTimeout(() => {
        loader.hide()
    }, 4000)
}

// LIFECYCLE
onBeforeMount(() => {
    submit()
});

</script>