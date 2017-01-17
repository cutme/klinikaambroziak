/*jshint expr:true */

(function(window, document, $, amb, undefined) {
	'use strict';
	
	$(document).ready(function() {
		
		amb.Layout.lazy();
		amb.Layout.showOnScroll();
		amb.Layout.svgInline();
		amb.Slider.init();
		amb.Helper.isInView();

		amb.Helper.exist('#map') && amb.googleMap.init();
		amb.Helper.exist('#team') && amb.Team.init();		

	});
		
}(window, document, jQuery, window.amb = window.amb || {}));


