<template>
    <div class="modal" :class="{'is-active': modal_data.showModalFlag}">
        <div class="modal-background"></div>

        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Protokol Kesehatan Covid-19</p>
                <button class="delete" aria-label="close" @click="cancelModal" style="float: right; position:absolute; top:20px; right:20px;"></button>
            </header>
            <section class="modal-card-body">
                <img class="filter is-rounded mb-3" src="../assets/social_distancing.svg">
            </section>
            <footer class="modal-card-foot">
                Demi mendukung pencegahan covid 19 dan kesehatn bersama alangkah baiknya para tamu yang akan hadir memenuhi standar protokol kesehatan.
            </footer>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'

const modal_data = reactive({
    showModalFlag: false,
})

const showModal= () => {
    modal_data.showModalFlag = true;
}

const cancelModal = () => {
    modal_data.showModalFlag = false;
}

// LIFECYCLE
onMounted(() => {
    showModal();
});

</script>


<style lang="scss" scoped>
.modal-card,
.modal-content {
    margin: 0 20px;
    max-height: calc(100vh - 160px);
    overflow: auto;
    position: relative;
    /*remove width: 100%;*/
    width: calc(100% - 2em);
}
/*modal breakpoint*/
@media screen and (min-width:769px) {
    .modal-card,
    .modal-content {
        margin: 0 auto;
        max-height: calc(100vh - 40px);
        width: 640px
    }
}
</style>