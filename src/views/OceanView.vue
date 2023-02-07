<template>
  <section>
    <CovidPage>
    </CovidPage>
    <MainCoverOcean 
      :portofolio="portofolio"
      :theme="theme"
      :themeproduct="themeproduct"
    >
    </MainCoverOcean>
    <QuotePageOcean
      :theme="theme"
      :themeproduct="themeproduct"  
      :quote="quote"
      :multiimage="multiimage"  
    >
    </QuotePageOcean>
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
    <div ref='moment'>
      <OurMomentOcean
        :portofolio="portofolio"
        :theme="theme"
        :themeproduct="themeproduct"
        :multiimage="multiimage"
      >
      </OurMomentOcean>
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
      <MessageBoxCosmos
        :theme="theme"
        :themeproduct="themeproduct"
      >
      </MessageBoxCosmos>
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
import CovidPage from '@/components/CovidPage.vue'
import MainCoverOcean from '@/components/ocean/MainCoverOcean.vue'
import QuotePageOcean from '@/components/ocean/QuotePageOcean.vue'
import GroomBridgeOcean from '@/components/ocean/GroomBridgeOcean.vue'
import TimeLinesOcean from '@/components/ocean/TimeLinesOcean.vue'
import RunDownOcean from '@/components/ocean/RunDownOcean.vue'
import SpecialInvitationCardo from '@/components/cardo/SpecialInvitationCardo.vue'
import LiveStreamCardo from '@/components/cardo/LiveStreamCardo.vue'
import StoryPageOcean from '@/components/ocean/StoryPageOcean.vue'
import OurMomentOcean from '@/components/ocean/OurMomentOcean.vue'
import MessageBoxCosmos from '@/components/cosmos/MessageBoxCosmos.vue'
import FooterPage from '@/components/FooterPage.vue'
import HappyPageOcean from '@/components/ocean/HappyPageOcean.vue'



import { ref, inject, onMounted, defineProps, defineEmits } from "vue";

// LOAD STATE
const store = inject('store');

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