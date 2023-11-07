import './index.scss';
import { bowlingTeam } from '../data/bowlingTeam.js';
import { nobleFamily } from '../data/nobleFamily.js';
import { graduateHotel } from '../data/graduateHotel.js';
import { Navigation } from '../components/Navigation';
import { initCatalogSlider, initBannerSlider, initGiftSlider } from '../components/Swiper';
import { videoPlaceholder } from '../components/Video.js';
import { catalog } from '../components/Catalog.js';

document.addEventListener("DOMContentLoaded", () => {
    Navigation();
    videoPlaceholder();

    catalog('#bowling-team', bowlingTeam);
    catalog('#noble-family', nobleFamily);
    catalog('#graduate-hotel', graduateHotel);

    initCatalogSlider();
    initBannerSlider();
    initGiftSlider();
});