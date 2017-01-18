(function(window, document, $, amb, undefined) {
	'use strict';

	var Nav = amb.Nav = function () {

	};
	
	Nav.prototype.init = function(index) {
		var trigger = document.getElementById('navTrigger'),
			nav = document.getElementById('nav');
		
		$(trigger).on('click', function(e) {
			e.preventDefault();
			
			$('body').toggleClass('no-scroll');
			$(this).toggleClass('icon-hamburger icon-close');
			$(nav).toggleClass('is-active');
			
		});
    };
	
	amb.Nav = new Nav();

}(window, document, jQuery, window.amb = window.amb || {}));
