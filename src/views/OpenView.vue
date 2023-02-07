<template>
  <section>
    <!-- <OpenCover id="openCover"></OpenCover> -->
    <Suspense>
      <template #default>
        <div v-if="themeproduct.theme?.slug === 'theme-1' || themeproduct.theme?.slug === 'theme-2' || themeproduct.theme?.slug === 'theme-3'
          || themeproduct.theme?.slug === 'theme-4' || themeproduct.theme?.slug === 'theme-5'">
          <OpenCover 
            :direction="direction"
            :themeproduct="themeproduct" 
            >
          </OpenCover>
        </div>
         <div v-else-if="themeproduct.theme?.slug === 'theme-6'">
          <OpenCoverCardo 
            :direction="direction">
          </OpenCoverCardo>
        </div>
        <div v-else-if="themeproduct.theme?.slug === 'theme-7'"> 
          <OpenCoverGrane 
            :direction="direction">
          </OpenCoverGrane>
        </div>
        <div v-else-if="themeproduct.theme?.slug === 'theme-8'"> 
          <OpenCoverCosmos 
            :direction="direction">
          </OpenCoverCosmos>
        </div>
        <div v-else>
          <OpenCoverOcean 
            :direction="direction">
          </OpenCoverOcean>
        </div>
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
import OpenCoverCardo from '@/components/cardo/OpenCoverCardo.vue'
import OpenCoverCosmos from '@/components/cosmos/OpenCoverCosmos.vue'
import OpenCoverGrane from '@/components/grane/OpenCoverGrane.vue'
import OpenCoverOcean from '@/components/ocean/OpenCoverOcean.vue'
import { ref, onMounted, inject, computed } from 'vue'
import {useLoading} from 'vue-loading-overlay'

// LOAD STATE
const store = inject('store');

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