<template>
    <section class="map-cover" v-show="isShown">
        <img class="clicking" src="@/assets/images/clicking.svg" />
        <div class="map-cover__text">Вы можете перемещать карту и изменять ее масштаб, для того чтобы увидеть все точки на ней</div>
        <button class="map-cover__button" @click="isShown=false;">Понятно</button>
    </section>
</template>

<script>
    export default {
        name: "map-cover",
        data() {
            return {
                isShown: true
            }
        }
    }
</script>

<style>

</style>