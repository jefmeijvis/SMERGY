var w = 0.97*window.innerWidth;
var h = 0.97*window.innerHeight;
var config; // firebase configuration
var globalFont; // main font
var globalCounter = 0;
var intro = true;
var measurement = 0;
var graph = [];

function setup()
{
	firebaseInit();
	preload();
	createCanvas(w, h);
	noStroke();
	colorMode(HSB,360);
	frameRate(60);
	updateDatabase();
}

function draw()
{
	background('#457b9d');
	if (intro)
	{
		drawInfo();
		drawIntro();
	}
	else
	{
		drawInfo();
		drawGraph(3*w/4); // graph on the right
	  drawEnergyMeter(1*w/4); // energy meter on the left
	}
}

function updateDatabase()
{
	var valueref = firebase.database().ref('LIVE');
  valueref.on('value', function(snapshot) {
		measurement = snapshot.val();
});
}
