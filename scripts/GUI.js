// drawGUI
// displays and handles the input of different buttons
// drawn at the top of the screen.

var buttons = [];
var display = 3;

function initGUI()
{
  buttons[0] = "A";
  buttons[1] = "B";
  buttons[2] = "C";
}

function drawGUI()
{
  for (var i = 0 ; i < buttons.length ; i++)
  {
      fill('#d1f7ab');
      textSize(22);
      //ellipse(i*100+50,20,30,30);
      rect(i*100+50-40,10,80,50);
      fill('#3e6e0e');
      text(buttons[i],i*100+50,40);
  }
}
