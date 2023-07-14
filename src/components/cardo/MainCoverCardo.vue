<template>
    <div :class="theme">
        <div v-if="themeproduct.theme?.slug === 'theme-6'"> 
            <SlidePage 
            :image="multiimagetheme[chooseImage.value]"
            :portofolio="portofolio"
            :id="chooseImage.id"
            >
            </SlidePage>
        </div>
        <div v-else-if="themeproduct.theme?.slug === 'theme-7'">
            <SlidePageGrane 
            :image="multiimagetheme[chooseImage.value]"
            :portofolio="portofolio"
            :id="chooseImage.id"
            >
            </SlidePageGrane>
        </div>
        <div v-else-if="themeproduct.theme?.slug === 'theme-8'">
            <SlidePageCosmos
            :image="multiimagetheme[chooseImage.value]"
            :portofolio="portofolio"
            :id="chooseImage.id"
            :quote="quote" 
            >
            </SlidePageCosmos>
        </div>
        <div v-else-if="themeproduct.theme?.slug === 'theme-11'">
            <SlidePageBraun
            :image="multiimagetheme[chooseImage.value]"
            :portofolio="portofolio"
            :id="chooseImage.id"
            :quote="quote" 
            >
            </SlidePageBraun>
        </div>
    </div>
</template>

<script setup>
import { defineProps, reactive, onMounted } from 'vue'
import SlidePage from '@/components/cardo/parts/maincovercardo/SlidePage.vue'
import SlidePageGrane from '@/components/grane/parts/maincovergrane/SlidePage.vue'
import SlidePageCosmos from '@/components/cosmos/parts/maincovercosmos/SlidePage.vue'
import SlidePageBraun from '@/components/braun/parts/maincoverbraun/SlidePage.vue'
import useMethod from '@/hooks/useMethod.js'

const {move} = useMethod()

// GET PORTOFOLIO
const props = defineProps({
  portofolio: { type: Object },
  theme: { type: Object },
  themeproduct: { type: Object },
  multiimagetheme: { type: Array },
  quote: { type: Object },
});

const chooseImage = reactive({id:0, value:0})

onMounted(() => {
    setInterval(() => {
        move(chooseImage, props.multiimagetheme);
    }, 10000);
})

</script>

<style lang="scss" scoped>
@import "@/styles/component/maincover.scss";
</style>