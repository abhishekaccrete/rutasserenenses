function templateView() 
{
	var Globals = require('utils/Globals');
	
	this.cellHeight = Globals.getVerticalValue(104);
	this.textOffset = Globals.getVerticalValue(2);
	
	this.plainTemplate = 
	{
	properties: 
	{
		height: this.cellHeight,
	    separatorColor: 'transparent'
    },
    childTemplates: 
    [

      	{ //left background from details list                           
            type: 'Ti.UI.ImageView',
            bindId: 'backgroundright',
            properties: 
            {           
            	image: '/images/mapview/pointlistview/caja_contenido_vertical.png',
                width: (Globals.SCREEN_SIZE_HEIGHT - this.cellHeight), 
                height: this.cellHeight, 
                left: '0dp'
            }
        },
      	{ //right side from the background from details list    
            type: 'Ti.UI.ImageView', 
            bindId: 'backgroundleft', 
            properties: 
            {         
            	image: '/images/mapview/pointlistview/caja_contenido_borde.png',
                width: Globals.getVerticalValue(5), 
                height: this.cellHeight, 
                right: this.cellHeight
            }
        },
      	{   //icon from the point on the map                       
            type: 'Ti.UI.ImageView',
            bindId: 'picicon',
            properties: 
            {            
            	image: '/images/hamburgertest.png',
                width: Globals.getVerticalValue(24), 
                height: Globals.getVerticalValue(24), 
                left: this.textOffset ,
                top: this.textOffset  + Globals.getVerticalValue(5)
            }
        },
        {   //name from the point                    
            type: 'Ti.UI.Label',     
            bindId: 'nombre',         
            properties: {           
                color: 'black',
           	 	wordWrap: false,
                font: 
                { 
                	fontFamily: Globals.MAIN_FONT_BOLD, 
                	fontWeight:'bold', 
                	fontSize: Globals.getVerticalValue(26)
                },
                left: this.textOffset  + Globals.getVerticalValue(24) + this.textOffset , 
                top: this.textOffset 
            }
        },
        {   //direction from the point                         
            type: 'Ti.UI.Label',     
            bindId: 'direccion',       
            properties: 
            {            
                color: 'gray',
                font: 
                { 
                	fontFamily: Globals.MAIN_FONT_BOLD, 
                	fontWeight:'bold', 
                	fontSize: Globals.getVerticalValue(20) 
                },
                width: (Globals.SCREEN_SIZE_HEIGHT - this.cellHeight - Globals.getHorizontalValue(4)), //yeah magic numbers ;C, in teory should be Globals.SCREEN_SIZE_WIDTH - this.cellHeight - 10
                top: (this.textOffset  + Globals.getVerticalValue(26) + this.textOffset ), 
                left: this.textOffset 
            }
        },
      	{   //icon for the phone                         
            type: 'Ti.UI.ImageView', 
            bindId: 'picphone', 
            properties: 
            {            
            	image: '/images/testphono.png',
                width: Globals.getVerticalValue(16), 
                height: Globals.getVerticalValue(16), 
                left: this.textOffset ,
                bottom: this.textOffset  +  Globals.getVerticalValue(4)
            }
        },
        {   //phone number                         
            type: 'Ti.UI.Label',     
            bindId: 'telefono',       
            properties: 
            {            
                color: 'gray',
                font: 
                { 
                	fontFamily: Globals.MAIN_FONT_BOLD, 
                	fontWeight:'bold',
                	fontSize: Globals.getVerticalValue(18) 
                },
                left: this.textOffset  + Globals.getVerticalValue(16) + this.textOffset , 
                bottom: this.textOffset +  Globals.getVerticalValue(1)
            }
        },
        {   //button for the map of the current point                         
            type: 'Ti.UI.Button',     
            bindId: 'mapbutton',       
            properties: 
            {                    
                title: "",
                color: "#fff",
                backgroundImage: 'images/mapview/pointlistview/boton_ver_mapa.png',
                //font: { fontFamily:'Arial', fontSize: '18dp', color: '#fff' },
                right: '0dp', 
                top: '0dp', 
                bottom: '0dp',
                width: this.cellHeight, 
                height: this.cellHeight 
                //height: Globals.getHorizontalValue(64), 
                //height: '50dp'
            }
        },
        {   //text from the button for the map                         
            type: 'Ti.UI.Label',     
            bindId: 'mapbuttontext',          
            properties: 
            {           
            	text:'Ver Mapa',
                color: '#c92d00',
                font: 
                { 
                	fontFamily: Globals.MAIN_FONT_BOLD, 
                	fontWeight:'bold', 
                	fontSize: Globals.getVerticalValue(18) 
                },
				textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
                width: this.cellHeight,
                bottom: this.textOffset +  Globals.getVerticalValue(1) ,
                right: '0dp'
            }
        }
    ]
    //,
    // Binds a callback to the click event, which catches events bubbled by the view subcomponents.
    //events: {click: toggleCheckFunction}
	};			
	return this; 
}


// Modified version of the `itemclick` event listener
	// Changes the item template rather than the list item's color property
function toggleCheckFunction (e) {
	    /*var item = section.getItemAt(e.itemIndex);
	    if (item.properties.accessoryType == Ti.UI.LIST_ACCESSORY_TYPE_NONE) {
	        item.properties.accessoryType = Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK;
	        item.template = 'check';
	    }
	    else {
	        item.properties.accessoryType = Ti.UI.LIST_ACCESSORY_TYPE_NONE;
	        item.template = 'uncheck';
	    }
	    section.updateItemAt(e.itemIndex, item);
	    */
	}

exports.infoViewTemplate = templateView;
exports.toggleCheck = toggleCheckFunction;

	