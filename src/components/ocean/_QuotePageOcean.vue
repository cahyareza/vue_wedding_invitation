<template>
    <div :class="theme">
        <section class="hero is-small">
            <div class="hero-body">
                <h1 class="title is-size-3-tablet is-size-4-mobile">THE PROMISE</h1>
                <div class="container">
                    <div class="columns is-multiline is-mobile">
                        <div v-for="image in multiimage.slice(0,3)" :key="image" class="column is-one-third is-marginless p-1">
                            <figure class="image is-2by3">
                                <img :src="image">
                            </figure>
                        </div>
                        <div class="column is-12">
                            <div class="box py-5-tablet my-5-tablet">
                                <div v-if="quote.kutipan" data-aos="fade-right"
                                    data-aos-offset="300" data-aos-duration="1000"
                                    data-aos-easing="ease-in-sine" data-aos-delay="100">
                                    <p v-if="quote.pembuka" class="subtitle is-size-6-tablet is-size-7-mobile">
                                        {{ quote.pembuka }}
                                    </p>
                                    <p class="subtitle is-size-6-tablet is-size-7-mobile">
                                        "{{ quote.kutipan }}"
                                    </p>
                                    <p class="subtitle is-size-5-tablet is-size-6-mobile is-capitalized is-italic"> {{ quote.ayat }} </p>       
                                </div>
                                <div v-else data-aos="fade-right"
                                    data-aos-offset="300" data-aos-duration="1000"
                                    data-aos-easing="ease-in-sine" data-aos-delay="100">
                                    <p class="subtitle is-size-5-desktop is-size-6-tablet is-size-7-mobile mb-1">
                                        بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
                                    </p>
                                    <p class="subtitle is-size-5-desktop is-size-6-tablet is-size-7-mobile mt-1 mb-2">
                                        Assalamu’alaikum Warrahmatullahi Wabarakatuh
                                    </p>
                                    <p class="subtitle is-size-5-desktop is-size-6-tablet is-size-7-mobile mt-2">
                                        Dengan memohon Ridho dan Rahmat Allah SWT. Ya Allah, dengan segala kemurahan hati-Mu, kami hendak memohon Ridha-Mu, dan melaksanakan Sunnah Rasul-Mu, untuk menyelenggarakan acara pernikahan putra dan putri kami, untuk membentuk keluarga yang sakinah, mawaddah, warahmah.
                                    </p>
                                </div>
                            </div>
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
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  theme: { type: Object },
  themeproduct: { type: Object },
  quote: { type: Object },
  multiimage: {type: Array },
});
</script>


<style lang="scss" scoped>
@import "../../styles/component/quotepage.scss";
// @import "../styles/global.scss";
</style>