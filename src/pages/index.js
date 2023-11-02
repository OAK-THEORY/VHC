import './index.scss';
import { bowlingTeam } from '../data/data';
import { Component } from '../components/Component.js';
import { Navigation } from '../components/Navigation';
import { initCatalogSlider, initBannerSlider } from '../components/Swiper';
import { videoPlaceholder } from '../components/Video.js';
import Card from '../components/Card';
import Section from '../components/Section';

document.addEventListener("DOMContentLoaded", () => {
    Component();
    Navigation();
    videoPlaceholder();
    
    function createNewCard(data) {
        const card = new Card(data, '#slide-card-template');
        return card.generateCard();
    }
   
    const cardList = new Section({
        renderer: (item) => {
            cardList.setItem(createNewCard(item));
        },
    }, '#bowling-team .catalog__swiper .swiper-wrapper');
    cardList.renderItems(bowlingTeam);

    initCatalogSlider();
    initBannerSlider();
});