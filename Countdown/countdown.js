
var duedate = new Date(2019,03, 12, 12, 33, 30, 12);

var x = setInterval(function() {
  var now = new Date().getTime();
  var time_to = duedate - now;
  var days = Math.floor(time_to / (1000 * 60 * 60 * 24));
  var hours = Math.floor((time_to % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((time_to % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((time_to % (1000 * 60)) / 1000);

  document.getElementById("days_value").innerHTML = days ;
  document.getElementById("hours_value").innerHTML =  hours ;
  document.getElementById("minutes_value").innerHTML = minutes;
  document.getElementById("seconds_value").innerHTML = seconds;
  document.getElementById("duedate").innerHTML = "<strong>Duedate: </strong>"+ duedate;

  if (time_to < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "The duedate has expired";
  }
}, 1000);