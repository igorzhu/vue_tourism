<template>
    <div class="zoom">
        <button class="zoom-in" @click="$emit('zoomIn')"><span>+</span></button>
        <button class="zoom-out" @click="$emit('zoomOut')"><span>&ndash;</span></button>
    </div>
</template>

<script>
    export default {
        name: "zoom"
    }
</script>

<style>

</style>