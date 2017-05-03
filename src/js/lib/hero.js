import '../../../node_modules/slick-carousel/slick/slick.min.js';
$('.hero__slider').slick();

if ($(".js-hero-next")) {
    $(".js-hero-next").on("click", function() {
        $(".slick-next").click();
    });
}

if ($(".js-hero-prev")) {
    $(".js-hero-prev").on("click", function() {
        $(".slick-prev").click();
    });
}