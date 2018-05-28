function drawEnergyMeter(x)
{
  drawMeterLayout(x);
  drawTitleBar("Power meter",x)
  var scale = 150;
  drawMeter(4*measurement/5,x,2*h/3,scale);
  fill(360);
  textSize(scale/3);
  textAlign(CENTER);
  text(round(measurement)+ "W",x,2*h/3-50);
}



function drawMeter(value,x,y,scale,hue) // draw the meter gauge
{
  var meterLength = 300;
  if (value > 0)
  {
  for (var i = 0 ; i < value ; i++) // this loop draws a white background bar
  {
    fill(360);
    ellipse(x-scale*sin(PI/2+PI*i/meterLength),y+scale*cos(PI/2+PI*i/meterLength),scale/3,scale/3)
  }

  for (var i = 0 ; i < value ; i++) // this loops draw a coloured smaller bar over the white one
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

function getHueFromColour(colour) // select the right color to draw
{
  var hue;
  if (colour == 'White') hue = 33;
  if (colour == 'Red') hue = 10;
  if (colour == 'Blue') hue = 210;
  return hue;
}
