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
    <MainCoverBright 
      :portofolio="portofolio"
      :theme="theme"
      :themeproduct="themeproduct"   
    >
    </MainCoverBright>
    <QuotePage
      :theme="theme"
      :themeproduct="themeproduct"  
      :quote="quote"
    >
    </QuotePage>
    <div ref="groom">
      <GroomBrideBright 
        :portofolio="portofolio"
        :theme="theme"
        :themeproduct="themeproduct" 
        :multiimage="multiimage"  
      >
      </GroomBrideBright>
    </div>
    <div ref='run'>
      <RunDownBright
        :portofolio="portofolio"
        :theme="theme"
        :themeproduct="themeproduct"
        :acara="acara"   
        :multiimage="multiimage"  
      >
      </RunDownBright>
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
      <!-- <TimeLines 
        :portofolio="portofolio"
        :theme="theme"
        :themeproduct="themeproduct"   
      >
      </TimeLines> -->
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
    <div ref='message'>
      <MessageBox
        :theme="theme"
        :themeproduct="themeproduct"
      >
      </MessageBox>
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
    <HappyPageBright
      :portofolio="portofolio"
      :theme="theme"
      :themeproduct="themeproduct"
      :multiimage="multiimage"
    >
    </HappyPageBright>
    <FooterPage
      :theme="theme"
    >
    </FooterPage>
  </section>
</template>

<script setup>
import MainMenuBright from '@/components/bright/MainMenuBright.vue'
import CovidPage from '@/components/CovidPage.vue'
import MainCoverBright from '@/components/bright/MainCoverBright.vue'
import QuotePage from '@/components/QuotePage.vue'
import GroomBrideBright from '@/components/bright/GroomBrideBright.vue'
// import TimeLines from '@/components/TimeLines.vue'
import RunDownBright from '@/components/bright/RunDownBright.vue'
import SpecialInvitation from '@/components/SpecialInvitation.vue'
import LiveStreamCardo from '@/components/cardo/LiveStreamCardo.vue'
import StoryPageCosmos from '@/components/cosmos/StoryPageCosmos.vue'
import OurMoment from '@/components/OurMoment.vue'
import MessageBox from '@/components/MessageBox.vue'
import FooterPage from '@/components/FooterPage.vue'
import HappyPageBright from '@/components/bright/HappyPageBright.vue'
import DompetPage from '@/components/DompetPage.vue'



import { ref, inject, onMounted, defineProps, defineEmits } from "vue";

// LOAD STATE
const store = inject('store');

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