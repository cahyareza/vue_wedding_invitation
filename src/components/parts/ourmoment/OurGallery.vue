<template>
    <div class="container mt-6">
        <div class="grid">
            <img src="https://source.unsplash.com/400x400?mountain">
            <img src="https://source.unsplash.com/400x400?nature">
            <img src="https://source.unsplash.com/400x400?valley">
            <img src="https://source.unsplash.com/400x400?beach">
            <img src="https://source.unsplash.com/400x400?ocean">
            <img src="https://source.unsplash.com/400x400?water">
            <img src="https://source.unsplash.com/400x400?trees">
            <img src="https://source.unsplash.com/400x400?lake">
        </div>
    </div>
</template>



<script setup>

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

</script>



<style lang="scss" scoped>

body {
  margin: 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 180px);
  justify-content: center;
  align-content: center;
  grid-gap: 10px;
  height: 100vh;
}

.grid img {
  width: 200px;
  height: 190px;
  cursor: pointer;
}

#lightbox {
  position: fixed;
  z-index: 1000;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .8);
  display: none;
}

#lightbox.active {
  display: flex;
  justify-content: center;
  align-items: center;
}

#lightbox img {
  max-width: 90%;
  max-height: 80%;
  padding: 4px;
  background-color: black;
  border: 2px solid white;
}

</style>