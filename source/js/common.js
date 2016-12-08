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

    };
    var _singUp = function (e) {
        e.preventDefault();
        $('.auth-flipper').toggleClass('flip');
        if ($('.auth-flipper').hasClass('flip')) {
            $('#loginButton').hide();
        }
        else {
            $('#loginButton').show();
        }
    };

    return {
        init: init
    };

})();

myModule.init();