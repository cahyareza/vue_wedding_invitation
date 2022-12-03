<template>
    <button class= "button-2 button mt-5" ref="default_button">Simpan acara di kalender</button>
</template>

<script setup>
import { onMounted, ref, inject, computed, toRaw } from "vue";
import { atcb_action } from 'add-to-calendar-button';
import 'add-to-calendar-button/assets/css/atcb.css';

const store = inject('store');

// const addtocalender = computed(() => store.state.addtocalender);

const portofolio = computed(() => store.state.portofolio);

console.log(portofolio)

const default_button = ref(null)

const getaddtocalender = async () => {
    await store.actions.getPortofolio();
    const config = {
        "name": toRaw(portofolio.value.name),
        "description": toRaw(portofolio.value.description),
        "startDate": toRaw(portofolio.value.startDate),
        "location": toRaw(portofolio.value.location),
        "startTime": toRaw(portofolio.value.startTime),
        "endTime": toRaw(portofolio.value.endTime),
        "options": [
          "Google",
          "Apple",
          "iCal",
          "Yahoo",
          "Outlook.com",
          "Microsoft365"
        ],
        "timeZone": toRaw(portofolio.value.timeZone),
        "trigger": toRaw(portofolio.value.trigger),
        "iCalFileName": toRaw(portofolio.value.iCalFileName)
    }

    const button = default_button.value
    button.addEventListener('click', () => atcb_action(config, button));
}


onMounted( () => {
    getaddtocalender();
})

</script>