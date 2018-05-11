//  PRELOAD FUNCTION
//  preloads all resources before displaying the webpage. Callback functions are used
//  to make sure we onlh start drawing to the screen when everything is finished downloading!

function preload()
{
  var startTime = millis();
  console.log("[INFO] Starting preload...");
  logoCore = loadImage("https://i.imgur.com/b85KxJ7.png");
  icons[1] = loadImage("https://i.imgur.com/dLEkCDH.png");
  var endTime = millis();
  var ellapsedTime = endTime - startTime;
  console.log("[INFO] Preload finished after " + round(ellapsedTime*1000)/1000 + " milliseconds. Ready to start showing the website!");
}
