$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass("fa-solid fa-xmark");
        $('header').toggleClass('toggle');
    });
    $(window).on('scroll load',function(){
        $('#menu').removeClass("fa-solid fa-xmark");
        $('header').removeClass('toggle');
    });

});