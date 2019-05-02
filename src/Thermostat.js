'use strict';

function Thermostat() {
  this.temperature = 20;
  this.MIN_TEMP = 10;
  this.MAX_TEMP = 25;
  this.powerSavingMode = true;
}

Thermostat.prototype.currentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function(num) {
  return this.temperature += num;
};

Thermostat.prototype.down = function(num) {
  if ((this.temperature - num) >= this.MIN_TEMP) {return this.temperature -= num}
  else { return this.temperature = 10;}
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
};

Thermostat.prototype.turnPowerSavingModeOff = function() {
  return this.powerSavingMode = false;
};
