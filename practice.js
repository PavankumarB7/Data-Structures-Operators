// // Objects
// const dogs = {
//   Fido: 'Mutt',
//   Hunter: 'Doberman',
//   Snoopie: 'Beagle',
// };

// const myDog = 'Snoopie';
// const myBreed = dogs[myDog];
// console.log(myBreed);

// function phoneticLookup(val) {
//   let result = '';

//   let lookup = {
//     alpha: 'Adams',
//     bravo: 'Boston',
//     charlie: 'Chicago',
//     delta: 'Denver',
//     echo: 'Easy',
//     foxtrot: 'Frank',
//   };
//   result = lookup[val];

//   return result;
// }

// console.log(phoneticLookup('lookup'));

// // function checkObj(obj, checkProp) {
// //   // Only change code below this line
// //   return obj.hasOwnProperty(checkProp);
// //   // Only change code above this line
// // }

// // checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'gift');
// // console.log(checkObj);

// function checkObj(obj, checkProp) {
//   if (obj.hasOwnProperty(checkProp)) {
//     return obj[checkProp];
//   } else {
//     return 'Not Found';
//   }
// }

// const ourStorage = {
//   desk: {
//     drawer: 'stapler',
//   },
//   cabinet: {
//     'top drawer': {
//       folder1: 'a file',
//       folder2: 'secrets',
//     },
//     'bottom drawer': 'soda',
//   },
// };

// console.log(ourStorage.cabinet['top drawer'].folder2);
// console.log(ourStorage.desk.drawer);

// const myStorage = {
//   car: {
//     inside: {
//       'glove box': 'maps',
//       'passenger seat': 'crumbs',
//     },
//     outside: {
//       trunk: 'jack',
//     },
//   },
// };

// const gloveBoxContents = myStorage.car.inside['glove box'];
// console.log(gloveBoxContents);

// const ourPets = [
//   {
//     animalType: 'cat',
//     names: ['Meowzer', 'Fluffy', 'Kit-Cat'],
//   },
//   {
//     animalType: 'dog',
//     names: ['Spot', 'Bowser', 'Frankie'],
//   },
// ];

// console.log(ourPets[0].names[1]);
// console.log(ourPets[1].names[0]);

// const myPlants = [
//   {
//     type: 'flowers',
//     list: ['rose', 'tulip', 'dandelion'],
//   },
//   {
//     type: 'trees',
//     list: ['fir', 'pine', 'birch'],
//   },
// ];

// const secondTree = myPlants[1].list[1];
// console.log(secondTree);

// // Arrays
// const ary = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [[10, 11, 12], 13, 14],
// ];

// const subarray = ary[3];
// const nestedSubarray = ary[3][0];
// const element = ary[3][0][1];

// console.log(subarray);
// console.log(nestedSubarray);
// console.log(element);

// const threeArr = [1, 4, 6];
// const oneDown = threeArr.pop();
// console.log(oneDown);
// console.log(threeArr);

// // Use the .pop() function to remove the last item from myArray and assign the popped off value to a new variable, removedFromMyArray.

// const myArray = [
//   ['John', 23],
//   ['cat', 2],
// ];

// const removedFromMyArray = myArray.pop();
// console.log(removedFromMyArray);

// myArray.shift();

// myArray.unshift(['paul', 35]);
// console.log(myArray);
