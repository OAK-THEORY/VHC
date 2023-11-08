import Swiper from 'swiper';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
// Swiper.use([Navigation, Autoplay, EffectFade]);
import 'swiper/css'; 




export const initCatalogSlider = () => {
    document.querySelectorAll('.catalog__swiper').forEach((module) => {
      const sliderContainer = module.querySelector('.swiper');
      // const swiperWrapper = module.querySelector('.gravity-block-dynamic-boxes--grid-view');
      // const swiperSlides = module.querySelectorAll('.gravity-block-dynamic-boxes__box');
      const nextButton = module.querySelector('.swiper-button-next');
      const prevButton = module.querySelector('.swiper-button-prev');
      // const isWorkshopsOrCourses =
      //     module.classList.contains('gg-workshops-slider-public') ||
      //     module.classList.contains('gg-courses-boxes-slider');

      // if (!sliderContainer || !swiperWrapper) {
      //     return;
      // }

      // const isEnoughSlides = swiperSlides.length >= 4;
      // sliderContainer.classList.add('swiper-container');
      // swiperWrapper.classList.add('swiper-wrapper');
      // swiperSlides.forEach((box) => {
      //     box.classList.add('swiper-slide');
      // });

      // maybeHideSliderNavigation(nextButton, prevButton, !isEnoughSlides);

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
                // 1730: {
                //     slidesPerView: 4.5,
                // },
                1025: {
                    slidesPerView: 3.5,
                },
                767: {
                    slidesPerView: 2.5,
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
            speed: 2000,            
            allowTouchMove: false,
            loop: true,
            autoplay: {
                delay: 3500,
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
            1025: {
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

