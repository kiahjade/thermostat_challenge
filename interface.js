$( document ).ready(function() {
  var thermostat = new Thermostat();
    $('#temperature').text(thermostat.currentTemperature());
    $('#power-saving-status').text(thermostat.powerSavingMode);

    function updateTemperature() {
    $('#temperature').text(thermostat.currentTemperature());
    $('#power-saving-status').text(thermostat.powerSavingMode);
    $('#temperature').attr('class', thermostat.energyUsage());
    }

    $('#temp-up').on('click', function() {
    thermostat.up(1);
    updateTemperature();
    })

    $('#temp-down').on('click', function() {
    thermostat.down(1);
    updateTemperature();
    })

    $('#temp-reset').on('click', function() {
    thermostat.reset();
    updateTemperature();
    })

    $('#temp-reset').on('click', function() {
    thermostat.reset();
    updateTemperature();
    })

    $('#powersaving-on').on('click', function() {
    thermostat.turnPowerSavingModeOn();
    updateTemperature();
    })

    $('#powersaving-off').on('click', function() {
    thermostat.turnPowerSavingModeOff();
    updateTemperature();
    })
});
