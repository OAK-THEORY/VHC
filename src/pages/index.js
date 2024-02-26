import './index.scss';
import { bowlingTeam } from '../data/bowlingTeam.js';
import { nobleFamily } from '../data/nobleFamily.js';
import { graduateHotel } from '../data/graduateHotel.js';
import { Navigation } from '../components/Navigation';
import Popup from '../components/Popup.js';
import { initCatalogSlider, initBannerSlider, initGiftSlider } from '../components/Swiper';
import { videoPlaceholder } from '../components/Video.js';
import { catalog } from '../components/Catalog.js';
import { Header } from '../components/Header.js';
import Hotjar from '@hotjar/browser';

// hotjar stuff
const siteId = 3761526;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

//default stuff
document.addEventListener("DOMContentLoaded", () => {
    Navigation();
    // Header();
    videoPlaceholder();
    const discountBanner = new Popup('.popup_banner');
    // discountBanner.open();

    catalog('#bowling-team', bowlingTeam);
    catalog('#noble-family', nobleFamily);
    catalog('#graduate-hotel', graduateHotel);

    initCatalogSlider();
    initBannerSlider();
    initGiftSlider();
});