$(document).ready(function() {
  $('#SearchForm button').click(function() {
    var name = $('#SearchForm input').val();
    location.href = '/summoner/' + name;
  });
  $('#SearchForm input').keydown(function(event) {
    if(event.keyCode == 13) {
      $('#SearchForm button').click();
    }
  });
});
