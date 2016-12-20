var mouseParalax = (function() {

    function init () {
        _setUpListners();
    };

    function _setUpListners() {
        $(window).on('mousemove', _Parallax);
    };

    function _Parallax(e) {

        var mouseX = e.pageX,
            mouseY = e.pageY,
            w = (window.innerWidth / 2) - mouseX,
            h = (window.innerHeight / 2) - mouseY,
            layer = $('.parallax').find('.parallax__layer');
        layer.map(function (key, value) {
            var widthPos = w * (key/100),
                heightPos = h * (key/100);
            $(value).css({
                'transform': 'translate3d(' + widthPos + 'px, ' + heightPos + 'px, 0)'
            })

        })
    };

    return {
        init: init
    };

})();


