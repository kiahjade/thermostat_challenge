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
    });

    $(document).ready(function(){
    $.get("http://api.openweathermap.org/data/2.5/weather?id=2643741&appid=80c36965c94ead32fb40642a438e024c", function(weatherResponse){
      city = weatherResponse.name;
      forecast = weatherResponse.weather[0].main;
      $('#weather').text(`The current weather forecast for ${city} is ${forecast}`);
    })
    });
});
