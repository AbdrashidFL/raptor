$(function() {
    new WOW().init();
    $('.soft-sliders').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.soft-sliders__prev'),
        nextArrow: $('.soft-sliders__next'),
        responsive: [{
                breakpoint: 1025,
                settings: {
                }
            },
            {
                breakpoint: 576,
                settings: {
                }
            }
        ]
    });
    $('.clients-sliders__blocks').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: $('.clients-sliders__prev'),
        nextArrow: $('.clients-sliders__next'),
        responsive: [{
                breakpoint: 1025,
                settings: {
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.certif-sliders__blocks').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.certif-sliders__prev'),
        nextArrow: $('.certif-sliders__next'),
        responsive: [{
                breakpoint: 1025,
                settings: {
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.phone').mask("+7 (999) 999 - 99 - 99");
    // mask
    
    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const blockID = anchor.getAttribute('href').substr(1)
        document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        })
    })
    }
    // slow scroll
    $('.btn-popup,.header-contacts__call,.footer-block__callback,.product-price__btn').on("click", function() {
        $('.popup').css('display', 'flex');
        document.body.style.overflow = 'hidden';
    });
    // btn
    $('.popup-before,.popup-out').on("click", function() {
        $('.popup').css('display', 'none');
        document.body.style.overflow = 'visible';
    });
    $('.menu-links').click(function() {
        $('.menu-popup').toggleClass('menu-popup__active');
        $('.menu-links').toggleClass('menu-links__active');
    });
    $("a#inline").fancybox({
		'hideOnContentClick': true
	});
});
let headerHeight;
if ($(window).width() > 300) {
    headerHeight = $('.header-wrap').offset().top + $('.header-wrap').height();
}
$(window).scroll(function() {

    if ($(window).width() > 300) {
        if ($(window).scrollTop() >= headerHeight) {
            $('.header-wrap').addClass('fixed')
        } else if ($(window).scrollTop() <= headerHeight) {
            $('.header-wrap').removeClass('fixed')
        }
    } 


})
