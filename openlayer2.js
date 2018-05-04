var stroke = new ol.style.Stroke({color: 'black', width: 2});
var fill1 = new ol.style.Fill({color: 'red'});
var fill2 = new ol.style.Fill({color: 'green'});
var fill3 = new ol.style.Fill({color: 'blue'});
var fill4 = new ol.style.Fill({color: 'purple'});
var fill5 = new ol.style.Fill({color: 'yellow'});
var styles = {
   'circle': new ol.style.Style({
      image: new ol.style.RegularShape({
          fill: fill4,
          stroke: stroke,
          points: 20,
          radius: 10
        })
      }),
    'square': new ol.style.Style({
        image: new ol.style.RegularShape({
            fill: fill1,
            stroke: stroke,
            points: 4,
            radius: 10,
            angle: Math.PI / 4
        })
    }),
    'square1': new ol.style.Style({
        image: new ol.style.RegularShape({
            fill: fill5,
            stroke: stroke,
            points: 4,
            radius: 10,
            angle: Math.PI / 4
        })
    }),

    'triangle': new ol.style.Style({
        image: new ol.style.RegularShape({
            fill: fill2,
            stroke: stroke,
            points: 3,
            radius: 10,
            rotation: Math.PI / 4,
            angle: 0
        })
    }),

    'cross': new ol.style.Style({
        image: new ol.style.RegularShape({
            fill: fill4,
            stroke: stroke,
            points: 4,
            radius: 10,
            radius2: 0,
            angle: 0
        })
    }),

};
var entrance = new ol.Feature({ });
var parking1 = new ol.Feature({ });
var parking2 = new ol.Feature({ });
var trailhead = new ol.Feature({ });
var pinotrail = new ol.Feature({ });

var en = new ol.geom.Point(
    ol.proj.fromLonLat([-106.473820, 35.161779])
);
var pk1 = new ol.geom.Point(
    ol.proj.fromLonLat ([-106.470749, 35.161822])
);
var  pk2= new ol.geom.Point(
    ol.proj.fromLonLat ([-106.470106, 35.163223])
);
var  th= new ol.geom.Point(
    ol.proj.fromLonLat([-106.469584, 35.163397])
);
var  pt= new ol.geom.Point(
    ol.proj.fromLonLat([-106.456846, 35.165071])
);
entrance.setGeometry(en);
parking1.setGeometry(pk1);
parking2.setGeometry(pk2);
trailhead.setGeometry(th);
pinotrail.setGeometry(pt);
entrance.setStyle(styles["circle"]);
parking1.setStyle(styles["square"]);
parking2.setStyle(styles["square1"]);
trailhead.setStyle(styles["cross"]);
pinotrail.setStyle(styles["triangle"]);
var  vector_layer = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: [entrance, parking1, parking2, trailhead, pinotrail]
    })
});


var wmskml= new ol.source.ImageWMS({
    url: 'https://gwerito2.github.io/werito_geog585L/KML/bmng2km.kml',
    params: {'LAYERS': 'geo_A'},
    serverType: 'geoserver',
    crossOrigin: 'anonymous',
});

var wms = new ol.layer.Image({
    source: wmskml,
    opacity : .4
});

var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.Stamen({layer:'terrain'})
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([-106.469986, 35.162933]),
        zoom: 14
    })
});
map.addLayer(wms);
map.addLayer(vector_layer);


map.addControl(new ol.control.ScaleLine({units: 'us'}));
