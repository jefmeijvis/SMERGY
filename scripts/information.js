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
  //image(logoCore,0,0,100,100);

  if (loaded) {
    image(img, width-img.width/15, 5,img.width/15,img.height/15);
  }
}
