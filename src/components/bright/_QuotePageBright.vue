<template>
    <div :class="theme">
        <div class="low-opacity-bg-image" :style="{ 'background-image': 'url(' + themeproduct.theme?.background_1 + ')' }">
            <section class="hero is-small">
                <div class="hero-body is-paddingless">
                    <div class="section py-5 is-marginless">
                        <div class="container">
                            <div v-if="themeproduct.theme?.quote_fitur">
                                <img class="filter" :src="themeproduct.theme?.quote_fitur">
                            </div>
                            <div v-if="themeproduct.theme?.slug == 'theme-3' || themeproduct.theme?.slug == 'theme-4'">
                                <div class="notification mt-2" data-aos="zoom-in" data-aos-duration="1000">
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
                                        <p class="subtitle is-size-6-tablet is-size-7-mobile mb-1">
                                            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
                                        </p>
                                        <p class="subtitle is-size-6-tablet is-size-7-mobile mt-1 mb-2">
                                            Assalamu’alaikum Warrahmatullahi Wabarakatuh
                                        </p>
                                        <p class="subtitle is-size-6-tablet is-size-7-mobile mt-2">
                                            Dengan memohon Ridho dan Rahmat Allah SWT. Ya Allah, dengan segala kemurahan hati-Mu, kami hendak memohon Ridha-Mu, dan melaksanakan Sunnah Rasul-Mu, untuk menyelenggarakan acara pernikahan putra dan putri kami, untuk membentuk keluarga yang sakinah, mawaddah, warahmah.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div v-else>
                            <!-- <div class="notification mt-2" data-aos="zoom-in" data-aos-duration="1000"> -->
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
                                    <p class="subtitle is-size-6-tablet is-size-7-mobile mb-1">
                                        بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
                                    </p>
                                    <p class="subtitle is-size-6-tablet is-size-7-mobile mt-1 mb-2">
                                        Assalamu’alaikum Warrahmatullahi Wabarakatuh
                                    </p>
                                    <p class="subtitle is-size-6-tablet is-size-7-mobile mt-2">
                                        Dengan memohon Ridho dan Rahmat Allah SWT. Ya Allah, dengan segala kemurahan hati-Mu, kami hendak memohon Ridha-Mu, dan melaksanakan Sunnah Rasul-Mu, untuk menyelenggarakan acara pernikahan putra dan putri kami, untuk membentuk keluarga yang sakinah, mawaddah, warahmah.
                                    </p>
                                </div>
                            <!-- </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
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
});
</script>


<style lang="scss" scoped>
@import "@/styles/component/quotepage.scss";
// @import "../styles/global.scss";
</style>