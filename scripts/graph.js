function drawGraph(x)
{
  updateGraphValues();
  drawGraphLayout(x);
  drawTitleBar("Graph view",x)
  drawGraphLine(x);
}

function getX(i,x)
{
  return x-50*5+5*i;
}

function getY(i)
{
  return 2*h/3-graph[i]/2;
}


function updateGraphValues()
{
    graph.push(measurement);
    if (graph.length > 100)
    {
      graph.shift();
    }
}

function drawGraphLine(x)
{
  for (var i = 1 ; i < graph.length ; i++)
  {
    stroke(200,360,360);
    strokeWeight(5);
    line(getX(i-1,x),getY(i-1),getX(i,x),getY(i));
    noStroke();
  }
}

function drawGraphLayout(x)
{
  fill('#1d3557');
  rect(x-255,2*h/3+10,505,-250)
}
