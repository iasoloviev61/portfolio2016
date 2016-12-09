$(document).ready(function () {
    svg4everybody({});
});
var myModule = (function () {

    var init = function () {
        _setUpListners();
    };
    var _setUpListners = function () {
        $('#loginButton').on('click', _singUp);
        $('#return').on('click', _singUp);
        $('.header-menu__link').on('click', _startMenu);
    };
    var _singUp = function (e) {
        e.preventDefault();
        $('.auth-flipper').toggleClass('flip');
        if ($('.auth-flipper').hasClass('flip')) {
            $('#loginButton').fadeTo(500, 0);
        }
        else {
            $('#loginButton').fadeTo(500, 1);
        }
    };
    var _startMenu = function (e) {
        e.preventDefault();
        $('.main-menu').addClass('main-menu_active');
        setTimeout(function() {
            $('.main-menu__list').addClass('main-menu__list_active');
        }, 800);
    };

    return {
        init: init
    };

})();

myModule.init();