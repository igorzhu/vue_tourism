<template>
    <div class="clouds">
        <img v-for="n in 12" :key="n" class="cloud" :class="'cloud_' + n" :src="require(`@/assets/images/cloud_${n}.svg`)" />
    </div>
</template>

<script>
    export default {
        name: "clouds"
    }
</script>

<style>

</style>