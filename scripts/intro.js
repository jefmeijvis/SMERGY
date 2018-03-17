function drawIntro()
{
  globalCounter++;


  textSize(72);
  textAlign(CENTER);

  fill(360,(3*globalCounter));
  text("Welcome to the Smergy webview",w/2,h/2-150);
  fill(360,(3*globalCounter)-300);
  textSize(40);
  text("Please make sure the mobile application has internet acces",w/2,h/2);
  fill(360,(3*globalCounter)-600);
  text("Press F11 to enter fullscreen mode",w/2,h/2+50);
  fill(360,(3*globalCounter)-900);
  text("Let's get started",w/2,h/2+100);
  if (globalCounter > 1100/3) intro = false;
}
