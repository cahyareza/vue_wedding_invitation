<template>
  <section>
    <KeepAlive>
      <MainCover></MainCover>
    </KeepAlive>
    <KeepAlive>
      <QuotePage></QuotePage>
    </KeepAlive>
    <div ref="groom">
      <GroomBride></GroomBride>
    </div>
    <div ref="time">
      <TimeLines></TimeLines>
    </div>
    <div ref='run'>
      <RunDown></RunDown>
    </div>
    <SpecialInvitation></SpecialInvitation>
    <LiveStream></LiveStream>
    <div ref='moment'>
      <OurMoment></OurMoment>
    </div>
    <div ref='message'>
      <MessageBox></MessageBox>
    </div>
    <FooterPage></FooterPage>
    <MainMenu @coba="onCoba" @page="navigation"></MainMenu>
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

import { ref, onMounted } from "vue";

// test
const onCoba = val => {
    console.log(val);
}


const groom = ref()
const time = ref()
const run = ref()
const moment = ref()
const message = ref()


// // Navigation handler
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


onMounted( () => {
  navigation();
})

</script>