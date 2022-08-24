<template>
    <section class="hero is-small">
        <div class="hero-body">
            <div class="columns">
                <div class="column is-half-tablet is-offset-one-quarter-tablet">
                    <p class="subtitle is-size-6-tablet is-size-7-mobile">
                        Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila, Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do'a restunya kami ucapkan terimakasih.
                    </p>
                    <p class="has-text-weight-bold is-size-6-tablet is-size-7-mobile"> Turut mengundang: </p>
                    <div v-for="invite in invitation" v-bind:key="invite.id">
                        <p class="is-size-6-tablet is-size-7-mobile mt-2">{{ invite }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

import { inject, computed } from 'vue'

const store = inject('store');

const invitation = computed(() => store.state.invitation);

store.actions.getInvitation();

</script>