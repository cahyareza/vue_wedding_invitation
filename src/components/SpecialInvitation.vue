<template>
    <div v-if="invitation.length != 0">
        <div :class="theme">
            <section class="hero is-small">
                <div class="section py-0">
                    <div class="columns is-multiline">
                        <div class="column is-half-tablet is-offset-one-quarter-tablet">
                            <section class="section is-paddingless">
                                <div class="container">
                                    <div v-if="themeproduct.theme?.name == 'theme-3' || themeproduct.theme?.name == 'theme-4' || themeproduct.theme?.name == 'theme-5'">
                                        <div class="notification m-2 p-1">
                                            <div class="column is-12">
                                                <div v-if="portofolio.kata_special_invite">
                                                    <p class="subtitle is-size-6-tablet is-size-7-mobile">
                                                        {{ portofolio.kata_special_invite }}
                                                    </p>
                                                </div>
                                                <div v-else>
                                                    <p class="subtitle is-size-6-tablet is-size-7-mobile">
                                                        Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila, Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do'a restunya kami ucapkan terimakasih.
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="column is-12" data-aos="fade-up" data-aos-duration="1000">
                                                <p class="subtitle mb-3 has-text-weight-bold is-size-6-tablet is-size-7-mobile"> Turut mengundang: </p>
                                                <div v-for="invite in invitation" v-bind:key="invite.id">
                                                    <p class="subtitle is-size-6-tablet is-size-7-mobile is-capitalized">{{ invite.name_invite }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-else>
                                        <!-- <div class="notification m-5 p-2"> -->
                                        <div class="column is-12">
                                            <div v-if="portofolio.kata_special_invite">
                                                <p class="subtitle is-size-6-tablet is-size-7-mobile">
                                                    {{ portofolio.kata_special_invite }}
                                                </p>
                                            </div>
                                            <div v-else>
                                                <p class="subtitle is-size-6-tablet is-size-7-mobile">
                                                    Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila, Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do'a restunya kami ucapkan terimakasih.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="column is-12" data-aos="fade-up" data-aos-duration="1000">
                                            <p class="subtitle mb-3 has-text-weight-bold is-size-6-tablet is-size-7-mobile"> Turut mengundang: </p>
                                            <div v-for="invite in invitation" v-bind:key="invite.id">
                                                <p class="subtitle is-size-6-tablet is-size-7-mobile is-capitalized">{{ invite.name_invite }}</p>
                                            </div>
                                        </div>
                                        <!-- </div> -->
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

// GET PORTOFOLIO
defineProps({
  portofolio: { type: Object },
  theme: { type: Object },
  themeproduct: { type: Object },
  invitation: { type: Object },
});
</script>

<style lang="scss" scoped>
@import "../styles/component/specialinvitation.scss";
// @import "../styles/global.scss";
</style>