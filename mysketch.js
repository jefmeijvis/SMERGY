var button;
var running = true;
var value;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	sliderSize = createSlider(50, 255, 100);
	sliderSize.position(20, 40);
	sliderSize.style('width', '80px');
	noStroke();
	colorMode(HSB,360);
	button = createButton('START/STOP');
	button.position(20,100);
	button.mousePressed(switchOnOff);
}

function switchOnOff()
{
	running = !running;
}

function draw() {
	background('#457b9d');
	fill('#1d3557');
	rect(0,0,150,windowHeight);
	fill(360);
	textSize(20);
	textAlign(LEFT);
	text("Scale",20,30);
	drawMeter();
}

function drawMeter()
{
	if (running) value = 100*(1+sin(frameCount/30.0));

	textAlign(CENTER);
  var scale = 1.3*sliderSize.value();
	fill(360);
	textSize(scale/3);
	text(round(value) + "W", windowWidth / 2, windowHeight / 2+100);
	var i = 0;
	for (i = 0 ; i < value ; i++)
	{
		ellipse(windowWidth/2+scale*-1*sin(PI/2+PI/2*i/100),windowHeight/2+100+scale*cos(PI/2+PI/2*i/100),scale/3,scale/3);
	}

	for (i = 0 ; i < value ; i++)
	{
		fill(180-i,360,360);
		ellipse(windowWidth/2+scale*-1*sin(PI/2+PI/2*i/100),windowHeight/2+100+scale*cos(PI/2+PI/2*i/100),scale/4,scale/4);
	}
}
