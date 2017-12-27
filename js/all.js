$( document ).ready(function() {

	//slider options
	$('.product-slider').slick({
		slidesToShow: 1,
		arrows: true,
		prevArrow: '<button class="product-arrow prev-arrow"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></button>',
		nextArrow: '<button class="product-arrow next-arrow"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>',
		dots: true,
		autoplay: false
	});

	//popup
	$('.open-popup-link').magnificPopup({
		type:'inline',
		midClick: true
	});
	
	// Initialize popup as usual
	$('.image-link').magnificPopup({
		type: 'image',
		mainClass: 'mfp-with-zoom', // this class is for CSS animation below

		zoom: {
			enabled: true, // By default it's false, so don't forget to enable it

			duration: 300, // duration of the effect, in milliseconds
			easing: 'ease-in-out', // CSS transition easing function

			// The "opener" function should return the element from which popup will be zoomed in
			// and to which popup will be scaled down
			// By defailt it looks for an image tag:
			opener: function(openerElement) {
				// openerElement is the element on which popup was initialized, in this case its <a> tag
				// you don't need to add "opener" option if this code matches your needs, it's defailt one.
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		}

	});

	//scroll to top arrow
	$(document).scroll(function() {
		var y = $(this).scrollTop();
		if (y > 400) {
			$('.btn-scroll-top').css('visibility', 'visible');
		} else {
			$('.btn-scroll-top').css('visibility', 'hidden');
		}
	});
	
	//success message
	$('.send').click(function() {
		$('.success-message').addClass('active');
		setTimeout(function() {
			$('.success-message').removeClass('active');
		}, 7000);
		return false;
	});

});

//Scroll to block
(function($){
	$(window).on("load",function(){
		$(".scroll-init").mPageScroll2id();
	});
})(jQuery);

//preloader
$(window).on('load', function() {
	$('.preloader').delay(1200).fadeOut('slow');
});