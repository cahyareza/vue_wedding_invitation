<template>
    <div class="container mb-1">
        <div class="commentlist notification is-light p-3 m-2" style="width: 250px;" v-for="comment in comments" :key="comment.id">
            <article class="media is-paddingless is-marginless">
                <div class="content is-paddingless is-marginless">
                    <p class="subtitle is-size-7 has-text-black has-text-weight-bold has-text-left mb-1">{{ comment.nama }} <small> - {{ comment.alamat }}</small></p>
                    <p class="subtitle is-size-7 has-text-black has-text-left mt-3">{{ comment.pesan }}</p>
                </div>
            </article>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'MessagePage',
        data() {
            return {
                comments: [{"nama": "joko", "alamat": "jakarta", "pesan":"selamat"}, {"nama": "joko", "alamat": "jakarta", "pesan":"selamat"}]
            }
        },
    };
</script>

