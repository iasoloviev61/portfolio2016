$(document).ready(function () {
    svg4everybody({});
});
// //yandex map
// $(function () {
//     ymaps.ready(init);
//     var myMap;
//
//     function init(){
//         myMap = new ymaps.Map("map", {
//             center: [55.74157433, 37.62563670],
//             zoom: 14,
//             controls : [],
//         });
//
//         var coords = [
//                 [55.74135848, 37.62595538],
//                 [55.73920374, 37.65363578],
//                 [55.73678254, 37.61827353],
//
//             ],
//             myCollection = new ymaps.GeoObjectCollection({}, {
//                 draggable: false,
//                 // iconLayout: 'default#image',
//                 // iconImageHref: '../img/map-marker.svg',
//                 // iconImageSize: [46, 57],
//                 // iconImageOffset: [-26, -52]
//             });
//
//         for (var i = 0; i < coords.length; i++) {
//             myCollection.add(new ymaps.Placemark(coords[i]));
//         }
//
//         myMap.geoObjects.add(myCollection);
//
//         myMap.behaviors.disable('scrollZoom');
//     }
// });
