// Prototype ek object hota hai jisse doosra object properties/methods inherit/access kar sakta hai.

// let user = {
//     name: "Nazir",
//     age: 21
// };
// console.log(user.name);


// Object ka prototype__________________
// let user = {
//     name: "Nazir"
// };
// console.log(user.toString());
// console.log(Object.getPrototypeOf(user));



// Apna prototype banana______________
// let animalMethods = {
//     eat: function() {
//         console.log("Eating!");
//     }
// };
// let dog = {
//     name: "Tommy"
// };
// Object.setPrototypeOf(dog, animalMethods);
// dog.eat();