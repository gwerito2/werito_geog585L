// var myNewRotate = new ol.control.Rotate({autoHide:false})
// var myScaleLine = new ol.control.ScaleLine()
// var myOverviewMap = new ol.control.OverviewMap({collapsible:false, collapsed:false})
//
// var myControls = ol.control.defaults({
// 	attribution:true,
// 	rotate:true,
// 	zoom:true}).extend([myNewRotate,myScaleLine,myOverviewMap])

var projection = ol.proj.get('EPSG:3857');

      var raster = new ol.layer.Tile({
        source: new ol.source.BingMaps({
          imagerySet: 'Aerial',
          key: 'AhwSYoaOsn_O2z7569TCYGIWnjUVg4Fk3wN9OehNGUDuPT0Z3OqRvEzlTiHz90K-'
        })
      });

      var vector = new ol.layer.Vector({
        source: new ol.source.Vector({
          url: 'https://openlayers.org/en/v4.6.5/examples/data/kml/2012-02-10.kml',
          format: new ol.format.KML()
        })
      });

      var map = new ol.Map({
        layers: [raster, vector],
        target: document.getElementById('map'),
        view: new ol.View({
          center: ol.proj.fromLonLat([-106.469986, 35.162933]),
          projection: projection,
          zoom: 16
        })
      });

      var displayFeatureInfo = function(pixel) {
        var features = [];
        map.forEachFeatureAtPixel(pixel, function(feature) {
          features.push(feature);
        });
        if (features.length > 0) {
          var info = [];
          var i, ii;
          for (i = 0, ii = features.length; i < ii; ++i) {
            info.push(features[i].get('name'));
          }
          document.getElementById('info').innerHTML = info.join(', ') || '(unknown)';
          map.getTarget().style.cursor = 'pointer';
        } else {
          document.getElementById('info').innerHTML = '&nbsp;';
          map.getTarget().style.cursor = '';
        }
      };

      map.on('pointermove', function(evt) {
        if (evt.dragging) {
          return;
        }
        var pixel = map.getEventPixel(evt.originalEvent);
        displayFeatureInfo(pixel);
      });

      map.on('click', function(evt) {
        displayFeatureInfo(evt.pixel);
      });


// map.addControl(new ol.control.ScaleLine({units: 'us'}));
