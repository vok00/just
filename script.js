$(document).ready(function(){
    // $(".mainmenu li").mouseover(function () {
    //     $(".submenu").stop().slideDown();
    // }).mouseout(function(){
    //     $(".submenu").stop().slideUp();
    // });
   
$(".mainmenu li").mouseover(function () {
    $(this).find('.submenu').stop().slideDown();
}).mouseout(function(){
    $(this).find('.submenu').stop().slideUp();
});

});


// $('#popupbtn').click(function(){
//     $('#popup').show();
// });
 
// $('.close').click(function(){
//     $('#popup').hide();
// });
