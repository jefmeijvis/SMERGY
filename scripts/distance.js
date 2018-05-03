var redDist = 0;
var blueDist = 0;
var MAXDIST = 10000;
var racing = true;
var victoryMessage = "The race has started";
var m,s,mm; // timing vars
var referenceTime = 0;
var name1 = "Name one";
var name2 = "Name two";


function drawDistance(x)
{
  if (racing) // update values
  {
    var redSpeed = round(getNoise(9999)/7);
    var blueSpeed = round(getNoise(0)/7);
    redDist += redSpeed;
    blueDist += blueSpeed;
  }


  // draw bike 1
  drawMeterLayout(x-w/4);
  drawTitleBar("Blue bike : " + name1,x-w/4);
  drawKMPH(x-w/4,h/2-50,0);
  drawMeter(blueSpeed*5,x-w/4-150,h/2+100,100);
  fill(360);
  text(round(blueSpeed)+ "W",x-w/4-150,h/2+100)
  drawIcon(x-w/4+150,h/2+100,blueSpeed);

  // draw bike 2
  drawMeterLayout(x+w/4);
  drawTitleBar("Red bike : "+name2,x+w/4);
  drawKMPH(x+w/4,h/2-50,9999);
  drawMeter(redSpeed*5,x+w/4-150,h/2+100,100);
  fill(360);
  text(round(redSpeed)+ "W",x+w/4-150,h/2+100);
  drawIcon(x+w/4+150,h/2+100,redSpeed);


  drawComparrison();
  drawVictoryMessage();

  if (redDist > MAXDIST)
  {
    redDist = MAXDIST;
    racing = false;
    victoryMessage = name1 + " won!";
  }

  if (blueDist > MAXDIST)
  {
    blueDist = MAXDIST;
    racing = false;
    victoryMessage = name2 + " won!";
  }

  drawTimer();
}

function drawKMPH(x,y,offset)
{
    fill(360);
    textAlign(CENTER);
    textSize(52);
    if (racing)
    text(round(getNoise(offset)/7) + " Km/u",x,y);
    else {
      text("0 Km/u",x,y);
    }
}

function drawComparrison()
{
  textSize(40);
  fill('#99cc67');
  rect(w/4-265,h-160,(w-2*(w/4-265)),120);

  fill('#e63946');
  rect(w/4-255,h-100,(w-2*(w/4-255))*(redDist/MAXDIST),50);
  fill(360);
  //if (redDist > 1000)
  text(round(redDist/10)+ "m",w/4-255+70,h-60)

  fill('#5480e5');
  rect(w/4-255,h-150,(w-2*(w/4-255))*(blueDist/MAXDIST),50);
  fill(360);
  //if (blueDist > 1000)
  text(round(blueDist/10)+ "m",w/4-255+70,h-110)
}

function drawVictoryMessage()
{
  fill(0);
  fill('#3e6e0e');
  textSize(72);
  text(victoryMessage,w/2,150);
}

function resetDistance()
{
  redDist = 0;
  blueDist = 0;
  racing = true;
  victoryMessage = "The race has started";
  referenceTime = millis();
}

function drawTimer()
{
  var t = millis() - referenceTime;
  var dm,ds,dmm;
  if (racing)
  {
    m = floor(t)%1000;
    s = floor(((round(t) - m)/1000)%60);
    mm = floor(((round(t) - m)/1000)/60);
  }

  dm = m;
  ds = s;
  dmm = mm;

  if (mm < 10)
  {
    dmm = "0" + mm;
  }

  if (s < 10)
  {
    ds = "0" + s;
  }

  if (m < 100)
  {
    dm = "0" + m;
  }
  if (m < 10)
  {
    dm = "00" + m;
  }
  textSize(38);
  text(dmm + ":" +ds + ":" + dm,w/2,h-175);
}


function drawMeterLayout(x)
{
  fill('#99cc67');
  rect(x-300,2*h/3+10,600,-250)
}

function drawTitleBar(s,x)
{
  textSize(22);
  fill('#3e6e0e');
  rect(x-300,2*h/3+10-250,600,-30);
  fill(360);
  textAlign(LEFT);
  text(s,x -295,2*h/3+10-258);
}

function drawIcon(x,y,speed)
{
  textSize(18);
  text("Generating enough power for ",x,y-100);
  textSize(26);
  text("a fridge",x,y-75);
  image(img,x-25,y-75,50,100);
}
