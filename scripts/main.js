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

function setup() // setup to init everything
{
	firebaseInit();
	var drawingCanvas = createCanvas(w,h);
	drawingCanvas.style('display', 'block');
	noStroke();
	colorMode(HSB,360);
	frameRate(30);
	updateDatabase();
}

function windowResized() // allow the window to be resized
{
  resizeCanvas(windowWidth, windowHeight);
}

function draw() // main draw loop, all logic happens in this method
{
	updateRacingMode();
	if (intro)
	{
		background('#99cc67');// green
		drawIntro();					// draw the intro splash screen
	}
	else
	{
		background('#e9e9e9'); // gray-white-ish color

		if (racingMode == 0) // if looking at the highscore
		 {
				drawScoreBoard();
				downloadedDataOnce = false;
		 }

		if (racingMode == 1) // if racing
		{
		  drawDistance(w/2);
			downloadedScoreboard = false;
			downloadedDataOnce = false;
	  }
		 if (racingMode == 2) // if looking at the energy comparison
			{
				drawEnergyComparisson();
			}
			drawInfo();					  	// draw the top bar with name and logo, this always happens
	}
}
