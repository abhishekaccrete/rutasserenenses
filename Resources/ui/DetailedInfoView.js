//Application Window Component Constructor
/*exports.DetailedInfoView = function(order, titulo, imageUrl) {
	
	var details = new DetailedInfoView(order, titulo, imageUrl);
	 
	return details 
	
	
	
	
	
};*/


function DetailedInfoView(order, titulo, imageUrl) {
	 
	var _titulo;
	var _imageUrl;// = imageUrl;
	
	
	var topMargin = order*40 + 'dp'
	
	
	this._viewDetails = Titanium.UI.createView({
		height: '200dp',
		top: topMargin
	});
	// create UI components
		
	
	this._pictureView = Titanium.UI.createImageView({ 
		image: imageUrl,
		height: '128dp',
		width: 'auto',		
		top: '1dp',
		left: '1dp',
		right: '1dp',
		bottom: '1dp'
	});
	
	
	
	this._lblTitulo = Titanium.UI.createLabel({
		id: 'lblTitulo',
		color: '#900',
  		font: { fontSize:48 },
  		shadowColor: '#aaa',
  		shadowOffset: {x:5, y:5},
  		text: titulo,
  		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  		top: 30,
  		width: Ti.UI.SIZE, height: Ti.UI.SIZE
	});
	

	
	// assemble view hierarchy
	//view.add(the_img);
	//view.add(textfield);
	//view.add(button);
	
	this._viewDetails.add(this._pictureView);
	this._viewDetails.add(this._lblTitulo);
			
	/*
	this.getDetailsView = function() {
		return _viewDetails;
	}
	
	this.getPictureView = function() {
		return _pictureView;
	}
	
	this.getLblTitulo = function() {
		return _lblTitulo;
	}
	*/
}


DetailedInfoView.prototype.getDetailsView = function()
{
	return this._viewDetails; 
}
	
DetailedInfoView.prototype.getPictureView = function()
{
	return this._pictureView; 
}
	
DetailedInfoView.prototype.getLblTitulo = function()
{
	return this._lblTitulo; 
}

