$(document).ready(function() {
  $('#SearchForm button').click(function() {
    var name = $('#SearchForm input').val();
    location.href = '/summoner/' + name;
  });
});
