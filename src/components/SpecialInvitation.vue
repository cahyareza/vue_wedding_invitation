<template>
    <div v-if="invitation.length != 0">
        <div :class="theme">
            <section class="hero is-small" style="position: relative;">
                <div v-if="themeproduct.theme?.slug === 'theme-11'" class="mb-5">
                    <div class="custom-shape-divider-top-1677268119">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
                        </svg>
                    </div>
                </div>
                <div class="section py-0">
                    <section class="section is-paddingless">
                        <div class="container">
                            <div v-if="themeproduct.theme?.slug == 'theme-3' || themeproduct.theme?.slug == 'theme-4' || themeproduct.theme?.slug == 'theme-5' || themeproduct.theme?.slug == 'theme-1'">
                                <div class="notification m-2 p-1">
                                    <div class="column is-12">
                                        <div v-if="portofolio.kata_special_invite">
                                            <p class="subtitle is-size-6-mobile is-size-7-mobile">
                                                {{ portofolio.kata_special_invite }}
                                            </p>
                                        </div>
                                        <div v-else>
                                            <p class="subtitle is-size-6-mobile">
                                                Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila, Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do'a restunya kami ucapkan terimakasih.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="column is-12" data-aos="fade-up" data-aos-duration="1000">
                                        <p class="subtitle mb-3 has-text-weight-bold is-size-6-mobile"> Turut mengundang: </p>
                                        <div v-for="invite in invitation" v-bind:key="invite.id">
                                            <p class="subtitle is-size-6-mobile is-capitalized">{{ invite.name_invite }}</p>
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
                                        <p class="subtitle is-size-6-mobile">
                                            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila, Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do'a restunya kami ucapkan terimakasih.
                                        </p>
                                    </div>
                                </div>
                                <div class="column is-12" data-aos="fade-up" data-aos-duration="1000">
                                    <p class="subtitle mb-3 has-text-weight-bold is-size-6-mobile"> Turut mengundang: </p>
                                    <div v-for="invite in invitation" v-bind:key="invite.id">
                                        <p class="subtitle is-size-6-mobile is-capitalized">{{ invite.name_invite }}</p>
                                    </div>
                                </div>
                                <!-- </div> -->
                            </div>
                        </div>
                    </section>
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
</style>