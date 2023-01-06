<template>
    <div :class="theme">
        <section class="hero is-small">
            <div class="hero-body">
                <div class="section py-0">
                    <div class="columns">
                        <div class="column is-half-tablet is-offset-one-quarter-tablet">
                            <section class="section is-paddingless" data-aos="fade-down" data-aos-duration="1000">
                                <div class="container">
                                    <p class="subtitle2 is-size-6 mb-2">Kami yang berbahagia</p>
                                    <p class="title2 is-size-4 has-text-weigth-bold mt-1">{{ portofolio.lname }} & {{ portofolio.pname }}</p>
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
import { defineProps } from 'vue'

// GET PROPS
defineProps({
  portofolio: { type: Object },
  theme: { type: Object },
  themeproduct: { type: Object },
});
</script>


<style lang="scss" scoped>
@import "../styles/component/thankpage.scss";
</style>