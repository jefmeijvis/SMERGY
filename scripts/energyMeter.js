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

function drawMeterLayout(x)
{
  fill('#1d3557');
  rect(x-255,2*h/3+10,505,-250)
}

function drawTitleBar(s,x)
{
  textSize(22);
  fill('#a8dadc');
  rect(x-255,2*h/3+10-250,505,-30);
  fill(360);
  fill('#1d3557');
  textAlign(LEFT);
  text(s,x -250,2*h/3+10-258);
}

function drawMeter(value,x,y,scale)
{
  for (var i = 0 ; i < value ; i++)
  {
    fill(360);
    ellipse(x-scale*sin(PI/2+PI*i/400),2*h/3-50+scale*cos(PI/2+PI*i/400),scale/3,scale/3)
  }

  for (var i = 0 ; i < value ; i++)
  {
    fill(200-i/1.9,360,360);
    ellipse(x-scale*sin(PI/2+PI*i/400),2*h/3-50+scale*cos(PI/2+PI*i/400),scale/4,scale/4)
  }
}
