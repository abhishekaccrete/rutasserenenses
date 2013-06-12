
	function MapReader()
	{
		this.Placemark = require('map/Placemark');
		this.CategoryType = require('map/CategoryType');
		this.Globals = require('utils/Globals');
		this.path = "";
		this.placemarks;
	}
	
	MapReader.prototype.loadXML = function(path)
	{
		this.path = path;
		this.placemarks = {};
		for(var i = 0; i < this.CategoryType.categoriesArray.length;i++)
		{
			this.placemarks[this.CategoryType.categoriesArray[i]] = new Array();
		}
		var xmltext;
		var xmlDoc;
		var xmlElement;
		try
		{
			var file = Titanium.Filesystem.getFile(path);
			if(file.exists())
			{
				xmltext = file.read().text;
				xmlDoc = Ti.XML.parseString(xmltext);
				xmlElement = xmlDoc.getElementsByTagName("Document").item(0).childNodes;
				this.parseXML(xmlElement);	
				/*//print all elements from categories
				for(var i = 0; i < this.CategoryType.categoriesArray.length;i++)
				{
					alert("CATEGORIA " +this.CategoryType.categoriesArray[i] +" : "+ JSON.stringify(this.placemarks[this.CategoryType.categoriesArray[i]]));
				}
				*/
				
			}
			else
			{
				alert("NOT FOUND: " + path);
			}
		}
		catch(e)
		{
			alert("error loading file: " + path + " " + e);
		}
		xmltext = null;
		xmlDoc = null;
		xmlElement = null;
	}
	
	MapReader.prototype.parseXML = function(elements)
	{
		for (var i = 0; i < elements.length; i++) 
		{
			var item = elements.item(i);
			if(this.Globals.platformOS == this.Globals.PLATFORM_OS_ANDROID)
			{
				if(item instanceof Ti.XML.Element)//Placemarks
		  		{
					this.parsePlacemark(item);
		  		}
		  	}
		  	else
		  	{
				this.parsePlacemark(item);
		  		/*
				if(item instanceof Element)//Placemarks
		  		{
					this.parsePlacemark(item);
		  		}
		  		*/
		  	}
			
		}	
	}
	
	MapReader.prototype.parsePlacemark = function(elements)
	{
		
		var placemark = new this.Placemark();
		placemark.point.fromCommaSeparatedString(this.getLeafFromElementsByTagName(elements,"coordinates"));
		placemark.name = this.getLeafFromElementsByTagName(elements,"name");
		placemark.category = this.getLeafFromElementsByTagName(elements,"category");
		var rawDescription = this.getLeafFromElementsByTagName(elements,"description");//removing google CDATA from text
		rawDescription = rawDescription.replace(/<br>/g,"\n");
		rawDescription = rawDescription.replace(/<div dir=\"ltr\">/g,"");
		rawDescription = rawDescription.replace(/<div>/g,"");
		rawDescription = rawDescription.replace(/<\/div>/g,"");
		placemark.description = rawDescription;
		placemark.phone = this.getLeafFromElementsByTagName(elements,"phone");
		placemark.address = this.getLeafFromElementsByTagName(elements,"address");
		//optional
		placemark.picture = this.getLeafFromElementsByTagName(elements,"picture");
		placemark.website = this.getLeafFromElementsByTagName(elements,"website");
		placemark.email = this.getLeafFromElementsByTagName(elements,"email");
		if(this.validCategory(placemark.category))
		{
			this.placemarks[placemark.category].push(placemark);
		}
		else
		{
			this.placemarks[this.CategoryType.OTROS].push(placemark);
		}
		//this.placemarks.push(placemark);
	}
	
	MapReader.prototype.validCategory = function(category)
	{
		for(var i = 0; i < this.CategoryType.categoriesArray.length;i++)
		{
			if(this.CategoryType.categoriesArray[i] == category)
				return true;
		}
		return false;
	}
	MapReader.prototype.getLeafFromElementsByTagName = function(elements,tagName)
	{
		try
		{
			var element;
			if(elements != null && elements.getElementsByTagName(tagName) != null)
			{
				element = elements.getElementsByTagName(tagName);	
			}
			else
			{
				return "";
			}
			if(element.item(0) == null || element.item(0).childNodes == null || element.item(0).childNodes.item(0) == null || element.item(0).childNodes.item(0).data == null)	
				return "";
			return(elements.getElementsByTagName(tagName).item(0).childNodes.item(0).data);
		}
		catch(e)
		{
			return("");
		}
	}
	
	
	
	/*if (Titanium.Network.networkType == Titanium.Network.NETWORK_NONE)
	{
		var f = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'store.xml');
		if(f.exists())
		{
	         var content = f.read();
	         var doc = Ti.XML.parseString(content.text);
	         ///blah blah with node value and elements
		}
		else
		{
		    Ti.UI.createAlertDialog({title:'Network Error', message:'APP requires network connectivity to load data on first use.'}).show();
		}
		
	} //end network check
	else
	{ //network present
		var xhr = Ti.Network.createHTTPClient();
		xhr.open("POST","some_remote_access_xml.xml");
		xhr.onerror = function(e)
	    {
	    	Ti.UI.createAlertDialog({title:'Network Error', message:'Unable to retrieve data.'}).show();
	        Ti.API.info('IN ERROR ' + e.error);
	    };
		xhr.setTimeout(30000);
		xhr.onload = function()
		{
	    	try
	    	{
		        var f = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'store.xml');
		        var doc = this.responseXML.documentElement;
		        if (doc.getElementsByTagName("success").item(0).text==1)
		        {
		               f.write(this.responseData);      
		        } //end if succesul
	    		else
	    		{
	    			Ti.UI.createAlertDialog({title:'Service Error', message:'Service is not available at the moment, please try it again.'}).show();
	    		}
	   		}
	    	catch(E)
	    	{
	    		Ti.UI.createAlertDialog({title:'Application Error', message:'Unable to obtain data, please try it later.'}).show();
	    	}   
		}; //end try
		xhr.send();
	}*/
	
	
	module.exports = MapReader;
	
	