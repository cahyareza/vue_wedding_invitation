<template>
    <button class= "button is-rounded" ref="default_button">Simpan acara di kalender</button>
</template>

<script setup>
import { onMounted, ref, inject, computed, toRaw } from "vue";
import { atcb_action } from 'add-to-calendar-button';
import 'add-to-calendar-button/assets/css/atcb.css';

const store = inject('store');

const addtocalender = computed(() => store.state.addtocalender);

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

const getaddtocalender = async () => {
    await store.actions.getAddtocalender();
    const rawaddtocalender = toRaw(addtocalender.value);
    const config = rawaddtocalender

    const button = default_button.value
    button.addEventListener('click', () => atcb_action(config, button));
}


onMounted( () => {
    getaddtocalender();
})

</script>