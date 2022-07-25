const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};
// type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ["browm", true, 40];
const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["browm", false, 0];

// rare use case example
const pepsi1: [String, boolean, number] = ["browm", true, 40];
