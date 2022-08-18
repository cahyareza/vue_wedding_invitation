<template>
    <button ref="default_button">Add to calendar</button>
    <p>{{ addtocalender }}</p>
</template>

<script setup>
import { onMounted, ref, inject, computed } from "vue";
import { atcb_action } from 'add-to-calendar-button';
import 'add-to-calendar-button/assets/css/atcb.css';
import axios from 'axios';

const store = inject('store');

const addtocalender = computed(() => store.state.addtocalender);

store.actions.getAddtocalender();

// watchEffect(
//     () => {
//         console.log(addtocalender.value);
//     },
//     {
//         onTrigger(e) {
//             console.log(e);
//         }
//     },
// )

const default_button = ref(null)

var config = null;

console.log(addtocalender.value);

// const token = reactive(rawToken);
// const rawToken = toRaw(addtocalender.value.name);

// console.log(rawToken);

onMounted(() => {
    store.actions.getAddtocalender();
    axios
        .get("http://localhost:3000/hadir")
        .then((response) => {
            config = response.data,
            console.log(response.data)
        })
        .catch((err) => console.log(err));

    store.actions.getAddtocalender();

    const button = default_button.value
    button.addEventListener('click', () => atcb_action(config, button));
})

</script>