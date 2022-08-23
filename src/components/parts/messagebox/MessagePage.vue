<template>
    <div class="container m-4 mb-6">
        <div class="product-container">
            <div class="product-card center">
                <div class="commentlist notification is-light mt-1" v-for="comment in comments" :key="comment.id">
                    <!-- <div class="product-image"> -->
                    <article class="media is-paddingless is-marginless">
                        <div class="content is-paddingless is-marginless">
                            <p class="subtitle is-size-6 has-text-black has-text-weight-bold has-text-left mb-1">{{ comment.nama }} <small> - {{ comment.alamat }}</small></p>
                            <p class="subtitle is-size-7 has-text-black has-text-left mt-2">{{ comment.pesan }}</p>
                        </div>
                    </article>
                    <!-- </div> -->
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'MessagePage',
        data() {
            return {
                comments: [{"nama": "joko", "alamat": "jakarta", "pesan":"selamat"}, 
                    {"nama": "joko", "alamat": "jakarta", "pesan":"selamat"},
                    {"nama": "joko", "alamat": "jakarta", "pesan":"selamat"},
                    {"nama": "joko", "alamat": "jakarta", "pesan":"selamat"}
                ]
            }
        },
    };
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