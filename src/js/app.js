
import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

// reviews-carusel

new Swiper('.myslider', {
   slidesPerView: 3,
   spaceBetween: 30,
   loop: true,
   pagination: {
      el: ".swiper-points",
      clickable: true,
   },
   // стрелки 
   navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
         spaceBetween: 20,
      },

      668: {
         slidesPerView: 2,
         spaceBetween: 40,
      },
      1024: {
         slidesPerView: 3,
         spaceBetween: 30,
      },
   },
});

// map sponsor 
new Swiper('.myslider__slide', {
   slidesPerView: 5,
   spaceBetween: 30,
   slideClass: "swiper-slide-img",
   pagination: {
      el: ".swiper-points",
      clickable: true,
   },
   // стрелки
   navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
         spaceBetween: 20,
      },
      326: {
         slidesPerView: 2,
         spaceBetween: 0,
      },
      467: {
         slidesPerView: 3,
         spaceBetween: 0,
      },
      667: {
         slidesPerView: 4,
         spaceBetween: 0,
      },
      900: {
         slidesPerView: 5,
         spaceBetween: 30,
      },
   },
});

//Burger

let menuBtn = document.querySelector('.navbar__burger');
let menu = document.querySelector('.navbar__menu');
let icons = document.querySelector('.navbar__button');
menuBtn.addEventListener('click', function () {
   menuBtn.classList.toggle('active');
   menu.classList.toggle('active');
   icons.classList.toggle('active');
})