function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype.currentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function(degree) {
  this.temperature += degree
};


// console.log(Thermostat.prototype.up(5));
