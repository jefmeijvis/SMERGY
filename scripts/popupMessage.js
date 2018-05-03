var message = "";
var mAlpha = 1000;

function drawPopupMessages()
{
  if (!(message == ("")))
  {
  textAlign(CENTER);
  var messageHeight = 50;
  var messageLength = 500;
    textSize(32);;
    fill('#99cc677');
    rect(w/2-messageLength/2,100+messageHeight,messageLength, messageHeight, 20);
    fill(360,mAlpha);
    text(message,w/2,100+messageHeight+10+messageHeight/2);

    mAlpha -= 8;
    if (mAlpha < 0)
    {
      message = "";
      mAlpha = 1000;
    }
  }
}
