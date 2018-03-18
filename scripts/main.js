var w = 0.97*window.innerWidth;
var h = 0.97*window.innerHeight;
var config; // firebase configuration
var globalFont; // main font
var globalCounter = 0;
var intro = true;
var measurement = 0;
var graph = [];
var live = false;
var valueref;

function setup()
{
	firebaseInit();
	initGUI();
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
	if (!live){measurement = getNoise();}
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
	drawPopupMessages();
}

function updateDatabase()
{
	if (live)
	{
		valueref = firebase.database().ref('LIVE');
		valueref.on('value', function(snapshot) {
			measurement = snapshot.val();
			});
	}
}

function getNoise()
{
	// generate a random wavefunction to display
	var noise;
	var t = frameCount/70.0;
	noise = 200
	+ 30*sin(t+100)					+ 20*sin(-7.36*t+999)
	+ 10*sin(t*3.979-500)		+ 20*sin(7*t+40)
	+ 50*sin(t*2.35-454)		+ 20*sin(8.36*t+60)
	+ 30*sin(t*9.4959+454)	+ 20*sin(3.98*t+80);
	return noise;
}

function drawContent()
{
	drawInfo(); // the top bar and title is always drawn
	if (display == 0){drawEnergyMeter(w/2);}
	if (display == 1){drawGraph(w/2);}
	if (display == 2){drawGraph(3*w/4); drawEnergyMeter(w/4);}
}