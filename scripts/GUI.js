var showControls = true;
var buttons = [];
var display = 3;

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

    buttons[5] = createButton('show distance');
    buttons[5].position(20, 290);
    buttons[5].mousePressed(switchDistance);




    distanceReset = createButton('Restart race');
    distanceReset.position(w/2-50, h/2);
    distanceReset.mousePressed(resetDistance);
    distanceReset.hide();

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
  mAlpha = 1000;
  showControls = !showControls;
  if (showControls)
  {
    message = "Showing control panel";
    for (var i = 1 ; i < buttons.length ; i++)
    {
      buttons[i].show();
    }
  }
  else
  {
    message = "Hiding control panel";
    for (var i = 1 ; i < buttons.length ; i++)
    {
      buttons[i].hide();
    }
  }
}

function switchLive()
{
  mAlpha = 1000;
  live = !live;
  if (live) {updateDatabase(); message = "We're live now";}
  if (!live) {valueref.off();message = "Offline";}
}

function switchDisplayPower()
{
  display = 0;
  message = "Showing power";
  mAlpha = 1000;
}

function switchDisplayGraph()
{
  display = 1;
  message = "Showing graph";
    mAlpha = 1000;
}

function switchDisplayBoth()
{
  display = 2;
  message = "Showing power and graph";
  mAlpha = 1000;
}

function switchDistance()
{
  display = 3;
  message = "Showing distance";
  mAlpha = 1000;
}
