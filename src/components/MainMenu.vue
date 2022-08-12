<template>
    <div class="container">
        <button-music class="button is-rounded is-light p-3">
            <span class="icon has-text-dark">
                <font-awesome-icon icon="fa-solid fa-music" />
            </span>
        </button-music>
        <button-amplop class="button is-rounded is-primary p-3">
            <span class="icon has-text-dark">
                <font-awesome-icon icon="fa-solid fa-money-bill-wave" />
            </span>
        </button-amplop>
    </div>
    <div class="container">
        <div class="notification is-primary p-2">
                <!-- <span class="mr-4" @click="editEvent(day.id, event.details)"><fa :icon="['fas', 'pencil']" /></span>
                <span @click="deleteEvent(day.id, event.details)"><fa :icon="['fas', 'trash']" /></span> -->
            <span class="icon-text is-paddingless is-marginless">
                <span class="icon">
                    <font-awesome-icon icon="fa-solid fa-heart" />
                </span>
                <!-- <span>Couple</span> -->
                <span class="icon">
                    <font-awesome-icon icon="fa-solid fa-calendar-days" />
                </span>
                <!-- <span>Date</span> -->
                <span class="icon">
                    <font-awesome-icon icon="fa-solid fa-map" />
                </span>
                <!-- <span>Location</span> -->
                <span class="icon">
                    <font-awesome-icon icon="fa-solid fa-images" />
                </span>
                <!-- <span>Galleries</span> -->
                <span class="icon">
                    <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                </span>
                <!-- <span>Wishes</span> -->
            </span>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.notification {
    position: fixed;
    height: 40px;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 2px 2px 3px #999;
}

button-music.button {
    position: fixed;
    height: 40px;
    top: 20px;
    right: 20px;
    color: #fff;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 2px 2px 3px #999;
}

button-amplop.button {
    position: fixed;
    height: 40px;
    top: 70px;
    right: 20px;
    color: #fff;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 2px 2px 3px #999;
}
</style>
