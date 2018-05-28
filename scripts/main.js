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
var racingMode = false;
var downloadedScoreboard = false;
var topDaily = [];
var topAlltime = [];
var sorted = false;
var finished = false;
var downloadedDataOnce = false;

function setup()
{
	firebaseInit();
	var drawingCanvas = createCanvas(w,h);
	drawingCanvas.style('display', 'block');
	noStroke();
	colorMode(HSB,360);
	frameRate(30);
	updateDatabase();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw()
{
	updateRacingMode();
	if (intro)
	{
		background('#99cc67');
		drawIntro();					// draw the intro splash screen
	}
	else
	{
		background('#e9e9e9');

		if (racingMode == 0)
		 {
				drawScoreBoard();
				downloadedDataOnce = false;
		 }

		if (racingMode == 1)
		{
		  drawDistance(w/2);    // draw the main content of the webpage
			downloadedScoreboard = false;
			downloadedDataOnce = false;
	  }
		 if (racingMode == 2)
			{
				drawEnergyComparisson();
			}
			drawInfo();					  	// draw the top bar with name and logo
	}
}
