function drawInfo()
{
  let WEBSITE_ACTION = "Visit us at";
  let WEBSITE = "www.thinkcore.be";
  let TITLE = "Core";
  let SUBTITLE = "Webview";

  textAlign(CENTER);
  fill('#99cc67');
  rect(0,0,w,70);
  fill(360);
  textSize(36);
  text(TITLE,w/2,35);
  textSize(16);
  text(SUBTITLE,w/2,60);
  textSize(24);
  text(WEBSITE_ACTION,100,30);
  textSize(16);
  text(WEBSITE,100,50);
  image(logoCore, width-logoCore.width/(15*2), 30,logoCore.width/(15),logoCore.height/15);
}
