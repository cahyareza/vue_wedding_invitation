<template>
  <section>
    <CovidPage>
      
    </CovidPage>
    <MainMenuBright 
      @page="navigation"
      :portofolio="portofolio"
      :theme="theme"
      :themeproduct="themeproduct"
      :dompet="dompet" 
    >
    </MainMenuBright>
    <MainCoverCardo
      :portofolio="portofolio"
      :theme="theme"
      :themeproduct="themeproduct"
      :multiimagetheme="multiimagetheme"
    >
    </MainCoverCardo>
    <QuotePage
      :theme="theme"
      :themeproduct="themeproduct"  
      :quote="quote"
    >
    </QuotePage>
    <div ref="groom">
      <GroomBrideBraun
        :portofolio="portofolio"
        :theme="theme"
        :themeproduct="themeproduct" 
        :portobackground="portobackground"  
      >
      </GroomBrideBraun>
    </div>
    <div ref='run'>
      <RunDownBraun
        :portofolio="portofolio"
        :theme="theme"
        :themeproduct="themeproduct"
        :acara="acara"   
        :multiimagetheme="multiimagetheme"  
      >
      </RunDownBraun>
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
    <StoryPageCosmos
      :theme="theme"
      :themeproduct="themeproduct"
      :story="story"
    >
    </StoryPageCosmos>
    <div ref='moment'>
      <OurMoment 
        :portofolio="portofolio"
        :theme="theme"
        :themeproduct="themeproduct"
        :multiimage="multiimage"
      >
      </OurMoment>
    </div>
    <div ref="time">
      <DompetPage
        :portofolio="portofolio"
        :theme="theme"
        :themeproduct="themeproduct"
        :dompet="dompet" 
      >
      </DompetPage>
    </div>
    <TimeLinesOcean 
      :portofolio="portofolio"
      :theme="theme"
      :themeproduct="themeproduct" 
      :portobackground="portobackground"  
    >
    </TimeLinesOcean>
    <div ref='message'>
      <MessageBox
        :theme="theme"
        :themeproduct="themeproduct"
        :direction="direction" 
      >
      </MessageBox>
    </div>
    <HappyPageBraun
      :portofolio="portofolio"
      :theme="theme"
      :themeproduct="themeproduct"
      :portobackground="portobackground"
    >
    </HappyPageBraun>
    <FooterPage
      :theme="theme"
    >
    </FooterPage>
  </section>
</template>

<script setup>
import MainMenuBright from '@/components/bright/MainMenuBright.vue'
import CovidPage from '@/components/CovidPage.vue'
import MainCoverCardo from '@/components/cardo/MainCoverCardo.vue'
import QuotePage from '@/components/QuotePage.vue'
import GroomBrideBraun from '@/components/braun/GroomBrideBraun.vue'
import TimeLinesOcean from '@/components/ocean/TimeLinesOcean.vue'
import RunDownBraun from '@/components/braun/RunDownBraun.vue'
import SpecialInvitation from '@/components/SpecialInvitation.vue'
import LiveStreamCardo from '@/components/cardo/LiveStreamCardo.vue'
import StoryPageCosmos from '@/components/cosmos/StoryPageCosmos.vue'
import OurMoment from '@/components/OurMoment.vue'
import MessageBox from '@/components/MessageBox.vue'
import FooterPage from '@/components/FooterPage.vue'
import HappyPageBraun from '@/components/braun/HappyPageBraun.vue'
import DompetPage from '@/components/DompetPage.vue'



import { ref, onMounted, defineProps, defineEmits } from "vue";
import {useCounterStore} from '@/stores/store'

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
  navigation();
  getSlug();
})

</script>