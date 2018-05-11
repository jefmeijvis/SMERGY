var w = 0.97*window.innerWidth;
var h = 0.97*window.innerHeight;
var config; // firebase configuration
var globalCounter = 0;
var intro = true;
var measurement = 0;
var graph = [];
var icons = [];
var live = true;
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
	myRandomSeed = random(10000);
}

function draw()
{
	background('#e9e9e9');
	if (!live){measurement = getNoise(0);}
	if (intro)
	{
		drawIntro();
		drawInfo();
	}
	else
	{
		drawContent();
	}
	drawGUI();
}



function getNoise(offset)
{
	offset = offset + myRandomSeed;
	// generate a random wavefunction to display
	var noise;
	var t = frameCount/70.0;
	noise = 200
	+ 30*sin(offset+t+100)					+ 20*sin(offset-7.36*t+999)
	+ 10*sin(offset+t*3.979-500)		+ 20*sin(offset+7*t+40)
	+ 50*sin(offset+t*2.35-454)		+ 20*sin(offset+8.36*t+60)
	+ 30*sin(offset+t*9.4959+454)	+ 20*sin(offset+3.98*t+80);
	return noise;
}

function drawContent()
{
	drawInfo();
  drawDistance(w/2);
}
