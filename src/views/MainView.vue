<template>
  <section>
    <MainCover></MainCover>
    <QuotePage></QuotePage>
    <GroomBride></GroomBride>
    <TimeLines></TimeLines>
    <RunDown></RunDown>
    <SpecialInvitation></SpecialInvitation>
    <LiveStream></LiveStream>
    <OurMoment></OurMoment>
    <MessageBox></MessageBox>
    <FooterPage></FooterPage>
    <MainMenu></MainMenu>
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

// Navigation handler
// const navigationHandler = id => {
//   document.querySelector(id).scrollIntoView({
//     behavior: 'smooth'
//   })
// }
</script>