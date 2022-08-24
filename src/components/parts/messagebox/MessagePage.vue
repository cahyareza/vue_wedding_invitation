<template>
    <div v-if="ucapan.length !==0" class="container m-4 mb-6">
        <div class="product-container">
            <div class="product-card center">
                <div class="commentlist notification is-light mt-5 p-3" v-for="piece in ucapan" :key="piece.id">
                    <!-- <div class="product-image"> -->
                    <article class="media is-paddingless is-marginless">
                        <div class="content is-paddingless is-marginless">
                            <p class="subtitle is-size-6 has-text-black has-text-weight-bold has-text-left mb-1">{{ piece.name }} <small> - {{ piece.alamat }}</small></p>
                            <p class="subtitle is-size-7 has-text-black has-text-left mt-2">{{ piece.pesan }}</p>
                        </div>
                    </article>
                    <!-- </div> -->
                </div>
            </div>
        </div>
    </div>
</template>


// <script>
//     export default {
//         name: 'MessagePage',
//         data() {
//             return {
//                 comments: [{"nama": "joko", "alamat": "jakarta", "pesan":"selamat"}, 
//                     {"nama": "joko", "alamat": "jakarta", "pesan":"selamat"},
//                     {"nama": "joko", "alamat": "jakarta", "pesan":"selamat"},
//                     {"nama": "joko", "alamat": "jakarta", "pesan":"selamat"}
//                 ]
//             }
//         },
//     };
// </script>

<script setup>

import { onMounted, inject, computed } from "vue";

const store = inject('store');
const ucapan = computed(() => store.state.ucapan); 

onMounted(() => {
    store.actions.getUcapan();
});

</script>


<style lang="scss" scoped>

.product-container {
  background: black;
//   display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
}

.product-container::-webkit-scrollbar {
  display: none;
}

.product-card {
  flex: 1 100%;
  width: 220px;
  height: 280px;
  margin-left: 60px;
}

.product-image {
  position: relative;
  width: 180px;
  height: 80px;
  overflow: hidden;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>