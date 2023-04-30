<template>
    <div :class="theme">
        <div class="low-opacity-bg-image" :style="{ 'background-image': 'url(' + portofolio.cover_background + ')' }">
            <section class="hero is-fullheight py-6">
                <div class="hero-head mb-4"> 
                    <section class="section">
                        <p class="subtitle1 is-uppercase is-size-6-mobile is-size-5-tablet mb-3">PERNIKAHAN</p>
                        
                        <p class="title is-size-1-tablet is-size-3-mobile is-capitalized mt-4">
                            {{ portofolio.psurename }}
                            &
                            {{ portofolio.lsurename }}
                        </p>

                        <div class="container my-5-tablet">
                            <div v-if="quote.kutipan">
                                <p v-if="quote.pembuka" class="subtitle1 is-size-6-mobile">
                                    {{ quote.pembuka }}
                                </p>
                                <p class="subtitle1 is-size-6-mobile">
                                    "{{ quote.kutipan }}"
                                </p>
                                <p class="subtitle1 is-size-5-tablet is-size-6-mobile is-capitalized is-italic"> {{ quote.ayat }} </p>       
                            </div>
                            <div v-else>
                                <p class="subtitle1 is-size-5-desktop is-size-6-mobile mb-1">
                                    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
                                </p>
                                <p class="subtitle1 is-size-5-desktop is-size-6-mobile mt-1 mb-2">
                                    Assalamu’alaikum Warrahmatullahi Wabarakatuh
                                </p>
                                <p class="subtitle1 is-size-5-desktop is-size-6-mobile mt-2">
                                    Dengan memohon Ridho dan Rahmat Allah SWT. Ya Allah, dengan segala kemurahan hati-Mu, kami hendak memohon Ridha-Mu, dan melaksanakan Sunnah Rasul-Mu, untuk menyelenggarakan acara pernikahan putra dan putri kami, untuk membentuk keluarga yang sakinah, mawaddah, warahmah.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="hero-foot">
                    <CountDown></CountDown>
                    <!-- <p class="button is-size-6 is-uppercase">{{ tanggal(portofolio.tanggal_countdown) }}</p> -->
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
// import useMethod from '@/hooks/useMethod.js'
import CountDown from '@/components/cosmos/parts/maincovercosmos/CountDown.vue'

// const {tanggal} = useMethod()


// GET PORTOFOLIO
defineProps({
  portofolio: { type: Object },
  theme: { type: Object },
  themeproduct: { type: Object },
  quote: { type: Object },
});
</script>

<style lang="scss" scoped>
@import "@/styles/component/maincover.scss";
</style>