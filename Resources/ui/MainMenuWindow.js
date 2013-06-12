/**
 * @author Mario
 */
function MainMenuWindow() 
{
	var CategoryType = require("map/CategoryType");
	var Globals = require('utils/Globals');
	
	this.ventana = Ti.UI.createWindow({
		backgroundColor:'#fff',
		fullscreen: false,
		exitOnClose: true
	});
	
	
	var viewTop = Titanium.UI.createView({
		backgroundImage:"/images/mainmenu/fondo_iconos_arriba.png",
		//backgroundColor: '#fff',
		height: Globals.getVerticalValue(75),
		top: 0
	});
	var viewBottom = Titanium.UI.createView({
		backgroundImage: "/images/mainmenu/fondo_iconos_abajo.png",
		//backgroundColor: '#fff',
		height: Globals.getVerticalValue(40),
		bottom: 0
	});
	var viewCenter = Titanium.UI.createView({
		backgroundColor: '#fff',
		top: viewTop.height,
		bottom: viewBottom.height
	});
	
	
/*	var title = Titanium.UI.createImageView({ 
		image:"/images/temporal_title.png",
		//height: '56dp',
		//width: '56dp',	
		
		height: viewTop.height,		
		top: '0dp',
		center: '0dp',
		//right: '1dp',
		bottom: '0dp'
	});*/
	/*var topBG = Titanium.UI.createImageView({ 
		image:"/images/mainmenu/fondo_iconos_arriba.png",
		//height: '56dp',
		//width: '56dp',	
		height: viewTop.height,		
		top: '0dp',
		center: '0dp',
		//right: '1dp',
		bottom: '0dp'
	});*/
	var topIcon = Titanium.UI.createImageView({ 
		image:"/images/mainmenu/fondo_iconos_logo_suelto.png",
		//height: '56dp',
		//width: '56dp',	
		height: (viewTop.height - Globals.getVerticalValue(2)),		
		top: '0dp',
		left: Globals.getHorizontalValue(8)
	});
	
	var title = Titanium.UI.createLabel({
		text: 'Categorias',
		color: '#fff',
  		font: 
  		{ 
            fontFamily: Globals.MAIN_FONT_BOLD, 
  			fontSize:Globals.getVerticalValue(48) 
  		},
  		textAlign: Ti.UI.TEXT_ALIGNMENT_RIGTH,
  		//top: Globals.getVerticalValue(48),
  		right: Globals.getHorizontalValue(8)
	});
	//viewTop.add(topBG);
	viewTop.add(topIcon);
	viewTop.add(title);
	
	/*var botBG = Titanium.UI.createImageView
	({ 
		image:"/images/mainmenu/fondo_iconos_abajo.png",
		//height: '56dp',
		//width: '56dp',	
		//height: viewBottom.height,		
		top: '0dp',
		center: '0dp',
		//right: '1dp',
		bottom: '0dp'
	});
	
	viewBottom.add(botBG);*/
	
	
	var RouteListView = require("ui/RouteListView");
	routeList = RouteListView.RouteListView(this.ventana);
	viewCenter.add(routeList);
	this.ventana.add(viewTop);
	this.ventana.add(viewCenter);
	this.ventana.add(viewBottom);
	
	
	return this.ventana;
}


exports.MainMenuWindow = MainMenuWindow;