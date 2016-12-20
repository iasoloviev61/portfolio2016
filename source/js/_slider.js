var slider = (function(){
    var counter = 1,
        duration = 300,
        flag = true;

    var moveSlide = function (container, direction) {
        var items = container.find('.slider-tumbnayls__item'),
            activeItem = items.filter('.active'),
            direction = direction == 'down' ? 100 : -100;

        if (counter >= items.length) {
            counter = 0;
        }

        var reqItem = items.eq(counter);

        activeItem.animate({
            'top' : direction + '%'
        }, duration);

        reqItem.animate({
            'top' : '0%'
        }, duration, function () {
            activeItem.removeClass('active').css('top', -direction  + '%');
            $(this).addClass('active');
            flag = true;
        });
    }

    return {
        init: function () {
            $('.slider-control__up').on('click', function(e){
                e.preventDefault();
                var firstSlider = $(this).closest('.slider-tumbnayls-up');
                var secondSlider = $('.slider-tumbnayls-down');

                if (flag) {
                    flag = false;
                    moveSlide(firstSlider, 'down');
                    moveSlide(secondSlider, 'up');
                }

                counter++;
            });

        }
    }

}());

$(function () {
   slider.init();

});

//
// $(document).ready (function() {
//     $('.blog__left_btn').on('click', function(e) {
//         e.preventDefault();
//
//         var asideMenu = $('.blog__left'),
//             reqLeft = '-18.75rem';
//
//         if (!asideMenu.hasClass('blog__left_on')) {
//             asideMenu.addClass('blog__left_on');
//             asideMenu.css({
//                 'left' : '0'
//             })
//         } else {
//             asideMenu.removeClass('blog__left_on');
//             asideMenu.css({
//                 'left' : reqLeft
//             })
//         }
//
//     })
//
// })
// $(document).ready (function() {
//     $('.welcome-auth__link').on('click', function(e) {
//         e.preventDefault();
//
//         $('.flipper').addClass('flipper_on');
//         $(this).addClass('welcome-auth__link_off');
//     })
//
//     $('.welcome-menu__link_flip').on('click', function(e) {
//         e.preventDefault();
//
//         $('.flipper').removeClass('flipper_on');
//         $('.welcome-auth__link').removeClass('welcome-auth__link_off');
//
//     })
//
// })
//
//
// $(document).ready(function() {
//     $('.c-hamburger').on('click', function(e) {
//         e.preventDefault();
//         $(this).toggleClass('is-active');
//
//         if(!$('.fullscreen-menu').hasClass('fullscreen-menu_open')) {
//             $('.fullscreen-menu').addClass('fullscreen-menu_open').
//             css({
//                 'opacity' : 1
//             })
//         } else {
//             $('.fullscreen-menu').removeClass('fullscreen-menu_open').
//             css({
//                 'opacity' : 0
//             })
//         }
//
//         if (!$('.fullscreen-menu__link').hasClass('fullscreen-menu__link_active')) {
//             $('.fullscreen-menu__link').addClass('fullscreen-menu__link_active');
//             $('.fullscreen-menu__link').css({
//                 'opacity': 1,
//                 'top':0
//             })
//         } else {
//             $('.fullscreen-menu__link').removeClass('fullscreen-menu__link_active');
//             $('.fullscreen-menu__link').css({
//                 'opacity': 0,
//                 'top':'-10px'
//             })
//         }
//
//
//
//     })
// });
//
// (function(){
//
//     var data = {
//         "0" : {
//             "text":"Сайт школы <br> обучения йоге",
//             "image":"url('assets/img/works_yoga.jpg')"
//         },
//         "1" : {
//             "text":"Сайт школы онлайн <br> образования",
//             "image":"url('assets/img/works_loftblog.png')"
//         },
//         "2" : {
//             "text":"Сайт студии <br> дизайна интерьера",
//             "image":"url('assets/img/works_trialog.jpg')"
//         },
//         "3" : {
//             "text":"Сайт онлайн-курсов <br> Loftblog",
//             "image":"url('assets/img/work-2.png')"
//         }
//     };
//
//     var arrData = [];
//     for(var i in data) {
//         arrData[i] = data[i];
//     }
//
//     var count = arrData.length;
//     var current = 0;
//     var next = current + 1;
//     var prev = count - 1;
//
//     var setUp = function() {
//         var buttonNext = document.querySelector(".works-slider__next");
//         var buttonPrev = document.querySelector(".works-slider__prev");
//         buttonNext.addEventListener("click", showNextSlide);
//         buttonPrev.addEventListener("click", showPrevSlide);
//         setSlides();
//     };
//
//     var descreaseValue = function(value){
//         value = value - 1;
//         if (value < 0) {
//             value = count - 1;
//         }
//         return value;
//     };
//
//     var increaseValue = function(value){
//         value = value + 1;
//         if (value >= count) {
//             value = 0;
//         }
//         return value;
//     };
//
//     var showNextSlide = function() {
//         current = increaseValue(current);
//         prev = descreaseValue(current);
//         next = increaseValue(current);
//         setSlides();
//     };
//
//     var showPrevSlide = function() {
//         current = descreaseValue(current);
//         prev = increaseValue(current);
//         next = descreaseValue(current);
//         setSlides();
//     };
//
//     var setSlides = function() {
//         setSlideToPos(1, arrData[current]);
//         setSlideToPos(2, arrData[next]);
//         setSlideToPos(3, arrData[prev]);
//     };
//
//     var setSlideToPos = function(pos, slidedata){
//         var text = document.querySelector(".works-slider__title");
//         var imgMain = document.querySelector(".works-slider__logo");
//         var imgNext = document.querySelector(".works-slider__next-image");
//         var imgPrev = document.querySelector(".works-slider__prev-image");
//
//         switch(pos) {
//             case 1:
//                 text.innerHTML = slidedata.text;
//                 imgMain.style.backgroundImage = slidedata.image;
//                 break;
//             case 2:
//                 imgNext.style.backgroundImage = slidedata.image;
//                 break;
//             case 3:
//                 imgPrev.style.backgroundImage = slidedata.image;
//                 break;
//         }
//     };
//     setUp();
//
// })();