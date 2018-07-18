$(document).ready(function () {

    if ($('body').attr('id') === 'deutch') {
        $(".lang-link").find("a").removeClass("active");
        $(".lang-link:last-child").find("a").addClass("active");
    }

    $("#open-legal-notice").click(function () {
        $("#home").toggle();
        $("#legal-notice").toggle();
    });

    var logoTrigger = false;
    var allWorksTrigger = false;

    function animatedTitle() {
        var videoName = $("#workCarousel .carousel-inner .item.active .carousel-caption .caption-body div h1.video-name");
        var videoNameSpan = $("#workCarousel .carousel-inner .item.active .carousel-caption .caption-body div h1.video-name span");
        var scrollW = videoName.get(0).scrollWidth;
        var offsetW = videoName.get(0).offsetWidth;
        if (scrollW > offsetW) {
            var titleText = videoNameSpan.text();
            var spanWidth = videoNameSpan.width();
            var ssMarginLeft = spanWidth / 2;
            var secondSpan = '<span id="shadowSpan" style="margin-left: ' + ssMarginLeft + 'px">' + titleText + '</span>'
            videoName.append(secondSpan);
            var anMarginLeft = spanWidth + ssMarginLeft;

            function animSpan() {
                setInterval(function () {
                    videoNameSpan.delay(3000).animate({
                        marginLeft: -anMarginLeft
                    }, 2500, function () {
                        videoNameSpan.css({
                            'margin-left': 0
                        })
                    })
                }, 500)
            }
            animSpan();
        };
    };


    $(".selectedButton").click(function () {

        $("#top-section").hide();
        $("#video-bg").hide();
        $("#work-section").show();
        $("#work-all-section").hide();
        $(".work-carousel-control").show();
        $("#workCarousel .carousel-caption").show();
        $("#workCarousel").css('height', '100vh');
        $("#mobile-work-open-map").css('visibility', 'visible');
        $("#mobile-work-hide-map").css('visibility', 'hidden');
        closeMobileMenu();
        scrollToSection($("#work-section"));
        $("#all-video").get(0).pause();
        if (viewWidth < 767) {
            $("#selectedCarousel").hide();
            $("#workCarousel").show();
        }
        if (allWorksTrigger) {
            allWorksTrigger = false;
        }
        if (logoTrigger) {
            $(".navbar-brand .img-responsive").attr("src", "img/logo.png");
            logoTrigger = false;
        }
        animatedTitle()
    });
    $(".allButton").click(function () {

        allWorksTrigger = true;
        logoTrigger = true;
        $("#top-section").hide();
        $("#video-bg").hide();
        $("#work-all-section").show();
        $(".work-carousel-control").show();
        $("#all-play").css('visibility', 'visible');
        $(".navbar-brand .img-responsive").attr('src', 'img/logo_white.png');
        scrollToSection($("#work-section"));
        if (viewWidth > 767) {
            $("#work-section").hide();
            // var temp = $("#workCarousel .active video").attr('id');
            // var activeId = temp.charAt(temp.length - 1);
            $('#play-pause-1').css('opacity', '1');
            for (i = 0; i < $("#workCarousel .item video").length; i++) {
                $("#workCarousel .item video").get(i).pause();
            }
        } else {
            $("#work-section").show();
            $(".work-carousel-control").show();
            $("#workCarousel .carousel-caption").hide();
            $(".work-all-content").hide();
            $("#workCarousel").css('height', 'auto');
            $("#mobile-work-open-map").css('visibility', 'hidden');
            $("#mobile-work-hide-map").css('visibility', 'visible');
        }
    });
    $(window).scroll(function () {
        var sPos = $(this).scrollTop();
        var wsHeight = $("#work-all-section").height();
        if (sPos >= wsHeight && logoTrigger) {
            $(".navbar-brand .img-responsive").attr("src", "img/logo.png");
            logoTrigger = false;
        }
        if (sPos <= wsHeight && !logoTrigger && allWorksTrigger) {
            $(".navbar-brand .img-responsive").attr("src", "img/logo_white.png");
            logoTrigger = true;
        }
    });
    $("#watch-movies").click(function () {
        $("#watch-movies").hide();
        $("#top-section").css('position', 'absolute');
        $("#work-section").css('position', 'relative').css('left', '100%').show().animate({
            left: 0
        }, 500, function () {});
        setTimeout(function () {
            $("#top-section").hide().css('position', 'relative')
        }, 500);
        $("#work-all-section").hide();
        $(".work-carousel-control").show();
        if (viewWidth < 767) {
            $("#selectedCarousel").hide();
            $("#workCarousel").show();
        }
        animatedTitle()
    });

    $("#workCarousel").on('slid.bs.carousel', function () {
        animatedTitle()
    });

    var selVidCount = 1;
    $("#selectedCarousel .right.carousel-control").click(function () {
        $("#selectedCarousel").next();
        if (selVidCount >= $("#selectedCarousel .carousel-inner .item").length) {
            selVidCount = $("#selectedCarousel .carousel-inner .item").length
        } else {
            selVidCount++;
        };
    });
    $("#selectedCarousel .left.carousel-control").click(function () {
        if (selVidCount > 1 && selVidCount <= $("#selectedCarousel .carousel-inner .item").length) {
            selVidCount--;
            $("#selectedCarousel").prev();
        } else {

            $("#watch-movies").show();
            $("#work-all-section").hide();
            $(".work-carousel-control").hide();
            setTimeout(function () {
                if (!onExpore) {
                    $("#video-bg").show();
                    workReel2();
                    onExpore = true;
                }
                $("#top-section").css({
                    position: 'relative',
                    'z-index': '1'
                }).show();
            }, 400);
            $("#work-section").animate({
                left: '100%'
            }, 500, function () {
                $("#work-section").css('display', 'none').css('left', '0')
            });
            selVidCount = 1;
        };
    });
    $(".about-nav").click(function () {

        scrollToSection($("#about"));
    });
    $(".contact-nav").click(function () {

        scrollToSection($("#contact"));
    });
    $(".home-nav").click(function () {

        scrollToSection($("#top-section"));
        $("#top-section").show();
        $("#video-bg").show();
        $("#work-section").hide();
        $("#work-all-section").hide();
        $(".work-carousel-control").hide();
        if (allWorksTrigger) {
            allWorksTrigger = false;
        }
        if (logoTrigger) {
            $(".navbar-brand .img-responsive").attr("src", "img/logo.png");
            logoTrigger = false;
        }
    });
});

function scrollToSection(section) {
    $('html, body').animate({
        scrollTop: section.offset().top
    }, 500);
}
