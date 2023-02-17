<template>
    <div :class="theme">
        <section class="hero is-fullheight">
            <div class="hero-body is-paddingless">
                <div class="section is-marginless p-2">
                    <div v-if="quote.kutipan" data-aos="fade-up"
                        data-aos-offset="300" data-aos-duration="1000"
                        data-aos-easing="ease-in-sine" data-aos-delay="100">
                        <p v-if="quote.pembuka" class="subtitle is-size-5-desktop is-size-6-mobile">
                            {{ quote.pembuka }}
                        </p>
                        <p class="subtitle is-size-5-desktop is-size-6-mobile">
                            "{{ quote.kutipan }}"
                        </p>
                        <p class="subtitle is-size-5-desktop is-size-6-mobile is-capitalized is-italic"> {{ quote.ayat }} </p>       
                    </div>
                    <div v-else data-aos="fade-up"
                        data-aos-offset="300" data-aos-duration="1000"
                        data-aos-easing="ease-in-sine" data-aos-delay="100">
                        <p class="subtitle is-size-5-desktop is-size-6-mobile mb-1">
                            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
                        </p>
                        <p class="subtitle is-size-5-desktop is-size-6-mobile mt-1 mb-2">
                            Assalamu’alaikum Warrahmatullahi Wabarakatuh
                        </p>
                        <p class="subtitle is-size-5-desktop is-size-6-mobile mt-2">
                            Dengan memohon Ridho dan Rahmat Allah SWT. Ya Allah, dengan segala kemurahan hati-Mu, kami hendak memohon Ridha-Mu, dan melaksanakan Sunnah Rasul-Mu, untuk menyelenggarakan acara pernikahan putra dan putri kami, untuk membentuk keluarga yang sakinah, mawaddah, warahmah.
                        </p>
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
});
</script>


<style lang="scss" scoped>
@import "../../styles/component/quotepage.scss";
// @import "../styles/global.scss";
</style>