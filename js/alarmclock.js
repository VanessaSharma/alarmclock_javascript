function AlarmClock() {
  this.alarms = [];
}

AlarmClock.prototype.setAlarm = function (set_alarm_time) {
  if (this.validateTime(set_alarm_time)) {
    this.alarms.push(set_alarm_time);
  }
};

AlarmClock.prototype.validateTime = function (time_input) {
  return moment(time_input, "HH:mm:ss", true).isValid();
};

AlarmClock.prototype.isItAlarmTime = function (time) {
  return this.alarms.includes(time);
};

exports.alarmclockModule = AlarmClock;
