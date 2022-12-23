<template>
    <div :class="theme">
        <section class="hero is-small">
            <div class="hero-body">
                <div class="section py-0">
                    <div class="columns">
                        <div class="column is-half-tablet is-offset-one-quarter-tablet">
                            <section class="section is-paddingless">
                                <div class="container">
                                    <p class="subtitle2 is-size-7 mb-1">presented by</p>
                                    <p class="subtitle2 is-size-6 has-text-weigth-bold mt-1">The progesio</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

// GET PROPS
defineProps({
  theme: { type: Object },
});
</script>


<style lang="scss" scoped>
@import "../styles/component/footerpage.scss";
</style>