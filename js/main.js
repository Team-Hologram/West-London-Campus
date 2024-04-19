(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);

function sendWhatsapp() {

    var phonenumber = "+94743100260";

    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var course = document.getElementById("course").value;
    var message = document.getElementById("message").value;

    var url = "https://wa.me/" + phonenumber +"?text="
    +"*Name :* " +name+"%0a"
    +"*Mobile :* " +mobile+"%0a"
    +"*Course :* " +course+"%0a"
    +"*Message :* " +message+"%0a%0a"

    window.open(url, '_blank').focus();

}