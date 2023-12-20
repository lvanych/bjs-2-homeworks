class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }
  addClock(time, callback) {
    if (!time || callback === undefined) {
      throw new Error("Отсутствуют обязательные аргументы");
    }
    if (this.alarmCollection.find((item) => item.time === time)) {
      console.warn("Уже присутствует звонок на это же время");
    }
    this.alarmCollection.push({
      time,
      callback,
      canCall: true,
    });
  }
  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
  }
  getCurrentFormattedTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }`;
  }
  start() {
    if (this.intervalId !== null) {
      return;
    }
    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((item) => {
        if (item.time === this.getCurrentFormattedTime() && item.canCall) {
          item.canCall = false;
          item.callback();
        }
      });
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
  resetAllCalls() {
    this.alarmCollection.forEach((item) => (item.canCall = true));
  }
  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
