//Application Window Component Constructor
//Ti.include('ui/DetailedInfoView.js');
//Ti.include('ui/DetailedInfoViewTemplate.js');
exports.ApplicationWindow = function() 
{
	var Globals = require('utils/Globals');
	var MainMenuWindow = require('ui/MainMenuWindow');
	var jsCategoryType = require("map/CategoryType");
	
/*	var Globals = require('utils/Globals');
	var jsCategoryType = require("map/CategoryType");
	var MainMenuWindow = require('ui/MainMenuWindow');
	//initialize data
	
	//end initialization
	//temp
	var geo = require('geo');
	var LASERENA_LAT = -29.9060;
	var LASERENA_LON = -71.250;
	
	var jsListaPuntosWindows = require('ui/ListaPuntosWindow');
	
	var MapReader = require('map/MapReader');
	var Globals = require('utils/Globals');
	var mapData = new MapReader();
	//mapData.loadXML(Titanium.Filesystem.getResourcesDirectory() + "mapdata/mapdata.xml");
	mapData.loadXML(Globals.mapPath);
	

	//create object instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#fff',
		fullscreen: false,
		exitOnClose: true
	});

	// create UI components
	
	var view = Titanium.UI.createView({
		backgroundImage: "/images/green_rectangle.png",
		//backgroundColor: '#800',
		height: Globals.getVerticalValue(64),
		top: '0dp'
	});
	
	var the_img = Titanium.UI.createImageView({ 
		image:"images/rubia.jpg",
		height: '56dp',
		width: '56dp',		
		top: '1dp',
		left: '1dp',
		right: '1dp',
		bottom: '1dp'
	});
	
	var textfield = Ti.UI.createTextField({
		height: '20dp',
		top: '5dp',
		left: '60dp',
		right: '50dp',
		style: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		hintText: 'Enter an address',
		backgroundColor: '#fff',
		paddingLeft: '5dp'
	});
	
	var button = Ti.UI.createButton({
		title: '+',
		font: {
			fontSize: '20dp',
			fontWeight: 'bold'	
		},
		top: '5dp',
		height: '40dp',
		width: '40dp',
		right: '30dp'
	});
	
	var btnShowListaPuntos = Ti.UI.createButton({
		title: 'Lista ptos',
		font: {
			fontSize: '20dp',
			fontWeight: 'bold'	
		},
		top: '5dp',
		height: '40dp',
		width: '40dp',
		right: '5dp'
	});
	
	
	var mapview;
	
	// add map after window opens
	self.addEventListener('open', function() {
		// Make sure we only add the map once
		if (mapview !== undefined) {
			return;	
		}
		
		mapview = Titanium.Map.createView({
		    mapType: Titanium.Map.HYBRID_TYPE,
		    region: {
	    		latitude: LASERENA_LAT,//geo.LATITUDE_BASE, 
	    		longitude: LASERENA_LON,//geo.LONGITUDE_BASE,
		        latitudeDelta: 0.1, 
		        longitudeDelta: 0.1
		    },
		    animate:true,
		    regionFit:true,
		    userLocation:false,
		    top: '50dp'
		});

		// Handle all map annotation clicks
		mapview.addEventListener('click', function(e) {
			if (e.annotation && (e.clicksource === 'leftButton' || e.clicksource == 'leftPane')) {  
				mapview.removeAnnotation(e.annotation);
			}         
		});
		self.add(mapview);
	});
	
	
	// Execute forward geocode on button click
	
	button.addEventListener('click', function() {	
		textfield.blur();
		geo.forwardGeocode(textfield.value, function(geodata) {
			mapview.addAnnotation(Ti.Map.createAnnotation({
		    	animate: true,
		    	pincolor: Titanium.Map.ANNOTATION_RED,
		    	title: geodata.title,
		    	latitude: geodata.coords.latitude,
		    	longitude: geodata.coords.longitude,
		    	leftButton: '/images/delete.png'
		    })); 
		    mapview.setLocation({
		    	latitude: geodata.coords.latitude, 
		    	longitude: geodata.coords.longitude,
		        latitudeDelta: 1, 
		        longitudeDelta: 1
		    });
		});
	});
	
	
	btnShowListaPuntos.addEventListener('click', function() {
		var jsCategoryType = require("map/CategoryType");
		//alert(CategoryType.GASTRONOMICA);	
		var ListaPuntosWindow = jsListaPuntosWindows.ListaPuntosWindow(jsCategoryType.GASTRONOMICA);
		
		ListaPuntosWindow.open({ animated: true });
	});
	
	// assemble view hierarchy
	view.add(the_img);
	//view.add(textfield);
	//view.add(button);
	view.add(btnShowListaPuntos);
	
	//var vista2 = new DetailedInfoView(1, "oa", "images/rubia.jpg");
	//var vista3 = new DetailedInfoView(2, "otro oa", "images/rubia.jpg");	
	
	//var view2 = require("ui/DetailedInfoView").DetailedInfoView(1, "oa", "images/rubia.jpg");
	//var view3 = require("ui/DetailedInfoView").DetailedInfoView(2, "otro oa", "images/rubia.jpg");
	
	//var view2 = vista2.getDetailsView();
	//var view3 = vista3.getDetailsView();
	
	//self.add(view);
	//self.add(view2);
	//self.add(view3);
	
	
	
	
	//vista2.getLblTitulo().text = "asdasda";
	
	//self.applyProperties(view2);
	
	
	self.add(view);
	//self.add(listView);	
	//temp
*/	
	//create object instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#000',
		fullscreen: false,
		exitOnClose: true
	});
	
	// create UI components
	
	var view = Titanium.UI.createView({
		backgroundImage: "/images/portada.png",
		//backgroundColor: '#800',
		//height: '80dp',
		top: '0dp'
	});
	
	var logo = Titanium.UI.createImageView({ 
		image:"/images/portada_logo.png",
		width: Globals.getHorizontalValue(456 * 0.7),	
		height: Globals.getVerticalValue(324 * 0.7),
		top: '5dp',
		left: '10dp'
	});
	
	var logoMunicipalidad = Titanium.UI.createImageView({ 
		image:"/images/portada_municipalidad.png",
		width: Globals.getHorizontalValue(153 * 1.0),
		height: Globals.getVerticalValue(143 * 1.0),
		left: '10dp',
		bottom: '5dp'
	});
	
	var button = Ti.UI.createButton({
        backgroundImage: '/images/portada_boton.png', 
		title: 'Comenzar',
		color: '#fff',
		textAlign: Titanium.UI.TEXT_ALIGNMENT_RIGHT,
		font: 
		{
            fontFamily: Globals.MAIN_FONT_BOLD, 
			fontSize: Globals.getVerticalValue(38 * 0.9),
			fontWeight: 'bold'	
		},
		width: Globals.getHorizontalValue(273 * 0.9),
		height: Globals.getHorizontalValue(97 * 0.9),
		bottom: '5dp',
		right: '5dp'
	});
	
	button.addEventListener('click', function() 
	{
		var mainMenu = MainMenuWindow.MainMenuWindow();		
		mainMenu.open({ animated: true });
		self.close();
	});
	view.add(logo);
	view.add(logoMunicipalidad);
	view.add(button);
	self.add(view);
	
/*	
	var the_img = Titanium.UI.createImageView({ 
		image:"images/rubia.jpg",
		height: '56dp',
		width: '56dp',		
		top: '1dp',
		left: '1dp',
		right: '1dp',
		bottom: '1dp'
	});
	
	var textfield = Ti.UI.createTextField({
		height: '20dp',
		top: '5dp',
		left: '60dp',
		right: '50dp',
		style: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		hintText: 'Enter an address',
		backgroundColor: '#fff',
		paddingLeft: '5dp'
	});
	
	var button = Ti.UI.createButton({
		title: '+',
		font: {
			fontSize: '20dp',
			fontWeight: 'bold'	
		},
		top: '5dp',
		height: '40dp',
		width: '40dp',
		right: '30dp'
	});
	
	var btnShowListaPuntos = Ti.UI.createButton({
		title: 'Lista ptos',
		font: {
			fontSize: '20dp',
			fontWeight: 'bold'	
		},
		top: '5dp',
		height: '40dp',
		width: '40dp',
		right: '5dp'
	});

	btnShowListaPuntos.addEventListener('click', function() {
		var mainMenu = MainMenuWindow.MainMenuWindow();		
		mainMenu.open({ animated: true });
	});
	
	view.add(the_img);
	view.add(btnShowListaPuntos);
	

	self.add(view);
	*/
	


/*	var geo = require('geo');
	var LASERENA_LAT = -29.9060;
	var LASERENA_LON = -71.250;
	
	var jsListaPuntosWindows = require('ui/ListaPuntosWindow');
	
	var MapReader = require('map/MapReader');
	var Globals = require('utils/Globals');
	var mapData = new MapReader();
	//mapData.loadXML(Titanium.Filesystem.getResourcesDirectory() + "mapdata/mapdata.xml");
	mapData.loadXML(Globals.mapPath);
	

	//create object instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#fff',
		fullscreen: false,
		exitOnClose: true
	});

	// create UI components
	
	var view = Titanium.UI.createView({
		backgroundImage: "/images/green_rectangle.png",
		//backgroundColor: '#800',
		height: '80dp',
		top: '1dp'
	});
	
	var the_img = Titanium.UI.createImageView({ 
		image:"images/rubia.jpg",
		height: '56dp',
		width: '56dp',		
		top: '1dp',
		left: '1dp',
		right: '1dp',
		bottom: '1dp'
	});
	
	var textfield = Ti.UI.createTextField({
		height: '20dp',
		top: '5dp',
		left: '60dp',
		right: '50dp',
		style: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		hintText: 'Enter an address',
		backgroundColor: '#fff',
		paddingLeft: '5dp'
	});
	
	var button = Ti.UI.createButton({
		title: '+',
		font: {
			fontSize: '20dp',
			fontWeight: 'bold'	
		},
		top: '5dp',
		height: '40dp',
		width: '40dp',
		right: '30dp'
	});
	
	var btnShowListaPuntos = Ti.UI.createButton({
		title: 'Lista ptos',
		font: {
			fontSize: '20dp',
			fontWeight: 'bold'	
		},
		top: '5dp',
		height: '40dp',
		width: '40dp',
		right: '5dp'
	});
	
	
	var mapview;
	
	// add map after window opens
	self.addEventListener('open', function() {
		// Make sure we only add the map once
		if (mapview !== undefined) {
			return;	
		}
		
		mapview = Titanium.Map.createView({
		    mapType: Titanium.Map.HYBRID_TYPE,
		    region: {
	    		latitude: LASERENA_LAT,//geo.LATITUDE_BASE, 
	    		longitude: LASERENA_LON,//geo.LONGITUDE_BASE,
		        latitudeDelta: 0.1, 
		        longitudeDelta: 0.1
		    },
		    animate:true,
		    regionFit:true,
		    userLocation:false,
		    top: '50dp'
		});

		// Handle all map annotation clicks
		mapview.addEventListener('click', function(e) {
			if (e.annotation && (e.clicksource === 'leftButton' || e.clicksource == 'leftPane')) {  
				mapview.removeAnnotation(e.annotation);
			}         
		});
		self.add(mapview);
	});
	
	
	// Execute forward geocode on button click
	
	button.addEventListener('click', function() {	
		textfield.blur();
		geo.forwardGeocode(textfield.value, function(geodata) {
			mapview.addAnnotation(Ti.Map.createAnnotation({
		    	animate: true,
		    	pincolor: Titanium.Map.ANNOTATION_RED,
		    	title: geodata.title,
		    	latitude: geodata.coords.latitude,
		    	longitude: geodata.coords.longitude,
		    	leftButton: '/images/delete.png'
		    })); 
		    mapview.setLocation({
		    	latitude: geodata.coords.latitude, 
		    	longitude: geodata.coords.longitude,
		        latitudeDelta: 1, 
		        longitudeDelta: 1
		    });
		});
	});
	
	
	btnShowListaPuntos.addEventListener('click', function() {
		var jsCategoryType = require("map/CategoryType");
		//alert(CategoryType.GASTRONOMICA);	
		var ListaPuntosWindow = jsListaPuntosWindows.ListaPuntosWindow(jsCategoryType.GASTRONOMICA);
		
		ListaPuntosWindow.open({ animated: true });
	});
	
	// assemble view hierarchy
	view.add(the_img);
	//view.add(textfield);
	//view.add(button);
	view.add(btnShowListaPuntos);
	
	//var vista2 = new DetailedInfoView(1, "oa", "images/rubia.jpg");
	//var vista3 = new DetailedInfoView(2, "otro oa", "images/rubia.jpg");	
	
	//var view2 = require("ui/DetailedInfoView").DetailedInfoView(1, "oa", "images/rubia.jpg");
	//var view3 = require("ui/DetailedInfoView").DetailedInfoView(2, "otro oa", "images/rubia.jpg");
	
	//var view2 = vista2.getDetailsView();
	//var view3 = vista3.getDetailsView();
	
	//self.add(view);
	//self.add(view2);
	//self.add(view3);
	
	
	
	
	//vista2.getLblTitulo().text = "asdasda";
	
	//self.applyProperties(view2);
	
	
	self.add(view);*/
	//self.add(listView);


	return self;
};
