// OpenLayers_01.js

var myMap = new ol.Map({
		target: 'map',
		layers: [
					new ol.layer.Tile({
							source: new ol.source.OSM()
					})
],
view: new ol.View({
		center: ol.proj.fromLonLat([-106.469986, 35.162933]),
		zoom: 16
		})
});
