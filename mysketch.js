var canvas = document.createElement('canvas');
var w = window.innerWidth;
var h = window.innerHeight;
console.log("Script started");

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

ctx.fillStyle = "rgba(255, 0, 0, 1.0)";
ctx.rect(0,0,w,h);


ctx.fillStyle = "rgba(255, 0, 0, 0.2)";
ctx.fillRect(100, 100, 200, 200);
ctx.fillStyle = "rgba(0, 255, 0, 0.2)";
ctx.fillRect(150, 150, 200, 200);
ctx.fillStyle = "rgba(0, 0, 255, 0.2)";
ctx.fillRect(200, 50, 200, 200);
