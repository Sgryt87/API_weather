$(document).ready(function() {

  //Weather uppercase
  function capitalize(descriptionData) {
    return descriptionData.charAt(0).toUpperCase() + descriptionData.slice(1);
  }

  $('#location').keyup(function(e) {
    if(e.keyCode == 13) {
      $('#btn').trigger('click');
    }
  });

  $('#btn').click(function() {
      var location = $('#location').val();
      var webapi = 'http://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=61a438ad7321ecabb12dd6144c9bf3c5';
    $.getJSON(webapi, function(data) {
      console.log(data);
      $('#city').text(data.name);
      $('#country').text(', ' + data.sys.country);
      var descriptionData = data.weather[0].description;
      var icon = data.weather[0].icon;
      $('#description').text(capitalize(descriptionData));
      $('.icon').empty();
      $('.icon').append('<img class="img" src="http://openweathermap.org/img/w/' + icon + '.png"/>')

      $('#temp').text((data.main.temp - 272.15).toFixed(1));
      $('#wind').text(data.wind.speed);
      $('#humidity').text(data.main.humidity);
      var windDirection  = data.wind.deg;
        if(windDirection === 0) {
        $('#windDirection').html('S' + ' &#x2191');
      } else if (windDirection < 90) {
        $('#windDirection').html('SE' + ' &#x2197');
      } else if (windDirection === 90) {
        $('#windDirection').html('E' + ' &#x2192');
      } else if (windDirection < 180) {
        $('#windDirection').html('NE' + ' &#x2198');
      } else if (windDirection === 180) {
        $('#windDirection').html('N' + ' &#x2193');
      } else if (windDirection < 270) {
        $('#windDirection').html('NW' + ' &#x2199');
      } else if (windDirection === 270) {
        $('#windDirection').html('W' + ' &#x2190');
      } else if (windDirection < 359.99) {
        $('#windDirection').html('SW' + ' &#x2196');
      }
    });
  });


  //END
});
