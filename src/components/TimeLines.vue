<template>
    <section class="hero is-light is-fullheight">
        <section class="section pt-4">
            <div class="container">
                <p class="title is-size-4-mobile mt-5 p-6">Acara Akan Diselenggarakan</p>

                <p class="title">1070</p>
                <p class="subtitle is-size-5 has-text-weight-bold">HARI</p>

                <CountDown></CountDown>

                <button class="button is-rounded is-primary p-2 is-size-7">
                    <font-awesome-icon icon="fa-solid fa-calendar-plus" />&nbsp;Simpan acara ke kalender
                </button>
                <br>
                <button class="button is-rounded is-primary p-2 is-size-7 mt-4">
                    <font-awesome-icon icon="fa-solid fa-bell" />&nbsp;Aktifkan notifikasi
                </button>
            </div>
        </section>

        <div class="container px-5 pt-5">
            <GuestBook></GuestBook>
        </div>

    </section>
    <GoToOurWedding></GoToOurWedding>
</template>


<script setup>

import CountDown from '@/components/parts/timelines/CountDown.vue'
import GuestBook from '@/components/parts/timelines/GuestBook.vue'
import GoToOurWedding from '@/components/parts/timelines/GoToOurWedding.vue'

</script>