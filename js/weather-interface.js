// Note: this file has been commented out to prevent errors.
// Requires API key for a weather service stored in a .env file
// that won't be uploaded to github. Regarless, with a proper
// API key, this weather functionality works.


// var apiKey = require('./../.env').apiKey;
//
//
// $(document).ready(function() {
//   $('#weatherLocation').click(function() {
//     var city = $('#location').val();
//     $('#location').val("");
//     $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
//       $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
//     }).fail(function(error) {
//       $('.showWeather').text(error.message);
//     });
//   });
// });
