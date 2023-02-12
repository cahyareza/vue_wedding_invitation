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
    <QuotePageBright
      :theme="theme"
      :themeproduct="themeproduct"  
      :quote="quote"
    >
    </QuotePageBright>
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
    <SpecialInvitationCardo 
      :portofolio="portofolio"
      :theme="theme"
      :themeproduct="themeproduct"
      :invitation="invitation"
    >
    </SpecialInvitationCardo>
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
    <StoryPageBright
      :theme="theme"
      :themeproduct="themeproduct"
      :story="story"
    >
    </StoryPageBright>
    <div ref='moment'>
      <OurMomentBright 
        :portofolio="portofolio"
        :theme="theme"
        :themeproduct="themeproduct"
        :multiimage="multiimage"
      >
      </OurMomentBright>
    </div>
    <div ref='message'>
      <MessageBoxBright
        :theme="theme"
        :themeproduct="themeproduct"
      >
      </MessageBoxBright>
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
import QuotePageBright from '@/components/bright/QuotePageBright.vue'
import GroomBrideBright from '@/components/bright/GroomBrideBright.vue'
// import TimeLines from '@/components/TimeLines.vue'
import RunDownBright from '@/components/bright/RunDownBright.vue'
import SpecialInvitationCardo from '@/components/cardo/SpecialInvitationCardo.vue'
import LiveStreamCardo from '@/components/cardo/LiveStreamCardo.vue'
import StoryPageBright from '@/components/bright/StoryPageBright.vue'
import OurMomentBright from '@/components/bright/OurMomentBright.vue'
import MessageBoxBright from '@/components/bright/MessageBoxBright.vue'
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