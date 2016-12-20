// var preloader = (function () {
//     var imgs = [],
//         percents = 1;
//
//     function init () {
//         _setUpListners();
//     };
//
//     function _setUpListners() {
//         $(document).ready(_countImg);
//         $(window).on('load', _onload);
//     };
//     function _countImg() {
//         $('*').each( _findImg);
//
//         function _findImg() {
//
//             var $this = $(this),
//                 backgrounImg = $this.css('background-image'),
//                 img = $this.is('img');
//
//             if (backgrounImg != 'none') {
//                 var path = backgrounImg.replace('url("', '').replace('")', '');
//                 imgs.push(path);
//             }
//
//             if (img) {
//                 var path = $this.attr('src');
//
//                 if (path) {
//                     imgs.push(path);
//                 }
//             }
//         };
//     };
//
//     function _onload() {
//         for (var i = 0; i < imgs.length; i++) {
//             var image = $('<img>', {
//                 attr: {
//                     src: imgs[i]
//                 }
//             });
//
//
//             $(image).load(function() {
//                 _setPercent(imgs.length, percents);
//                 percents++;
//
//             });
//         };
//
//         function _setPercent(total, current) {
//             var percent = Math.ceil(current / total * 100);
//             $('.preloader__text').text(percent + '%');
//             if(percent => 100) {
//                 $('.preloader').css('display', 'none');
//             }
//             console.log()
//         }
//
//     };
//
//     return {
//         init: init
//     }
// })();
var preloader = (function(){
    var percentsTotal = 1,
        preloader = $('.preloader');

    var imgPath = $('*').map(function (ndx, element) {
        var background = $(element).css('background-image'),
            img = $(element).is('img'),
            path = '';

        if (background != 'none') {
            path = background.replace('url("', '').replace('")', '');
        }

        if (img) {
            path = $(element).attr('src');
        }

        if (path) return path
    });

    var setPercents = function (total, current) {
        var persents = Math.ceil(current / total * 100);

        $('.preloader__text').text(persents + '%');

        if (persents >= 100) {
            preloader.fadeOut();
        }
    }

    var loadImages = function (images) {

        if (!images.length) preloader.fadeOut();

        images.forEach(function (img, i, images) {
            var fakeImage = $('<img>', {
                attr : {
                    src : img
                }
            });

            fakeImage.on('load error', function () {
                setPercents(images.length, percentsTotal);
                percentsTotal++;
            });
        });
    }

    return {
        init: function () {
            var imgs = imgPath.toArray();
            loadImages(imgs);
        }
    }

}());



