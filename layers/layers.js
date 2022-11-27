var wms_layers = [];

var format_Stadtgrenze_0_0 = new ol.format.GeoJSON();
var features_Stadtgrenze_0_0 = format_Stadtgrenze_0_0.readFeatures(json_Stadtgrenze_0_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stadtgrenze_0_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stadtgrenze_0_0.addFeatures(features_Stadtgrenze_0_0);
var lyr_Stadtgrenze_0_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Stadtgrenze_0_0, 
                style: style_Stadtgrenze_0_0,
                interactive: true,
                title: '<img src="styles/legend/Stadtgrenze_0_0.png" /> Stadtgrenze_0'
            });
var format_Stadtbezirksgrenzen_1 = new ol.format.GeoJSON();
var features_Stadtbezirksgrenzen_1 = format_Stadtbezirksgrenzen_1.readFeatures(json_Stadtbezirksgrenzen_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stadtbezirksgrenzen_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stadtbezirksgrenzen_1.addFeatures(features_Stadtbezirksgrenzen_1);
var lyr_Stadtbezirksgrenzen_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Stadtbezirksgrenzen_1, 
                style: style_Stadtbezirksgrenzen_1,
                interactive: true,
                title: '<img src="styles/legend/Stadtbezirksgrenzen_1.png" /> Stadtbezirksgrenzen'
            });
var format_Stadtteilgrenzen_2 = new ol.format.GeoJSON();
var features_Stadtteilgrenzen_2 = format_Stadtteilgrenzen_2.readFeatures(json_Stadtteilgrenzen_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stadtteilgrenzen_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stadtteilgrenzen_2.addFeatures(features_Stadtteilgrenzen_2);
var lyr_Stadtteilgrenzen_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Stadtteilgrenzen_2, 
                style: style_Stadtteilgrenzen_2,
                interactive: true,
                title: '<img src="styles/legend/Stadtteilgrenzen_2.png" /> Stadtteilgrenzen'
            });

lyr_Stadtgrenze_0_0.setVisible(true);lyr_Stadtbezirksgrenzen_1.setVisible(true);lyr_Stadtteilgrenzen_2.setVisible(true);
var layersList = [lyr_Stadtgrenze_0_0,lyr_Stadtbezirksgrenzen_1,lyr_Stadtteilgrenzen_2];
lyr_Stadtgrenze_0_0.set('fieldAliases', {'FID': 'FID', 'OBJECTID': 'OBJECTID', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_Stadtbezirksgrenzen_1.set('fieldAliases', {'FID': 'FID', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'STADTBEZ': 'STADTBEZ', 'STADTBEZR': 'STADTBEZR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Stadtteilgrenzen_2.set('fieldAliases', {'FID': 'FID', 'OBJECTID': 'OBJECTID', 'LDS': 'LDS', 'STADTTEILE': 'STADTTEILE', 'STAT_NR': 'STAT_NR', 'STADTT': 'STADTT', 'STADTBEZ': 'STADTBEZ', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Stadtgrenze_0_0.set('fieldImages', {'FID': '', 'OBJECTID': '', 'SHAPE_LENG': '', 'SHAPE_AREA': '', 'SHAPE_LEN': '', });
lyr_Stadtbezirksgrenzen_1.set('fieldImages', {'FID': '', 'OBJECTID_1': '', 'OBJECTID': '', 'STADTBEZ': '', 'STADTBEZR': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Stadtteilgrenzen_2.set('fieldImages', {'FID': '', 'OBJECTID': '', 'LDS': '', 'STADTTEILE': '', 'STAT_NR': '', 'STADTT': '', 'STADTBEZ': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Stadtgrenze_0_0.set('fieldLabels', {'FID': 'no label', 'OBJECTID': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_Stadtbezirksgrenzen_1.set('fieldLabels', {'FID': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'STADTBEZ': 'no label', 'STADTBEZR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Stadtteilgrenzen_2.set('fieldLabels', {'FID': 'no label', 'OBJECTID': 'no label', 'LDS': 'no label', 'STADTTEILE': 'no label', 'STAT_NR': 'no label', 'STADTT': 'no label', 'STADTBEZ': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Stadtteilgrenzen_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});