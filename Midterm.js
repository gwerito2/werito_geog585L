function initialize() {
			var gmap = new google.maps.LatLng(51.178884,-1.826214)
			var options = {zoom: 18, center: gmap, mapTypeId: google.maps.MapTypeId.SATELLITE,
				zoomControlOptions: {style: google.maps.ZoomControlStyle.SMALL},
				scaleControl:true,
			styles:[ 	{ "featureType": "poi.park",
									"elementType": "labels",
									"stylers": [ { "hue": "#00ffe6" },{ "visibility": "simplified" } ] },{ "featureType": "administrative",
									"stylers": [ { "visibility": "off" } ] },{ "featureType": "road.local",
									"stylers": [ { "visibility": "simplified" } ] },{ "featureType": "road.highway", "elementType": "labels",
									"stylers": [ { "visibility": "simplified" } ] },{ "featureType": "road.local", "elementType": "labels", "stylers": [ { "visibility": "on" } ] } ]};

			var map = new google.maps.Map(document.getElementById("map_canvas1"), options);

			var center = new google.maps.Marker({position: gmap, title: "Stonehenge"});
				center.setMap(map);
			}
