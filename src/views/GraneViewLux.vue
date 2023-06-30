<template>
  <section>
    <!-- <CovidPage>
    </CovidPage> -->
    <MainCoverGraneLux
      :portofolio="portofolio"
      :theme="theme"
      :themeproduct="themeproduct"
      :quote="quote"
    >
    </MainCoverGraneLux>
    <div ref="groom">
      <GroomBridgeGraneLux 
        :portofolio="portofolio"
        :theme="theme"
        :themeproduct="themeproduct"  
        :multiimagetheme="multiimagetheme"  
      >
      </GroomBridgeGraneLux>
    </div>
    <StoryPageGraneLux
      :theme="theme"
      :themeproduct="themeproduct"
      :story="story"
    >
    </StoryPageGraneLux>
    <div ref='run'>
      <RunDownGraneLux 
        :portofolio="portofolio"
        :theme="theme"
        :themeproduct="themeproduct"
        :acara="acara"
        :multiimagetheme="multiimagetheme" 
        :direction="direction"    
      >
      </RunDownGraneLux>
    </div>
    <SpecialInvitation
      :portofolio="portofolio"
      :theme="theme"
      :themeproduct="themeproduct"
      :invitation="invitation"
    >
    </SpecialInvitation>
    <LiveStreamGraneLux 
      :portofolio="portofolio"
      :theme="theme"
      :themeproduct="themeproduct"
      :multiimagetheme="multiimagetheme"
    >
    </LiveStreamGraneLux>
    <div ref="time">
      <TimeLinesGraneLux 
        :portofolio="portofolio"
        :theme="theme"
        :themeproduct="themeproduct"   
        :multiimagetheme="multiimagetheme"  
      >
      </TimeLinesGraneLux>
    </div>
    <div ref="time">
      <DompetPageGraneLux
        :portofolio="portofolio"
        :theme="theme"
        :themeproduct="themeproduct"
        :dompet="dompet" 
        :multiimagetheme="multiimagetheme"
      >
      </DompetPageGraneLux>
    </div>
    <div ref='moment'>
      <OurMoment
        :portofolio="portofolio"
        :theme="theme"
        :themeproduct="themeproduct"
        :multiimage="multiimage"
      >
      </OurMoment>
    </div>
    <div ref='message'>
      <MessageBox
        :theme="theme"
        :themeproduct="themeproduct"
        :direction="direction"  
      >
      </MessageBox>
    </div>
    <HappyPageCosmos
      :portofolio="portofolio"
      :theme="theme"
      :themeproduct="themeproduct"
      :multiimagetheme="multiimagetheme" 
    >
    </HappyPageCosmos>
    <FooterPage
      :theme="theme"
    >
    </FooterPage>
    <MainMenuBright 
      @page="navigation"
      :portofolio="portofolio"
      :theme="theme"
      :themeproduct="themeproduct"
      :dompet="dompet" 
    >
    </MainMenuBright>
  </section>
</template>

<script setup>
import MainMenuBright from '@/components/bright/MainMenuBright.vue'
// import CovidPage from '@/components/CovidPage.vue'
import MainCoverGraneLux from '@/components/grane-luxurious/MainCoverGraneLux.vue'
import GroomBridgeGraneLux from '@/components/grane-luxurious/GroomBrideGraneLux.vue'
import TimeLinesGraneLux from '@/components/grane-luxurious/TimeLinesGraneLux.vue'
import RunDownGraneLux from '@/components/grane-luxurious/RunDownGraneLux.vue'
import SpecialInvitation from '@/components/SpecialInvitation.vue'
import LiveStreamGraneLux from '@/components/grane-luxurious/LiveStreamGraneLux.vue'
import StoryPageGraneLux from '@/components/grane-luxurious/StoryPageGraneLux.vue'
import DompetPageGraneLux from '@/components/grane-luxurious/DompetPageGraneLux.vue'
import OurMoment from '@/components/OurMoment.vue'
import MessageBox from '@/components/MessageBox.vue'
import FooterPage from '@/components/FooterPage.vue'
import HappyPageCosmos from '@/components/cosmos/HappyPageCosmos.vue'



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