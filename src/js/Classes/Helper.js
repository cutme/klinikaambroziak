(function(window, document, $, amb, undefined) {
	'use strict';

	var Helper = function() {
        return {
            exist: exist,
            goToTarget: goToTarget,
            isInView: isInView,
            isMobile: isMobile,
            isWindowSmallerThan: isWindowSmallerThan,
            ns: ns
        };
    };

    function exist(o) {
		return ($(o).length > 0) ? true : false;
	}
	
	function goToTarget(target) {
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, {
			duration: 1000,
			easing: 'easeOutCubic'
		});
	}
	
	function isInView() {
		var bottomOfWindow = $(window).scrollTop() + $(window).height();
		
		$('header.anim, div.anim, li.anim, ul.anim').each(function() {
			if ( $(this).offset().top < bottomOfWindow ) {
				$(this).addClass('is-visible');
			}
		});
	}
	
	function isMobile() {
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			$('html').addClass('is-mobile');
		} else {
			$('html').addClass('is-desktop');
		}
	}
	
	function isWindowSmallerThan(resBorder) {
        return window.innerWidth < parseInt(resBorder, 10);
    }
    
    function ns() {
		$('.js-niceSelect').removeClass('is-hidden').niceSelect();
	}
	
	amb.Helper = new Helper();

}(window, document, jQuery, window.amb = window.amb || {}));