import './index.scss';
import { bowlingTeam } from '../data/bowlingTeam.js';
import { nobleFamily } from '../data/nobleFamily.js';
import { graduateHotel } from '../data/graduateHotel.js';
import { Component } from '../components/Component.js';
import { Navigation } from '../components/Navigation';
import { initCatalogSlider, initBannerSlider } from '../components/Swiper';
import { videoPlaceholder } from '../components/Video.js';
import { catalog } from '../components/Catalog.js';
import Card from '../components/Card';
import Section from '../components/Section';

document.addEventListener("DOMContentLoaded", () => {
    // Component();
    Navigation();
    videoPlaceholder();
    
    // function createNewCard(data) {
    //     const card = new Card(data, '#slide-card-template');
    //     return card.generateCard();
    // }

    catalog('#bowling-team', bowlingTeam);
    catalog('#noble-family', nobleFamily);
    catalog('#graduate-hotel', graduateHotel);
   
    // const cardListBowlingTeam = new Section({
    //     renderer: (item) => {
    //         cardListBowlingTeam.setItem(createNewCard(item));
    //     },
    // }, '#bowling-team .catalog__swiper .swiper-wrapper');
    // cardListBowlingTeam.renderItems(bowlingTeam);

    // const cardListNobleFamily = new Section({
    //     renderer: (item) => {
    //         cardListNobleFamily.setItem(createNewCard(item));
    //     },
    // }, '#noble-family .catalog__swiper .swiper-wrapper');
    // cardListNobleFamily.renderItems(nobleFamily);

    initCatalogSlider();
    initBannerSlider();
});