var contactMe = (function () {
    // Инициалиируем модуль
    var init = function () {
        _setUpListiners();
    };
    // Прослушиваем события
    var _setUpListiners = function () {
        $('#feedback-form').on('submit', _submitForm)
    };
    // Обработка формы
    var _submitForm = function (e) {
        console.log('отправка формы');
        e.preventDefault();
        var form = $(this),
            url = 'contactme.php',
            defObj = _ajaxForm(form, url);
    };
    var _ajaxForm = function (form, url) {
        console.log('ajax запрос');
        if(!validation.validateForm(form)) return false;

    };

    //Возвращаем объект (публичные методы)
    return {
        init: init
    };
})();
contactMe.init();