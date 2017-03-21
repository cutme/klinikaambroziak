(function(window, document, $, amb, undefined) {
	'use strict';

	var Layout = function() {
        return {
        	lazy: lazy,
        	showOnScroll: showOnScroll,
            svgInline: svgInline
        };
    };
    
    function showOnScroll() {
    	var body = $('#container');

/*
		body = ( $(window).width() > 1024 ) ? $('#container') : $(window);

    	body.on('resize', function() {
    		body = ( $(window).width() > 1024 ) ? $('#container') : $(window);
    	});
*/
		
		body.on('scroll', function() {		
	        $('.anim').each( function(){
				var bottomOfObject = $(this).offset().top,
		          	bottomOfWindow = $(window).scrollTop() + $(window).height();
	
				if( bottomOfWindow > bottomOfObject ) {
					$(this).addClass('is-visible');
				}
			});
		});
    }
    
    function lazy() {
    	var bottomOfWindow = $(window).scrollTop() + $(window).height();

	    $(".lazy").Lazy({
	    	appendScroll: $('#container'),
			afterLoad: function(element) {
				var $$ = $(element);
				
				$$.addClass('is-loaded');
				
				if ( $$.offset().top < bottomOfWindow ) {
				
					setTimeout(function() { 
						
					if ($('.c-grid').length>0) {
						$$.parents('.c-grid__item').addClass('is-visible');
					} else {
						$$.addClass('is-visible');
					}
						
					}, 2000);
					
					
					
					
				}
			}
		});
    }
	
	/*
	 * Replace all SVG images with inline SVG
	 */
	 function svgInline() {
		jQuery('.js-svg').each(function(){
		var $img = $(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');
		
		jQuery.get(imgURL, function(data) {
		// Get the SVG tag, ignore the rest
		var $svg = jQuery(data).find('svg');
		
		// Add replaced image's ID to the new SVG
		if(typeof imgID !== 'undefined') {
		$svg = $svg.attr('id', imgID);
		}
		// Add replaced image's classes to the new SVG
		if(typeof imgClass !== 'undefined') {
		$svg = $svg.attr('class', imgClass+' replaced-svg');
		}
		
		// Remove any invalid XML tags as per http://validator.w3.org
		$svg = $svg.removeAttr('xmlns:a');
		
		// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
		if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
		$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
		}
		
		// Replace image with new SVG
		$img.replaceWith($svg);
		
		}, 'xml');
		
		});
	}
	
	amb.Layout = new Layout();

}(window, document, jQuery, window.amb = window.amb || {}));