'use strict';

describe ('thermostat', function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it ('has a temperature', function() {
    expect(thermostat.currentTemperature()).toEqual(20);
  });

  it ('allows temperature to be increased', function() {
    thermostat.up(10);
    expect(thermostat.currentTemperature()).toEqual(30);
  });

  it ('allows temperature to be decreased', function() {
    thermostat.down(5);
    expect(thermostat.currentTemperature()).toEqual(15);
  });

  it ('has a minimum temp of 10 degrees', function() {
    thermostat.down(15);
    expect(thermostat.currentTemperature()).toEqual(10);
  });
});
