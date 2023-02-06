<template>
    <div :class="theme">
        <section class="hero is-large">
            <div class="hero-body">
                <div class="container py-0">
                    <section class="section is-paddingless" data-aos="fade-down" data-aos-duration="1000">
                        <div class="columns is-multiline">
                            <div class="column is-12-tablet is-12-mobile p-6">
                                <figure class="image is-2by3">
                                    <img :src="multiimage[6]">
                                </figure>
                            </div>
                            <div class="column is-12-tablet is-12-mobile">
                                <div class="container">
                                    <p class="subtitle2 is-capitalized is-size-5-mobile is-size-4-tablet mb-2">Sampai Jumpa di Hari Bahagia Kami</p>
                                    <p class="title2 is-capitalized is-size-2 has-text-weigth-bold mt-1">{{ portofolio.lname }} & {{ portofolio.pname }}</p>
                                </div>
                            </div>
                        </div>
                    </section>
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
  multiimage: { type: Array },
});
</script>


<style lang="scss" scoped>
@import "../../styles/component/happypage.scss";
</style>