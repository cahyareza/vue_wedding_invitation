<template>
  <section>
    <CovidPage>
    </CovidPage>
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
      :multiimage="multiimage"  
    >
    </QuotePage>
    <div ref="groom">
      <GroomBridgeOcean 
        :portofolio="portofolio"
        :theme="theme"
        :themeproduct="themeproduct"  
        :multiimage="multiimage"  
      >
      </GroomBridgeOcean>
    </div>
    <div ref='run'>
      <RunDownOcean 
        :portofolio="portofolio"
        :theme="theme"
        :themeproduct="themeproduct"
        :acara="acara"   
        :multiimage="multiimage"
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
      :multiimage="multiimage"
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
      :multiimage="multiimage"
    >
    </StoryPageOcean>
    <div ref="time">
      <TimeLinesOcean 
        :portofolio="portofolio"
        :theme="theme"
        :themeproduct="themeproduct"   
        :multiimage="multiimage"  
      >
      </TimeLinesOcean>
    </div>
    <div ref='message'>
      <MessageBox
        :theme="theme"
        :themeproduct="themeproduct"
      >
      </MessageBox>
    </div>
    <HappyPageOcean
      :portofolio="portofolio"
      :theme="theme"
      :themeproduct="themeproduct"
      :multiimage="multiimage" 
    >
    </HappyPageOcean>
    <FooterPage
      :theme="theme"
      :multiimage="multiimage" 
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