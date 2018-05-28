function drawEnergyComparisson()
{
  textSize(32);
  if (!downloadedDataOnce)
  {
    updateDatabase();
    downloadedDataOnce = true;
    console.log("[INFO] Making sure the data is up to date so we can draw the energy comparisson!");
  }

  drawComp(1);
  drawComp(2);
}

function drawComp(player)
{
    var alpha = 0.007315;
    var beta = 0.01490;
    var g = 9.81;
    var mass = 60.45;


  textAlign(LEFT);
  var x = w/2;
  if (player == 1)
  {
    x = x/2;
  }
  if (player == 2)
  {
    x = 3*x/2;
  }

  fill(360);
  rect(x,140,300,400);
  rect(x,140,-300,400);

  fill('#99cc67');
  rect(x,140,300,-30);
  rect(x,140,-300,-30);



  if (player == 1)
  {
    var avgSpeed =  round(3.6 * 200/(timeOne/1000));
    var avgPower = (alpha*mass*g+beta*Math.pow(avgSpeed/3.6,2))*avgSpeed/3.6;

    text("Name: " + nameOne,x-280,180);
    text("Time: " + getTimeStringFromMillis(timeOne),x-280,220);
    text("Average Speed: " + avgSpeed + ' Km/u',x-280,260);
    text("Average Power: " + round(avgPower) + " W" ,x-280,300);
    text("Total Energy: " + round(avgPower * timeOne/1000) + " J",x-280,340);
    var power =  getPowerFromSpeed(speedOne);
    text("Closest match: " + getNameFromSpeed(speedOne),x-280,440);
    icon = getIcon(speedOne);
    image(icon,x,490,icon.width/(icon.width/80),icon.height/(icon.height/80));
  }
  if (player == 2)
  {
    var avgSpeed =  round(3.6 * 200/(timeOne/1000));
    var avgPower = (alpha*mass*g+beta*Math.pow(avgSpeed/3.6,2))*avgSpeed/3.6;

    text("Name: " + nameTwo,x-280,180);
    text("Time: " + getTimeStringFromMillis(timeTwo),x-280,220);
    text("Average Speed: " + avgSpeed + ' Km/u',x-280,260);
    text("Average Power: " + round(avgPower) + " W" ,x-280,300);
    text("Total Energy: " + round(avgPower * timeTwo/1000) + " J",x-280,340);
    var power =  getPowerFromSpeed(speedTwo);
    text("Closest match: " + getNameFromSpeed(speedTwo),x-280,440);
    icon = getIcon(speedTwo);
    image(icon,x,490,icon.width/(icon.width/80),icon.height/(icon.height/80));
  }

}
