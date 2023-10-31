import './index.scss';
import { Component } from '../components/Component.js';
import { Navigation } from '../components/Navigation';
import { initCatalogSlider } from '../components/Swiper';

document.addEventListener("DOMContentLoaded", () => {
    Component();
    Navigation();
    initCatalogSlider();
});