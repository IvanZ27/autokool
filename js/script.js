'use strict';
const mySwiper = new Swiper('.slider__container', {
    slidesPerView: 3,
    spaceBetween: 25,
    watchOverflow: true,
    preloadimages: true,
    speed: 300,
    loop: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    grabCursor: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    breakpoints: {
        841: {
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            slidesPerView: 3,
            slidesPerGroup: 3
        },
        601: {
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            slidesPerView: 2,
            slidesPerGroup: 2
        },
        0: {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                type: 'progressbar'
            },
            slidesPerView: 1,
            slidesPerGroup: 1
        }
    },
    ally: {
        enabled: true,
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
        firstSlideMessage: 'This is the first slide',
        lastSlideMessage: 'This is the last slide',
        paginationBulletMessage: 'Go to slide {{index}}',
        notificationClass: 'swiper-notification',
        containerMessage: '',
        containerRoleDescriptionMessage: '',
        itemRoleDescriptionMessage: '',
    },
});
let slides = document.querySelectorAll('.swiper-wrapper .swiper-slide');
let sliderPrev = document.querySelector('.swiper__prev');
let sliderNext = document.querySelector('.swiper__next');
let pagination = document.querySelector('.swiper-pagination');
if (window.innerWidth > 600) {
    sliderPrev.style.display = 'none';
    sliderNext.style.display = 'none';
}
const swiperPrev = document.getElementById('swiperPrev');
const swiperNext = document.getElementById('swiperNext');
swiperPrev.addEventListener('click', () => {
    mySwiper.slidePrev();
});
swiperNext.addEventListener('click', () => {
    mySwiper.slideNext();
});
swiperNext.addEventListener('click', function () {
    swiperNext.classList.add('onclick');
    swiperNext.classList.remove('move');
});
var swipeOffNext = document.getElementById('swiperNext');
var swipeOffNextSlide;
swipeOffNext.addEventListener('click', function () {
    setTimeout(function () {
        swipeOffNext.classList.remove('onclick');
    }, 500);
});
swiperPrev.addEventListener('click', function () {
    swiperPrev.classList.add('onclick');
    swiperPrev.classList.remove('move');
});
var swipeOffPrev = document.getElementById('swiperPrev');
var swipeOffPrevSlide;
swipeOffPrev.addEventListener('click', function () {
    setTimeout(function () {
        swipeOffPrev.classList.remove('onclick');
    }, 500);
});
$(document).ready(function () {
    $('a').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});