function drawEnergyMeter(x)
{
  drawMeterLayout(x);
  drawTitleBar("Power meter",x)
  var scale = 150;
  drawMeter(4*measurement/5,x,2*h/3,scale);
  // draw the text
  fill(360);
  textSize(scale/3);
  textAlign(CENTER);
  text(round(measurement)+ "W",x,2*h/3-50);
}



function drawMeter(value,x,y,scale,hue)
{
  var meterLength = 300;
  if (value > 0)
  {
  for (var i = 0 ; i < value ; i++)
  {
    fill(360);
    ellipse(x-scale*sin(PI/2+PI*i/meterLength),y+scale*cos(PI/2+PI*i/meterLength),scale/3,scale/3)
  }

  for (var i = 0 ; i < value ; i++)
  {
    if (hue == 33) {
      fill(360-i);
    }else {
      fill(hue,360,360-i);
    }
    ellipse(x-scale*sin(PI/2+PI*i/meterLength),y+scale*cos(PI/2+PI*i/meterLength),scale/4,scale/4)
  }

  fill(360);
  text(round(value)+ "W",x,y);
}
else {
  fill(360);
  text(0+ "W",x,y);
}
}

function getHueFromColour(colour)
{
  var hue;
  if (colour == 'White') hue = 33;
  if (colour == 'Red') hue = 10;
  if (colour == 'Blue') hue = 210;
  //console.log("selecting hue from colour " + colour + "and chose " + hue);
  return hue;
}
