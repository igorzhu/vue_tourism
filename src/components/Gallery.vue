<template>
    <div class="zgallery__container">
        <div class="zgallery__overlay"></div>
        <div class="zgallery__inner" @click.self="close">
            <div class="zgallery__navigation" :class="{'content-width': navContentWidth, hide: navHide}">
                <button @click="pushRoute('left')" class="zgallery__arrow zgallery__arrow-left"></button>
                <button @click="pushRoute('right')" class="zgallery__arrow zgallery__arrow-right"></button>
            </div>
            <div class="zgallery__stage">
                <div class="zgallery__stage-inner-wrapper">
                    <div class="zgallery__stage-inner">
                        <Slide v-for="(item, index) in slideList" :data-region="item.regionId" :region="item" :active="currentRegion"></Slide>
                    </div>
                    <a class="zgallery__close" href="javascript:;" @click="close"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    //import $ from 'jquery'
    //import swipe from 'jquery-touchswipe';
    import regions from '../assets/js/data.js';
    import Slide from './Slide.vue'


    export default {
        name: "gallery",
        components: {
            Slide
        },
        data(){
            return {
                //isOpen: false,
                regionsList: regions.regions,
                navContentWidth: true, // ширина панели навигации ориентируется на ширину слайда
                navHide: false, // скрыть панель навигации
                slideW: 0, // ширина слайда
                slidesNumber: 0, // число слайдов в галлерее (без клонов)
                currentSlideNumber: 1,
                shift: 0, // сдвиг ленты на число пикселов
                currentRegion: null,
                galleryName: null,
                slideList: null,
                assignedShift: 0 // сдвиг галереи на данное число слайдов
            }
        },
        props: ['query'],
        methods: {
            pushRoute(direction){
                let self = this;

                let nextRouteQuery;

                let currentIndex; // индекс текущего слайда в массиве слайдов

                console.log(self.slideList);
                console.log(self.currentRegion);

                self.slideList.forEach(function(item, index){
                    if(item.regionId === self.currentRegion.regionId) {
                        currentIndex = index;
                    }
                });

                if (direction == 'left') {

                    if(currentIndex === 0) {
                        nextRouteQuery = self.slideList[self.slideList.length - 1].regionId;
                    } else {
                        nextRouteQuery = self.slideList[currentIndex - 1].regionId;
                    }

                } else if (direction == 'right'){
                    if(currentIndex === self.slideList.length - 1) {
                        nextRouteQuery = self.slideList[0].regionId;
                    } else {
                        nextRouteQuery = self.slideList[currentIndex + 1].regionId;
                    }
                }

                console.log('currentIndex = ' + currentIndex);
                console.log('nextRouteQuery = ' + nextRouteQuery);

                self.$router.push({ path: '/gallery', query: { page: nextRouteQuery } });
            },
            sliding(direction){

                let self = this;
                let sliderBand =  document.querySelector('.zgallery__stage-inner');

                sliderBand.children[self.currentSlideNumber].classList.remove('zgallery__slide_active');

                if (direction == 'left') {
                    if (self.currentSlideNumber > 1) {
                        self.shift += parseInt(self.slideW);
                        self.currentSlideNumber--;

                        $(sliderBand).animate({
                            left: self.shift
                        }, 1000);

                    } else {
                        this.shift += parseInt(this.slideW);
                        console.log('shift = ' + self.shift);
                        $(sliderBand).animate({
                            left: self.shift
                        }, 1000, function(){

                            // устанавливаем слайдер на последний слайд:

                            self.shift = parseInt(self.slideW) * self.slidesNumber * (-1);
                            console.log('shift = ' + self.shift);
                            $(sliderBand).css({
                                left: self.shift
                            });

                        });

                        this.currentSlideNumber = this.slidesNumber;

                    }

                } else if (direction == 'right') {
                    if (self.currentSlideNumber < self.slidesNumber) {
                        self.shift -= parseInt(self.slideW);
                        self.currentSlideNumber++;

                        console.log('currentSlideNumber = ' + self.currentSlideNumber);
                        console.log('slidesNumber = ' + self.slidesNumber);

                        $(sliderBand).animate({
                            left: self.shift
                        }, 1000);

                    } else {
                        self.shift -= parseInt(self.slideW);
                        self.currentSlideNumber = 1;

                        $(sliderBand).animate({
                            left: self.shift
                        }, 1000, function(){

                            // устанавливаем слайдер на первый слайд:

                            self.shift = parseInt(self.slideW) * -1;

                            $(sliderBand).css({
                                left: self.shift
                            });
                        });
                    }
                }

                let currentSlide = sliderBand.children[self.currentSlideNumber];

                currentSlide.classList.add('zgallery__slide_active');

                let currentRegion = currentSlide.dataset.region;

                self.regionsList.forEach(function (region) {
                    if (region.regionId == currentRegion){
                        self.currentRegion = region;
                        console.log(self.currentRegion);
                        return;
                    }
                });

                console.log('currentSlideNumber = ' + self.currentSlideNumber);
                console.log(self.currentRegion);
                console.log('shift = ' + self.shift);

                //self.$router.push({ path: '/gallery', query: { page: currentRegion } });

                $('.zgallery__slide_active .aif_shares_js').aifShares();
            },
            close(){
                this.$router.push({ path: '/' });
            }
        },
        beforeCreate(){

        },
        created(){
            let self = this;

            console.log('Gallery is created');

            let queryRegion = this.$route.query.page;

            self.regionsList.forEach(function (region) {
                if (region.regionId == queryRegion){
                    self.currentRegion = region;
                    return;
                }
            });

            console.log(self.currentRegion);

            if(!self.currentRegion) {
                this.$router.push({ path: '/' });
            }

            self.regionsList.forEach(function(region){
                if (region.regionId === self.currentRegion.regionId) {
                    self.galleryName = region.districtAlias;
                }
            });

            self.slideList = self.regionsList.filter(function(region, index){
                return region.districtAlias === self.galleryName;
            });

            self.slideList.forEach(function(item, index){
                if(item.regionId === self.currentRegion.regionId) {
                    self.assignedShift = index + 1;
                }
            });
        },
        mounted(){
            console.log('Gallery is mounted');

                let self = this;

                this.slideW = getComputedStyle(document.querySelector('.zgallery__slide')).width;
                document.querySelector('.zgallery__stage').style.width = this.slideW;

                this.slidesNumber = this.slideList.length; // число слайдов в галлерее (без клонов)

                if (this.assignedShift != 0) {

                    this.currentSlideNumber = this.assignedShift;

                    this.shift = parseInt(this.slideW) * this.assignedShift * -1; // смещаем ленту влево на количество слайдов, соответствующее параметру url
                } else {
                    this.shift = parseInt(this.slideW) * -1; // смещаем ленту влево на ширину слайда-клона, чтобы она встала на 1-й слайд
                }


                let sliderBand =  document.querySelector('.zgallery__stage-inner');

                // Создаём и вставляем клоны первого и последнего слайдов:

                let firstSlideClone = sliderBand.firstElementChild.cloneNode(true),
                    lastSlideClone = sliderBand.lastElementChild.cloneNode(true);

                firstSlideClone.classList.remove('zgallery__slide_active');
                firstSlideClone.classList.add('zgallery__slide_clone');
                firstSlideClone.removeAttribute('data-region');
                lastSlideClone.classList.remove('zgallery__slide_active');
                lastSlideClone.classList.add('zgallery__slide_clone');
                lastSlideClone.removeAttribute('data-region');

                sliderBand.prepend(lastSlideClone);
                sliderBand.append(firstSlideClone);

                sliderBand.style.width = parseInt(this.slideW) * (this.slidesNumber + 2) + 'px';
                sliderBand.style.left = this.shift + 'px';

                if (this.navContentWidth) {
                    document.querySelector('.zgallery__navigation').style.width = this.slideW;
                }

                if (this.slidesNumber === 1) {
                    this.navHide = true;
                }

                document.documentElement.classList.add('noscroll', 'popup-open');
                document.body.classList.add('noscroll');

            $('.zgallery__slide').swipe({

                swipeLeft:function(event, distance, duration, fingerCount, fingerData, currentDirection) {
                    self.pushRoute('right');
                },

                swipeRight:function(event, distance, duration, fingerCount, fingerData, currentDirection) {
                    self.pushRoute('left');
                }
            });


            $('.zgallery__slide').mousewheel(function (event, delta) {

                //event.preventDefault();

                 delta > 0  ? self.pushRoute('left') : self.pushRoute('right');

            });

            $('body').on('keydown', '.zgallery__container', function(e) {

                console.log('key down');

                if (e.which === 37)
                {
                    self.pushRoute('left');
                }

                else if (e.which === 39)
                {
                    self.pushRoute('right');
                }

                else if (e.which === 27)
                {
                    self.close();
                }
            });

            window.addEventListener('keyup', console.log('key up'));
            document.addEventListener('keydown', console.log('key down'));
        },
        unmounted(){
            document.documentElement.classList.remove('noscroll', 'popup-open');
            document.body.classList.remove('noscroll');
        },
        beforeRouteUpdate(to, from, next) {

            let self = this;

            if(to.query && to.query.page){

                let toIndex, fromIndex;

                self.slideList.forEach(function(item, index){
                    if(item.regionId === to.query.page) {
                        toIndex = index;
                    }

                    if(item.regionId === from.query.page) {
                        fromIndex = index;
                    }
                });

                if (toIndex > fromIndex) {
                    if (toIndex === self.slideList.length -1 && fromIndex === 0){
                        this.sliding('left');
                    } else {
                        this.sliding('right');
                    }
                } else if (toIndex < fromIndex) {
                    if (toIndex === 0 && fromIndex === self.slideList.length - 1){
                        this.sliding('right');
                    } else {
                        this.sliding('left');
                    }
                }

                next();

            } else {
                this.close();
            }

        }

    }
</script>

<style>

    .zgallery__arrow {
        background-color: transparent;
    }

    .fade-enter-active {
        transition: opacity 0.5s ease;
    }

    .fade-leave-active {
        transition: opacity 0.3s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

    /*.zgallery__stage-inner {
        transition: all ease 2s;
    }*/

    .no-transition {
        transition: none;
    }

</style>