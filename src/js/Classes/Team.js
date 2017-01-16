(function(window, document, $, amb, undefined) {
	'use strict';

	var Team = amb.Team = function () {
	
	};
	
	Team.prototype.events = function(owl) {
		var container = document.getElementById('team'),
			details = '.js-details',
			close = $('.js-close'),
			item = $('.js-item', container);

		var showDetails = function() {
			$(item).not(this).find('.o-media, .o-2cols__info').addClass('opacity--half');			
			$(this).addClass('is-active');
		};
		
		var hideDetails = function() {
			$(item).find('.o-media, .o-2cols__info').removeClass('opacity--half');
			$(item).removeClass('is-active');
		};
		
		$(item).on('mouseenter', showDetails);
		$(item).on('mouseleave', hideDetails);
		$(close).on('click', hideDetails);
	};
    
    Team.prototype.init = function() {
		
		this.events();
    };

	amb.Team = new Team();

}(window, document, jQuery, window.amb = window.amb || {}));