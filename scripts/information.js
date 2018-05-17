function drawInfo()
{
  textAlign(CENTER);
  fill('#99cc67');
  rect(0,0,w,70);
  fill(360);
  textSize(36);
  text("The Smergy Project",w/2,35);
  textSize(16);
  text("Webview",w/2,60);
  image(logoCore, width-logoCore.width/(15*2), 30,logoCore.width/(15),logoCore.height/15);
}
