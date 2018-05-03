//  PRELOAD FUNCTION
//  preloads all resources before displaying the webpage. Callback functions are used
//  to make sure we onlh start drawing to the screen when everything is finished downloading!

function preload()
{
  var startTime = millis();
  console.log("[INFO] Starting preload...");
  loadImage
  (
      "https://i.imgur.com/b85KxJ7.png", // loading the core logo, hosted at
       function(i) {
                    loaded = true;
                    img = i;
                    },
       function(e) {
                    console.log(e);
                   }
  )
  var endTime = millis();
  var ellapsedTime = endTime - startTime;
  console.log("[INFO] Preload finished after " + ellapsedTime + " milliseconds");
}
