/**
 * This is the stack
 *
 * By:      Yiyun Qin
 * Version: 1.0
 * Since:   2022-10-27
 */

class Vehicle {
  private readonly color: string
  protected speedCar: number = 0
  private readonly maximumSpeed: number

  // constructor
  constructor (color: string, maxSpeed: number) {
    if (this.constructor === Vehicle) {
      throw new Error("Abstract classes can't be instantiated.")
    }
    this.color = color
    this.maximumSpeed = maxSpeed
  }

  // getters
  status (): void {
    console.log(` -> Speed: ${this.speedCar}`)
    console.log(` -> MaxSpeed: ${this.maximumSpeed}`)
    console.log(` -> Color: ${this.color}`)
  }

  speed (): number {
    return this.speedCar
  }

  // setters

  // method
  accelerate (
    accelerationPower: number,
    accelerationTime: number
  ): void {
    this.speedCar = accelerationPower * accelerationTime + this.speedCar
  }

  break (breakPower: number, breakTime: number): void {
    this.speedCar = this.speedCar - breakPower * breakTime

    if (this.speedCar < 0) {
      this.speedCar = 0
    }
  }
}

export = Vehicle
