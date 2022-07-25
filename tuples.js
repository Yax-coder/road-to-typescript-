const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
}
// type alias
type Drink = [String, boolean,number] 

const pepsi: Drink = ['browm', true. 40]
const sprite: Drink = ['clear', true. 40]
const tea: Drink = ['browm', flase. 0]

// rare use case example
const pepsi: [String, boolean,number] = ['browm', true. 40]