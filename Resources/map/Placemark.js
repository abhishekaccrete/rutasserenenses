
	function Placemark()
	{
		this.Point = require('map/Point');
		//required
		this.point = new this.Point();
		this.name = "";
		this.category = "";
		this.description = "";
		this.phone = "";
		this.address = "";
		//optional
		this.picture = "";
		this.website = "";
		this.email = "";
		
	}

	Placemark.prototype.toString = function()
	{
		return (
			"name: "+ this.name+ "\n" + 
			"category: "+ this.category+ "\n" + 
			"coordinates: "+ this.point + "\n" +
			"description: "+ this.description + "\n" +
			"phone: "+ this.phone + "\n" +
			"address: "+ this.address + "\n" +
			"picture: "+ this.picture + "\n" +
			"website: "+ this.website + "\n" +
			"email: "+ this.email + "\n"
		);
	}

	Placemark.prototype.convertToJSON = function()
	{
		return(JSON.stringify(this));
	}
	
	module.exports = Placemark;	