 /* SLICK SLIDER */

$(document).ready(function(){
    $('.works__slider').slick({
        dots: true,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    arrows: false
                }
            } ]

    });
    $('.team__slider').slick({
        dots: false,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '-10px',
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    initialSlide: 0,
                }
                },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    initialSlide: 0,
                }
            }]
    });
});



/* GOOGLE MAP */

var map;
function initMap() {
    map = new google.maps.Map(document.querySelector('.contacts__map'), {
        center: {lat: 49.5685276, lng: 34.5854317},
        zoom: 17,
        scrollwheel: false,
    });

    var image = 'map-pointer.png';
    var marker = new google.maps.Marker({
        position: {lat: 49.5685276, lng: 34.5854317},
        map: map,
        icon: image
    });

}
document.addEventListener('DOMContentLoaded', initMap);


/* SMOOTH SCROLL */

$(document).ready(function(){
    $('.nav__menu-item a').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1800);
        e.preventDefault();
    });
    return false;
});

