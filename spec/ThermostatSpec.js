describe ('thermostat', function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it ('has a temperature', function() {
    expect(thermostat.currentTemperature()).toEqual(20);
  });

  it ('increases temperature', function(degree) {
    thermostat.up(10);
    expect(thermostat.currentTemperature()).toEqual(30);
  });
});
