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
    thermostat.up(2);
    expect(thermostat.currentTemperature()).toEqual(22);
  });

  it ('allows temperature to be decreased', function() {
    thermostat.down(5);
    expect(thermostat.currentTemperature()).toEqual(15);
  });

  it ('has a minimum temp of 10 degrees', function() {
    thermostat.down(15);
    expect(thermostat.currentTemperature()).toEqual(10);
  });

  it ('is able to reset temperature back to 20', function() {
    thermostat.reset();
    expect(thermostat.currentTemperature()).toEqual(20);
  });

  describe ('power save', function() {
    it('has power saving mode on by default', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it('can switch power saving mode off', function() {
    thermostat.turnPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });

    it ('has a max temp of 25 when PSM on', function() {
      thermostat.up(10);
      expect(thermostat.currentTemperature()).toEqual(25);
    });

    it ('has a max temp of 35 when PSM off', function() {
      thermostat.turnPowerSavingModeOff()
      thermostat.up(10);
      expect(thermostat.currentTemperature()).toEqual(30);
    });
  });

  describe ('energy usage', function() {
    it ('can indicate low usage', function() {
      thermostat.down(5);
      expect(thermostat.energyUsage()).toEqual('low-usage')
    });

    it ('can indicate medium usage', function() {
      thermostat.up(2);
      expect(thermostat.energyUsage()).toEqual('medium-usage')
    });

    it ('can indicate high usage', function() {
      thermostat.turnPowerSavingModeOff()
      thermostat.up(10);
      expect(thermostat.energyUsage()).toEqual('high-usage')
    });
  });
});
