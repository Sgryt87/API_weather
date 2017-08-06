$(document).ready(function() {

  $('#btn').click(function() {
      var location = $('#location').val();
      var webapi = 'http://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=61a438ad7321ecabb12dd6144c9bf3c5';
    $.getJSON(webapi, function(data) {
      console.log(data);
      $('#city').text(data.name);
      $('#description').text(data.weather[0].description);
      $('#temp').text((data.main.temp - 273).toFixed(1));
      $('#wind').text(data.wind.speed);
      $('#humidity').text(data.main.humidity);
    });

    $('#location').keyup(function(e) {
      if(e.keyCode == 13) {
        $('#btn').trigger('click');
      }
    });

  });

  //END
});
