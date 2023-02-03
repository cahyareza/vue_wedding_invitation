<template>
    <div :class="theme">
        <div class="">
            <SlidePage 
            :image="multiimage[chooseImage.value]"
            :portofolio="portofolio"
            :id="chooseImage.id"
            >
            </SlidePage>
        </div>
    </div>
</template>

<script setup>
import { defineProps, reactive, onMounted } from 'vue'
import SlidePage from './parts/maincovercardo/SlidePage.vue'

// GET PORTOFOLIO
const props = defineProps({
  portofolio: { type: Object },
  theme: { type: Object },
  themeproduct: { type: Object },
  multiimage: { type: Array },
});

const chooseImage = reactive({id:0, value:0})

const move = () => {
    var flag = chooseImage.value;
    flag++;
    if(flag >= props.multiimage.length){
        flag = 0;
    }
    chooseImage.value = flag
    chooseImage.id = flag
    console.log(chooseImage.value)
}


const create = () => {
    setInterval(() => {
        move();
    }, 10000);
}

onMounted(() => {
    create();
})


</script>

<style lang="scss" scoped>
@import "../../styles/component/maincover.scss";
</style>