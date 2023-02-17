<template>
    <transition-group name="fade" mode="out-in" tag="div" id="slides">
        <div class="low-opacity-bg-image">
            <div class="hero slideImage is-fullheight" :style="setBackgroundImage" :key="id">
                <div class="hero-body">
                </div>
                <div class="hero-footer mb-4 p-2"> 
                    <section class="section">
                        <p class="subtitle1 is-uppercase is-size-6-mobile is-size-5-tablet mb-3">PERNIKAHAN</p>
                        
                        <p class="title is-size-3-ipad is-size4-mobile is-capitalized mt-4">
                            {{ portofolio.pname }} <br>
                            & <br>
                            {{ portofolio.lname }}
                        </p>
                    </section>
                </div>
            </div>
        </div>
    </transition-group>
</template>

<script setup>
import { defineProps, computed } from 'vue'

// GET PORTOFOLIO
const props = defineProps({
  portofolio: { type: Object },
  image: { type: Object },
  id: {
    type: Number,
    required: true
  }
});

const setBackgroundImage = computed(() => {
    return {backgroundImage : "url("+props.image+")"};
});
</script>

<style lang="scss" scoped>
#slides{

}
#slides .slideImage{
    height: 100vh;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.fade-move{
    transition: all 3s;;
}
.fade-enter-active {
    animation-name: fadeEnter;
    animation-duration: 1s;
    animation-iteration-count: 1;
}

.fade-leave-active {
    animation-name: fadeLeave;
    animation-duration: 1s;
    animation-iteration-count: 1;
}

@keyframes fadeEnter{
    from{
        opacity:0.3;
    }
    to{
        opacity:1;
    }
}

@keyframes fadeLeave{
    from{
        opacity:1;
    }
    to{
        opacity:0.8;
    }
}
</style>