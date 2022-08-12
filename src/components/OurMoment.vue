<template>
    <section class="hero is-info is-fullheight">
        <div class="columns">
            <div class="column is-half-tablet is-offset-one-quarter-tablet">
                <section class="section pt-4">
                    <p class="title">Moment yang berharga</p>
                    <p class="subtitle mt-5 is-size-6">"Tiada janji terindah yang didengar oleh wanita dari lisan laki-laki, kecuali janji akad pernikahan"</p>
                </section>
                <OurVideo></OurVideo>
                <OurGallery></OurGallery>
            </div>
        </div>
    </section>
    
</template>

<script setup>
import OurVideo from '@/components/parts/ourmoment/OurVideo.vue'
import OurGallery from '@/components/parts/ourmoment/OurGallery.vue'
</script>

