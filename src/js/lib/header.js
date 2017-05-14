$(document).ready(function(){ 

    $(".js-menu-btn").click(function () {
            $(this).toggleClass("js-menu-on");

            $(".js-header-nav").toggleClass('js-menu-open')
     });
});

