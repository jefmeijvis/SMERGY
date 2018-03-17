function drawEnergyMeter()
{
  var value = 4*measurement/5;
  var scale = 200;

  //draw the graphical representation

  for (var i = 0 ; i < value ; i++)
  {
    fill(360);
    ellipse(w/2-scale*sin(PI/2+PI*i/400),h/2+scale*cos(PI/2+PI*i/400),scale/3,scale/3)
  }

  for (var i = 0 ; i < value ; i++)
  {
    fill(200-i/1.9,360,360);
    ellipse(w/2-scale*sin(PI/2+PI*i/400),h/2+scale*cos(PI/2+PI*i/400),scale/4,scale/4)
  }


  // draw the text
  fill(360);
  textSize(scale/3);
  textAlign(CENTER);
  text(round(measurement)+ "W",w/2,h/2)
}
