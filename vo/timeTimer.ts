class Timer {
  SEC_PER_MSEC = 1000;
  MIN_PER_SEC = 60;
  HOUR_PER_MIN = 60;
  #timeSetting = 60 * this.MIN_PER_SEC * this.SEC_PER_MSEC;
  #startTime = 0;

  constructor(timeSetting: number, startTime: number) {
    this.#timeSetting = timeSetting * this.MIN_PER_SEC * this.SEC_PER_MSEC;
    this.#startTime = startTime;
  }

  getTimeSetting() {
    return this.#timeSetting;
  }

  setTimeSetting(time: number) {
    this.#timeSetting = time * this.MIN_PER_SEC * this.SEC_PER_MSEC;
  }

  calculateElapsedTime() {
    return Date.now() - this.#startTime;
  }

  calculateRemainTime() {
    return this.#timeSetting - this.calculateElapsedTime();
  }

  calculateRemainTimeRatio() {
    const total = this.SEC_PER_MSEC * this.MIN_PER_SEC * this.HOUR_PER_MIN;
    const ratio = this.calculateRemainTime() / total;
    return ratio;
  }
}

export default Timer;
