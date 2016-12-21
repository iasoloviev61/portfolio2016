(function() {
    'use strict';

    preloader.init();
    mainMenu.init();

    if (window.location.pathname == '/index.html' || window.location.pathname == '/') {

        mouseParalax.init();
       flipper.init();
    }

     if (window.location.pathname == '/my_work.html') {

        blur.init();

    }
    if (window.location.pathname == '/blog.html') {

        blogMenu.init();

    }


    if (window.location.pathname == '/about.html') {
        skill.init();
        google.maps.event.addDomListener(window, 'load', init);

    }

})();
