<template>
  <transition name="fade">
    <router-view />
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
        <Map></Map>
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
