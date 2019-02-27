"use strict";

class Timer {
  constructor({ timersParent}){
    this.parentNode = timersParent;
    this.isActive = false;
    this.startTime = null;
    this.deltaTime = null;
    this.currentTime = null;
    this.pauseTime = null;
    this.id = null;
    this.lapArr=[];
    this.min = "00";
    this.sec = "00";
    this.ms = "0";
    this.timerWrapper = null;
    this.clockFace = null;
    this.startBtn = null;
    this.lapBtn = null;
    this.resetBtn = null;
    this.lapList = null;
  }
  createTimerElement() {
    this.timerWrapper = document.createElement("div");
    this.timerWrapper.classList.add("stopwatch");

    this.clockFace = document.createElement("p");
    this.clockFace.classList.add("js-time");
    this.clockFace.textContent = `${this.min}:${this.sec}.${this.ms}`;

    this.startBtn = document.createElement("button");
    this.startBtn.classList.add("js-start");
    this.startBtn.classList.add("btn");
    this.startBtn.textContent = "start";

    this.lapBtn = document.createElement("button");
    this.lapBtn.classList.add("js-lap");
    this.lapBtn.classList.add("btn");
    this.lapBtn.textContent = "lap";

    this.resetBtn = document.createElement("button");
    this.resetBtn.classList.add("js-reset");
    this.resetBtn.classList.add("btn");
    this.resetBtn.textContent = "reset";

    this.lapList = document.createElement("ul");
    this.lapList.classList.add( ".js-laps");

    this.timerWrapper.append(
      this.clockFace,
      this.startBtn,
      this.lapBtn,
      this.resetBtn,
      this.lapList
    );

    return this.timerWrapper;
  }

  startTimer() {
    if (!this.isActive) {
      this.startTime = Date.now() - this.deltaTime;
      this.isActive = true;
      this.updateTimer();
    } else {
      this.pauseTimer();
    }
  }

  pauseTimer() {
    this.startBtn.textContent = "continue";
    clearInterval(this.id);
    this.isActive = false;
  }

  updateTimer() {
    this.startBtn.textContent = "pause";
    this.id = setInterval(() => {
      this.currentTime = Date.now();
      this.deltaTime = this.currentTime - this.startTime;
      const time = new Date(this.deltaTime);
      this.min = time.getMinutes();
      this.sec = time.getSeconds();
      this.ms = Number.parseInt(time.getMilliseconds() / 100);

      if (this.min < 10) this.min = "0" + this.min;
      if (this.min < 10) this.sec = "0" + this.sec;
      this.clockFace.textContent = `${this.min}:${this.sec}.${this.ms}`;
    } , 100);
  }

  saveLap() {
    const lap = document.createElement("li");
    lap.classList.add("lap");
    lap.textContent = `${this.min}:${this.sec}.${this.ms}`;
    if (this.ms > 0) {
      this.lapArr.push(lap);
      this.lapArr.forEach(item => this.lapList.appendChild(item));
    }
  }

  resetTimer() {
    this.isActive = false;
    this.startTime = null;
    this.deltaTime = null;
    clearInterval(this.id);
    this.min = "00";
    this.sec = "00";
    this.ms = "0";
    this.clockFace.textContent = `${this.min}:${this.sec}.${this.ms}`;
    this.lapList.innerHTML = "";
    this.startBtn.textContent = "start";
  }

  initTimer() {
    this.parentNode.append(this.createTimerElement());
    this.startBtn.addEventListener("click", this.startTimer.bind(this));
    this.resetBtn.addEventListener("click", this.resetTimer.bind(this));
    this.lapBtn.addEventListener("click", this.saveLap.bind(this));
  }
}

const timersParent = document.querySelector(".timers");
const timerFirst = new Timer({ timersParent });
timerFirst.initTimer();
//const timerSecond = new Timer({ timersParent });
//timerSecond.initTimer();
//const timerThird = new Timer({ timersParent });
//timerThird.initTimer();