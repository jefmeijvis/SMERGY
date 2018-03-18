var showControls = true;
var buttons = [];
var display = 2;

function initGUI()
{
    buttons[0] = createButton('Show Controls');
    buttons[0].position(20, 30);
    buttons[0].mousePressed(switchShowControls);

    buttons[1] = createButton('toggle LIVE');
    buttons[1].position(20, 100);
    buttons[1].mousePressed(switchLive);

    buttons[2] = createButton('show power');
    buttons[2].position(20, 200);
    buttons[2].mousePressed(switchDisplayPower);

    buttons[3] = createButton('show graph');
    buttons[3].position(20, 230);
    buttons[3].mousePressed(switchDisplayGraph);

    buttons[4] = createButton('show both');
    buttons[4].position(20, 260);
    buttons[4].mousePressed(switchDisplayBoth);

    switchShowControls()
}

function drawGUI()
{
  if (showControls)
  {
    fill('#a8dadc');
    rect(0,0,115,h);
    fill('#1d3557');
    rect(0,0,110,h);
    fill('#a8dadc');
    rect(0,0,110,75);
  }
}

function switchShowControls()
{
  showControls = !showControls;
  if (showControls)
  {
    for (var i = 1 ; i < buttons.length ; i++)
    {
      buttons[i].show();
    }
  }
  else
  {
    for (var i = 1 ; i < buttons.length ; i++)
    {
      buttons[i].hide();
    }
  }
}

function switchLive()
{
  live = !live;
  if (live) {updateDatabase();}
  if (!live) {valueref.off();}
}

function switchDisplayPower()
{
  display = 0;
}

function switchDisplayGraph()
{
  display = 1;
}

function switchDisplayBoth()
{
  display = 2;
  messageList.push("Showing Both");
}
