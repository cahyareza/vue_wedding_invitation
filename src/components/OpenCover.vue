<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-multiline">
                    <div class="column is-half-tablet is-offset-one-quarter-tablet">
                        <div class="">
                            <p class="title">
                            <!-- {{ couples.perempuan?.name }} & {{ couples.laki_laki?.name }} -->
                                {{ portofolio.pname }} & {{ portofolio.lname }} 
                            </p>
                            <button class="button">
                                <router-link :to="`/main/${slug}`">Buka Undangan</router-link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { inject, computed, onMounted } from 'vue'

const store = inject('store');

const portofolio = computed(() => store.state.portofolio);

const slug = store.actions.getSlug().value;

onMounted(() => {
    store.actions.getPortofolio();
})
</script>