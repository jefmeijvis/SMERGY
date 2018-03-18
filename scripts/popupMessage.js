var messageList = [];

function drawPopupMessages()
{
  var messageHeight = 100;
  var messageLength = 300;

  textSize(32);
  for (var i = 0 ; i < messageList.length ; i++)
  {
    fill('#1d3557');
    rect(w/2-messageLength/2,100+i*30, 300, 50, 20);
    fill(360);
    text(messageList[i],w/2,100+i*30);
  }
}
