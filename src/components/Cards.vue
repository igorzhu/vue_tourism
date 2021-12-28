<template>
    <div class="cards">
        <div v-for="region in regions" :key="region.regionId" class="card" :id="region.regionId">
            <div class="card__inner">
                <h3 class="card__title">{{region.region}}</h3>
                <div class="card_content" data-simplebar>
                    <div class="card_content-inner">
                        <div class="card__descr">{{ region.shortDescription }}</div>
                        <img class="card__pic" :src="require(`@/assets/images/regions/${region.image}`)" />
                        <div class="card__text" v-html="region.cardDescription"></div>
                        <a class="card__link" :href="region.link">Подробнее </a>
                        <div class="after-text-block" v-html="region.afterText"></div>
                        <div class="card__socials"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import regions from '../assets/js/data.js';

    export default {
        name: "cards",
        data(){
            return regions
        }
    }
</script>

<style>

</style>