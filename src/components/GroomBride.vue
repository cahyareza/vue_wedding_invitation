<template>
    <section class="hero is-info is-fullheight">
        <section class="section pt-4">
            <div class="container">
                <p class="title mt-5 p-6">Pengantin</p>

                <div class="columns is-multiline is-centered mt-1">
                    <div class="column is-full">
                        <figure class="image is-inline-block" style="height:180px; width: 180px;">
                            <img class="is-rounded mb-3" src="https://bulma.io/images/placeholders/128x128.png">
                            <a href="######"><font-awesome-icon icon="fa-brands fa-4x fa-instagram" /></a>
                        </figure>

                        <p class="title mt-5 mb-6">Nadia</p>

                        <p class="subtitle is-size-6 has-text-weight-bold mb-1">Putri pertama dari</p>
                        <p class="subtitle is-size-6 mt-1">Bapak Michael Stam & Ibu Aminah SA</p>

                        <p class="subtitle is-size-5 has-text-weight-bold mt-3">&</p>


                    </div>
                    <div class="column is-full mt-4">
                        <figure class="image is-inline-block" style="height:180px; width: 180px;">
                            <img class="is-rounded mb-3" src="https://bulma.io/images/placeholders/128x128.png">
                            <a href="######"><font-awesome-icon icon="fa-brands fa-4x fa-instagram" /></a>
                        </figure>

                        <p class="title mt-5 mb-6">Yudha</p>

                        <p class="subtitle is-size-6 has-text-weight-bold mb-1">Putra pertama dari</p>
                        <p class="subtitle is-size-6 mt-1">Bapak Bambang & Ibu Siti Susana</p>
                    </div>
                </div>


            </div>
        </section>
        

    </section>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

const couples = ref(null)

onMounted(() => {
    axios.get('contents/couples.json')
        .then( 
            res => couples.value = res.data.couples,
            console.log(couples.value)
        )
        .catch( err => alert(err) )
})
</script>

