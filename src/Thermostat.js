'use strict';

function Thermostat() {
  this.temperature = 20;
  this.MIN_TEMP = 10;
  this.MAX_TEMP_PSM_ON = 25;
  this.MAX_TEMP_PSM_OFF = 35;
  this.powerSavingMode = true;
}

Thermostat.prototype.currentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function(num) {
  if (this.powerSavingMode === true && (this.temperature + num) >= this.MAX_TEMP_PSM_ON) {
    return this.temperature = 25;
  } else if (this.powerSavingMode === false && (this.temperature + num) >= this.MAX_TEMP_PSM_OFF) {
    return this.temperature = 35;
  } else {
    return this.temperature += num;
  }
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
