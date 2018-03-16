var canvas = document.createElement('canvas');
var w = 0.95*window.innerWidth;
var h = 0.95*window.innerHeight;
console.log("Script started V10");

function setup()
{
	createCanvas(windowWidth, windowHeight);
}

function draw()
{
	background('#457b9d');
}


function test()
{
console.log("Test");
}

canvas.id = "CursorLayer";
canvas.width = w;
canvas.height = h;
canvas.style.zIndex = 8;
canvas.style.position = "absolute";

var body = document.getElementsByTagName("body")[0];
body.appendChild(canvas);

cursorLayer = document.getElementById("CursorLayer");

console.log(cursorLayer);

// below is optional



var ctx = canvas.getContext("2d");

ctx.fillStyle = "rgba(255, 0, 0, 0.2)";
ctx.rect(100,100,1000,1000);

ctx.fillStyle = "rgba(255, 0, 0, 0.2)";
ctx.fillRect(100, 100, 200, 200);
ctx.fillStyle = "rgba(0, 255, 0, 0.2)";
ctx.fillRect(150, 150, 200, 200);
ctx.fillStyle = "rgba(0, 0, 255, 0.2)";
ctx.fillRect(200, 50, 200, 200);
