var distanceOne = 0;
var distanceTwo = 0;
var MAXDIST = 200;
var racing = true;
var victoryMessage = "The race has started";
var m,s,mm; // timing vars
var referenceTime = 0;
var nameOne = "Name one";
var nameTwo = "Name two";
var colourOne,colourTwo;
var speedOne = 0;
var speedTwo = 0;
var timeOne;
var timeTwo;


function drawDistance(x)
{
  updateDatabase(); // keep the rider data live and synchronised
  // draw bike 1
  drawMeterLayout(x-w/4);
  drawTitleBar(colourOne + " bike : " + nameOne,x-w/4);
  drawKMPH(x-w/4,h/2-50,speedOne,timeOne);

  drawMeter(getPowerFromSpeed(speedOne),x-w/4-150,h/2+100,100,getHueFromColour(colourOne));
  drawIcon(x-w/4+150,h/2+100,speedOne);

  // draw bike 2
  drawMeterLayout(x+w/4);
  drawTitleBar(colourTwo + " bike : "+nameTwo,x+w/4);
  drawKMPH(x+w/4,h/2-50,speedTwo,timeTwo);
  drawMeter(getPowerFromSpeed(speedTwo),x+w/4-150,h/2+100,100,getHueFromColour(colourTwo));
  drawIcon(x+w/4+150,h/2+100,speedTwo);


  drawComparrison(); // draw the bars comparing the distances
  drawVictoryMessage(); // if someone won

  if (distanceOne > MAXDIST)
  {
    distanceOne = MAXDIST;
    racing = false;
    victoryMessage = name1 + " won!";
  }

  if (distanceTwo > MAXDIST)
  {
    distanceTwo = MAXDIST;
    racing = false;
    victoryMessage = name2 + " won!";
  }
}

function drawKMPH(x,y,speed,time) // draw the time and speed
{
    fill(360);
    textAlign(CENTER);
    textSize(52);
    if (racing)
    {
    text(speed + " Km/u",x-150,y);
    text(getTimeStringFromMillis(time),x+150,y);
  }
    else {
      text("0 Km/u",x-150,y);
      text("00:00:00" ,x+150,y);
    }
}

function drawComparrison() // draw the bars indicating the distance
{
  textSize(40);
  fill('#99cc67');
  rect(w/4-265,h-160,(w-2*(w/4-265)),120);

  if (colourTwo == 'Red') fill('#e63946');
  if (colourTwo == 'White') fill(360);
  if (colourTwo == 'Blue') fill('#5480e5');
  rect(w/4-255,h-100,(w-2*(w/4-255))*(distanceTwo/MAXDIST),50);
  if (colourTwo == 'White')
  fill(0);
  else
  fill(360);
  text(round(distanceTwo)+ "m",w/4-255+70,h-60)


  if (colourOne == 'Red') fill('#e63946');
  if (colourOne == 'White') fill(360);
  if (colourOne == 'Blue') fill('#5480e5');
  rect(w/4-255,h-150,(w-2*(w/4-255))*(distanceOne/MAXDIST),50);
  if (colourOne == 'White')
  fill(0);
  else
  fill(360);
  text(round(distanceOne)+ "m",w/4-255+70,h-110)
}

function drawVictoryMessage() // draw a message indicating if someone won the race
{
  fill(0);
  fill('#3e6e0e');
  textSize(72);
  text(victoryMessage,w/2,150);
}

function resetDistance() // reset all the variables back to zero
{
  distanceOne = 0;
  distanceTwo = 0;
  racing = true;
  victoryMessage = "The race has started";
  referenceTime = millis();
}



function drawMeterLayout(x) // draw the background rectangle of the meter
{
  fill('#99cc67');
  rect(x-300,2*h/3+10,600,-250)
}

function drawTitleBar(s,x) // draw the title bar of the meter, including a title
{
  textSize(22);
  fill('#3e6e0e');
  rect(x-300,2*h/3+10-250,600,-30);
  fill(360);
  textAlign(LEFT);
  text(s,x -295,2*h/3+10-258);
}

function drawIcon(x,y,speed) // calculate the correct icon and draw it
{
  textSize(18);
  text("Generating enough power for a",x,y-100);
  textSize(26);
  var power = getPowerFromSpeed(speed);
  text(getNameFromSpeed(power),x,y-75);
  icon = getIcon(power);
  //console.log(icon);
  imageMode(CENTER);
  image(icon,x,y-20,icon.width/(icon.width/80),icon.height/(icon.height/80));
}

function getTimeStringFromMillis(m) // convert from millis to a drawable string indicating time
{
  var t = m;
  var dm,ds,dmm;

  m = floor(t)%1000;
  s = floor(((round(t) - m)/1000)%60);
  mm = floor(((round(t) - m)/1000)/60);


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
  var result = dmm + ":" +ds + ":" + dm;
  return result;
}

function updateDatabase() // update all live values from the database
{
            distanceTwo = getFromDatabase('LiveFeed/distanceTwo');
            distanceOne = getFromDatabase('LiveFeed/distanceOne');
            speedOne = getFromDatabase('LiveFeed/speedOne');
            speedTwo = getFromDatabase('LiveFeed/speedTwo');
            timeOne = getFromDatabase('LiveFeed/timeOne');
            timeTwo = getFromDatabase('LiveFeed/timeTwo');

            nameOne = getFromDatabase('UserData/nameOne');
            nameTwo = getFromDatabase('UserData/nameTwo');
            colourOne = getFromDatabase('UserData/colourOne');
            colourTwo = getFromDatabase('UserData/colourTwo');
}

function updateRacingMode() // change the racing mode in the database
{
           racingMode = getFromDatabase('UserData/RacingMode');
}

function getFromDatabase(reference) // return the data stored at a given database node
{
  var result
  var valueref = firebase.database().ref(reference);
  valueref.on('value', function(snapshot) {
    result = snapshot.val();
    });
    return result;
}
