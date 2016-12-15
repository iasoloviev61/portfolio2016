var skill = (function() {

    function init () {
        _setUpListners();
    };

    function _setUpListners () {
        $(window).on('scroll', _scroll);
    };

    function _scroll(e) {

        windowMargin = $(window).scrollTop();
        containerTop = $('.skill').offset().top - 200;

        if (windowMargin > containerTop) {
            _SkillsShow();
        }
    };

    function _SkillsShow() {

        var time = 0,
            delay = 150;

        $('.tech__graph-fill').each(function (index, element) {
            setTimeout(function () {

                $(element).closest('.tech__item').animate({
                    'opacity': '1'
                }, 300);

                $(element).css('stroke-dashoffset', 50);

            }, time += delay);


        });
    };


    return {
        init: init
    };

})();
skill.init();