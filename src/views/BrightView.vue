<template>
  <section>
    <!-- <CovidPage>
      
    </CovidPage> -->
    <MainMenu 
      @page="navigation"
      :portofolio="portofolio"
      :theme="theme"
      :themeproduct="themeproduct"
      :dompet="dompet" 
    >
    </MainMenu>
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
    <div ref="time">
      <!-- <TimeLines 
        :portofolio="portofolio"
        :theme="theme"
        :themeproduct="themeproduct"   
      >
      </TimeLines> -->
    </div>
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
import MainMenu from '@/components/MainMenu.vue'
// import CovidPage from '@/components/CovidPage.vue'
import MainCoverBright from '@/components/bright/MainCoverBright.vue'
import QuotePageBright from '@/components/bright/QuotePageBright.vue'
import GroomBrideBright from '@/components/bright/GroomBrideBright.vue'
// import TimeLines from '@/components/TimeLines.vue'
import RunDownBright from '@/components/bright/RunDownBright.vue'
import StoryPageBright from '@/components/bright/StoryPageBright.vue'
import OurMomentBright from '@/components/bright/OurMomentBright.vue'
import MessageBoxBright from '@/components/bright/MessageBoxBright.vue'
import FooterPage from '@/components/FooterPage.vue'
import HappyPageBright from '@/components/bright/HappyPageBright.vue'



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