(function(window, document, $, amb, undefined) {
	'use strict';

	var Gallery = amb.Gallery = function () {
		$(document).on('click', '.js-gallery', function() {
			var index = $(this).index();
			amb.Gallery.init(index);
		});
	};
	
	Gallery.prototype.events = function() {
		var g = document.getElementById('gallery');

		$(g).on('click', '.js-close', function() {
			Gallery.prototype.close();
		});
		
		$(document).keyup(function(e) {
			if (e.keyCode == 27) { 
				Gallery.prototype.close();
			}
		});
	};
	
	Gallery.prototype.overlay = function() {
		var g = document.getElementById('gallery'),
			c = document.getElementById('container');
		
		$('.c-gallery-fullscreen__info', g).hide();
		$(g).addClass('is-visible');
		$(c).addClass('no-scroll');
		
		$(g).css('top', $(c).scrollTop());
		
//		console.log( $('#container').scrollTop() );
	};
	
	Gallery.prototype.carousel = function(index) {

		var g = document.getElementById('gallery'),
			all = document.getElementById('gallery-all'),
			current = document.getElementById('gallery-current'),
			options = {
	    		autoplay: false,
	    		lazyLoad: true,
		    	loop: false,
				nav: true,
				navText: ['<i class="icon-arrow"></i>', '<i class="icon-arrow"></i>'],
				items: 1,
				smartSpeed: 1000,
				dots: false
	    	}, 
	    	owl = $('.owl-carousel', g);

		$('body').addClass('no-scroll');
		
		owl.on('initialized.owl.carousel', function(event) {
			$(current).text(event.item.index + 1);
	    	$(all).text(event.item.count);
	    	$('.c-gallery-fullscreen__info', g).fadeIn();
    	});  
    	
    	owl.on('changed.owl.carousel', function(event) {
			$(current).text(event.item.index + 1);		
		});  	

		owl.owlCarousel(options);		
		owl.trigger('to.owl.carousel', [index, 0]);	
		
	};
    
    Gallery.prototype.init = function(index) {
		this.overlay();
		this.events();
		
		amb.Gallery.carousel(index);
    };
    
    Gallery.prototype.close = function() {
		var g = document.getElementById('gallery'),
			c = document.getElementById('container'),
			owl = $('.owl-carousel', g);

		owl.trigger('destroy.owl.carousel');
		owl.find('.owl-stage-outer').children().unwrap();
		owl.removeClass("owl-center owl-loaded owl-text-select-on");
		owl.off('initialized.owl.carousel');
		owl.off('changed.owl.carousel');
		
		$(g).removeClass('is-visible');
		$(c).removeClass('no-scroll');
		
		$('body').removeClass('no-scroll');
	};

	amb.Gallery = new Gallery();

}(window, document, jQuery, window.amb = window.amb || {}));
