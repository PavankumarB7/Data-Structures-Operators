'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// DESTRUCTURING ARRAYS

const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// SWITCHING VARIABLES
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
console.log(restaurant.order(2, 0));

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Destructuring
const nested = [2, 4, [5, 6]];
console.log(nested);
const [i, , j] = nested;
console.log(i, j);

// Destructuring Inside Destructuring
const [k, , [l, m]] = nested;
console.log(k, l, m);

// Default Values
const [p, q, r] = [8, 9];
console.log(p, q, r);

const [t = 1, u = 2, v = 3] = [2, 6];
console.log(t, u, v);

// Looping Arrays (FOR-OF Loop)
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(item);
// }

// console.log(menu.entries()); // Later in the Course
// console.log([...menu.entries()]);

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// Sets

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pasta',
  'Pizza',
  'Risotto',
  'Pasta',
]);
console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear()
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique);

// Convert Set to Array
const staffUnique2 = [...new Set(staff)];
console.log(staffUnique2);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('jonasschmedtmann').size);

// MAPS
// A map is a data structure that we can use to map values to keys. Just like an object, data is stored in key value pairs in maps. Diff b/w them is in maps, the keys can have any type [objects, or arrays or other maps] & in objects, the keys are basically always strings.

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('Open', 11)
  .set('Close', 23)
  .set(true, 'We are Open :D')
  .set(false, 'We are Closed :(');

console.log(rest.get('name'));
console.log(rest.get('Open'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 20;
console.log(rest.get(time > rest.get('Open') && time < rest.get('Close')));

// Map Methods

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

const ar = [1, 2];
rest.set(ar, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(ar));

// Maps: Iteration
const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try Again!'],
]);
console.log(question);

// console.log(Object.entries(openingHours));

// Objects
/*const calcAge = function (birthYear) {
  return 2037 - birthYear;
};*/

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   birthYear: 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: true,

//   calcAge: function (birthYear) {
//     return 2037 - birthYear;
//   },
// };

// console.log(jonas.calcAge(1990));

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   birthYear: 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: true,

//   calcAge: function () {
//     console.log(this);
//     return 2037 - this.birthYear;
//   },
// };
// console.log(jonas.calcAge());

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   birthYear: 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: true,

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
// };
// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// alert(jonas.firstName);

/*let user = {
  name: 'John',
  age: 30,
};

let key = prompt('What do you want to know about the user?', 'name');

// access by variable
alert(user[key]); // John (if enter "name")
alert(user.key); // Undefined*/

// let fruit = prompt('Which fruit to buy?', 'apple');

// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };

// alert(bag.apple); // 5 if fruit="apple"

let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5,
};

console.log(bag.appleComputers);

// Challenge
// "Jonas is a 46-year old teacher, & he has a driver's license"

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} -year old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
  },
};
console.log(jonas.calcAge());

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

console.log(mark.calcBMI());
console.log(john.calcBMI());

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi}) `
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi}) `
  );
}

// Destructuring Objects

const restaurant1 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

restaurant1.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant1.orderDelivery({
  address: 'Via del Sole, 21',
});

const { name, openingHours, categories } = restaurant1;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant1;
console.log(restaurantName, hours, tags);

// Default Value
const { menu = [], starterMenu: starters = [] } = restaurant1;
console.log(menu, starters);

// Mutating Variables (Switching)
let d = 111;
let e = 999;
const obj = { d: 23, e: 7, f: 14 };

({ d, e } = obj);
console.log(d, e);

// Nested Objects
// const { fri } = openingHours;
// console.log(fri);

// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

const {
  fri: { open: o, close: cl },
} = openingHours;
console.log(o, cl);

// Spread Operator
const arys = [7, 8, 9];
const badNewArr = [1, 2, arys[0], arys[1], arys[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arys];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant1.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant1.mainMenu];
console.log(mainMenuCopy);

// Join Arrays
const menuu = [...restaurant1.starterMenu, ...restaurant1.mainMenu];
console.log(menuu);

// Iterables are arrays, strings, maps, sets, NOT Objects
const str = 'jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
// console.log(`${...str} Schmedtmann`)

const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];
console.log(ingredients);

//restaurant1.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// ES6
restaurant1.orderPasta(...ingredients);

// Objects {SOP}
const newRestaurant = { foundedIn: 1990, ...restaurant1, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant1.name);

// Rest Pattern & Parameters
// 1) Destructuring
const [s1, v1, ...others] = [1, 2, 3, 4, 5];
console.log(s1, v1, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant1.mainMenu,
  ...restaurant1.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Obj
const { sat, ...weekdays } = restaurant1.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const ded = [23, 5, 7];
add(...ded);
