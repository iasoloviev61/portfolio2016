var flipper = (function () {

    var init = function () {
        _setUpListners();
    };
    //отслеживаем события клика
    var _setUpListners = function () {
        $('#loginButton, #return').on('click', _singUp);
        $(document).on('mouseup', _closeFlipp);
        };
    // функция сокрытия и появления кнопки "авторизация"
    var _toogleAuthFlipp = function () {
        if ($('.auth-flipper').hasClass('flip')) {
            $('#loginButton').fadeTo(500, 0);
        }
        else {
            $('#loginButton').fadeTo(500, 1);
        }
    }
    // Поворот формы при нажатии на кнопки "авторизация" и "на главную"
    var _singUp = function (e) {
        e.preventDefault();
        $('.auth-flipper').toggleClass('flip');
        _toogleAuthFlipp();
    };
    // поворот формы в случае нажания на вне области формы
    var _closeFlipp = function (e){
        var div = $(".auth-popup"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            $('.auth-flipper').removeClass('flip'); // скрываем его
        }
        _toogleAuthFlipp();
    };




    return {
        init: init
    };

})();
flipper.init();

