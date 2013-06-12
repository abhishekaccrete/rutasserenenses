	function CategoryType(name,id)
	{
		CategoryType.categoriesArray.push(name);		
		this._name = name;		
		this._id = id;
	}
	
	CategoryType.prototype.toString = function()
	{
		return this._name;
	}
	CategoryType.prototype.getId = function() {
		return this._id;
	}
	CategoryType.categoriesArray = new Array();
	CategoryType.ARTESANAL = new CategoryType("artesanal",1000);
	CategoryType.BOHEMIA = new CategoryType("bohemia",1001);
	CategoryType.CULTURAL = new CategoryType("cultural",1002);
	CategoryType.FAMILIAR = new CategoryType("familiar",1003);
	CategoryType.GASTRONOMICA = new CategoryType("gastronomica",1004);
	CategoryType.VINOS = new CategoryType("vinos",1005);
	CategoryType.OTROS = new CategoryType("otros",1006);

	
	module.exports = CategoryType;	
	