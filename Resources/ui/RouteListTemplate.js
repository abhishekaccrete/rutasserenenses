function RouteListTemplate() 
{
	var plainTemplate = 
	{
		childTemplates: []
	};		
	return plainTemplate 
}


function addButton(picture,id)	
{
	plainTemplate.childTemplates.push
	(
        {                            // Subtitle
            type: 'Ti.UI.Label',     // Use a label for the subtitle
            bindId: 'name'+id,       	// Maps to a custom es_info property of the item data
            properties: {            // Sets the label properties
                color: 'gray',
                font: { fontFamily:'Arial', fontSize: '20dp' },
                left: '60dp', top: '25dp'
            }
        },
        {                            // Subtitle
            type: 'Ti.UI.Button',     // Use a label for the subtitle
            bindId: 'icon'+id,       // Maps to a custom es_info property of the item data
            properties: {            // Sets the label properties                
                title: "",
                color: "#fff",
                backgroundImage: 'images/rubia.jpg',
                //font: { fontFamily:'Arial', fontSize: '18dp', color: '#fff' },
                right: '5dp', 
                top: '5dp', 
                bottom: '5dp',
                width: '120dp', 
                height: '50dp'
            }
        }
	);
    //,
    // Binds a callback to the click event, which catches events bubbled by the view subcomponents.
    //events: {click: toggleCheckFunction}
	};	


exports.RouteListTemplate = RouteListTemplate;

	