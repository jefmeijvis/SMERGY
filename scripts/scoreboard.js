
function drawScoreBoard()
{
  // MAIN LOOP FOR SCOREBOARD LOGIC
  if (!downloadedScoreboard)
  {
    getScoreBoard();
  }
  else
   {
       textAlign(LEFT);
     if (finished && topDaily.length > 0) drawTopFive(topDaily,20,"Daily Highscore");
     if (finished && topAlltime.length > 0) drawTopFive(topAlltime,w/2+30,"All-Time Highscore");
  }


    textSize(30);
    fill('#99cc67');
    textAlign(CENTER);
    text("Daily Highscore",w/4,110);
    text("All-Time Highscore",3*w/4,110);
}

function drawTitlebar(message,x)
{
  textSize(32);
  fill('#99cc67');
  rect(x+20,170,w/2-100,-50);
  fill(360);
  var message;
  message = "Name";
  text(message,x + 30,160);
  message = "Time";
  text(message,x + 200 + 30,160);
  message = "Top Speed";
  text(message,x + 370 + 30,160);
}

function drawTopFive(list,x,message)
{
  drawTitlebar(message,x);
  textSize(22);
  fill(360);
  rect(x+20,170,w/2-100,h-215);
  fill('#99cc67');
  var index = list.length >= 10 ? 10 : list.length;
  for (var i = 0 ; i < index ; i++)
  {
    var message;
    message = (i + 1) + ".  " + list[i].playerName;
    text(message,x + 30,200 + 50*i);
    message =  getTimeStringFromMillis(list[i].time);
    text(message,x + 200 + 30,200 + 50*i);
    message = round(list[i].topSpeed) + " Km/u";
    text(message,x + 400 + 30,200 + 50*i);
    rect(x+20,215+50*i,w/2-100,1);
  }
}

function getScoreBoard()
{
  /////////////////////////////////////////////////
  // DOWNLOADING ALL THE RIDES IN THE DATABASE   //
  /////////////////////////////////////////////////
  var ref = firebase.database().ref('Ride');
  ref.on('child_added', function(data) {
    var r = new Ride(
      data.val().avgSpeed ,
      data.val().colourBike ,
      data.val().date,
      data.val().playerName,
      data.val().power,
      data.val().time,
      data.val().topSpeed);

      topAlltime.push(r);
      if  (r.getDate() == getCurrentDayAsString())
      {
        topDaily.push(r);
      }
      });

      /////////////////////////////////////////////////
      // SORTING ALL THE RIDES IN THE DATABASE       //
      /////////////////////////////////////////////////
      ref = firebase.database().ref('Dummy');
            ref.on('value', function(snap) {
        if (!sorted) {
          sorted = true;
          sortRides();
          console.log("[INFO] finished sorting the data");
          finished = true;
        }
      });

      downloadedScoreboard = true;
      console.log("[INFO] Finished downloading all user rides from the database...");
}


function Ride(avgSpeed, colourBike, date, playerName , power , time , topSpeed){
  this.avgSpeed = avgSpeed;
  this.colourBike = colourBike;
  this.date = date;
  this.playerName = playerName;
  this.power = power;
  this.time = time;
  this.topSpeed = topSpeed;
}

Ride.prototype.getDate = function()
{
  return this.date;
}

Ride.prototype.getTime = function()
{
  return this.time;
}

function getCurrentDayAsString()
{
  if (day() < 10) var d = "0" + day(); else d = day();
  if (month() < 10) var m = "0" + month(); else m = month();
  return (d + "-" + m + "-" + year());
}

function sortRides()
{
  topDaily.sort(function(a,b) {return parseFloat(a.time) - parseFloat(b.time);} );
  topAlltime.sort(function(a,b) {return parseFloat(a.time) - parseFloat(b.time);});
}
