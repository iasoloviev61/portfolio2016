var blogMenu = (function () {
    // Инициалиируем модуль
    var init = function () {
        _setUpListiners();
    };
    // Прослушиваем события
    var _setUpListiners = function () {

       $(window).on('scroll', _fixedMenu);
       $(window).on('scroll', _scrollBlog);
       $('.sidebar__link').on('click', _anchorTrans);
       $('.sidebar-fixed__btn').one('click', _copyFixedMenu);
        $('.sidebar-fixed__btn').on('click', _showFixedMenu);
    };
    // фиксирование меню при прокрутке
    var _fixedMenu = function () {
        var windowMargin = $(window).scrollTop(),
            menuWrapperTop = $('.blog').offset().top + 10;

        if (windowMargin > menuWrapperTop) {
            $('#sidebar-wrap').addClass('sidebar-wrap_fixed');
             }
        else {
            $('#sidebar-wrap').removeClass('sidebar-wrap_fixed');
        }
    };
    // Смена активного класса при прокрутке статей
    var _scrollBlog = function () {
        var lastId,
            topMenu = $("#sidebar-wrap"),
            topMenuHeight = topMenu.outerHeight()+15,
            // All list items
            menuItems = topMenu.find('.sidebar__link'),
            // Anchors corresponding to menu items
            scrollItems = menuItems.map(function(){
                var item = $($(this).attr("href"));
                if (item.length) { return item; }
            });
        var fromTop = $(this).scrollTop()+topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function(){
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
                .parent().removeClass("sidebar__item-active")
                .end().filter("[href=#"+id+"]").parent().addClass("sidebar__item-active");
        }
    };

    // переход по якорям
    var _anchorTrans = function (e) {
        e.preventDefault();
        var that = $(this),
            el = that.attr('href'),
            parent = that.parent('.sidebar__item'),
            sibl = parent.siblings(),
            top = $(el).offset().top;
        sibl.removeClass('sidebar__item-active');
        parent.addClass('sidebar__item-active');
        $('body, html').animate({
            scrollTop: top
        }, 600);
        console.log(sibl);
    };
    var _copyFixedMenu = function (e) {
        e.preventDefault();
        $("#sidebar-wrap").clone().appendTo(".sidebar-fixed");
    };
    var _showFixedMenu = function (e) {
        e.preventDefault();

        $('.sidebar-fixed').toggleClass('sidebar-fixed_show');
        // $('.sidebar-fixed').find('#sidebar-wrap').removeClass('sidebar-wrap_fixed');
    };


    //Возвращаем объект (публичные методы)
    return {
        init: init
    };
})();
