$( document ).ready(function() {
	$('.product-slider').slick({
		slidesToShow: 1,
		arrows: true,
		prevArrow: '<button class="product-arrow prev-arrow"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></button>',
		nextArrow: '<button class="product-arrow next-arrow"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>',
		dots: true,
		autoplay: false
	});
});

