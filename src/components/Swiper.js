
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/navigation';

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
              1025: {
                  slidesPerView: 3,
              },
              767: {
                  slidesPerView: 2.5,
              },
              320: {
                  slidesPerView: 1.3,
              },
          },
          // on: {
          //     // init: (swiper) => Gravity.swiper.addSlidesTabIndex(swiper),
          //     // slideChange: (swiper) => Gravity.swiper.addSlidesTabIndex(swiper),
          // },
      });
  });
};

const maybeHideSliderNavigation = (nextButton, prevButton, hide) => {
  if (hide) {
      nextButton?.classList.add('d-none');
      prevButton?.classList.add('d-none');
  }
};

