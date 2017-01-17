(function(window, document, $, amb, undefined) {
	'use strict';

	var Slider = amb.Slider = function () {
	
	};
	
	Slider.prototype.events = function(owl) {
		var fired = true;
		
		window.addEventListener('scroll', function() {
			var sliderHeight = owl.height(),
				scrollPos = window.pageYOffset;
			
			if (scrollPos > sliderHeight && fired === true) {
				owl.trigger('stop.owl.autoplay');
				fired = false;
			} 
			
			if (scrollPos < sliderHeight && fired === false) {
				owl.trigger('play.owl.autoplay');
				fired = true;
			}
		});
	};
    
    Slider.prototype.init = function() {

    	var options = {
    		autoplay: true,
    		autoplayTimeout: 6000,
    		lazyLoad: true,
	    	loop: true,
			nav: true,
			navText: ['<i class="icon-arrow"></i>', '<i class="icon-arrow"></i>'],
			items: 1,
			smartSpeed: 1600
    	}, owl = $('#homeSlider .owl-carousel');
    	
    	owl.on('initialized.owl.carousel', function(event) {
	    	owl.addClass('is-loaded');
    	});
    	
	    owl.owlCarousel(options);
	    
	    owl.on('changed.owl.carousel', function(event) {
			var $title = $('.o-lead', event.target);
		
			setTimeout(function() {
				$title.fadeIn(1000);
			}, 1000);			
		});
		
		owl.on('change.owl.carousel', function(event) {	
			var $title = $('.o-lead', event.target);
			$title.fadeOut(100);
		});
		
		this.events(owl);
    };

	amb.Slider = new Slider();

}(window, document, jQuery, window.amb = window.amb || {}));