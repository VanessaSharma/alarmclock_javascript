var Alarm = require('./../js/alarmclock.js').alarmModule;
var audio;

$(function() {
  var now = moment();
  var audio = new Audio();
  audio.src = "audio/audio.wav";
  $('#time').text(now);

  var soundAlarm = function(time) {
    setTimeout(function() {
      $(".sound-alarm").show();
      $("body").addClass("alarm");
      audio.play();
    }, time);
  }

  var stopAlarm = function() {
    $(".sound-alarm").hide();
    $("body").removeClass("alarm");
    audio.pause();
  }

  $("form").submit(function(event) {
    event.preventDefault();
    var userAlarm = moment($("#alarm").val());
    var alarm = new Alarm(userAlarm);
    soundAlarm(alarm.alert(now));
   });

  $("#snooze").click(function(event) {
    stopAlarm();
    soundAlarm(30000);
  });

  $("#stopAlarm").click(function(event) {
    stopAlarm();
  });
});
