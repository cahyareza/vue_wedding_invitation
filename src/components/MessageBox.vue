<template>
    <section class="hero is-primary is-fullheight">
        <section class="section pt-4">
            <div class="container">
                <p class="title mt-4">Kirim Ucapan</p>
            </div>
        </section>
        <MessagePage></MessagePage>
        <MessageForm></MessageForm>
    </section>
</template>

<script setup>
import MessageForm from '@/components/parts/messagebox/MessageForm.vue'
import MessagePage from '@/components/parts/messagebox/MessagePage.vue'
</script>

