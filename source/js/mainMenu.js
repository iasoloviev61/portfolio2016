var mainMenu = (function () {

    var init = function () {
        _setUpListners();
    };
    var _setUpListners = function () {

        $('.header-menu__link').on('click', _startMenu);
        $('.main-menu__right, .main-menu__left').on('click', _closeMenu);
         };
    var _startMenu = function (e) {
        e.preventDefault();
        $('.main-menu').addClass('main-menu_active');
        setTimeout(function() {
            $('.main-menu__list').addClass('main-menu__list_active');
        }, 800);
    };

    var _closeMenu = function () {
        $('.main-menu__list').removeClass('main-menu__list_active');
        setTimeout(function() {
            $('.main-menu').removeClass('main-menu_active');
        }, 800);
    };

    return {
        init: init
    };

})();
mainMenu.init();