<template>
    <section>
        <div :class="theme">
            <PlayMusic
            :portofolio="portofolio"
            ref="child"
            >
            </PlayMusic>
            <div class="modal" :class="{'is-active': modal_data.showModalFlag}">
                <div class="modal-background" :style="{ 'background-image': 'url(' + portofolio.open_background + ')' }">
                    <div class="low-opacity-bg-image">
                        <section class="hero is-fullheight" style="background-color: #000; opacity: 0.6;">
                            <div class="hero-body">
                                <div class="container">
                                    <div class="columns is-multiline">
                                        <div class="column is-half-tablet is-offset-one-quarter-tablet">
                                        </div>
                                        <div class="column is-half-tablet is-offset-one-quarter-tablet mt-6"></div>
                                        <div class="column is-half-tablet is-offset-one-quarter-tablet mt-6">
                                            <div class="">
                                                <p class="title is-size-3-mobile is-capitalized is-size-2-tablet mb-1 has-text-white">
                                                    {{ portofolio.pname }}
                                                </p>
                                                <div v-if="themeproduct.theme?.open_fitur">
                                                    <img class="filter is-rounded mb-1" :src="themeproduct.theme?.open_fitur">
                                                </div>
                                                <div v-else>
                                                    <p class="title is-size-3 mb-1 has-text-white">&</p>
                                                </div>
                                                <p class="title is-size-3-mobile is-capitalized  is-size-2-tablet has-text-white">
                                                    {{ portofolio.lname }} 
                                                </p>
                                                <p class="subtitle mt-4 is-size-6 has-text-white">{{ tanggal(portofolio.tanggal_countdown) }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="hero-footer">
                                <div class="container">
                                    <div class="column is-half-tablet is-offset-one-quarter-tablet mt-6">
                                        <div v-if="direction">
                                            <div class="mt-6 mx-6 mb-3">
                                                <p class="subtitle is-size-5 mb-0 has-text-white">
                                                    Kepada Yth.
                                                </p>
                                                <p class="subtitle is-size-5 mt-0 has-text-white mb-1">
                                                    {{ direction }}
                                                </p>
                                                <p class="is-size-7 has-text-white mt-1 is-italic">
                                                    Mohon maaf apabila ada kesalahan penulisan nama/gelar
                                                </p>
                                            </div>
                                        </div>
                                    </div><br>
                                    <div class="container mt-2">
                                        <button class="button" aria-label="close" @click="cancelModal(); callChildMethod();">Buka Undangan</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import PlayMusic from '@/components/ocean/parts/music/PlayMusic.vue'
import injectStore from '@/hooks/injectStore.js'

import { onMounted, reactive, defineProps, ref } from 'vue'
import moment from 'moment';

const child = ref(null)
const callChildMethod = () => {
    child.value.play();
}


const {portofolio, theme, themeproduct} = injectStore()

// GET PROPS
defineProps({
  direction: { type: Object },
  themeproduct: { type: Object },
});

const modal_data = reactive({
    showModalFlag: false,
})

const showModal= () => {
    modal_data.showModalFlag = true;
}

const cancelModal = () => {
    modal_data.showModalFlag = false;
}

// METHOD
const tanggal = (value) => {
    return moment(value).locale('id').format('dddd, DD MMMM YYYY');
}

// LIFECYCLE
onMounted(() => {
    showModal();
});

</script>


<style lang="scss" scoped>
@import '../../styles/variables';
@import '../../styles/theme/theme-9';

.modal-background {
    background-size: cover;
    background-position: center;
    object-fit: cover;
}

.button {
    // border: 1px solid $secondary-theme-5;
    width: 150px;
    height: 35px;
    background-color: #FFFFFF;
    opacity: 0.6;
    
    font-family: $roboto;
    font-size: 12px;
    display: inline-block;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #000;
    cursor: pointer;

    bottom: 50px;
}
.title {
    font-family: $theme9font;
    font-weight: bold;
}

:deep(.icon){
    z-index: 2;
    color: $primary-theme-9 !important;
}

:deep(.button2) {
    background-color: #FFF;
    z-index: 2;
}
:deep(.button1) {
    background-color: #FFF;
    z-index: 2;
}
</style>