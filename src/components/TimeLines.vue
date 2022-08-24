<template>
    <section class="hero is-light is-large">
        <div class="columns">
            <div class="column is-half-tablet is-offset-one-quarter-tablet">
                <section class="section pt-4">
                    <div class="container">
                        <p class="title is-size-4-mobile mt-5 p-4">Acara Akan Diselenggarakan</p>

                        <CountDown></CountDown>

                        <AddtoCalender></AddtoCalender>

                    </div>
                </section>

                <div class="container px-5 pt-5">
                    <GuestBook></GuestBook>
                </div>
            </div>
        </div>

    </section>
    <GoToOurWedding></GoToOurWedding>
</template>


<script setup>

import CountDown from '@/components/parts/timelines/CountDown.vue'
import GuestBook from '@/components/parts/timelines/GuestBook.vue'
import GoToOurWedding from '@/components/parts/timelines/GoToOurWedding.vue'
import AddtoCalender from '@/components/parts/timelines/AddtoCalender.vue'

</script>