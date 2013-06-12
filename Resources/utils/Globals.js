function Globals()
{
}
	
Globals.platformOS = Ti.Platform.osname;
Globals.PLATFORM_OS_ANDROID = 'android';
Globals.PLATFORM_OS_IOS = 'iphone';
Globals.PLATFORM_OS_WEB = 'mobileweb';
Globals.PLATFORM_OS_TIZEN = 'tizen';

Globals.ORIENTATION_MODES = 
[
	Titanium.UI.PORTRAIT,
    Titanium.UI.UPSIDE_PORTRAIT
    //Titanium.UI.LANDSCAPE_LEFT,
    //Titanium.UI.LANDSCAPE_RIGHT,
    //Titanium.UI.FACE_UP,
    //Titanium.UI.FACE_DOWN
];

Globals.DEFAULT_SCREEN_SIZE_WIDTH = 800;
Globals.DEFAULT_SCREEN_SIZE_HEIGHT = 480;
Globals.SCREEN_SIZE_WIDTH = ((Titanium.Platform.displayCaps.platformWidth > Titanium.Platform.displayCaps.platformHeight) ? Titanium.Platform.displayCaps.platformWidth : Titanium.Platform.displayCaps.platformHeight);
Globals.SCREEN_SIZE_HEIGHT = ((Titanium.Platform.displayCaps.platformWidth > Titanium.Platform.displayCaps.platformHeight) ?  Titanium.Platform.displayCaps.platformHeight : Titanium.Platform.displayCaps.platformWidth);

Globals.MAIN_FONT_BOLD = ((Globals.platformOS == Globals.PLATFORM_OS_ANDROID) ?'TREBUCBD' : 'Trebuchet MS');
Globals.MAIN_FONT = ((Globals.platformOS == Globals.PLATFORM_OS_ANDROID) ?'TREBUC' : 'Trebuchet MS');
Globals.SCREEN_RATIO_X = (Globals.SCREEN_SIZE_WIDTH / Globals.DEFAULT_SCREEN_SIZE_WIDTH);
Globals.SCREEN_RATIO_Y = (Globals.SCREEN_SIZE_HEIGHT / Globals.DEFAULT_SCREEN_SIZE_HEIGHT);
//dp sux for sizes, use this instead of dp
Globals.limitString = function (text,size)
{
	if(text.length > size)
	{
		text = text.slice(0,size-3);
		text += "...";
	}
	return text;
}

Globals.getHorizontalValue = function (n) 
{
	return (n * Globals.SCREEN_RATIO_X);
}
//dp sux for sizes, use this instead of dp
Globals.getVerticalValue = function (n) 
{
	return (n * Globals.SCREEN_RATIO_Y);
}
Globals.printObject = function (o) 
{
  var out = '';
  for (var p in o) {
    out += p + ': ' + o[p] + '\n';
  }
  alert(out);
}

Globals.mapPath = (Titanium.Filesystem.getResourcesDirectory() + "mapdata/mapdata.xml");
//Globals.mapPath = (Titanium.Filesystem.applicationDataDirectory+'/mapdata/mapdata.xml');
module.exports = Globals;
