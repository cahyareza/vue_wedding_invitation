<template>
    <!-- <div id="slides"> -->
        <!-- <div class=""> -->

            <transition-group name="fade" mode="out-in" tag="div" id="slides">
                <div class="low-opacity-bg-image">
                    <div class="hero slideImage is-fullheight" :style="setBackgroundImage" :key="id">
                        <div class="hero-head mb-4"> 
                            <section class="section">
                                <p class="subtitle1 is-uppercase is-size-6-mobile is-size-5-tablet mb-3">PERNIKAHAN</p>
                                
                                <p class="title is-size-1 is-capitalized mt-4">
                                    {{ portofolio.pname }}
                                    &
                                    {{ portofolio.lname }}
                                </p>

                                <div class="container my-5-tablet">
                                    <div v-if="quote.kutipan">
                                        <p v-if="quote.pembuka" class="subtitle1 is-size-6-tablet is-size-7-mobile">
                                            {{ quote.pembuka }}
                                        </p>
                                        <p class="subtitle1 is-size-6-tablet is-size-7-mobile">
                                            "{{ quote.kutipan }}"
                                        </p>
                                        <p class="subtitle1 is-size-5-tablet is-size-6-mobile is-capitalized is-italic"> {{ quote.ayat }} </p>       
                                    </div>
                                    <div v-else>
                                        <p class="subtitle1 is-size-5-desktop is-size-6-tablet is-size-7-mobile mb-1">
                                            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
                                        </p>
                                        <p class="subtitle1 is-size-5-desktop is-size-6-tablet is-size-7-mobile mt-1 mb-2">
                                            Assalamu’alaikum Warrahmatullahi Wabarakatuh
                                        </p>
                                        <p class="subtitle1 is-size-5-desktop is-size-6-tablet is-size-7-mobile mt-2">
                                            Dengan memohon Ridho dan Rahmat Allah SWT. Ya Allah, dengan segala kemurahan hati-Mu, kami hendak memohon Ridha-Mu, dan melaksanakan Sunnah Rasul-Mu, untuk menyelenggarakan acara pernikahan putra dan putri kami, untuk membentuk keluarga yang sakinah, mawaddah, warahmah.
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div class="hero-foot">
                            <CountDown></CountDown>
                            <p class="button is-size-6 is-uppercase">{{ tanggal(portofolio.tanggal_countdown) }}</p>
                        </div>
                    </div>
                </div>
            </transition-group>
        <!-- </div> -->
    <!-- </div> -->
</template>

<script setup>
import { defineProps, computed } from 'vue'
import CountDown from '@/components/cosmos/parts/maincovercosmos/CountDown.vue'
import moment from 'moment';

// GET PORTOFOLIO
const props = defineProps({
  portofolio: { type: Object },
  image: { type: Object },
  id: {
    type: Number,
    required: true
  },
  quote: { type: Object },
});

// METHOD
const tanggal = (value) => {
    return moment(value).locale('id').format('dddd, DD MMMM YYYY');
}

const setBackgroundImage = computed(() => {
    return {backgroundImage : "url("+props.image+")"};
});
</script>

<style lang="scss" scoped>
#slides{

}
#slides .slideImage{
    height: 100vh;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.fade-move{
    transition: all 3s;;
}
.fade-enter-active {
    animation-name: fadeEnter;
    animation-duration: 1s;
    animation-iteration-count: 1;
}

.fade-leave-active {
    animation-name: fadeLeave;
    animation-duration: 1s;
    animation-iteration-count: 1;
}

@keyframes fadeEnter{
    from{
        opacity:0.3;
    }
    to{
        opacity:1;
    }
}

@keyframes fadeLeave{
    from{
        opacity:1;
    }
    to{
        opacity:0.8;
    }
}
</style>