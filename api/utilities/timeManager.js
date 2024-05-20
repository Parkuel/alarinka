class TimeManager {
  timeToNumber(time) {
    const hours = +time.split(":")[0];
    const mins = +time.split(":")[1] / 60;
    return hours + mins;
  }

  numberToCompleteTime(number) {
    let hour = Math.floor(number);
    let minute = Math.round((number - hour) * 60);
    if (minute === 60) {
      hour++;
      minute = 0;
    }
    const meridiem = hour < 12 || hour === 24 ? "AM" : "PM";
    hour = hour % 12;
    if (hour === 0) {
      hour = 12;
    }
    const time = hour + ":" + (minute < 10 ? "0" : "") + minute + meridiem;
    return time;
  }

  dateToNumber(date) {
    const calcDate = new Date(date);
    const hours = calcDate.getHours();
    const mins = calcDate.getMinutes() / 60;
    return hours + mins;
  }

  dateToCompleteTime(date) {
    const dateToNumber = this.dateToNumber(date);
    return this.numberToCompleteTime(dateToNumber);
  }
}

module.exports = new TimeManager();
