function initialize() {
			var gmap = new google.maps.LatLng(35.206259,-106.655113)
			var aEllison = new google.maps.LatLng(35.20568,-106.658600)
			var bEllison = new google.maps.LatLng(35.207907,-106.652237)
			var abikeends = new google.maps.LatLng(35.205593,-106.659393)
			var bbikebegins = new google.maps.LatLng(35.207784,-106.651862)

			/*var cEllison = new google.maps.LatLng(35.205488,-106.658685)
			var dEllison = new google.maps.LatLng(35.207784,-106.652184)
			var eEllison = new google.maps.LatLng(35.208021,-106.652323)
			var fEllison = new google.maps.LatLng(35.205812,-106.658503)*/

			var options = {zoom: 16, center: gmap, mapTypeId: google.maps.MapTypeId.ROADMAP,
				zoomControlOptions: {style: google.maps.ZoomControlStyle.SMALL},
				scaleControl:true,
			styles:[ 	{ "featureType": "poi.park",
									"elementType": "labels",
									"stylers": [ { "hue": "#00ffe6" },{ "visibility": "simplified" } ] },{ "featureType": "administrative",
									"stylers": [ { "visibility": "off" } ] },{ "featureType": "road.local",
									"stylers": [ { "visibility": "simplified" } ] },{ "featureType": "road.highway", "elementType": "labels",
									"stylers": [ { "visibility": "simplified" } ] },{ "featureType": "road.local", "elementType": "labels", "stylers": [ { "visibility": "on" } ] } ]};

			var map = new google.maps.Map(document.getElementById("map_canvas"), options);

			var aEllisonMarker = new google.maps.Marker({position: aEllison, title: "No bicycle lanes between these two points"});
				aEllisonMarker.setMap(map);

			var bEllisonMarker = new google.maps.Marker({position: bEllison, title: "No bicycle lanes between these two points"});
				bEllisonMarker.setMap(map);

			var abikeendsMarker = new google.maps.Marker({position: abikeends, title: "Bike Lane Ends"});
				abikeendsMarker.setMap(map);

			var bbikebeginsMarker = new google.maps.Marker({position: bbikebegins, title: "Bike Lane Resumes"});
				bbikebeginsMarker.setMap(map);
			/*var cEllisonMarker = new google.maps.Marker({position: cEllison, title:	"Point a"});
				cEllisonMarker.setMap(map);
			var dEllisonMarker = new google.maps.Marker({position: dEllison, title: "Point b"});
				dEllisonMarker.setMap(map);
			var eEllisonMarker = new google.maps.Marker({position: eEllison, title: "Point c"});
				eEllisonMarker.setMap(map);
			var fEllisonMarker = new google.maps.Marker({position: fEllison, title: "Point d"});
				fEllisonMarker.setMap(map);*/

			var EllisonCoordinates = [aEllison, new google.maps.LatLng(35.205628,-106.656861),
												new google.maps.LatLng(35.206241,-106.655295),
												new google.maps.LatLng(35.207399,-106.65375),
										bEllison ];
			var EllisonPath = new google.maps.Polyline({ path: EllisonCoordinates, strokeColor:	"#020202", strokeOpacity:1.0, strokeWeight:3});
				EllisonPath.setMap(map);

			var ployCoordinates = [	new google.maps.LatLng(35.205488,-106.658685),
									new google.maps.LatLng(35.205488,-106.656765),
									new google.maps.LatLng(35.206022,-106.655284),
									new google.maps.LatLng(35.207215,-106.653771),
									new google.maps.LatLng(35.207784,-106.652184),
									new google.maps.LatLng(35.208021,-106.652323),
									new google.maps.LatLng(35.207583,-106.653793),
									new google.maps.LatLng(35.206426,-106.65537),
									new google.maps.LatLng(35.205847,-106.656818),
									new google.maps.LatLng(35.205812,-106.658503),
								];
			var coordPoly = new google.maps.Polygon ({ path: ployCoordinates, strokeColor:	"#FF0202", strokeOpacity:0.8, strokeWeight:2, fillColor: "FF0000", fillOpacity: .35});
				coordPoly.setMap(map);

			var bikelayer = new google.maps.BicyclingLayer();
				bikelayer.setMap(map);

			}
