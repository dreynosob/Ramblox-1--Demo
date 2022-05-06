(function($){
	"use strict";

	// Mean Menu
	$('.mean-menu').meanmenu({
		meanScreenWidth: "1199"
	});

	// Header Sticky
	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 120){  
			$('.navbar-area').addClass("is-sticky");
		}
		else{
			$('.navbar-area').removeClass("is-sticky");
		}
	});

	// Others Option For Responsive JS
	$(".others-option-for-responsive .dot-menu").on("click", function(){
		$(".others-option-for-responsive .container .container").toggleClass("active");
	});

	// Home Slides
	$('.home-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: true,
		autoplayHoverPause: true,
		autoplay: false,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		margin: 5,
		items: 1,
		navText: [
			"<i class='flaticon-back'></i>",
			"<i class='flaticon-chevron'></i>"
		]
	});
	$('.home-slides-two').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: false,
		animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
		items: 1,
		navText: [
			"<i class='flaticon-back'></i>",
			"<i class='flaticon-chevron'></i>"
		]
	});

	// Testimonials Slides
	$('.testimonials-slides, .feedback-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: false,
		animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
		items: 1,
		navText: [
			"<i class='flaticon-back'></i>",
			"<i class='flaticon-chevron'></i>"
		]
	});

	// Popup Video
	$('.popup-youtube').magnificPopup({
		disableOn: 320,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	// Plor Services Slides
	$('.plor-services-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 25,
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 2,
			},
			768: {
				items: 2,
			},
			1024: {
				items: 3,
			},
			1200: {
				items: 4,
			}
		}
	});

	// Plor Clients Slides
	$('.plor-clients-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 25,
		
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 2,
			},
			768: {
				items: 2,
			},
			1024: {
				items: 3,
			},
			1200: {
				items: 3,
			}
		}
	});

	// Plor Case Studies Slides
	$('.plor-case-studies-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 25,

		navText: [
			"<i class='flaticon-back'></i>",
			"<i class='flaticon-chevron'></i>"
		],
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 2,
			},
			768: {
				items: 2,
			},
			1024: {
				items: 2,
			},
			1200: {
				items: 3,
			}
		}
	});

	// Plor Team Slides
	$('.plor-team-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 25,

		navText: [
			"<i class='flaticon-back'></i>",
			"<i class='flaticon-chevron'></i>"
		],
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 2,
			},
			768: {
				items: 2,
			},
			1024: {
				items: 3,
			},
			1200: {
				items: 4,
			}
		}
	});

	// Plor Overview Slides
	$('.plor-overview-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 25,
		items: 1,
		center: true,
	});

	// Team Slides
	$('.team-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: false,
		margin: 30,
		navText: [
			"<i class='flaticon-back'></i>",
			"<i class='flaticon-chevron'></i>"
		],
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 2,
			},
			768: {
				items: 2,
			},
			992: {
				items: 4,
			}
		}
	});

	// Portfolio Slides
	$('.portfolio-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: false,
		margin: 30,
		navText: [
			"<i class='flaticon-back'></i>",
			"<i class='flaticon-chevron'></i>"
		],
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 2,
			},
			768: {
				items: 2,
			},
			992: {
				items: 3,
			},
			1200: {
				items: 4,
			}
		}
	});

	// Odometer JS
	$('.odometer').appear(function(e) {
		var odo = $(".odometer");
		odo.each(function() {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});

	// Article Image Slides
	$('.article-image-slides').owlCarousel({
		loop: true,
		nav: true,
		items: 1,
		dots: false,
		autoplayHoverPause: true,
		autoplay: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
		navText: [
			"<i class='flaticon-back'></i>",
			"<i class='flaticon-chevron'></i>"
		]
	});

	// Nice Select JS
	$('select').niceSelect();

	// Input Plus & Minus Number JS
	$('.input-counter').each(function() {
		var spinner = jQuery(this),
		input = spinner.find('input[type="text"]'),
		btnUp = spinner.find('.plus-btn'),
		btnDown = spinner.find('.minus-btn'),
		min = input.attr('min'),
		max = input.attr('max');
		
		btnUp.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
		btnDown.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
	});

	// Sidebar Sticky
	$('.portfolio-sidebar-sticky').stickySidebar({
		topSpacing: 85,
		bottomSpacing: 85
	});

	// Blog Slides
	$('.blog-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: false,
		margin: 30,
		navText: [
			"<i class='flaticon-back'></i>",
			"<i class='flaticon-chevron'></i>"
		],
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			992: {
				items: 3,
			}
		}
	});

	// Go to Top
	$(function(){
		// Scroll Event
		$(window).on('scroll', function(){
			var scrolled = $(window).scrollTop();
			if (scrolled > 600) $('.go-top').addClass('active');
			if (scrolled < 600) $('.go-top').removeClass('active');
		});  
		// Click Event
		$('.go-top').on('click', function() {
			$("html, body").animate({ scrollTop: "0" },  100);
		});
	});

	// WOW Animation JS
	if($('.wow').length){
		var wow = new WOW({
			mobile: false
		});
		wow.init();
	}

}(jQuery));


