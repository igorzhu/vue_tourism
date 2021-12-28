<template>
  <transition name="fade">
    <router-view/>
  </transition>
  <transition name="fade">
    <Gallery v-if="isGalleryOpen" :slideList="galleryRegions" :activeSlide="currentRegion" :assignedShift="galleryShift" @closeThisGal="closeGallery"></Gallery>
  </transition>
  <div class="wrapper">
    <Header />
    <Clouds></Clouds>
    <section class="map-section">
      <transition appear>
        <h2 class="map-section__title" v-show="isMapTitleShown">Выбери свой маршрут!</h2>
      </transition>
      <div class="all-regions-btn-wrapper mobile">
        <button class="all-regions-btn" @click="isTileShown=true;">все регионы</button>
      </div>
      <div class="map-section__inner">
        <Map @geoTagClick="openGallery"></Map>
        <Zoom @zoomIn="zoomInMap" @zoomOut="zoomOutMap"></Zoom>
      </div>
    </section>
    <MapCover></MapCover>
    <RegionsTile :class="{show: isTileShown}" @closeTile="closeRegionsTile"></RegionsTile>
    <Cards></Cards>
  </div>
</template>

<script>
    import { computed } from 'vue';

    import Header from './components/Header.vue'
    import Clouds from './components/Clouds.vue'
    import Map from './components/Map.vue'
    import Zoom from './components/Zoom.vue'
    import MapCover from './components/MapCover.vue'
    import RegionsTile from './components/RegionsTile.vue'
    import Cards from './components/Cards.vue'
    import Gallery from './components/Gallery.vue'

    import regions from './assets/js/data.js';

    export default {
        name: 'App',
        components: {
            Header,
            Clouds,
            Map,
            Zoom,
            MapCover,
            RegionsTile,
            Cards,
            Gallery
        },
        data(){
            return {
                isGalleryOpen: false,
                galleryName: null,
                galleryRegions: [],
                galleryShift: 0, // сдвиг галереи на данное число слайдов
                activeSlideId: null,
                currentRegion: null,
                regionsList: regions.regions,
                isTileShown: false,
                isMapTitleShown: true,
                maxZoom : 5, // число увеличений (нажатий)
                minZoom: -5, // число уменьшений (нажатий)
                zoom: 0 // первоначальный зум
            }
        },
        /*provide(){
            return {
                activeSlideIden: computed(() =>this.currentRegion)
            }
        },*/
        methods: {
            openGallery(slideAlias){
                var self = this;

                self.isGalleryOpen = true;

                if (slideAlias) { // При открытии страницы с query-параметром

                    let targetRegion = slideAlias;

                    self.regionsList.forEach(function(region){
                        if (region.regionId === slideAlias) {
                            self.galleryName = region.districtAlias;
                        }
                    });

                    self.galleryRegions = self.regionsList.filter(function(region, index){
                        return region.districtAlias === self.galleryName;
                    });

                    self.galleryRegions.forEach(function(item, index){
                      if(item.regionId === slideAlias) {
                          self.galleryShift = index + 1;
                          console.log(self.galleryShift);
                      }
                    });

                    console.log(self.galleryRegions);

                } else { // При клике на ссылку

                    //console.log(event.target.attributes['data-zgallery']);

                    // Поскольку событие click на дочернем span по непонятной причине запускает обработчик, используем рекурсиивную функцию getCurrentRegion() для вызова обработчика на нужном нам элементе в случае, если клик придётся на дочерний span:
                    function getCurrentRegion(el){

                        if (el.attributes['data-zgallery']) {
                            let slideSrc = (el.dataset.src).slice(1);

                            console.log('slideSrc = ' + slideSrc);

                            self.galleryName = el.dataset.zgallery;

                            console.log('galleryName = ' + self.galleryName);

                            let regionLinks = document.querySelectorAll('[data-zgallery=' + self.galleryName + ']');

                            console.log(regionLinks);
                            console.log(Array.isArray(regionLinks));

                            let regionLinksArray = Array.from(regionLinks);

                            let galleryRegionsList = regionLinksArray.map(function(el){
                                return (el.dataset.src).slice(1);
                            });

                            console.log(galleryRegionsList);

                            self.galleryRegions = self.regionsList.filter(function(region){

                                return  galleryRegionsList.find(function(item){
                                    return region.regionId == item;
                                });
                            });

                            console.log(self.galleryRegions);

                            self.activeSlideId = slideSrc;

                            self.regionsList.forEach(function(region){
                                if (region.regionId === slideSrc) {
                                    self.currentRegion = region;
                                }
                            });
                        } else {
                            getCurrentRegion(el.parentNode);
                        }
                        console.log(self.currentRegion);
                        self.$router.push({ path: '/', query: { page: self.currentRegion.regionId } });
                    }

                    getCurrentRegion(event.target);
                }
            },
            closeGallery(){
                this.isGalleryOpen = false;
                this.$router.push({ path: '/' });
                this.galleryShift = 0;
            },
            closeRegionsTile(){
                this.isTileShown = false;
            },
            zoomInMap(){
                let self = this;

                self.isMapTitleShown = false;

                let mapW = getComputedStyle(document.querySelector('.map')).width;

                console.log('mapW = ' + mapW);

                if (self.zoom < self.maxZoom) {
                    document.querySelector('.map').style.width = parseInt(mapW)* 1.2 + 'px';
                    console.log(document.querySelector('.map').style.width);
                    self.zoom++;
                }

            },
            zoomOutMap(){

                let self = this;

                self.isMapTitleShown = false;

                let mapW = getComputedStyle(document.querySelector('.map')).width;

                console.log('mapW = ' + mapW);

                if (self.zoom > self.minZoom) {
                    document.querySelector('.map').style.width = parseInt(mapW)/ 1.2 + 'px';
                    console.log(document.querySelector('.map').style.width);
                    self.zoom--;
                }

            }
        },
        mounted() {
            let self = this;
            console.log(this.$route.query);

            if(this.$route.query.page){

                let queryRegion = this.$route.query.page;

                console.log(this.regionsList);

                this.regionsList.forEach(function (region) {
                    if (region.regionId == queryRegion){
                        self.currentRegion = region;
                        console.log('includes');

                        self.openGallery(queryRegion);
                        return;
                    }
                })
            }
        }
    }
</script>

<style lang="scss">

  #app {
    margin: 0;
    padding: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }


</style>
