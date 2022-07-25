let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects

let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];
let myNunbers: number[] = [1, 2, 3, 4, 5];
let truths: boolean[] = [true, false];

// classes

class Car {}

let car: Car = new Car();

// Object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// when to use annotations +++++

// case 1;) Function that returns the 'any' type
// examples like below
const json = '{"x": 10, "y": 20}';
// how to fix type any
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

//case 2;) Delayed initialization

let words = ["red", "green", "blue"];
let foundgreen: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundgreen = true;
  }
}

//case 3;) Variables whose type cannot be inferred correctly

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
