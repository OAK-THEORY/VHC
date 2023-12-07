import Swiper from 'swiper';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';

export const initCatalogSlider = () => {
    document.querySelectorAll('.catalog__swiper').forEach((module) => {
        const sliderContainer = module.querySelector('.swiper');
        const nextButton = module.querySelector('.swiper-button-next');
        const prevButton = module.querySelector('.swiper-button-prev');

        new Swiper(sliderContainer, {
            modules: [Navigation],
            centeredSlides: false,
            slidesPerView: 'auto',
            spaceBetween: 35,
            watchOverflow: true,
            cssWidthAndHeight: false,
            allowTouchMove: true,
            speed: 400,
            loop: true,
            setWrapperSize: false,
            navigation: {
                enabled: true,
                nextEl: nextButton,
                prevEl: prevButton,
            },
            breakpoints: {
                1200: {
                    slidesPerView: 3.5,
                },
                850: {
                    slidesPerView: 2.8,
                    spaceBetween: 20,
                },
                320: {
                    slidesPerView: 1.3,
                    spaceBetween: 20,
                },
            },
        });
    });
};
export const initBannerSlider = () => {
    document.querySelectorAll('.catalog__banner').forEach((module) => {
        const sliderContainer = module.querySelector('.swiper');

        new Swiper(sliderContainer, {

            modules: [Autoplay, EffectFade],
            effect: "fade",
            centeredSlides: true,
            speed: 1500,
            allowTouchMove: false,
            loop: true,
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            }
        });
    });
}

export const initGiftSlider = () => {
    document.querySelectorAll('.gift__swiper').forEach((module) => {
        const sliderContainer = module.querySelector('.swiper');
        const nextButton = module.querySelector('.swiper-button-next');
        const prevButton = module.querySelector('.swiper-button-prev');

        new Swiper(sliderContainer, {
            modules: [Navigation],
            centeredSlides: false,
            slidesPerView: '3',
            spaceBetween: 10,
            watchOverflow: true,
            cssWidthAndHeight: false,
            allowTouchMove: true,
            speed: 400,
            loop: true,
            setWrapperSize: false,
            navigation: {
                enabled: true,
                nextEl: nextButton,
                prevEl: prevButton,
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2,
                },
                550: {
                    slidesPerView: 2,
                },
                320: {
                    slidesPerView: 1,
                },
            },
        });
    });
};

