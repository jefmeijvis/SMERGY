var redDist = 0;
var blueDist = 0;
var MAXDIST = 10000;
var racing = true;
var victoryMessage = "The race has started";

function drawDistance(x)
{

  drawMeterLayout(x-w/4);
  drawTitleBar("Blue bike",x-w/4);
  drawKMPH(x-w/4,h/2-50,0);
  if (racing) blueDist += round(getNoise(0)/7);
  //drawEnergyMeter(round(getNoise(0)/7),w,h/2+50,75);

  drawMeterLayout(x+w/4);
  drawTitleBar("Red bike",x+w/4);
  drawKMPH(x+w/4,h/2-50,9999);
  if (racing) redDist += round(getNoise(9999)/7);
  //drawEnergyMeter(round(getNoise(9999)/7),w,h/2+50,75);

  drawComparrison();
  drawVictoryMessage();

  if (redDist > MAXDIST)
  {
    racing = false;
    victoryMessage = "Red won!";
    distanceReset.show();
  }

  if (blueDist > MAXDIST)
  {
    racing = false;
    victoryMessage = "Blue won!";
    distanceReset.show();
  }
}

function drawKMPH(x,y,offset)
{
    fill(360);
    textAlign(CENTER);
    textSize(52);
    text(round(getNoise(offset)/7) + " Km/u",x,y);
}

function drawComparrison()
{
  fill('#1d3557');
  rect(w/4-265,h-160,(w-2*(w/4-265)),120);
  fill('#e63946');
  rect(w/4-255,h-100,(w-2*(w/4-255))*(redDist/MAXDIST),50);
  fill('#5480e5');
  rect(w/4-255,h-150,(w-2*(w/4-255))*(blueDist/MAXDIST),50);
}

function drawVictoryMessage()
{
  fill(360);
  textSize(72);
  text(victoryMessage,w/2,150);
}

function resetDistance()
{
  redDist = 0;
  blueDist = 0;
  racing = true;
  distanceReset.hide();
  victoryMessage = "The race has started";
}