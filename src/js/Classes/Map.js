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
	};
    
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
							path: "M23 0c12.7 0 22.9 9.2 22.9 22.9C45.9 37.3 23 63 23 63S.1 37.3.1 22.9C.1 9.2 10.3 0 23 0z M35.5 17.9c0-4.8-4.1-7.3-7.8-7.3-1.6 0-3.2.3-4.7.8-1.5-.5-3.1-.8-4.7-.8-3.7 0-7.8 2.5-7.8 7.3 0 1.6.4 2.9 1.1 3.9-.7 1.1-1.1 2.4-1.1 3.9 0 4.8 4.1 7.3 7.8 7.3 1.6 0 3.2-.3 4.7-.8 1.5.5 3.1.8 4.7.8 3.7 0 7.8-2.5 7.8-7.3 0-1.6-.4-2.9-1.1-3.9.7-1.1 1.1-2.4 1.1-3.9zm-7.8 0c0 .2 0 .4-.1.6-1.6 0-3.2.3-4.7.8-1.5-.5-3.1-.8-4.7-.8-.1-.2-.1-.4-.1-.6 0-1.7 2-3.6 4.7-4.7 2.9 1 4.9 3 4.9 4.7zm-1.2 2.9c-.2.2-.6.3-.9 0-.3-.3-.2-.7 0-.9.4-.4 1-.5 1.2-.3.2.3.1.9-.3 1.2zm.3 3.1c-.2.2-.8.1-1.2-.3-.2-.2-.3-.6 0-.9.3-.3.7-.2.9 0 .4.4.5 1 .3 1.2zm-2.7-1c-.2.2-.4.2-.6.2-.1.2-.3.3-.5.3-.3 0-.4-.1-.5-.3-.2.1-.4 0-.6-.2-.2-.2-.2-.4-.2-.6-.2-.1-.3-.3-.3-.5 0-.3.1-.4.3-.5-.1-.2 0-.4.2-.6.2-.2.4-.2.6-.2.1-.2.3-.3.5-.3.3 0 .4.1.5.3.2-.1.4 0 .6.2.2.2.2.4.2.6.2.1.3.3.3.5 0 .3-.1.4-.3.5.1.2 0 .4-.2.6zm-3.7-2c-.3.3-.7.2-.9 0-.4-.4-.5-.9-.3-1.1.2-.2.8-.1 1.2.3.2.1.3.5 0 .8zm0 2.7c-.4.4-1 .5-1.2.3-.2-.2-.1-.8.3-1.1.2-.2.6-.3.9 0 .3.2.2.6 0 .8zm-1.6-11.2c.6 0 1.1 0 1.7.1-2.7 1.5-4.5 3.6-4.5 5.4 0 .3 0 .6.1.9-1 .3-1.9.7-2.7 1.3-.3-.6-.4-1.4-.4-2.2-.1-3.7 2.9-5.5 5.8-5.5zm-.5 9.4c-.5.4-1 .9-1.3 1.3-.9-.3-1.7-.7-2.4-1.3.7-.6 1.5-1.1 2.4-1.3.3.4.8.9 1.3 1.3zm.5 9.5c-2.8 0-5.9-1.9-5.9-5.5 0-.8.2-1.6.4-2.2.8.6 1.8 1 2.7 1.3-.1.3-.1.6-.1.9 0 1.8 1.8 3.9 4.5 5.4-.5 0-1.1.1-1.6.1zm-.5-5.6c0-.2 0-.4.1-.6 1.6 0 3.2-.3 4.7-.8 1.5.5 3.1.8 4.7.8.1.2.1.4.1.6 0 1.7-2 3.6-4.7 4.7-2.9-1-4.9-3-4.9-4.7zm8.9 5.6c-.6 0-1.1 0-1.7-.1 2.7-1.5 4.5-3.6 4.5-5.4 0-.3 0-.6-.1-.9 1-.3 1.9-.7 2.7-1.3.3.6.4 1.4.4 2.2.1 3.6-2.9 5.5-5.8 5.5zm.5-9.5c.5-.4.9-.9 1.3-1.3.9.3 1.7.7 2.4 1.3-.7.6-1.5 1.1-2.4 1.3-.3-.4-.7-.9-1.3-1.3zm5-1.7c-.8-.6-1.8-1-2.7-1.3.1-.3.1-.6.1-.9 0-1.8-1.8-3.9-4.5-5.4.5-.1 1.1-.1 1.7-.1 2.8 0 5.9 1.9 5.9 5.5-.1.8-.2 1.5-.5 2.2z",

							fillColor: '#43403D',
							fillOpacity: 1,
							anchor: new google.maps.Point(0,0),
							strokeWeight: 0,
							scale: 1
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

