<template>
  <section>
    <form @submit.prevent="submit" class="vl-parent" ref="formContainer">
        <!-- your form inputs goes here-->
        <label class="is-hidden"><input type="checkbox" v-model="fullPage">Full page?</label>
    </form>
  </section>
</template>

<script setup>
import {useLoading} from 'vue-loading-overlay'

import { ref, onMounted, defineEmits } from "vue";

// EMIT
const emit = defineEmits(['timer']);
const getTimer = () => {
    emit("timer")
}

const $loading = useLoading({
    // options
});
// or use inject without importing useLoading
// const $loading =  inject('$loading')

const fullPage = ref(false)

const submit = (actions) => {
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
    }, actions)
}

onMounted( () => {
  submit(getTimer());
})

</script>