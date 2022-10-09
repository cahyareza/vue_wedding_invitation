<template>
    <section class="hero is-small">
        <div class="hero-body">
            <div class="columns">
                <div class="column is-half-tablet is-offset-one-quarter-tablet">
                    <section class="section is-paddingless">
                        <div class="container">
                            <div class="box has-background-light">
                                <p class="subtitle is-size-4-tablet is-size-6-mobile">
                                    "{{ quote.kutipan }}"
                                </p>
                                <p> {{ quote.ayat }} </p>       
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import { inject, computed, onMounted } from 'vue'
// import moment from 'moment'

const store = inject('store');

const quote = computed(() => store.state.quote); 
console.log(quote)

onMounted(() => {
    store.actions.getQuote();
})

</script>