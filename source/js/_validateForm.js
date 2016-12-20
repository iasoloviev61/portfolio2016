var validation = (function () {
    // Инициалиируем модуль
    var init = function () {
        _setUpListiners();
    };
    // Прослушиваем события
    var _setUpListiners = function () {
        $('form').on('keydown, click', '.has-error', _removeError);
        // $('form').on('click', '.has-error', _removeError);

        $('form').on('reset', _clearForm);
    };
    var _removeError = function () {
        console.log($(this));
      $(this).removeClass('has-error');
        $(this).closest('.auth-form__login_error').removeClass('auth-form__login_error');
        $(this).closest('.auth-form__password_error').removeClass('auth-form__password_error');
    };
    var _clearForm = function () {
       var form = $(this);
        form.find('.feedback-form__name, .feedback-form__email, .feedback-form__text, .auth-form__login, .auth-form__password').trigger('hideTooltip');
        form.find('.has-error').removeClass('has-error');

    };
    // создает тултипы
    var _createQtip = function (element) {
        // инициализация тултипа
        element.qtip({
            content: {
                text: function () {
                    return $(this).attr('qtip-content')
                }
            },
            show: {
                event: 'show'
            },
            hide: {
                event: 'click keydown hideTooltip'
            },
            position: {
                my: 'top center',
                at: 'bottom center'
            },
            style: {
                classes: 'qtip-tooltip',
                tip: {
                    height: 10,
                    width: 16
                }
                }

        }).trigger('show');
    };
    var validateForm = function (form) {
        var elements = form.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
            valid = true;
        $.each(elements, function (index, val) {
            var element = $(val),
                val = element.val();
            if(val.length === 0) {
                element.addClass('has-error');
                if(element.hasClass('auth-input__login-name')) {

                    var loginDiv = element.closest('.auth-form__login');
                    loginDiv.addClass('auth-form__login_error');
                }
                if(element.hasClass('auth-input__password')){

                    var passwDiv = element.closest('.auth-form__password');
                    passwDiv.addClass('auth-form__password_error');
                }
                _createQtip(element);
                valid = false;
            }
            });
        return valid;
    };
    //Возвращаем объект (публичные методы)
    return {
        init: init,
        validateForm: validateForm
    };
})();
validation.init();