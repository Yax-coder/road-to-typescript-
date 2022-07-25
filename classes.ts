//Modifiers

// Public - this method can be called anywhere, anytime

//Private - this method can only be called by other methods in this class

// protected - this method can be called by other methods in this class,
// or by other methods in child class

class Vehicle {
  // use case
  //   color: string;
  //   constructor(color: string) {
  //     this.color = color;
  //   }

  constructor(public color: string) {}

  honk(): void {
    console.log("pun pun pun");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

const car = new Car(4, "red");

car.startDrivingProcess();
