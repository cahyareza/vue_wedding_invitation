<template>
  <section>
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
      <GroomBride 
        :portofolio="portofolio"
        :theme="theme"
        :themeproduct="themeproduct"   
      >
      </GroomBride>
    </div>
    <div ref="time">
      <TimeLines 
        :portofolio="portofolio"
        :theme="theme"
        :themeproduct="themeproduct"   
      >
      </TimeLines>
    </div>
    <div ref='run'>
      <RunDown 
        :portofolio="portofolio"
        :theme="theme"
        :themeproduct="themeproduct"
        :acara="acara"   
      >
      </RunDown>
    </div>
    <SpecialInvitation 
      :portofolio="portofolio"
      :theme="theme"
      :invitation="invitation"
    >
    </SpecialInvitation>
    <LiveStream 
      :portofolio="portofolio"
      :theme="theme"
      :themeproduct="themeproduct"
    >
    </LiveStream>
    <StoryPage
      :theme="theme"
      :themeproduct="themeproduct"
      :story="story"
    >
    </StoryPage>
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
    <FooterPage
      :theme="theme"
    >
    </FooterPage>
    <MainMenu 
      @page="navigation"
      :theme="theme"
      :themeproduct="themeproduct"
      :dompet="dompet" 
    >
    </MainMenu>
  </section>
</template>

<script setup>
import QuotePage from '@/components/QuotePage.vue'
import MainCover from '@/components/MainCover.vue'
import GroomBride from '@/components/GroomBride.vue'
import TimeLines from '@/components/TimeLines.vue'
import RunDown from '@/components/RunDown.vue'
import SpecialInvitation from '@/components/SpecialInvitation.vue'
import OurMoment from '@/components/OurMoment.vue'
import MessageBox from '@/components/MessageBox.vue'
import FooterPage from '@/components/FooterPage.vue'
import MainMenu from '@/components/MainMenu.vue'
import LiveStream from '@/components/LiveStream.vue'
import StoryPage from '@/components/StoryPage.vue'

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