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
import VideoBox from '../components/VideoBox.js';
import VideoBackground from '../components/VideoBackground.js';
import wishVideoMp4 from '../../video/wish-video.mp4';
import wishVideoWebm from '../../video/wish-video.webm';
import heroVideoMp4 from '../../video/hero-bg.mp4';
import heroVideoWebm from '../../video/hero-bg.webm';
import { TooltipInit } from '../components/Tooltip.js';

// hotjar stuff
const siteId = 3761526;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

//default stuff
document.addEventListener("DOMContentLoaded", () => {
    Navigation();
    Header();
    // videoPlaceholder();
    new VideoBox(wishVideoMp4, wishVideoWebm, 'wish').init();
    // new VideoBackground(heroVideoMp4, heroVideoWebm, 'hero-holding').init();
    // const discountBanner = new Popup('.popup_banner');
    // discountBanner.open();

    catalog('#apparel', bowlingTeam);
    catalog('#noble-family', nobleFamily);
    catalog('#graduate-hotel', graduateHotel);

    initCatalogSlider();
    // initBannerSlider();
    initGiftSlider();
    TooltipInit('tooltip-banner-1', bowlingTeam);
});