	function Point()
	{
		this.x = 0.0;
		this.y = 0.0;
		this.z = 0.0;
	}
	
	function Point(x,y)
	{
		this.x = x;
		this.y = y;
		this.z = 0.0;
	}
	
	function Point(x,y,z)
	{
		this.x = x;
		this.y = y;
		this.z = z;
	}
	
	Point.prototype.setPosition = function(x,y,z)
	{
		this.x = x;
		this.y = y;
		this.z = z;
	}
	
	Point.prototype.fromCommaSeparatedString  = function(coordinatesString)
	{
		var coordinates = coordinatesString.split(",");
		if(coordinates.length >= 3)
		{
			this.setPosition(coordinates[0],coordinates[1],coordinates[2]);
		}
		else if(coordinates.length == 2)
		{
			this.setPosition(coordinates[0],coordinates[1],0.0);
		}
		else
		{
			this.setPosition(0.0,0.0,0.0);
		}

	}
	
	Point.prototype.toString = function()
	{
		return (this.x + " | " + this.y + " | " + this.z);
	}

	module.exports = Point;	
	