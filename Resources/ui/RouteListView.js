/**
 * @author Mizardo
 */
exports.RouteListView = function(ventana) 
{
	
	var Globals = require('utils/Globals');
	var CategoryType = require("map/CategoryType");
	var dataSets = [];
	dataSets.push({name: {text:'Artesanal'}, icon: {text: '/images/mainmenu/artesanal.png'}, category: CategoryType.ARTESANAL});	
	dataSets.push({name: {text:'Bohemia'}, icon: {text: '/images/mainmenu/bohemia.png'}, category: CategoryType.BOHEMIA});	
	dataSets.push({name: {text:'Cultural'}, icon: {text: '/images/mainmenu/cultural.png'}, category: CategoryType.CULTURAL});	
	dataSets.push({name: {text:'Familiar'}, icon: {text: '/images/mainmenu/familiar.png'}, category: CategoryType.FAMILIAR});	
	dataSets.push({name: {text:'Gastronomica'}, icon: {text: '/images/mainmenu/gastronomica.png'}, category: CategoryType.GASTRONOMICA});	
	dataSets.push({name: {text:'Vinos & Piscos'}, icon: {text: '/images/mainmenu/vinos.png'}, category: CategoryType.VINOS});	
	dataSets.push({name: {text:'Otros'}, icon: {text: '/images/mainmenu/otros.png'}, category: CategoryType.OTROS});	
	
	var view = Titanium.UI.createView
	({
		backgroundImage: "/images/mainmenu/fondo_iconos_centro.png",
		top: 0
	});
	
	// to fit in a 320-wide space 
	var iconSizeRaw = 512;
	var cellWidth = Globals.getHorizontalValue(iconSizeRaw * 0.3);
	var cellHeight = Globals.getVerticalValue(iconSizeRaw * 0.3);
	var xSpacer = Globals.getHorizontalValue(35);
	var ySpacer = Globals.getVerticalValue(25);
	var xGrid = 2;
	//var yGrid = 12;
	 
	var tableData = [];
	 
	var xAdvance = 999999;
	var row;
	var cellView;
	var label;
	var dataSet;
	var button;
	
	var textSizeRaw = 20;
	var textSeparation = 1;
	var iconSize = (iconSizeRaw  * 0.3 ) - textSizeRaw - textSeparation;
	var textSize = Globals.getVerticalValue(textSizeRaw);
	var iconSizeX = Globals.getHorizontalValue(iconSize);
	var iconSizeY = Globals.getVerticalValue(iconSize);
	
	var offsetForCenter = (xGrid*ySpacer);
	for(var i = 0;i<dataSets.length;i++)
	{
		dataSet = dataSets[i];
		if(xAdvance >= xGrid)
		{
			xAdvance = 0;
			row = Ti.UI.createTableViewRow
			({
		        className: "grid",
		        layout: "horizontal",
		        height: cellHeight+ (2*ySpacer),
		        selectedBackgroundColor:'transparent',
		   		borderColor:'transparent'
	    	});
	    	tableData.push(row);
		}
		cellView = Ti.UI.createView
		({
			objName:"view",
			objIndex:i,
			category:dataSet.category,
			backgroundColor: 'transparent',
			left: ((xAdvance == 0 ? offsetForCenter : 0)+ xSpacer),
			top: ySpacer,
			height: cellHeight + (ySpacer),
		    separatorColor:'transparent',
			width: cellWidth
	    });
	 	button = Ti.UI.createButton
	 	({
			objName:"button",
			objIndex:i,
			category:dataSet.category,
	        backgroundImage: dataSet.icon.text, 
			color: '#fff',
			//textAlign: Titanium.UI.TEXT_ALIGNMENT_RIGHT,
			width: iconSizeX,
			height: iconSizeY,
			top: '0dp',
			left: '0dp'
		});
        label = Ti.UI.createLabel
        ({
			objName:"label",
			objIndex:i,
			category:dataSet.category,
            color:"black",
            font:
            {
            	fontFamily: Globals.MAIN_FONT_BOLD, 
            	fontSize:textSize,
            	fontWeight:'bold'
            },
			top: iconSizeY + Globals.getVerticalValue(textSeparation),
			textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
            text:dataSet.name.text,
            touchEnabled:true
        });
        cellView.add(button);
        cellView.add(label);
        row.add(cellView);
		xAdvance += 1;
	}

	var tableview = Ti.UI.createTableView({
	    data:tableData,
	    center:'0dp',
	    separatorColor: 'transparent'
	});
	
	tableview.addEventListener("click", function(e)
	{
	    if(e.source.objName)
	    {
	       	var MapWindow = require("ui/MapWindow");
			var mapWindow = MapWindow.MapWindow(e.source.category);
			mapWindow.open({ animated: true });
	    	ventana.close();
	    }
	});
	view.add(tableview);
 	return view;
}



