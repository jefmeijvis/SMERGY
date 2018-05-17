//  PRELOAD FUNCTION
//  preloads all resources before displaying the webpage. Callback functions are used
//  to make sure we onlh start drawing to the screen when everything is finished downloading!

function preload()
{
  var startTime = millis();
  console.log("[INFO] Starting preload...");
  logoCore = loadImage("https://i.imgur.com/b85KxJ7.png");
  icons[1] = loadImage("https://i.imgur.com/dLEkCDH.png");
  icons[2] = loadImage("https://i.imgur.com/sHn50bQ.png");
  icons[3] = loadImage("https://i.imgur.com/JsxLVEt.png");
  icons[4] = loadImage("https://i.imgur.com/tjYIAuF.png");
  icons[5] = loadImage("https://i.imgur.com/RluVV0P.png");
  icons[6] = loadImage("https://i.imgur.com/S9z5up0.png");
  icons[7] = loadImage("https://i.imgur.com/majquWZ.png");
  icons[8] = loadImage("https://i.imgur.com/N68ISrz.png");
  icons[9] = loadImage("https://i.imgur.com/xI4dtyB.png");
  icons[10] = loadImage("https://i.imgur.com/L1lebHA.png");
  icons[11] = loadImage("https://i.imgur.com/TAseTRG.png");
  icons[12] = loadImage("https://i.imgur.com/mxl7AcG.png");
  icons[13] = loadImage("https://i.imgur.com/VH5RlJh.png");
  icons[14] = loadImage("https://i.imgur.com/8khCZw1.png");

  var endTime = millis();
  var ellapsedTime = endTime - startTime;
  console.log("[INFO] Preload finished after " + round(ellapsedTime*1000)/1000 + " milliseconds. Ready to start showing the website!");
}
