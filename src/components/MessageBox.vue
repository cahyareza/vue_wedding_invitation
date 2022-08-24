<template>
    <section class="hero is-primary is-large">
        <div class="columns">
            <div class="column is-half-tablet is-offset-one-quarter-tablet">
                <section class="section pt-4">
                    <div class="container">
                        <p class="title mt-4 mb-2 is-marginless">Kirim Ucapan</p>
                    </div>
                </section>
                <MessagePage></MessagePage>
                <MessageForm></MessageForm>
            </div>
        </div>
    </section>
</template>

<script setup>
import MessageForm from '@/components/parts/messagebox/MessageForm.vue'
import MessagePage from '@/components/parts/messagebox/MessagePage.vue'
</script>

