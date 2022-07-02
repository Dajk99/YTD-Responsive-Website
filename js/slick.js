$(document).ready(function () {
	$('.reviews__boxes').slick({
		slidesToShow: 1,
		slidestoScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		arrows: false,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2,
					slidestoScroll: 1,
				},
			},
		],
	})
})
