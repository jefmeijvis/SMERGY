var heightOffset = 0;

function drawIntro()
{
  imageMode(CENTER);
  fill(360);
  textAlign(CENTER,CENTER);
  textSize(48);
  var message = "Webview\nF11 to enter fullscreen mode\nMake sure the app has internet acces"
  text(message,width/2,height/6);
  image(logoCore,width/2,height/2+100,logoCore.width/2,logoCore.height/2);
  var timer = frameCount*5
  rectMode(CENTER);
  noStroke();
  fill(360);
  rect(width/2,height/3,logoCore.width/2-150,-50);
  fill('#99cc67');
  rect(width/2,height/3,timer,-40);

  rectMode(CORNER);

  if (timer >= logoCore.width/2-160)
  {
    intro = false;
  }
}

function keyPressed()
{
  if (intro && frameCount > 10) intro = false;
}

function mouseClicked()
{
    if (intro && frameCount > 10) intro = false;
}
