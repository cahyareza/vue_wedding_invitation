<template>
  <section>
    <!-- <OpenCover id="openCover"></OpenCover> -->
    <Suspense>
      <template #default>
        <OpenCoverCardo 
          :direction="direction">
        </OpenCoverCardo>
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
import OpenCoverCardo from '@/components/cardo/OpenCoverCardo.vue'
import { ref, onBeforeMount, inject } from 'vue'
import {useLoading} from 'vue-loading-overlay'

// LOAD STATE
const store = inject('store');

// TO PARAMS
const direction = store.actions.getTo().value

// VUE LOADING
const $loading = useLoading({
    // options
});

const fullPage = ref(true)

const submit = () => {
    const loader = $loading.show({
        // Optional parameters
        color:'black',
        loader: 'dots',
        width: 90,
        height: 90,
        backgroundColor:'#ffffff',
        opacity: 1,
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