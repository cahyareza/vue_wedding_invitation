<template>
    <div :class="theme">
        <div class="low-opacity-bg-image" :style="{ 'background-image': 'url(' + multiimage[6] + ')' }">
            <section class="hero is-large">
                <div class="hero-body">
                    <div class="section py-0">
                        <section class="section is-paddingless" data-aos="fade-down" data-aos-duration="1000">
                            <div class="columns is-multiline is-vcentered">
                                <div class="column is-6-tablet is-12-mobile">
                                    <div class="container">
                                        <p class="subtitle2 is-capitalized is-size-5-mobile is-size-4-tablet mb-2">Terimakasih</p>
                                        <p class="subtitle2 is-capitalized is-size-5-mobile is-size-4-tablet mb-2">Sampai jumpa di hari bahagia kami</p>
                                    </div>
                                </div>
                                <div class="column is-6-tablet is-12-mobile">
                                    <div class="container">
                                        <p class="title2 is-capitalized is-size-2 has-text-weigth-bold mt-1">{{ portofolio.lname }} & {{ portofolio.pname }}</p>
                                        <p class="subtitle2 is-capitalized is-size-5-mobile is-size-4-tablet mb-2">Beserta keluarga</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </div>
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