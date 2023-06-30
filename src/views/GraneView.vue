<template>
  <section>
    <CovidPage>
    </CovidPage>
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
      <GroomBridgeGrane 
        :portofolio="portofolio"
        :theme="theme"
        :themeproduct="themeproduct"
      >
      </GroomBridgeGrane>
    </div>
    <div ref='run'>
      <RunDownGrane 
        :portofolio="portofolio"
        :theme="theme"
        :themeproduct="themeproduct"
        :acara="acara"
        :multiimagetheme="multiimagetheme"  
        :direction="direction"    
      >
      </RunDownGrane>
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
      :multiimagetheme="multiimagetheme" 
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
    <StoryPageCardo
      :theme="theme"
      :themeproduct="themeproduct"
      :story="story"
    >
    </StoryPageCardo>
    <div ref="time">
      <TimeLinesGrane 
        :portofolio="portofolio"
        :theme="theme"
        :themeproduct="themeproduct"   
        :multiimagetheme="multiimagetheme" 
      >
      </TimeLinesGrane>
    </div>
    <div ref='message'>
      <MessageBox
        :theme="theme"
        :themeproduct="themeproduct"
        :direction="direction" 
      >
      </MessageBox>
    </div>
    <HappyPageGrane
      :portofolio="portofolio"
      :theme="theme"
      :themeproduct="themeproduct"
      :multiimagetheme="multiimagetheme" 
    >
    </HappyPageGrane>
    <FooterPage
      :theme="theme"
    >
    </FooterPage>
    <MainMenu
      @page="navigation"
      :portofolio="portofolio"
      :theme="theme"
      :themeproduct="themeproduct"
      :dompet="dompet" 
    >
    </MainMenu>
  </section>
</template>

<script setup>
import MainMenu from '@/components/MainMenu.vue'
import CovidPage from '@/components/CovidPage.vue'
import MainCoverCardo from '@/components/cardo/MainCoverCardo.vue'
import QuotePage from '@/components/QuotePage.vue'
import GroomBridgeGrane from '@/components/grane/GroomBridgeGrane.vue'
import TimeLinesGrane from '@/components/grane/TimeLinesGrane.vue'
import RunDownGrane from '@/components/grane/RunDownGrane.vue'
import SpecialInvitation from '@/components/SpecialInvitation.vue'
import LiveStreamCardo from '@/components/cardo/LiveStreamCardo.vue'
import StoryPageCardo from '@/components/cardo/StoryPageCardo.vue'
import OurMoment from '@/components/OurMoment.vue'
import MessageBox from '@/components/MessageBox.vue'
import FooterPage from '@/components/FooterPage.vue'
import HappyPageGrane from '@/components/grane/HappyPageGrane.vue'



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