<template>
    <div :class="theme">
        <section class="hero is-small  has-background-link">
            <div class="hero-body">
                <div class="columns">
                    <div class="column is-half-tablet is-offset-one-quarter-tablet">
                        <section class="section is-paddingless">
                            <div class="container">
                                <p class="subtitle is-size-7 mb-1">presented by</p>
                                <p class="subtitle is-size-6 has-text-weigth-bold mt-1">The progesio</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { inject, onMounted, computed } from "vue";

// Theme
const store = inject('store');

const theme = computed(() => store.state.theme); 

store.actions.getTheme();

onMounted(() => {  
    store.actions.getTheme();
});

</script>


<style lang="scss" scoped>
@import "../styles/component/footerpage.scss";
</style>