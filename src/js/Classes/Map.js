(function(window, document, $, amb, undefined) {
	'use strict';

	var googleMap = amb.googleMap = function () {

	};
	
	Map.prototype.events = function() {
	
		var container = document.getElementById('mapButtons'),
			btn = $('.js-btn', container);
	
		btn.on('click', function() {
			var $$ = $(this),
				lat = $$.data( 'lat' ),
				lng = $$.data( 'lng' );
				
			amb.googleMap.showMap(lat, lng);
			
			btn.removeClass('is-active');
			$$.addClass('is-active');
		});
	};
	
	Map.prototype.init = function() {
		this.showMap();
		this.events();
	}
    
    Map.prototype.showMap = function(lat, lng) {

    	var $container = $( '#map' );

    	lat = lat || $container.data( 'lat' );
	    lng = lng || $container.data( 'lng' );

		$.getScript('https://www.google.com/jsapi', function()
		{
			google.load('maps', '3', { 
				other_params: 'key=AIzaSyDzv4gozpcF9CjrI6OWHpLavj2hTLfH4IY', 
				callback: function() {			
			
					var center = new google.maps.LatLng(lat, lng),
						mapStyle = [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}],
						myOptions = {
							center: new google.maps.LatLng(lat,lng),
							disableDefaultUI: true,
							draggable: false,
							mapTypeId: google.maps.MapTypeId.ROADMAP,
							scrollwheel: false,
							streetViewControl: false,
							styles: mapStyle,
							zoom: 15
						},
						icon = {
							url: $container.attr('data-marker'),
							size: new google.maps.Size(46, 63), // scaled size
							origin: new google.maps.Point(0,0), // origin
							anchor: new google.maps.Point(0, 0) // anchor
						},
						map = new google.maps.Map(document.getElementById("map"), myOptions);

					function mapPosition() {
						if (amb.Helper.isWindowSmallerThan(769) === true) {
							map.panBy(0, 140);
						} else {
							map.panBy(0, 60);
						}
					}
					
					mapPosition();
					
					var marker = new google.maps.Marker({
						position: center,
						map: map,
						zIndex: 999,
						animation: google.maps.Animation.DROP,
						icon: icon
					});
	
					var updateCenter = function(){ $.data( map, 'center', map.getCenter() ); };
					
					google.maps.event.addListener( map, 'dragend', updateCenter );
					google.maps.event.addListener( map, 'zoom_changed', updateCenter );
					google.maps.event.addListenerOnce( map, 'idle', function(){ $container.addClass( 'is-loaded' ); });
						
					function setCenter() {
						map.setCenter( new google.maps.LatLng(lat,lng) );
						mapPosition();
					}
		
					google.maps.event.addDomListener(window, 'resize', function() {
						setTimeout(setCenter, 1);
					});
				}
			});
		});
    };
    
   
	amb.googleMap = new Map();

}(window, document, jQuery, window.amb = window.amb || {}));

