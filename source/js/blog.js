var blogMenu = (function () {
    // Инициалиируем модуль
    var init = function () {
        _setUpListiners();
    };
    // Прослушиваем события
    var _setUpListiners = function () {

       $(window).on('scroll', _fixedMenu);
       $(window).on('scroll', _scrollBlog);
       $('.sidebar-fixed__btn').on('click', _copyFixedMenu);
       $('.sidebar__link').on('click', _anchorTrans);
       $(document).on('mouseup', _closeBlogMenu);
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
        console.log(el,parent);
    };
    var _copyFixedMenu = function (e) {
        e.preventDefault();
        var sidebarFixed = $('.sidebar-fixed'),
            sidebarWrap = $("#sidebar-wrap");
        sidebarFixed.toggleClass('sidebar-fixed_show');
        if (sidebarFixed.hasClass('sidebar-fixed_show')) {
            setTimeout(function () {
                    sidebarWrap.clone().appendTo(sidebarFixed);
                },
                1000);
        }
        else {
             sidebarWrap.remove("#sidebar-wrap");
       }

    };
    var _closeBlogMenu = function (e) {
        var sidebarFixed = $(".sidebar-fixed"),
            sidebarWrap = sidebarFixed.find("#sidebar-wrap");
        if (!sidebarFixed.is(e.target) // если клик был не по нашему блоку
            && sidebarFixed.has(e.target).length === 0) { // и не по его дочерним элементам
            $('.sidebar-fixed').removeClass('sidebar-fixed_show'); // скрываем его
            sidebarWrap.remove("#sidebar-wrap");
        }
    };
     //Возвращаем объект (публичные методы)
    return {
        init: init
    };
})();
