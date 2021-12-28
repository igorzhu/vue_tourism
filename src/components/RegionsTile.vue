<template>
    <div class="regions-tile">
        <a class="close mobile" href="#" @click="$emit('closeTile')"></a>
        <ul>
            <li v-for="region in regions" :key="region.regionId" class="region" :style="{ backgroundImage: 'url(' + require(`@/assets/images/regions/${region.image}`) + ')'}">
                <div class="region__text">
                    <h4 class="region__title">{{region.region}}</h4>
                    <div class="region__descr">{{region.shortDescription}}</div>
                    <a class="region__link" target="_blank" v-bind:href="region.link">Подробнее</a>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import regions from '../assets/js/data.js';

    export default {
        name: "regions-tile",
        data(){
            return regions
        }
    }
</script>

<style>

</style>