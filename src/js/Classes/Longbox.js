(function(window, document, $, amb, undefined) {
	'use strict';

	var Longbox = amb.Longbox = function () {
		
	};
	
	Longbox.prototype.carousel = function() {

		var g = document.getElementById('longbox'),
			options = {
				autoWidth: true,
				items: 1,
				smartSpeed: 1000
	    	}, 
	    	owl = $('.owl-carousel', g);

		owl.owlCarousel(options);				
	};
    
    Longbox.prototype.init = function(index) {

		var status = false;
		
		function caro() {
			if (amb.Helper.isWindowSmallerThan(768)) {

				if (status === false) {
					
					setTimeout(function() {
						amb.Longbox.carousel();
					}, 10);
					status = true;
				}
				
			} else {

				if (status === true) {
					amb.Longbox.carouselDestroy();
					status = false;
				}				
			}
		}

		caro();
		
		window.addEventListener('resize', caro);		
    };
    
    Longbox.prototype.carouselDestroy = function() {
		var g = document.getElementById('longbox'),
			owl = $('.owl-carousel', g);

		owl.trigger('destroy.owl.carousel');
		owl.find('.owl-stage-outer').children().unwrap();
		owl.removeClass("owl-center owl-loaded owl-text-select-on");
	};

	amb.Longbox = new Longbox();

}(window, document, jQuery, window.amb = window.amb || {}));
