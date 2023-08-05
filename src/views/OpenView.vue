<template>
  <section>
    <Suspense>
      <template #default>
        <div v-if="themeproduct.theme?.slug === 'theme-1' || themeproduct.theme?.slug === 'theme-2' || themeproduct.theme?.slug === 'theme-3'
          || themeproduct.theme?.slug === 'theme-4' || themeproduct.theme?.slug === 'theme-5' || themeproduct.theme?.slug === 'theme-6'
          || themeproduct.theme?.slug === 'theme-7' || themeproduct.theme?.slug === 'theme-8'
          || themeproduct.theme?.slug === 'theme-11' || themeproduct.theme?.slug === 'theme-12'">
          <OpenCover 
            :direction="direction"
            :themeproduct="themeproduct" 
            :quote="quote"
            >
          </OpenCover>
        </div>
        <div v-else-if="themeproduct.theme?.slug === 'theme-10'">
          <OpenCoverBright 
            :direction="direction"
            :themeproduct="themeproduct" 
            :quote="quote"
            >
          </OpenCoverBright>
        </div>
      </template>
      <template #fallback>
        <form @submit.prevent="submit" class="vl-parent" ref="formContainer">
        <label class="is-hidden"><input type="checkbox" v-model="fullPage">Full page?</label>
        </form>
      </template>
    </Suspense>
  </section>
</template>

<script setup>
import OpenCover from '@/components/OpenCover.vue'
import OpenCoverBright from '@/components/bright/OpenCoverBright.vue'
import { ref, onMounted, computed } from 'vue'
import {useLoading} from 'vue-loading-overlay'
import {useCounterStore} from '@/stores/store'

// LOAD STATE
const store = useCounterStore();

// TO PARAMS
const direction = store.actions.getTo().value

// defineProps ({
//     themeproduct: { type: Object },
// })
const themeproduct = computed(() => store.state.themeproduct);

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
onMounted(() => {
    store.actions.getThemeProduct();
    submit();
});

</script>