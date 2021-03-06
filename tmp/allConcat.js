var pingPong = require('./../js/ping-pong.js').pingPong;

$(document).ready(function(){
  $('#ping-pong').submit(function(event){
    event.preventDefault();
    var goal = $('#goal').val();
    var output = pingPong(goal);
    output.forEach(function(element){
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});

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
