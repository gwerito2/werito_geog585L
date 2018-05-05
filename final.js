   // var lon = -106.629267;
   // var lat = 35.105445;
   // var zoom = 12;
   // var map, gphy, gmap, gter;

//Set Controls
  // var baseControls = [
  // new OpenLayers.Control.PanZoom({}),
  // new OpenLayers.Control.ScaleLine({}),
  // new OpenLayers.Control.Scale(),
  // new OpenLayers.Control.OverviewMap({})
  // ];

//Initialize function
function init(){

  var scaleLineControl = new ol.control.ScaleLine();



  var map = new ol.Map({
        controls: ol.control.defaults({
            attributionOptions: {
              collapsible: false
          }
        }),
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],

        target: 'map',
        view: new ol.View({
          center: ol.proj.fromLonLat([-106.629306, 35.105163]),
          zoom: 12
        })
      });



  var point08 = new ol.layer.Tile({
  		source: new ol.source.TileWFS({
  		url: 'http://internetmapping.net:8080/geoserver/wfs?',
  			params: {
  				LAYERS: 'ws_gwerito2:gw_2008_Accidents',
  				FORMAT: '.shp',
  				// TRANSPARENT: true
  				},
  			})
  		})
  // http://internetmapping.net:8080/geoserver/wfs/general/user012/New folder/2008_Accidents/2008_Accidents.shp

map.addLayers([point08,scaleLineControl]);

map.addControl(new ol.Control.LayerSwitcher());

map.addControl(new ol.control.ScaleLine({units: 'us'}));
}
