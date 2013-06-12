	function ViewType(id)
	{
		ViewType.viewsArray.push(id);		
		this._id = id;		
	}
	
	ViewType.prototype.toString = function()
	{
		return this._id;
	}
	ViewType.viewsArray = new Array();
	ViewType.MAP = new ViewType(1000);
	ViewType.LIST = new ViewType(1001);
	ViewType.DETAILS = new ViewType(1002);
	ViewType.NONE = new ViewType(1003);

	module.exports = ViewType;	
	