<template>
    <section class="hero is-primary is-large">
        <div class="columns">
            <div class="column is-half-tablet is-offset-one-quarter-tablet">
                <section class="section pt-4">
                    <div class="container">
                        <p class="title is-size-4-mobile is-paddingless mt-3">Kirim Ucapan</p>
                    </div>
                </section>
                <MessageForm></MessageForm>
            </div>
        </div>
    </section>
</template>

<script setup>
import MessageForm from '@/components/parts/messagebox/MessageForm.vue'
</script>

