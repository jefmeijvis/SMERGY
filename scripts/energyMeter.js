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



function drawMeter(value,x,y,scale)
{
  if (value > 0)
  {
  for (var i = 0 ; i < value ; i++)
  {
    fill(360);
    ellipse(x-scale*sin(PI/2+PI*i/400),y+scale*cos(PI/2+PI*i/400),scale/3,scale/3)
  }

  for (var i = 0 ; i < value ; i++)
  {
    fill(200-i/1.9,360,360);
    ellipse(x-scale*sin(PI/2+PI*i/400),y+scale*cos(PI/2+PI*i/400),scale/4,scale/4)
  }

  fill(360);
  text(round(value)+ "W",x,y);
}
else {
  fill(360);
  text(0+ "W",x,y);
}
}


function getIcon(currentPower)
{
  var icon;
  if (currentPower < 1) {
            return icon1;
        } else if (currentPower > 1 && currentPower <= 10) {
            return  icon2;
        } else if (currentPower > 10 && currentPower <= 15) {
            return icon3;
        } else if (currentPower > 15 && currentPower <= 30) {
            return icon4;
        } else if (currentPower > 30 && currentPower <= 50) {
            return icon5;
        } else if (currentPower > 50 && currentPower <= 70) {
            return icon6;
        } else if (currentPower > 70 && currentPower <= 100) {
            return icon7;
        } else if (currentPower > 100 && currentPower <= 125) {
            return icon8;
        } else if (currentPower > 125 && currentPower <= 160) {
            return icon9;
        } else if (currentPower > 160 && currentPower <= 250) {
            return icon10;
        } else if (currentPower > 250 && currentPower <= 400) {
            return icon11;
        } else if (currentPower > 400 && currentPower <= 600) {
            return icon12;
        } else if (currentPower > 600 && currentPower <= 1000) {
            return icon13;
        } else if (currentPower > 1000) {
            return icon14;
        }
  return icon
}
