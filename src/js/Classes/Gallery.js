(function(window, document, $, amb, undefined) {
	'use strict';

	var Gallery = amb.Gallery = function () {
	
	};
	
	Gallery.prototype.events = function(owl) {
		
	
	};
    
    Gallery.prototype.init = function() {

    	/*
var options = {
    		autoplay: true,
    		lazyLoad: true,
	    	loop: true,
			nav: true,
			navText: ['<i class="icon-arrow"></i>', '<i class="icon-arrow"></i>'],
			items: 1,
			smartSpeed: 1000
    	}, owl = $('.owl-carousel');

		
		this.events(owl);
*/
    };

	amb.Gallery = new Gallery();

}(window, document, jQuery, window.amb = window.amb || {}));


/*

(function(window, document, $, daw, undefined) {
	'use strict';

	var Gallery = daw.Gallery = function () { this.init(); };

	Gallery.prototype.init = function() {
		this.enable();
		this.events();
		//Gallery.prototype.open();	// to click
	};

	Gallery.prototype.open = function() {

		var g = document.getElementById('overgallery'),
			filter = $('.js-overgallery-filter'),
			filterCategory = $('.js-overgallery-filter--category'),
			activeFilter = '', activeFilterCategory = '',
			all = document.getElementById('bigimages'), 
			big = document.getElementById('bigimage');

		$(g).toggleClass('is-hidden gallery-visible');
		
		$('body').addClass('no-overflow');
		$('.js-rotate').hide();

		function defaultCarousel() {
			var newCarousel = $('.owl-lazy', all).clone(),
				layerName = 'all';
						
			$(big).append('<div class="owl-carousel owl-carousel--'+layerName+'"></div>');
	
			$('.owl-carousel--'+layerName).html(newCarousel);
				
			Gallery.prototype.loadGallery('all');
		}
		
		filter.unbind('click').on('click', function (e) {
			e.preventDefault();
						
			var cat;
			
			if ($(this).hasClass('is-active')) {
			
				$(this).removeClass('is-active');
				
				activeFilter = '';
				cat = activeFilterCategory;

			} else {

				filter.removeClass('is-active');

				$(this).addClass('is-active');

				activeFilter = $(this).data('filter');

				cat = activeFilter;
				
				if (activeFilterCategory.length>0) {
					cat = activeFilter + '.' + activeFilterCategory;
				} else {
					cat = activeFilter;
				}
			}
			
			// Check if select is empty
			if ( activeFilter.length != 0 || activeFilterCategory.length != 0) {

				var newCarousel = $('.'+cat, all).clone(),
					layerName = cat.split('.').join("");
							
				$(big).append('<div class="owl-carousel owl-carousel--'+layerName+'"></div>');
	
				$('.owl-carousel--'+layerName).html(newCarousel);
	
				Gallery.prototype.loadGallery(cat);
				
			} else {
				
				defaultCarousel();
				
			}
		});
		
		filterCategory.unbind('click').on('click', function (e) {
			e.preventDefault();
						
			var cat;

			if ($(this).hasClass('is-active')) {
			
				$(this).removeClass('is-active');
				
				activeFilterCategory = '';
				cat = activeFilter;
				
			} else {

				filterCategory.removeClass('is-active');

				$(this).addClass('is-active');
				
				activeFilterCategory = $(this).data('filter');
				
				if (activeFilter.length>0) {
					cat = activeFilter + '.' + activeFilterCategory;
				} else {
					cat = activeFilterCategory;
				}
			}
			
			// Check if select is empty
			if ( activeFilter.length != 0 || activeFilterCategory.length != 0) {
				
				var newCarousel = $('.'+cat, all).clone(),
				layerName = cat.split('.').join("");
						
				$(big).append('<div class="owl-carousel owl-carousel--'+layerName+'"></div>');
	
				$('.owl-carousel--'+layerName).html(newCarousel);
					
				Gallery.prototype.loadGallery(cat);
				
			} else {

				defaultCarousel();
				
			}
		});	
		
		
		
		defaultCarousel();
		
	};
	
	Gallery.prototype.close = function() {
		var g = document.getElementById('overgallery');
		
		var owl = $('.c-overgallery .owl-carousel');
		
		owl.trigger('destroy.owl.carousel');
		owl.find('.owl-stage-outer').children().unwrap();
		owl.removeClass("owl-center owl-loaded owl-text-select-on");
		
		$('.c-overgallery__buttons .o-btn').removeClass('is-active');
		
		$(g).toggleClass('is-hidden gallery-visible');
		
		$('body').removeClass('no-overflow');
		$('.js-rotate').show();
	};
	
	Gallery.prototype.loadGallery = function(className) {
	
		var amount = document.getElementById('overgalleryAll'),
			currentNum = document.getElementById('overgalleryCurrent'),
			info = document.getElementById('overgalleryInfo'),
			owl = $('.c-overgallery .owl-carousel'),
			layerName = className.split('.').join("");
		
		owl.trigger('destroy.owl.carousel');
		owl.find('.owl-stage-outer').children().unwrap();
		owl.removeClass("owl-center owl-loaded owl-text-select-on");
		
		$('.owl-active').remove();
		
		owl = $('#bigimage .owl-carousel--'+layerName).addClass('owl-active');

		$(amount).text( $('img', owl).length );
		$(info).text( $('img:first', owl).attr('alt') );
		$(currentNum).text(1);            
            
		owl.owlCarousel({
			loop: true,
			nav: true,
			navText: ['<i class="icon-arrow">', '<i class="icon-arrow">'],
			items:1,
			lazyLoad: true,
			nimateIn: 'fadeIn',
			animateOut: 'fadeOut'
		});
	
		owl.on('changed.owl.carousel',function(property){
		    var current = property.item.index;
		    var alt = $(property.target).find(".owl-item").eq(current).find("img").attr('alt');
		    
		    if(property.page.index == -1) {
		    	property.page.index = 0;
		    }
		    if(property.page.index >= 0) {
			    $(currentNum).text(property.page.index+1);
			}
		    $(info).text('');
		    $(info).text(alt);
		});
	};
	
	Gallery.prototype.events = function() {	
		$(document).on('click', '.js-closeOvergallery', function() {
			Gallery.prototype.close();
		});
	};

	Gallery.prototype.enable = function() {
		var el = $('.js-gallery');		

		el.on('click', function() {
			Gallery.prototype.open();
		});
		
		/*
$(document).keyup(function(e) {
			if (e.keyCode == 27) { 
				Gallery.prototype.close();
			}
		});
*/
