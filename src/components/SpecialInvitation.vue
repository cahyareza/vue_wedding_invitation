<template>
    <div :class="theme">
        <section class="hero is-small">
            <div class="hero-body">
                <div class="columns">
                    <div class="column is-half-tablet is-offset-one-quarter-tablet">
                        <p class="subtitle is-size-6-tablet is-size-7-mobile">
                            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila, Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do'a restunya kami ucapkan terimakasih.
                        </p>
                        <p class="has-text-weight-bold is-size-6-tablet is-size-7-mobile"> Turut mengundang: </p>
                        <div v-for="invite in invitation" v-bind:key="invite.id">
                            <p class="is-size-6-tablet is-size-7-mobile is-capitalized">{{ invite.name_invite }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>

import { inject, computed, onMounted, onBeforeMount } from 'vue'

// LOAD STATE
const store = inject('store');

// INVITATION
const invitation = computed(() => store.state.invitation);

// THEME
const theme = computed(() => store.state.theme); 

// LIFECYCLE
onBeforeMount(() => {
    store.actions.getTheme();
});

onMounted(() => {  
    store.actions.getInvitation();
});

</script>

<style lang="scss" scoped>
@import "../styles/component/specialinvitation.scss";
// @import "../styles/global.scss";
</style>