<template>
  <form @submit.prevent="submit" class="vl-parent" ref="formContainer">
      <!-- your form inputs goes here-->
      <label class="is-hidden"><input type="checkbox" v-model="fullPage">Full page?</label>
  </form>

  <section>
    <OpenCoverOcean
      :portofolio="portofolio"
      :direction="direction"
      :themeproduct="themeproduct"
    >
    </OpenCoverOcean>
    <MainCover
      :portofolio="portofolio"
      :theme="theme"
      :themeproduct="themeproduct"
    >
    </MainCover>
    <QuotePage
      :theme="theme"
      :themeproduct="themeproduct"  
      :quote="quote"
    >
    </QuotePage>
    <div ref="groom">
      <GroomBridgeOcean 
        :portofolio="portofolio"
        :theme="theme"
        :themeproduct="themeproduct"  
      >
      </GroomBridgeOcean>
    </div>
    <div ref='run'>
      <RunDownOcean 
        :portofolio="portofolio"
        :theme="theme"
        :themeproduct="themeproduct"
        :acara="acara"   
        :direction="direction"   
      >
      </RunDownOcean>
    </div>
    <SpecialInvitation
      :portofolio="portofolio"
      :theme="theme"
      :themeproduct="themeproduct"
      :invitation="invitation"
    >
    </SpecialInvitation>
    <LiveStreamCardo 
      :portofolio="portofolio"
      :theme="theme"
      :themeproduct="themeproduct"
      :portobackground="portobackground"
    >
    </LiveStreamCardo>
    <div ref='moment'>
      <OurMoment
        :portofolio="portofolio"
        :theme="theme"
        :themeproduct="themeproduct"
        :multiimage="multiimage"
      >
      </OurMoment>
    </div>
    <StoryPageOcean
      :theme="theme"
      :themeproduct="themeproduct"
      :story="story"
      :portobackground="portobackground"
    >
    </StoryPageOcean>
    <div ref="time">
      <TimeLinesOcean 
        :portofolio="portofolio"
        :theme="theme"
        :themeproduct="themeproduct"   
        :portobackground="portobackground"  
      >
      </TimeLinesOcean>
    </div>
    <div ref='message'>
      <MessageBox
        :theme="theme"
        :themeproduct="themeproduct"
        :direction="direction" 
      >
      </MessageBox>
    </div>
    <HappyPageOcean
      :portofolio="portofolio"
      :theme="theme"
      :themeproduct="themeproduct"
      :portobackground="portobackground" 
    >
    </HappyPageOcean>
    <FooterPage
      :theme="theme"
    >
    </FooterPage>
    <MainMenuOcean
      @page="navigation"
      :portofolio="portofolio"
      :theme="theme"
      :themeproduct="themeproduct"
      :dompet="dompet" 
    >
    </MainMenuOcean>
  </section>
</template>

<script setup>
import MainMenuOcean from '@/components/ocean/MainMenuOcean.vue'
import OpenCoverOcean from '@/components/ocean/OpenCoverOcean.vue'
import MainCover from '@/components/MainCover.vue'
import QuotePage from '@/components/QuotePage.vue'
import GroomBridgeOcean from '@/components/ocean/GroomBridgeOcean.vue'
import TimeLinesOcean from '@/components/ocean/TimeLinesOcean.vue'
import RunDownOcean from '@/components/ocean/RunDownOcean.vue'
import SpecialInvitation from '@/components/SpecialInvitation.vue'
import LiveStreamCardo from '@/components/cardo/LiveStreamCardo.vue'
import StoryPageOcean from '@/components/ocean/StoryPageOcean.vue'
import OurMoment from '@/components/OurMoment.vue'
import MessageBox from '@/components/MessageBox.vue'
import FooterPage from '@/components/FooterPage.vue'
import HappyPageOcean from '@/components/ocean/HappyPageOcean.vue'



import { ref, onMounted, defineProps, defineEmits } from "vue";
import {useCounterStore} from '@/stores/store'
import {useLoading} from 'vue-loading-overlay'
import injectStore from '@/hooks/injectStore.js'

const {slug} = injectStore()

const $loading = useLoading({
    // options
});
// or use inject without importing useLoading
// const $loading =  inject('$loading')

const fullPage = ref(false)

const submit = () => {
    const loader = $loading.show({
        // Optional parameters
        color:'black',
        loader: 'dots',
        width: 90,
        height: 90,
        backgroundColor:'#ffffff',
        opacity: 1,
        zIndex: 999,
    });
    // simulate AJAX
    setTimeout(() => {
        loader.hide()
    }, 4000)
}

// LOAD STATE
const store = useCounterStore();

// TO PARAMS
const direction = store.actions.getTo().value

// EMIT
const emit = defineEmits(['slug']);
const getSlug = () => {
    emit("slug", store.actions.getSlug().value)
}

// GET PROPS
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  portofolio: { type: Object },
  theme: { type: Object },
  themeproduct: { type: Object },
  quote: { type: Object },
  acara: { type: Object },
  invitation: { type: Object },
  story: { type: Object },
  dompet: { type: Object },
  multiimage: { type: Array },
  multiimagetheme: { type: Array },
  portobackground: { type: Object },
});


// NAVIGATION
const groom = ref()
const time = ref()
const run = ref()
const moment = ref()
const message = ref()


// Navigation handler
const navigation = val => {
  if (val == 'groom') {
    groom.value.scrollIntoView({behavior: "smooth"})
  } else if (val == 'time') {
    time.value.scrollIntoView({behavior: "smooth"})
  } else if (val == 'run') {
    run.value.scrollIntoView({behavior: "smooth"})
  } else if (val == 'moment') {
    moment.value.scrollIntoView({behavior: "smooth"})
  } else if (val == 'message') {
    message.value.scrollIntoView({behavior: "smooth"})
  }
}
// NAVIGATION END

onMounted( () => {
  store.actions.getPortofolio2(slug);
  getSlug();
  navigation();
  submit();
})

</script>