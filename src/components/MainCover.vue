<template>
    <section class="hero is-info is-fullheight">
        <section class="section">
            <p class="subtitle">Undangan Pernikahan</p>
        
            <p class="title mt-5">{{couples.perempuan?.name }} & {{couples.laki_laki?.name }}</p>

            <p class="subtitle mt-4 is-size-6">17 . 7 . 2025</p>
        </section>

        <section class="hero-footer mb-6 p-6">
            <font-awesome-icon icon="angles-down" />

            <p class="subtitle is-size-7">scroll kebawah</p>
        </section>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const couples = ref([]);

onMounted(() => {
    fetch(' http://localhost:3000/couples')
    .then(response => response.json())
    .then(data => {
        couples.value = data
    });
});

</script>