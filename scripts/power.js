function getIcon(speed)
{
  var icon;
  var index;
        if (speed < 1) {
            index = 1;
        } else if (speed >= 1 && speed <= 10) {
            index = 2;
        } else if (speed > 10 && speed <= 15) {
            index = 3;
        } else if (speed > 15 && speed <= 30) {
            index = 4;
        } else if (speed > 30 && speed <= 50) {
            index = 5;
        } else if (speed > 50 && speed <= 70) {
            index = 6;
        } else if (speed > 70 && speed <= 100) {
            index = 7;
        } else if (speed > 100 && speed <= 125) {
            index = 8;
        } else if (speed > 125 && speed <= 160) {
            index = 9;
        } else if (speed > 160 && speed <= 250) {
            index = 10;
        } else if (speed > 250 && speed <= 400) {
          index = 11;
        } else if (speed > 400 && speed <= 600) {
            index = 12;
        } else if (speed > 600 && speed <= 1000) {
            index = 13;
        } else if (speed > 1000) {
            index = 14;
        }
        else {
          index = 1;
        }
        icon = icons[index];
        return icon;
}

function getPowerFromSpeed(speed)
{
      var alpha = 0.007315;
      var beta = 0.01490;
      var g = 9.81;
      var mass = 60.45;
      var currentSpeed = speed;
      var currentPower = (alpha*mass*g+beta*Math.pow(currentSpeed/3.6,2))*currentSpeed/3.6;
      return currentPower;
}

function getNameFromSpeed(speed)
{
  var result;
  if (speed < 1) {
      result = "Electronic Chip";
  } else if (speed >= 1 && speed <= 10) {
      result = "LED lamp";
  } else if (speed > 10 && speed <= 15) {
      result = "Energy saving lamp";
  } else if (speed > 15 && speed <= 30) {
      result = "Cellphone charger";
  } else if (speed > 30 && speed <= 50) {
      result = "Incandescent lamp";
  } else if (speed > 50 && speed <= 70) {
    result = "Laptop charger";
  } else if (speed > 70 && speed <= 100) {
    result = "Television";
  } else if (speed > 100 && speed <= 125) {
      result = "Gaming console";
  } else if (speed > 125 && speed <= 160) {
      result = "Desktop computer";
  } else if (speed > 160 && speed <= 250) {
      result = "Fridge";
  } else if (speed > 250 && speed <= 400) {
    result = "Vacuum cleaner";
  } else if (speed > 400 && speed <= 600) {
      result = "Washing machine";
  } else if (speed > 600 && speed <= 1000) {
      result = "Microwave oven";
  } else if (speed > 1000) {
      result = "Electrical heater";
  }
  else {
    result = "Electronic chip";
  }

  return result;
}
