<template>
    <div class="zgallery__container">
        <div class="zgallery__overlay"></div>
        <div class="zgallery__inner" @click.self="$emit('closeThisGal')">
            <div class="zgallery__navigation" :class="{'content-width': navContentWidth, hide: navHide}">
                <button @click="sliding('left')" class="zgallery__arrow zgallery__arrow-left"></button>
                <button @click="sliding('right')" class="zgallery__arrow zgallery__arrow-right"></button>
            </div>
            <div class="zgallery__stage">
                <div class="zgallery__stage-inner-wrapper">
                    <div class="zgallery__stage-inner">
                        <Slide v-for="(item, index) in slideList" :data-region="item.regionId" :region="item" :active="activeSlide"></Slide>
                    </div>
                    <a class="zgallery__close" href="javascript:;" @click="$emit('closeThisGal')"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    //import $ from 'jquery'
    //import swipe from 'jquery-touchswipe';
    import Slide from './Slide.vue'

    export default {
        name: "gallery",
        components: {
            Slide
        },
        data(){
            return {
                navContentWidth: true, // ширина панели навигации ориентируется на ширину слайда
                navHide: false, // скрыть панель навигации
                slideW: 0, // ширина слайда
                slidesNumber: 0, // число слайдов в галлерее (без клонов)
                currentSlideNumber: 1,
                shift: 0 // сдвиг ленты
            }
        },
        props: ['activeSlide', 'slideList', 'assignedShift'],
        methods: {
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

                        $(sliderBand).animate({
                            left: self.shift
                        }, 1000, function(){

                            // устанавливаем слайдер на последний слайд:

                            self.shift = parseInt(self.slideW) * self.slidesNumber * (-1);

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

                console.log(currentSlide);

                currentSlide.classList.add('zgallery__slide_active');

                let currentRegion = currentSlide.dataset.region;

                self.$router.push({ path: '/', query: { page: currentRegion } });

                $('.zgallery__slide_active .aif_shares_js').aifShares();
            }
        },
        mounted(){
            //console.log(this.$route.query);
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
        },
        unmounted(){
            document.documentElement.classList.remove('noscroll', 'popup-open');
            document.body.classList.remove('noscroll');
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