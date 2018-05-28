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
  var x = w/2;
  if (player == 1)
  {
    x = x/4;
  }
  if (player == 2)
  {
    x = 3*x/4;
  }
  fill('#99cc67');
  if (player == 1)
  {
    text("Name: " + nameOne,x,200);
    text("Time: " + getTimeStringFromMillis(timeOne),x,250);
    var power =  getPowerFromSpeed(speedOne);
    text("Closest match: " + getNameFromSpeed(speedOne),x,300);
    icon = getIcon(power);
    image(icon,x,350,icon.width/(icon.width/80),icon.height/(icon.height/80));
  }
  if (player == 2)
  {
    text("Name: " + nameTwo,x,200);
    text("Time: " + getTimeStringFromMillis(timeTwo),x,250);
    var power =  getPowerFromSpeed(speedOne);
    text("Closest match: " + getNameFromSpeed(speedOne),x,300);
    icon = getIcon(power);
    image(icon,x,350,icon.width/(icon.width/80),icon.height/(icon.height/80));
  }

}
