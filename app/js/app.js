$('.header-slider').slick({
    appendDots: $('.header-numbers__links'),
    arrows: false,
    dots: true,
    vertical: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                vertical: false
            }
        }
    ]  
});
$(".header-slider").on('afterChange', function(event, slick, currentSlide){
    $('.header-numbers__item').text('0' + (currentSlide + 1));
});