$(document).ready(function(){

    $(".js-menu-btn").click(function () {
            $(this).toggleClass("js-menu-on");

            if($(".js-header-nav").hasClass("js-menu-open")){
                $(".js-header-nav").removeClass("js-menu-open");
            }
            else {
                $(".js-header-nav").addClass("js-menu-open"); 
            }
     });
});

