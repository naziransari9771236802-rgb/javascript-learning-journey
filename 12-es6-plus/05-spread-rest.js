// Spread = kisi array/object ki values ko spread/faila dena.
// const numbers = [20, 30, 40];
// const newNumbers = [...numbers];
// console.log(newNumbers);


// const fruits = ["apple", "banana"];
// const vegetables = ["potato", "tomato"];

// const food = [...fruits, ...vegetables];
// console.log(food);

// Object mein Spread______________
// const user = {
//     name: "Nazir",
//     age: 21
// };
// const updatedUser = {
//     ...user,
//     city: "Gorakhpur"
// };
// console.log(updatedUser);



// ____________Rest operator __________
// Rest = multiple values ko collect karke ek array mein rakhna.

// function add(...numbers) {
//     console.log(numbers);
// }
// add(10, 20, 30, 40);



// function add(...numbers ){
//     let total = 0;

//     for (let number of numbers) {
//         total += number;
//     }
//     return total;

// }
// console.log(add(10, 20, 30));