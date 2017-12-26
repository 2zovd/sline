$( document ).ready(function() {
	
	$('.product-slider').slick({
		slidesToShow: 1,
		arrows: true,
		prevArrow: '<button class="product-arrow prev-arrow"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></button>',
		nextArrow: '<button class="product-arrow next-arrow"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>',
		dots: true,
		autoplay: false
	});
	
	(function($){
		$(window).on("load",function(){
			$(".scroll-init").mPageScroll2id();
		});
	})(jQuery);
	
	$('.open-popup-link').magnificPopup({
		type:'inline',
		midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});
	
});

