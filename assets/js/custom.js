(function($){
	$(document).ready(function(){

		// Make slide
		$('.slider').owlCarousel({
			items		: 1,
			autoplay : true,
			loop : true,
			mouseDrag : false,
			animateIn : 'fadeIn',
			animateOut : 'fadeOut',
			nav		: true,
			navText 	: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']

		});

		// Make slide
		$('.menu-slider-item').owlCarousel({
			items		: 1,
			autoplay : true,
			loop : true,
			mouseDrag : false,
			animateIn : 'fadeIn',
			animateOut : 'fadeOut',
			nav		: false,
			dot : false,
			navText 	: '',
			
			
		});


	});
})(jQuery)