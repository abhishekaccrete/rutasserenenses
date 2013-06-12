/**
 * @author Andy
 */

exports.ListaPuntosListView = function(mapData, tipoRuta,showOnlyNearby) 
{
	var jsDetailedInfoViewTemplate = require("ui/DetailedInfoViewTemplate");
	var jsGeoUtil = require("utils/GeoUtils");
	var jsCategoryType = require("map/CategoryType");	
	var jsPlacemark = require("map/Placemark");
	var Globals = require('utils/Globals');
 
	var mapData = mapData;	

	
	var templateView = jsDetailedInfoViewTemplate.infoViewTemplate();	
	var plainTemplate = templateView.plainTemplate;
	var view = Titanium.UI.createView
	({
		//backgroundColor: '#fff',
	});
	var viewTitle = Titanium.UI.createView
	({
		backgroundColor: '#fff',
		height: Globals.getVerticalValue(48),			
		top: '0dp'
	});
	
	var titleBackgroundTile = Titanium.UI.createImageView
	({ 
		image: '/images/mapview/pointlistview/marco_info_vertical.png',
		width: (Globals.SCREEN_SIZE_HEIGHT - templateView.cellHeight),	
		height: viewTitle.height,	
		left: '0dp',			
	});
	var titleBackgroundBorder = Titanium.UI.createImageView
	({ 
		image: '/images/mapview/pointlistview/marco_info_interseccion.png',
		width: Globals.getHorizontalValue(23),	
		height: titleBackgroundTile.height,	
		right: templateView.cellHeight			
	});
	
	var titleBackgroundRight = Titanium.UI.createImageView
	({ 
		image: '/images/mapview/pointlistview/marco_info_boton_solo.png',
        width: templateView.cellHeight,
		height: titleBackgroundTile.height,	
		right: '0dp',
		top: '0dp'			
	});

	
	var titleDetails = Titanium.UI.createLabel({
		id: 'titleDetails',
		text: 'Información',
		color: '#e5cfd1',
  		font: 
  		{ 
            fontFamily: Globals.MAIN_FONT_BOLD, 
  			fontSize:Globals.getVerticalValue(20) 
  		},
  		textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  		left: '2dp'
	});	
	var titleMap = Titanium.UI.createLabel({
		id: 'titleDetails',
		text: 'Ubicación',
		color: '#e5cfd1',
  		font: 
  		{ 
            fontFamily: Globals.MAIN_FONT_BOLD, 
  			fontSize:Globals.getVerticalValue(20) 
  		},
  		textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
  		right: '2dp'
	});
	
	
	viewTitle.add(titleBackgroundTile);
	viewTitle.add(titleBackgroundBorder);
	viewTitle.add(titleBackgroundRight);
	viewTitle.add(titleMap);
	viewTitle.add(titleDetails);
	
	
	// The following API calls are equivalent to using jQuery.extend(true, {}, oldObject)
	// Copy the plainTemplate
	//var redTemplate = JSON.parse(JSON.stringify(plainTemplate));
	// Change the text color to red
	
	
	//redTemplate.childTemplates[1].properties.color = 'red';
	//redTemplate.childTemplates[2].properties.color = 'red';
	// Rebind the click event callback
	//redTemplate.events.click = jsDetailedInfoViewTemplate.toggleCheck();
	var listView = Ti.UI.createListView
	({
	    // Maps myTemplate dictionary to 'template' string
	    templates: { 'template': plainTemplate },
	    // Use 'template', that is, the myTemplate dict created earlier
	    // for all items as long as the template property is not defined for an item.
    	defaultItemTemplate: 'template',
    	top: viewTitle.height
	});
	
	var sections = [];
	
	
	var listRutaTematica = mapData.placemarks[tipoRuta];
/*	var titulo;
	//alert(tipoRuta.toString());
	switch(tipoRuta._id) {
		case jsCategoryType.ARTESANAL._id:
			titulo = "Artesanias";
			
		break;
		
		case jsCategoryType.BOHEMIA._id:
			titulo = "Locales nocturnos";
			listRutaTematica = mapData.placemarks[jsCategoryType.BOHEMIA];
		break;
		
		case jsCategoryType.CULTURAL._id:
			titulo = "Cultura";
			listRutaTematica = mapData.placemarks[jsCategoryType.CULTURAL];
		break;
		
		case jsCategoryType.FAMILIAR._id:
			titulo = "Con toda la familia";
			listRutaTematica = mapData.placemarks[jsCategoryType.FAMILIAR];
		break;
		
		case jsCategoryType.GASTRONOMICA._id:
			titulo = "Nom Nom Nom";
			listRutaTematica = mapData.placemarks[jsCategoryType.GASTRONOMICA];
		break;
		
		case jsCategoryType.VINOS._id:
			titulo = "Vinos y Piscos";
			listRutaTematica = mapData.placemarks[jsCategoryType.VINOS];
		break;
		
		default:
			titulo = "como dijo que dijo?";
			
			listRutaTematica = mapData.placemarks[jsCategoryType.OTROS.toString()];
		break;
	}
	*/
	//var section = Ti.UI.createListSection({ headerTitle: titulo});
	var section = Ti.UI.createListSection();
	var dataSet = [];

	listRutaTematica = listRutaTematica.slice(0);
	
	var placemark;
	for (var i = 0 ; i < listRutaTematica.length; i++) 
	{
		placemark = listRutaTematica[i];
		//dataSet.push({nombre: {text: placemark.name+placemark.name+placemark.name}, direccion: {text: placemark.address}, telefono: {text: placemark.phone}, pic: {image: placemark.picture}, geopoint: {lat: placemark.point.x, lon: placemark.point.y}});	
		dataSet.push({nombre: {text: Globals.limitString(placemark.name,22)}, direccion: {text: Globals.limitString(placemark.address,38)}, telefono: {text: Globals.limitString(placemark.phone,20)}, pic: {image: placemark.picture}, geopoint: {lat: placemark.point.x, lon: placemark.point.y}});	
	}
	

	//dataSet.sort(ordenarPuntos());
	section.setItems(dataSet);
	sections.push(section);

	listView.setSections(sections);
	
	listView.addEventListener('itemclick', function(e) 
	{
		var item = e.section.items[e.itemIndex];
		if (e.bindId == 'backgroundright' || e.bindId == 'backgroundleft' ||  e.bindId == 'picicon' || e.bindId == 'nombre' || e.bindId == 'direccion') 
		{
			alert("click en details, elemento #" + e.itemIndex);
		} 
		else if(e.bindId == 'picphone' || e.bindId == 'telefono')
		{
			alert("click en telefono, elemento #" + e.itemIndex);
		}
		else
		{
			alert("click en boton go map, elemento #" + item.geopoint.lat + " y: " + item.geopoint.lon);
		}
		//alert("control que lanzo el evento: " + e.bindId + "\nclickearon en " + e.itemIndex);
	});
	
	view.add(viewTitle);
	view.add(listView);
	return view;
}

function ordenarPuntos(a,b) {
	if (a.dist < b.dist) {return -1;}
    if (a.dist > b.dist) {return 1;}
    return 0;
}


