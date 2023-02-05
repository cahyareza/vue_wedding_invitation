<template>
  <section>
    <!-- <CovidPage>
    </CovidPage> -->
    <MainCoverCosmos 
      :portofolio="portofolio"
      :theme="theme"
      :themeproduct="themeproduct"
      :multiimage="multiimage"
      :quote="quote"   
    >
    </MainCoverCosmos>
    <div ref="groom">
      <GroomBridgeCosmos 
        :portofolio="portofolio"
        :theme="theme"
        :themeproduct="themeproduct"  
        :multiimage="multiimage"  
      >
      </GroomBridgeCosmos>
    </div>

    <!-- <TimeLinesCardo 
    :portofolio="portofolio"
    :theme="theme"
    :themeproduct="themeproduct"   
    :multiimage="multiimage"  
    >
    </TimeLinesCardo> -->

    <div ref='run'>
      <RunDownCosmos
        :portofolio="portofolio"
        :theme="theme"
        :themeproduct="themeproduct"
        :acara="acara"
        :multiimage="multiimage"
        :direction="direction"   
      >
      </RunDownCosmos>
    </div>
    <!-- <SpecialInvitation 
      :portofolio="portofolio"
      :theme="theme"
      :themeproduct="themeproduct"
      :invitation="invitation"
    >
    </SpecialInvitation> -->
    <div ref="time">
        <LiveStreamCardo 
        :portofolio="portofolio"
        :theme="theme"
        :themeproduct="themeproduct"
        :multiimage="multiimage"
        >
        </LiveStreamCardo>
    </div>
    <StoryPageCosmos
      :theme="theme"
      :themeproduct="themeproduct"
      :story="story"
      :portofolio="portofolio"
    >
    </StoryPageCosmos>
    <div ref='message'>
      <MessageBoxCosmos
        :theme="theme"
        :themeproduct="themeproduct"
      >
      </MessageBoxCosmos>
    </div>
    <div ref='moment'>
      <OurMomentCosmos 
        :portofolio="portofolio"
        :theme="theme"
        :themeproduct="themeproduct"
        :multiimage="multiimage"
      >
      </OurMomentCosmos>
    </div>
    <HappyPageCosmos
      :portofolio="portofolio"
      :theme="theme"
      :themeproduct="themeproduct"
      :multiimage="multiimage" 
    >
    </HappyPageCosmos>
    <FooterPage
      :theme="theme"
    >
    </FooterPage>
    <MainMenuCosmos 
      @page="navigation"
      :portofolio="portofolio"
      :theme="theme"
      :themeproduct="themeproduct"
      :dompet="dompet" 
    >
    </MainMenuCosmos>
  </section>
</template>

<script setup>
import MainMenuCosmos from '@/components/cosmos/MainMenuCosmos.vue'
// import CovidPage from '@/components/CovidPage.vue'
import MainCoverCosmos from '@/components/cosmos/MainCoverCosmos.vue'
import GroomBridgeCosmos from '@/components/cosmos/GroomBridgeCosmos.vue'
// import TimeLinesCardo from '@/components/cardo/TimeLinesCardo.vue'
import RunDownCosmos from '@/components/cosmos/RunDownCosmos.vue'
// import SpecialInvitation from '@/components/SpecialInvitation.vue'
import LiveStreamCardo from '@/components/cardo/LiveStreamCardo.vue'
import StoryPageCosmos from '@/components/cosmos/StoryPageCosmos.vue'
import OurMomentCosmos from '@/components/cosmos/OurMomentCosmos.vue'
import MessageBoxCosmos from '@/components/cosmos/MessageBoxCosmos.vue'
import FooterPage from '@/components/FooterPage.vue'
import HappyPageCosmos from '@/components/cosmos/HappyPageCosmos.vue'



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