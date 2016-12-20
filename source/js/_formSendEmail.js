// //form submit
// $(function(){
//     $('#feedback-form').on('submit', function(e){
//         e.preventDefault();
//
//         var
//             form = $(this),
//             formData = form.serialize();
//
//         $.post('../mail.php', formData, function(data) {
//             var popup = data ? '#success' : '#error';
//             console.log(data, popup);
//             $.fancybox.open([
//                 { href: popup }
//             ], {
//                 type: 'inline',
//                 maxWidth : 250,
//                 fitToView : false,
//                 padding : 0,
//                 afterClose : function () {
//                     form.trigger('reset');
//                 }
//             });
//         });
//     });
//
//     $('.status-popup__close').on('click', function(e){
//         e.preventDefault();
//         $.fancybox.close();
//     });
// }());
