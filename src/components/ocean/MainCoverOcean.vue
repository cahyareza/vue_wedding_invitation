<template>
    <div :class="theme">
        <section class="hero is-fullheight">
            <div class="hero-body has-text-centered">
                <div class="container"> 
                    <section class="box">   
                        <div class="column
                        is-three-fifths
                        is-offset-one-fifth
                        ">                
                            <p class="title1 is-size-3 is-capitalized mb-2 has-text-weight-bold mb-1">
                                {{ portofolio.pname }}
                            </p>
                            <hr class="line p-1 is-marginless">
                            <p class="title1 is-size-3 is-capitalized mb-2 has-text-weight-bold mt-1">
                                {{ portofolio.lname }}
                            </p>
                            <p class="subtitle1 mt-0 is-size-6 is-uppercase has-text-weight-bold">{{ tanggal(portofolio.tanggal_countdown) }}</p>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
import moment from 'moment';

// GET PORTOFOLIO
defineProps({
  portofolio: { type: Object },
  theme: { type: Object },
  themeproduct: { type: Object },
});

// METHOD
const tanggal = (value) => {
    return moment(value).locale('id').format('dddd, DD MMMM YYYY');
}
</script>

<style lang="scss" scoped>
@import "@/styles/component/maincover.scss";
</style>