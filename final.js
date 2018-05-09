



  var sourceBingMaps = new ol.source.BingMaps({
    key: 'AhwSYoaOsn_O2z7569TCYGIWnjUVg4Fk3wN9OehNGUDuPT0Z3OqRvEzlTiHz90K-',
    imagerySet: 'Road',
    culture: 'fr-FR'
  });

  var bingMapsAerial = new ol.layer.Tile({
    preload: Infinity,
    source: new ol.source.BingMaps({
      key: 'AhwSYoaOsn_O2z7569TCYGIWnjUVg4Fk3wN9OehNGUDuPT0Z3OqRvEzlTiHz90K-',
      imagerySet: 'Aerial',
    })
  });

  var MajorRoads = new ol.layer.Tile({
  title:'Major Roads',
  source: new ol.source.TileWMS({
  url: 'http://internetmapping.net:8080/geoserver/wms?',
    params: {
      LAYERS: 'ws_gwerito2:MajorStreets3',
      FORMAT: 'image/png',
      TRANSPARENT: true
      },
    })
  })

var Accident09 = new ol.layer.Tile({
title:'2009 Accidents',
source: new ol.source.TileWMS({
url: 'http://internetmapping.net:8080/geoserver/wms?',
  params: {
    LAYERS: 'ws_gwerito2:2009 points',
    FORMAT: 'image/png',
    TRANSPARENT: true
    },
  })
})
var Accident08 = new ol.layer.Tile({
title:'2008 Accidents',
source: new ol.source.TileWMS({
url: 'http://internetmapping.net:8080/geoserver/wms?',
  params: {
    LAYERS: 'ws_gwerito2:gw_2008_Accidents',
    FORMAT: 'image/png',
    TRANSPARENT: true
    },
  })
})

var POI = new ol.layer.Tile({
title:'Establishments',
source: new ol.source.TileWMS({
url: 'http://internetmapping.net:8080/geoserver/wms?',
  params: {
    LAYERS: 'ws_gwerito2:POI',
    FORMAT: 'image/png',
    TRANSPARENT: true
    },
  })
})

  var map = new ol.Map({
    layers: [bingMapsAerial,MajorRoads,Accident09, Accident08, POI],
    target: 'map',
    view: new ol.View({
      center: ol.proj.transform([-106.629306, 35.105163], 'EPSG:4326', 'EPSG:3857'),
      zoom: 13
       })

  })

  map.addControl(new ol.control.LayerSwitcher());
