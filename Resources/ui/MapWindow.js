/**
 * TODO: Actualmente esta hecho mostrar el mapa con distintos puntos en la vista MapView y la lista de puntos en ListaPuntosListView
 * Pero al cambiar de vista dinamicamente al apretar el boton de la esquina arriba  derecha se cae sin error alguno.
 * Falta corregir ese error
 * Asociar en un for en MapView los puntos cargados desde el MapReader
 * hacer que muestre detalles al clickear un punto
 * mostrar detalles o el punto resaltado en el mapa al clickear ver mapa en la lista
 * ordenar los puntos de la lista por cercania
 * Arreglar un bug de que hay metodos globales en MapWindow y estas al hacer un back y cambio de categorian, no muestran resultado en la lista
 * Agregar tipos de iconos para los distintos puntos del mapa y mapearlo al xml
 */

/**
 * @author Mizardo and Andy
 */
//var globalListView;
var Globals = require('utils/Globals');
var ViewType = require("map/ViewType");
function MapWindow(tipoRuta) 
{
	
	var CategoryType = require("map/CategoryType");
	var MapReader = require('map/MapReader');
	this.activeView = ViewType.NONE;
	this.mapData = new MapReader();
	this.mapData.loadXML(Titanium.Filesystem.getResourcesDirectory() + "mapdata/mapdata.xml");
	
	this.tipoRuta = tipoRuta;
	this.ventana = Ti.UI.createWindow
	({
		backgroundColor:'#fff',
		fullscreen: false,
		exitOnClose: true
	});
	this.topView = Titanium.UI.createView
	({
		height: Globals.getVerticalValue(64),
		top: 0
	});
	this.centerView = Titanium.UI.createView
	({
		top: this.topView.height
	});
	
	this.listView = Titanium.UI.createView
	({
	});
	
	this.mapView = Titanium.UI.createView
	({
	});
	
	this.detailsView = Titanium.UI.createView
	({
	});
	
	this.categoryData = {};
	this.categoryData[CategoryType.ARTESANAL] = 	({name: 'Artesanal', icon: '/images/artesanal.png'});
	this.categoryData[CategoryType.BOHEMIA] = 		({name: 'Bohemia', icon: '/images/bohemia.png'});
	this.categoryData[CategoryType.CULTURAL] = 		({name: 'Cultural', icon:  '/images/cultural.png'});
	this.categoryData[CategoryType.FAMILIAR] = 		({name: 'Familiar', icon: '/images/familiar.png'});
	this.categoryData[CategoryType.GASTRONOMICA] = 	({name: 'Gastronomica', icon: '/images/gastronomica.png'});
	this.categoryData[CategoryType.VINOS] = 		({name: 'Vinos y Piscos', icon: '/images/vinos.png'});
	this.categoryData[CategoryType.OTROS] = 		({name: 'Otros', icon: '/images/otros.png'});
	
	var background = Titanium.UI.createImageView
	({ 
		image: '/images/mapview/header_naranjo.png',				
		width: Globals.SCREEN_SIZE_HEIGHT,
		height: this.topView.height,				
		top: '0dp',
		left: '0dp'
	});
	
	var backButton = Ti.UI.createButton
	({
		container: this,   
		ventana: this.ventana,
        backgroundImage: '/images/mapview/boton_back.png',        
        width: background.height - Globals.getVerticalValue(8),
        height: background.height - Globals.getVerticalValue(8),
        left:  Globals.getVerticalValue(2),
        top:  Globals.getVerticalValue(2)
    });	
    
	var icon = Titanium.UI.createImageView
	({ 
		image: this.categoryData[tipoRuta].icon,				
		width: background.height - Globals.getVerticalValue(8),
		height: background.height - Globals.getVerticalValue(8),				
		top: Globals.getVerticalValue(2),
		left: backButton.width + Globals.getHorizontalValue(8)
	});
    
    var title = Titanium.UI.createLabel
    ({
		text: this.categoryData[tipoRuta].name,
		color: 'white',
  		font: 
  		{ 
            fontFamily: Globals.MAIN_FONT_BOLD, 
  			fontSize:Globals.getVerticalValue(32) 
  		},
  		textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  		//center: '0dp',
  		left: icon.left + icon.width + Globals.getHorizontalValue(8)
	});
    
	this.listButton = Ti.UI.createButton
	({
		container: this,     
        backgroundImage: '/images/mapview/icono_lista.png',   
        width: this.topView.height,
        height: this.topView.height,
        right: '0dp',
        top: '0dp'
    });
    
   	this.mapButton = Ti.UI.createButton
	({
		container: this,     
        backgroundImage: '/images/mapview/icono_mapa.png',        
        width: this.topView.height,
        height: this.topView.height,
        right: '0dp',
        top: '0dp'
    });
	
    backButton.addEventListener('click', function(e)
    {
    	var MainMenuWindow = require("ui/MainMenuWindow");
		var mainMenu = MainMenuWindow.MainMenuWindow();
		mainMenu.open({ animated: true });
		e.source.ventana.close();
    	/*
    	if(e.source.container.activeView == ViewType.LIST || e.source.container.activeView == ViewType.MAP)
    	{
			var MainMenuWindow = require("ui/MainMenuWindow");
			var mainMenu = MainMenuWindow.MainMenuWindow();
			mainMenu.open({ animated: true });
			e.source.ventana.close();
    	}
		else
		{
			alert("details ");
		}
		*/
    }); 
    
    
	this.topView.add(background);
	this.topView.add(backButton);
	this.topView.add(icon);
	this.topView.add(title);
	this.topView.add(this.listButton);
	this.topView.add(this.mapButton);
	
	this.ventana.add(this.topView);
	this.ventana.add(this.centerView);

	setView(ViewType.LIST,this);
	
	return this.ventana;
}

function populateViews(container)
{
	//alert("lv: " + container.listView.children.length + " dv: " + container.detailsView.children.length +" mv: " + container.mapView.children.length);
	//populate list view
	if(container.listView.children.length <= 0)
	{
		var ListaPuntosListView = require("ui/ListaPuntosListView");
		var globalListView =  ListaPuntosListView.ListaPuntosListView(container.mapData,container.tipoRuta, false);
		container.listView.add(globalListView);
		container.centerView.add(container.listView);
		container.listView.visible = false;
		//alert("populate lista");
	}
	//populate map view
	if(container.mapView.children.length <= 0)
	{
/*		var MapaView = require("ui/MapaView");
		var mapaView =  MapaView.MapaView(container.ventana,container.mapData,container.tipoRuta, false);
		container.mapView.add(mapaView);
		container.centerView.add(container.mapView);
		container.mapView.visible = false;*/
		
		var textMap = Titanium.UI.createLabel
	    ({
			text: 'MAP VIEW',
			color: 'black',
	  		font: 
	  		{ 
	            fontFamily: Globals.MAIN_FONT_BOLD, 
	  			fontSize:Globals.getVerticalValue(32) 
	  		},
		});
		container.mapView.add(textMap);
		container.centerView.add(container.mapView);
		container.mapView.visible = false;
	}
	
	//populate details view
	if(container.detailsView.children.length <= 0)
	{
		//alert("populate details");
		var textDetails = Titanium.UI.createLabel
	    ({
			text: 'DETAILS VIEW',
			color: 'black',
	  		font: 
	  		{ 
	            fontFamily: Globals.MAIN_FONT_BOLD, 
	  			fontSize:Globals.getVerticalValue(32) 
	  		},
		});
		container.detailsView.add(textDetails);
		container.centerView.add(container.detailsView);
		container.detailsView.visible = false;
	}
	
}
		
function setView(viewType,container)
{
	//alert("currentView"+ viewType + " c: " + container)
	if(container.activeView == viewType)
		return;
	populateViews(container);
	switch(viewType)
	{
		case ViewType.MAP:
 			container.mapButton.enabled = false;
			container.mapButton.visible = false;
			container.listButton.enabled = true;
			container.listButton.visible = true;
		    container.mapButton.removeEventListener('click',mapButtonHandler); 
		    container.listButton.addEventListener('click', listButtonHandler); 
/*		    container.centerView.remove(container.listView);
		    container.centerView.remove(container.detailsView);
		    container.centerView.add(container.mapView);*/
			container.detailsView.visible = false;
			container.listView.visible = false;
			container.mapView.visible = true;
		break;
		case ViewType.LIST:
			container.listButton.enabled = false;
			container.listButton.visible = false;
			container.mapButton.enabled = true;
			container.mapButton.visible = true;
		    container.listButton.removeEventListener('click', listButtonHandler); 
		    container.mapButton.addEventListener('click',mapButtonHandler); 
/*		    container.centerView.remove(container.mapView);
		    container.centerView.remove(container.detailsView);
		    container.centerView.add(container.listView);*/
			container.mapView.visible = false;
			container.detailsView.visible = false;
			container.listView.visible = true;
		break;
		case ViewType.DETAILS:
			container.mapButton.enabled = false;
			container.mapButton.visible = false;
			container.listButton.enabled = false;
			container.listButton.visible = false;
		    container.listButton.removeEventListener('click', listButtonHandler);
		    container.mapButton.removeEventListener('click',mapButtonHandler);  
/*		    container.centerView.remove(container.listView);
		    container.centerView.remove(container.mapView);
		    container.centerView.add(container.detailsView);*/
			container.mapView.visible = false;
			container.listView.visible = false;
			container.detailsView.visible = true;
		break;
		default:
			return;
		break;
	}
	container.activeView = viewType;
}

function listButtonHandler(e)
{
    setView(ViewType.LIST,e.source.container);
}

function mapButtonHandler(e)
{
    setView(ViewType.MAP,e.source.container);
}

exports.populateViews = populateViews;
exports.setView = setView;
exports.MapWindow = MapWindow;