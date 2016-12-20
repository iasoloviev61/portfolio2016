var mainMenu = (function () {

    var init = function () {
        _setUpListners();
    };
    var _setUpListners = function () {

        $('.header-menu__link, .main-menu__right, .main-menu__left').on('click', _startMenu);
        };
    var _startMenu = function (e) {
        e.preventDefault();
        if (!$('.header-menu__link').hasClass('header-menu__link-transform')) {
            $('.header-menu__link').toggleClass('header-menu__link-transform');
            $('.main-menu').toggleClass('main-menu_active');
            setTimeout(function () {
                $('.main-menu__list').toggleClass('main-menu__list_active');
            }, 800);
        }
        else {
            $('.main-menu__list').toggleClass('main-menu__list_active');
            setTimeout(function () {
                $('.header-menu__link').toggleClass('header-menu__link-transform');
                $('.main-menu').toggleClass('main-menu_active');
            }, 800);
        }
    };
    return {
        init: init
    };

})();
