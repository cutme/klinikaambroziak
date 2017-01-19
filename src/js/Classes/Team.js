(function(window, document, $, amb, undefined) {
	'use strict';

	var Team = amb.Team = function () {
	
	};
	
	Team.prototype.events = function(owl) {
		var container = document.getElementById('team'),
			details = '.js-details',
			close = '.js-close',
			item = $('.js-item', container);

		var showDetails = function() {
			if (amb.Helper.isWindowSmallerThan(1200) === false) {
				$(item).not(this).find('.o-media, .o-2cols__info').addClass('opacity--half');			
				$(this).addClass('is-active');
			}
		};
		
		var hideDetails = function() {
			$(item).find('.o-media, .o-2cols__info').removeClass('opacity--half');
			$(item).removeClass('is-active');
		};
		

		$(item).on('click', function() {
			if (amb.Helper.isWindowSmallerThan(1200) === true) {
				$(item).removeClass('is-active');
				
				$(container).prepend('<div class="is-active" id="tmpPopup"></div>');
				
				var tmp = document.getElementById('tmpPopup');
				
				$('.js-details', this).clone().appendTo(tmp);
			}
		});
		
		$(item).on('mouseenter', showDetails);
		$(item).on('mouseleave', function() {
			
			if (amb.Helper.isWindowSmallerThan(1200) === false) {
				hideDetails();
			}
			
		});
		
		$(document).on('click', close, function(e) {
			if (amb.Helper.isWindowSmallerThan(1200) === true) {
				var tmp = document.getElementById('tmpPopup');
				$(tmp).remove();
			} else {
				e.stopPropagation();
				hideDetails();
			}
		});
		
		$(window).on('resize', function() {
			if (amb.Helper.isWindowSmallerThan(1200) === false) {
				var tmp = document.getElementById('tmpPopup');
				$(tmp).remove();
			}
		});
		
		/*
$(close).on('click', function(e) {
			
			
			if (amb.Helper.isWindowSmallerThan(1200) === true) {
				alert('a');
				$('#detailsPopup').remove();
			} else {
				alert('b');
				e.stopPropagation();
				hideDetails();
			}
		});	
*/	
	};
    
    Team.prototype.init = function() {
		
		this.events();
    };

	amb.Team = new Team();

}(window, document, jQuery, window.amb = window.amb || {}));