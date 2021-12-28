<template>
    <div class="zgallery__slide" :class="{zgallery__slide_active: isActive}">
        <div class="card">
            <div class="card__inner">
                <h3 class="card__title">{{region.region}}</h3>
                    <div class="card_content" data-simplebar>
                        <div class="card_content-inner">
                            <div class="card__descr">{{ region.shortDescription }}</div>
                            <div class="card__pic-wrapper">
                                <img class="card__pic" :src="require(`@/assets/images/regions/${region.image}`)" />
                            </div>
                            <div class="card__text" v-html="region.cardDescription"></div>
                            <a class="card__link" :href="region.link">Подробнее </a>
                            <div class="after-text-block" v-html="region.afterText"></div>
                            <div class="card__socials">
                                <Socials></Socials>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
    import regions from '../assets/js/data.js';
    import Socials from './Socials.vue'

    import simplebar from 'simplebar-vue';
    import 'simplebar/dist/simplebar.min.css';

    export default {
        name: "slide",
        components: {
            simplebar,
            Socials
        },
        props: ['region', 'active'],
        //inject: ['activeSlideIden'],
        data(){
            return {
                regions: regions,
                isActive: false
            }
        },
        computed: {
            currentRegion(){
                console.log(region);
            }
        },
        created() {

            if (this.region.regionId == this.active.regionId) {
                this.isActive = true;
            }
        },
        mounted(){
            $('.zgallery__slide_active .aif_shares_js').aifShares();
        }
    }
</script>

<style>

</style>