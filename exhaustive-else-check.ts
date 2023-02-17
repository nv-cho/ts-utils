class UnreachableError extends Error {
	constructor(_never: Error, message: string) {
		super(message)
	}
}

class Car {
 drive() {	
	}
}

class Truck {
	tow() {
	}
}

type Vehicle = Truck | Car

const myVehicle: Vehicle = new Car()

if (myVehicle instanceof Truck){
	myVehicle.tow()
} else if (myVehicle instanceof Car) {
	myVehicle.drive()
} else {
	throw new UnreachableError(
		myVehicle,
		`Unexpected vehicle type: ${myVehicle}`
	)
}