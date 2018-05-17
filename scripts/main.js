var w = 0.97*window.innerWidth;  // scaling to prevent scrollbars from showing up
var h = 0.97*window.innerHeight; // scaling to prevent scrollbars from showing up
var config; // firebase configuration
var intro = true;
var globalCounter;
var graph = [];
var icons = [];
var valueref;
var myRandomSeed;
var logoCore;

function setup()
{
	firebaseInit();
	initGUI();
	createCanvas(w, h,P2D);
	noStroke();
	colorMode(HSB,360);
	frameRate(30);
	updateDatabase();
}

function draw()
{
	if (intro)
	{
		background('#99cc67');
		drawIntro();					// draw the intro splash screen
	}
	else
	{
		background('#e9e9e9');
	  drawDistance(w/2);    // draw the main content of the webpage
		drawInfo();					  	// draw the top bar with name and logo
		drawGUI();  				  	// draw the GUI
	}


}
