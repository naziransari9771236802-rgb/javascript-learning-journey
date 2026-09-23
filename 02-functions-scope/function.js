// function decleretion___________________________________
// function greet() {
//     console.log("Hello Bhai");
// }
// greet();


// parameter kke sath 
// function add(a, b) {     // yha parameter hain a, b.
//     console.log(a + b);
// }
// add(10, 20);   //yha argument hain 10, 20.


// function square(n) {
//     return n * n;
// }
// let result = square(6);
// console.log(result);



// function expression_____________________________
// let square = function(n) {
//      return n + n;
// };
// console.log(square(5));


// let number = function(n) {
//     return n * n;
// };
// console.log(number(4));



// Arrow function _________________________________

// let square = (n) => {
//     return n * n;
// };
// console.log(square(8));


// let square = n => n * n;
// console.log(square(4));


// let sum = (a, b) => a + b;
// console.log(sum(8, 9));



// argument________________

// function greet(name) {
//     console.log("Hello " + name);
// }
// greet("Nazir");


// return__________________
// function add(a, b) {
//     return a + b;
// }
// let result = add(10, 20);
// console.log(result);


// scope__________________
// 1. Global scope
// let name = "Nazir";
// function greet() {
//     console.log(name);
// }
// greet();


// 2. Function scope________jo variable function k andr bnaye jate hai o bahar access nhi pate hain

// function test() {
//     let age = 22;
//     console.log(age);
// }
// test();
// console.log(age);


// 3. Block scope ____let aur const block scope bhi hote hain , block means - { } k andr 
// if (true) {
//     let x = 10;
//     const y = 20;

//     console.log(x);
//     console.log(y);
// }
// console.log(x); ye block scope k bahar hain
// console.log(y);  ye bhi



// tino scope mila kr _______-----------

// let a = 10;
// function test() {
//     let b = 20;

//     if (true) {
//         let c = 30;

//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
//     console.log(a);
//     console.log(b);
//     // console.log(c);
// }
// test();
// console.log(a);
// console.log(b);
// console.log(c);



// Hoisting_______________

// greet ();
// function greet() {
//     console.log("Hello Bhai!");
// }



// default parameter_____________________

// function greet(name = "Guest") {
//     console.log("Hello " + name);
// }
// greet();  argument nhi mila = default value use hogi.
        //   argumrnt mil gya = given value use hogi.
// greet("Nazir");




// rest parameter__________________
// function sum(...numbers) {
//     console.log(numbers);
// }
// sum(10, 20, 30);



function sum(...numbers) {
    let total = 0;

    for (let num of numbers) {
        total += num;
    }
    return total;

}
console.log(sum(10, 20, 30));



// Arrow function me _________________
// let sum = (...numbers) => {
//     let total = 0;

//     for (let num of numbers) {
//         total += num;
//     }
//     return total;

// }
// console.log(sum(10, 20, 30));





// Practice start__________________
// Ques 1. simple function____________-
// function greet() {
//         console.log("Hello!");
// }
// greet();

// 2. return value_________________
// function square (n) {
//         return n * n;
// }
// console.log(square(5));


// 3.parameter_____________
// function add(a, b) {
//        return a + b;
// } 
// console.log(add(3, 4));


// 4. Default parrameter_____________________
// function greet(name = "Guest") {
//         return `Hello, ${name}`;
// }
// console.log(greet());


// 5. Arrow function__________________
// const add = (a, b) => a + b;
// console.log(add(2, 3));


// 6. Anonymous function ____________________-
// const fn = function () {
//         return "anonymous";
// };
// console.log(fn());


// 7. Function Expression _______________________
// const multiply = function (a, b) {
//         return a * b;
// };
// console.log(multiply(4, 5));


// 8. Calculator_________________________
// function calculator(a, b, op) {
//         if(op === "+") return a + b;
//         if(op === "-") return a - b;
//         if(op === "*") return a * b;
//         if(op === "/") return a / b;
//         if(op === "%") return a % b;
// }
// console.log(calculator(10, 5, "+"));


// 9. Prime function ____________________
// function isPrime(n) {
//         if (n < 2) return false;
//         for (let i = 2; i < n; i++) if (n % i === 0) return false;
//         return true;
// }
// console.log(isPrime(13));


// 10. Factorial function____________________________
// function factorial (n) {
//         let f = 1;
//         for (let i = 1; i <= n; i++) f *= i;
//         return f;
// }
// console.log(factorial(5));


// 11. Fibonacci function _________________

// function fibonacci (n) {
//         let a = 0, b = 1, result = [];
//         for (let i = 0; i < n; i++) {
//                 result.push(a);
//                 [a, b] = [b, a + b];
//         }
//         return result;
// }
// console.log(fibonacci(6)); 


// 12. Largest function_____________-
// function largest (a, b, c) {
//         return Math.max(a, b, c);
// }
// console.log(largest(3, 9, 5));


// 13. Smallest function_____________---
// function smallest (a, b, c) {
//         return Math.min(a, b, c);
// }
// console.log(smallest(9, 7, 4));


// 14.Average ______________________
// function average(...nums) {
//         return nums.reduce((a, b) => a + b, 0)/ nums.length;
// }
// console.log(average(4, 8, 10));


// 15. Area__________________
// function areaOfRectangle(l, w){
//         return 3 * (l + w);
// }
// console.log(areaOfRectangle(4, 5));


// 16. Perimeter_________________-
// function perimeterOfRectangle(l, w) {
//         return 2 * (l + w) ;
// }
// console.log(perimeterOfRectangle(5, 4));


// 17. Greeting___________________-

// function greetUser(name, time){
//         return `Good ${time}, ${name}!`;
// }
// console.log(greetUser("Nazir", "Morning"));


// 18. Callback ____________________
// function processData(data, callback) {
//         callback(data);
// }
// console.log("Hello", (d) => console.log(d));



// 19. Higher order function______________
// function operate(a, b, fn) {
//         return fn(a, b);
// }
// console.log(operate(4, 5, (x, y) => x * y));



// 20. Recursive factorial
// function factorial(n) {
//         if (n <= 1) return 1; 
//                 return n * factorial(n - 1);
//         }
//         console.log(factorial(6));



// 21. Recursive fabonacci______________
// function feb(n) {
//         if (n <= 1) return n;
//         return feb (n - 1) + feb (n -2);
// }
// console.log(feb(7))



// 22. Recursive sum ________________
// function sumTo(n) {
//         if( n === 0) return 0;
//         return n + sumTo(n - 1);
// }
// console.log(sumTo(5));



// 23. Recursive reverse ________________
// function reverseStr(str) {
//       if (str === "") return "";
//       return reverseStr(str.substr(1)) + str[0];
// }
// console.log(reverseStr("Nazir"));


// 24. Scope _____________-
// let globalVar = "global";
// function test() {
//         let localVar = "Local";
//         console.log(globalVar, localVar);
// }
// test();




// 25. clouser intro____________________
// function outer() {
//         let count = 0;
//         return function () {
//                 return ++ count;
//         };
// }
// const counter = outer();
// console.log(counter(), counter());