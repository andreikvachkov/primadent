document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('servicesButton');
    const submenu = document.getElementById('subMenu');
    const headerServicesBtn = document.querySelector('.header__services-btn');

    button.addEventListener('click', function (event) {
        event.stopPropagation();
        submenu.classList.toggle('active');
    });

    document.addEventListener('click', function (event) {
        if (!headerServicesBtn.contains(event.target)) {
            submenu.classList.remove('active');
        }
    });

    submenu.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});

// 

const reviews__swiper = new Swiper('.reviews__swiper', {
    slidesPerView: 'auto',
    loop: false,
    spaceBetween: 20,

    pagination: false,

    navigation: false,
});

// 

const front__swiper = new Swiper('.front__swiper', {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 20,

    pagination: {
        el: '.front__swiper__pagination',
    },

    navigation: {
        nextEl: '.front__swiper__next',
        prevEl: '.front__swiper__prev',
    },
});

// 

const akcii__swiper = new Swiper('.akcii__swiper', {
    slidesPerView: 'auto',
    loop: false,
    spaceBetween: 20,

    pagination: false,

    navigation: false,
});

// 

const works__swiper = new Swiper('.works__swiper', {
    slidesPerView: 'auto',
    loop: false,
    spaceBetween: 16,

    breakpoints: {
        769: {
            slidesPerView: 2,
            loop: false,
            spaceBetween: 20,

            navigation: {
                nextEl: '.works__swiper__next',
                prevEl: '.works__swiper__prev',
            },
        }
    }
});

// 

function openPopup() {
    $('.popup').addClass('active');
    $('body').addClass('no-scroll');
}

function closePopup() {
    $('.popup').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.popup__close').on('click', closePopup);

$('.open__popup').on('click', openPopup);

// 

function openUslugi() {
    $('.mobile__menu__uslugi__content').toggleClass('active');
}

$('.open__uslugi').on('click', openUslugi);


function openMenu() {
    $('.mobile__menu').addClass('active');
    $('body').addClass('no-scroll');
}

function closeMenu() {
    $('.mobile__menu').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.mobile__menu__close').on('click', closeMenu);

$('.header__mobile_btn').on('click', openMenu);