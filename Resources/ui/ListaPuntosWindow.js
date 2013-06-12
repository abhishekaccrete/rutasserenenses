/**
 * @author Andy
 */
var globalListView;
function VentanaListaPuntos(tipoRuta) 
{
	var jsCategoryType = require("map/CategoryType");
	var Globals = require('utils/Globals');
	
	this.ventana = Ti.UI.createWindow({
		backgroundColor:'#fff',
		fullscreen: false,
		exitOnClose: true
	});
	
	
	this.topView = Titanium.UI.createView({
		//backgroundColor: '#060',
		height: Globals.getVerticalValue(64),
		top: 0
	});
	this.centerView = Titanium.UI.createView({
		//backgroundColor: '#600',
		top: this.topView.height
	});
	
	var titulo;
	var imagen = "";
	
	
	switch(tipoRuta._id) {
		case jsCategoryType.ARTESANAL._id:
			titulo = "Ruta artesanal";
			imagen = "/images/rubia.jpg";			
		break;
		
		case jsCategoryType.BOHEMIA._id:
			titulo = "Ruta bohemia";
			imagen = "/images/rubia.jpg";			
		break;
		
		case jsCategoryType.CULTURAL._id:
			titulo = "Ruta cultural";	
			imagen = "/images/rubia.jpg";		
		break;
		
		case jsCategoryType.FAMILIAR._id:
			titulo = "Ruta familiar";	
			imagen = "/images/rubia.jpg";		
		break;
		
		case jsCategoryType.GASTRONOMICA._id:
			titulo = "Ruta gastronómica";
			imagen = "/images/rubia.jpg";		
		break;
		
		case jsCategoryType.VINOS._id:
			titulo = "Ruta del Vino";	
			imagen = "/images/rubia.jpg";		
		break;
		
		default:
			titulo = "Rutal de ???!";	
			imagen = "/images/delete.png";		
		break;
	}
	
	var lblTitulo = Titanium.UI.createLabel({
		id: 'lblTitulo',
		text: titulo,
		color: '#900',
  		font: 
  		{ 
            fontFamily: Globals.MAIN_FONT_BOLD, 
  			fontSize:36 
  		},
  		shadowColor: '#aaa',
  		shadowOffset: {x:5, y:5},
  		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  		top: 0,
  		width: Ti.UI.SIZE, height: Ti.UI.SIZE
	});
	
	
	
	var imagenView = Titanium.UI.createImageView({ 
		image: imagen,
		height: '64dp',				
		top: '1dp',
		left: '1dp',		
		bottom: '1dp'
	});
	
	

/*	var ckboxShowNearbyPoints = Titanium.UI.createButton({
        image: '/images/CheckOff.png',        
    	checked:false,
        width: '100dp',
        height: '20dp',
        left: '1dp',
        top: '66dp'
    });
 
    ckboxShowNearbyPoints.addEventListener('click', function(e){
        if (e.source.checked == true){
            e.source.image = '/images/CheckOn.png',
            e.source.checked = false
        } else {
            e.source.image = '/images/CheckOff.png',
            e.source.checked = true
        };
    });
    
    var lblCheckText = Titanium.UI.createLabel({
        text: "Show only nearby points",
		color: '#900',
  		
  		top: '66dp',
  		left: '30dp',
  		width: Ti.UI.SIZE, 
  		height: Ti.UI.SIZE
  	});*/
	
	
	this.topView.add(imagenView);
	this.topView.add(lblTitulo);
//	this.topView.add(ckboxShowNearbyPoints);
//	this.topView.add(lblCheckText);

	this.ventana.add(this.topView);
	this.ventana.add(this.centerView);
					
			
	
	
	refreshListView(tipoRuta, false, this.centerView);

	return this.ventana;
}

function agregaListView(tipoRuta, showOnlyNearby, ventana) {
	if (ventana == null) {
		return false;
	}
	
	var jsListaPuntosListView = require("ui/ListaPuntosListView");
	globalListView =  jsListaPuntosListView.ListaPuntosListView(tipoRuta, showOnlyNearby);
	ventana.add(globalListView);
	return true;
}

function refreshListView(tipoRuta, showOnlyNearby, ventana) {
	remueveListView(ventana)
	agregaListView(tipoRuta, showOnlyNearby, ventana);			
}

function remueveListView(ventana) {
	if (ventana == null || globalListView == null) {
		return false;
	} else {
		ventana.remove(globalListView);
		globalListView = null;
		return true;
	}		
}

exports.ListaPuntosWindow = VentanaListaPuntos;
exports.agregaListView = agregaListView;
exports.remueveListView = remueveListView;
exports.refreshListView = refreshListView;