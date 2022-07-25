const carMakers = ["ford", "toyota", "chevy"];

const carsByMake: string[][] = [["edge"], ["camry"], ["rolette"]];

// Help with inference when extracting values

// const car = carMakers[0];
const myCar = carMakers.pop();

// prevents incompatible values
carMakers.push(100); // will error out

carMakers.map((car: string): string => {
  return car;
});

// Flexible Types

const importantDates: (string | Date)[] = [new Date(), "2030-10-10"];
importantDates.push("2020-1-1");
importantDates.push(new Date());
