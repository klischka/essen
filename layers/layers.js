var wms_layers = [];

var format_Stadtteilgrenzen_0 = new ol.format.GeoJSON();
var features_Stadtteilgrenzen_0 = format_Stadtteilgrenzen_0.readFeatures(json_Stadtteilgrenzen_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stadtteilgrenzen_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stadtteilgrenzen_0.addFeatures(features_Stadtteilgrenzen_0);
var lyr_Stadtteilgrenzen_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Stadtteilgrenzen_0, 
                style: style_Stadtteilgrenzen_0,
                interactive: true,
                title: '<img src="styles/legend/Stadtteilgrenzen_0.png" /> Stadtteilgrenzen'
            });

lyr_Stadtteilgrenzen_0.setVisible(true);
var layersList = [lyr_Stadtteilgrenzen_0];
lyr_Stadtteilgrenzen_0.set('fieldAliases', {'FID': 'FID', 'OBJECTID': 'OBJECTID', 'LDS': 'LDS', 'STADTTEILE': 'STADTTEILE', 'STAT_NR': 'STAT_NR', 'STADTT': 'STADTT', 'STADTBEZ': 'STADTBEZ', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Stadtteilgrenzen_0.set('fieldImages', {'FID': '', 'OBJECTID': '', 'LDS': '', 'STADTTEILE': '', 'STAT_NR': '', 'STADTT': '', 'STADTBEZ': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Stadtteilgrenzen_0.set('fieldLabels', {'FID': 'no label', 'OBJECTID': 'no label', 'LDS': 'no label', 'STADTTEILE': 'inline label', 'STAT_NR': 'no label', 'STADTT': 'no label', 'STADTBEZ': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Stadtteilgrenzen_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});