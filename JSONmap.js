function initialize() {
			var gmap = new google.maps.LatLng(35.206259,-106.655113)
			/*var aEllison = new google.maps.LatLng(35.20568,-106.658600)/*use these variables*//*
			var bEllison = new google.maps.LatLng(35.207907,-106.652237)
			var abikeends = new google.maps.LatLng(35.205593,-106.659393)
			var bbikebegins = new google.maps.LatLng(35.207784,-106.651862)*/

			/*var cEllison = new google.maps.LatLng(35.205488,-106.658685)
			var dEllison = new google.maps.LatLng(35.207784,-106.652184)
			var eEllison = new google.maps.LatLng(35.208021,-106.652323)
			var fEllison = new google.maps.LatLng(35.205812,-106.658503)*/

			var options = {zoom: 16, center: gmap, mapTypeId: google.maps.MapTypeId.ROADMAP,
				zoomControlOptions: {style: google.maps.ZoomControlStyle.SMALL},
				scaleControl:true,
			styles:[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ffff00"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#00ff00"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#0000ff"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text",
    "stylers": [
      {
        "color": "#ff0000"
      },
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
]};

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
				bikelayer.setMap(map);}
