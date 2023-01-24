/**
 * This is the stack
 *
 * By:      Yiyun Qin
 * Version: 1.0
 * Since:   2022-10-27
 */

import Vehicle from './Vehicle'

class Truck extends Vehicle {
  private readonly licensePlateNumber: string

  // constructor

  constructor (color: string, maxSpeed: number, license: string) {
    super(color, maxSpeed)
    this.licensePlateNumber = license
  }

  // getters
  status (): void {
    super.status()
    console.log(` -> License Plate: ${this.licensePlateNumber}`)
  }

  // method

  applyAir (airPressure: number): void {
    this.speedCar = this.speedCar - airPressure / 2
  }

  //break (breakPower: number, breakTime: number, airPressure: number): void {
  //  this.speedCar = this.speedCar - (breakPower * breakTime) - (airPressure * breakTime)
  //}

  break (breakPower: number, breakTime: number, airPressure: number = 0): void {
    this.speedCar = this.speedCar - (breakPower * breakTime) - (airPressure * breakTime)
  }
}

export = Truck