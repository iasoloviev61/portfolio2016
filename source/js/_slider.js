(function(){

    var data = {
        "0" : {
            "title":"Сайт школы обучения йоге",
            "descr": "HTML, CSS, JavaScript",
            "link": 'http://ya.ru',
            "image":"url('assets/img/content/work-1.jpg')"
        },
        "1" : {
            "title":"Сайт школы онлайн образования",
            "descr": "HTML, CSS, JavaScript",
            "link": 'http://google.com',
            "image":"url('assets/img/content/work-2.jpg')"
        },
        "2" : {
            "title":"Сайт студии дизайна интерьера",
            "descr": "HTML, CSS, JavaScript",
            "link": 'http://mail.ru',
            "image":"url('assets/img/content/work-3.jpg')"
        },
        "3" : {
            "title":"Сайт онлайн-курсов Loftblog",
            "descr": "HTML, CSS, JavaScript",
            "link": 'http://yahoo.com',
            "image":"url('assets/img/content/work-4.jpg')"
        }
    };

    var arrData = [];
    for(var i in data) {
        arrData[i] = data[i];
    }

    var count = arrData.length;
    var current = 0;
    var next = current + 1;
    var prev = count - 1;

    var setUp = function() {
        var buttonNext = $(".slider-tumbnayls-up");
        var buttonPrev = $(".slider-tumbnayls-down");
        buttonNext.on("click", showNextSlide);
        buttonPrev.on("click", showPrevSlide);
        setSlides();
    };

    var descreaseValue = function(value){
        value = value - 1;
        if (value < 0) {
            value = count - 1;
        }
        return value;
    };

    var increaseValue = function(value){
        value = value + 1;
        if (value >= count) {
            value = 0;
        }
        return value;
    };

    var showNextSlide = function(e) {
        e.preventDefault();
        current = increaseValue(current);
        prev = descreaseValue(current);
        next = increaseValue(current);
        setSlides();
    };

    var showPrevSlide = function(e) {
        e.preventDefault();
        current = descreaseValue(current);
        prev = increaseValue(current);
        next = descreaseValue(current);
        setSlides();
    };

    var setSlides = function() {
        setSlideToPos(1, arrData[current]);
        setSlideToPos(2, arrData[next]);
        setSlideToPos(3, arrData[prev]);
    };

    var setSlideToPos = function(pos, slidedata){
        var title = $(".slider-decsription__title"),
            descr = $(".slider-decsription__tech"),
            link = $(".slider-decsription__link"),
            imgMain = $(".slider-mainslide__inner"),
            imgNext = $(".slider-tumbnayls-up__inner"),
            imgPrev = $(".slider-tumbnayls-down__inner");

        switch(pos) {
            case 1:
                title.html(slidedata.title);
                descr.html(slidedata.descr);
                link.attr("href", slidedata.link);
                imgMain.css("backgroundImage", slidedata.image);
                break;
            case 2:
                imgNext.css("backgroundImage", slidedata.image);
                break;
            case 3:
                imgPrev.css("backgroundImage", slidedata.image);
                break;
        }
    };
    setUp();

})();
