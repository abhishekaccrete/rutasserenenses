/**
 * @author Andy
 */

var LASERENA_LAT = -29.9060;
var LASERENA_LON = -71.250;
exports.MapaView = function(ventana,mapData, tipoRuta,showOnlyNearby) 
{
	var jsGeoUtil = require("utils/GeoUtils");
	var jsCategoryType = require("map/CategoryType");	
	var jsPlacemark = require("map/Placemark");
	var Globals = require('utils/Globals');
	var geo = require('geo');
	
	var view = Titanium.UI.createView
	({
		//backgroundColor: '#fff',
	});
	
	var mapview;
	
	ventana.addEventListener('open', function() 
	{
		// Make sure we only add the map once
/*		if (mapview !== undefined) 
		{
			return;	
		}*/
		
		mapview = Titanium.Map.createView
		({
		    mapType: Titanium.Map.HYBRID_TYPE,
		    region: 
		    {
	    		latitude: LASERENA_LAT,//geo.LATITUDE_BASE, 
	    		longitude: LASERENA_LON,//geo.LONGITUDE_BASE,
		        latitudeDelta: 0.1, 
		        longitudeDelta: 0.1
		    },
		    animate:true,
		    regionFit:true,
		    userLocation:false
		});

		// Handle all map annotation clicks
		/*mapview.addEventListener('click', function(e) 
		{
			if (e.annotation && (e.clicksource === 'leftButton' || e.clicksource == 'leftPane')) 
			{  
				mapview.removeAnnotation(e.annotation);
			}         
		});*/
		view.add(mapview);
	});
	
	/*mapview = Titanium.Map.createView
	({
	    mapType: Titanium.Map.HYBRID_TYPE,
	    region: 
	    {
    		latitude: LASERENA_LAT,//geo.LATITUDE_BASE, 
    		longitude: LASERENA_LON,//geo.LONGITUDE_BASE,
	        latitudeDelta: 0.1, 
	        longitudeDelta: 0.1
	    },
	    animate:true,
	    regionFit:true,
	    userLocation:false,
	    top: '50dp'
	});*/

/*
	// Handle all map annotation clicks
	mapview.addEventListener('click', function(e) 
	{
		if (e.annotation && (e.clicksource === 'leftButton' || e.clicksource == 'leftPane')) 
		{  
			mapview.removeAnnotation(e.annotation);
		}         
	});
	
	
	
	geo.forwardGeocode('Hola soy un punto', function(geodata) 
	{
		mapview.addAnnotation(Ti.Map.createAnnotation
		({
	    	animate: true,
	    	pincolor: Titanium.Map.ANNOTATION_RED,
	    	title: geodata.title,
	    	latitude: geodata.coords.latitude,
	    	longitude: geodata.coords.longitude,
	    	leftButton: '/images/delete.png'
	    })); 
	    mapview.setLocation
	    ({
	    	latitude: geodata.coords.latitude, 
	    	longitude: geodata.coords.longitude,
	        latitudeDelta: 1, 
	        longitudeDelta: 1
	    });
	});

*/
	

	
	//view.add(mapview);
	return view;
}


