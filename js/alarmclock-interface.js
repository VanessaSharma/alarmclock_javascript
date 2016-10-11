var AlarmClock = require('./../js/alarmclock.js').alarmclockModule;
var alarm_interval;

function displayAlarm() {
  $('#alarm_dismiss').toggle();
  alarm_interval = setInterval(function() {
    $('#alarm_display').toggle();
  }, 200);
};

$(document).ready(function() {

  var myClock = new AlarmClock();

  setInterval(function(){
    $('#time_display').text(moment().format('HH:mm:ss'));
    if (myClock.isItAlarmTime(moment().format('HH:mm:ss'))) {
      displayAlarm();
    }
  }, 1000);

  $('#set_alarm').submit(function(event) {
    event.preventDefault();
    var alarm_time = $('#alarm_time').val();
    myClock.setAlarm(alarm_time);
    console.log(myClock.alarms);
  });

  $('#alarm_dismiss').click(function() {
    clearInterval(alarm_interval);
    $('#alarm_dismiss').toggle();
  })

});
