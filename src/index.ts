/*
 *
 * This program is a vehicle class.
 *
 * By:  Mr Coxall
 * Version: 1.0
 * Since:   2020-01-01
 */

import Truck from './Truck'
import Bike from './Bike'
import Vehicle from './Vehicle'

const bmx = new Bike('Red', 40)

console.log('Created Bmx bike.\nStatus:\n')
bmx.status()

console.log('Set the cadense to 10\n')
bmx.cadense = 10
bmx.status()

console.log('\nAccelerate by 15:')
bmx.accelerate(15)
bmx.status()

console.log('\nBrake by 15 for 5 seconds:')
bmx.break(15, 5)
bmx.status()

console.log('\nRinging bell.')
bmx.Ring_Bell()

const bigTruck = new Truck('Grey', 200, 'HGC-3456F')

console.log('Created a Truck.\nStatus:\n')
bigTruck.status()

console.log('\nAccelerating, 10 of power for ten seconds:')
bigTruck.accelerate(10, 10)
console.log('New speed: ' + String(bigTruck.speed()))

console.log('\nApplyed air pressure of 10:')
bigTruck.applyAir(10)
console.log('New speed: ' + String(bigTruck.speed()))

console.log('\nBreaking, 10 of power for 10 sec.')
bigTruck.break(10, 10, 10)
console.log('New speed: ' + String(bigTruck.speed()))

const newVehicle = new Vehicle('red', 100)
newVehicle.break(5, 5)

console.log('\nDone.')
