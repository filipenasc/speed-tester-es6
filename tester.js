"use strict"

class SpeedTest {
  constructor(implementation, loops) {
    this.average = 0;
    this.implementation = implementation;
    this.loops = loops || 1000;
  }

  run() {
    let beginTime, endTime, sumTimes = 0;
    for (let i = 0, x = this.loops; i < x; i++) {
      beginTime = +new Date();
      this.implementation();
      endTime = +new Date();
      sumTimes = endTime - beginTime;
    }
    this.average = sumTimes / this.loops;
    return console.log(`Average execution across ${this.loops}: ${this.average}`);
  }
}
