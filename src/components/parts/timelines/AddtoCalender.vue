<template>
    <button ref="default_button">Add to calendar</button>
</template>

<script setup>
import { onMounted, ref, inject, computed, watchEffect } from "vue";
import { atcb_action } from 'add-to-calendar-button';
import 'add-to-calendar-button/assets/css/atcb.css';

const store = inject('store');
// console.log(store);

const addtocalender = computed(() => store.state.addtocalender);

store.actions.getAddtocalender();

watchEffect(
    () => {
        console.log(addtocalender.value);
    },
    {
        onTrigger(e) {
            console.log(e);
        }
    },
)

const default_button = ref(null)

const config = {
    name: addtocalender.value.name,
    startDate: addtocalender.value.startDate,
}

// console.log(config);

onMounted(() => {
    // store.actions.getAddtocalender();
    const button = default_button.value
    button.addEventListener('click', () => atcb_action(config, button));
})

</script>