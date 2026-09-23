//  Variables & data types codes _________20 question
// 1.question
// console.log("Hello World!");

// 2.variable declare kro
// let city = "Lucknow";
// console.log(city);

// 3. Number add kro 
// let a = 5;
// let b = 10;
// console.log( a + b);
// let c = a + b;
// console.log(c);

// 4. String print kro
// let str = "Javascript seekhne wala hoon";
// console.log(str);

// 5. Boolean value bnao
// let isPassed = true;
// console.log(isPassed);

// /6. undefined print kro 
// let name;
// console.log(name);

//7. Null asign kro 
// let data  = null;
// console.log(data);

//8. typeof use kro 
// let collega = "Gyanoday";
// console.log(typeof collega);

// console.log(typeof 10, typeof "hi", typeof true);


// 9.
// let score = 10;
// const maxScore = 100;  // const variable change nhi hota h.
// score = 20;
// console.log(Score);

//10. variable wrap kro
// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log(a, b);

// 11. User name print kro
// let userName = "Nazir";
// console.log(userName);

//12. Age print kro
// let age = 21;
// console.log(age);

//13. Template literals use kro
// let name = "Nazir";
// let age = 21;
// console.log(`My name is ${name} and i am ${age} year old.`);


//14. multiple variable
// let a = 1;
// let b = 2;
// let c = 3;
// console.log(a, b, c);

// 15. constant change krne ki error dekho
// const PI  = 3.14;
// try{
//     PI = 3.15;
// } catch (e){
//     console.log(e.message);
// }

//16. string concatenate karo
// let first = "java";
// let second = "script";
// console.log(first + second);

//17. Number to string
// let num = 100;
// let str = String(num);
// console.log(typeof str);


// 18. number to string 
// let str = "50";
// let num = Number(str);
// console.log(typeof num);

//19. Boolean conversion
// Boolean(false)     // false
// Boolean(0)         // false
// Boolean("")        // false
// Boolean(null)      // false
// Boolean(undefined) // false
// Boolean(NaN)       // false

// Boolean(10);       // true
// Boolean(-5);       // true
// Boolean("Hello");  // true
// Boolean("0");      // true
// Boolean([]);       // true
// Boolean({});       // true

// let age = 21;
// console.log(Boolean(age));


// 20. Data type identifie kro
// let name = "Nazir";
// let age = 21;
// let student = true;

// console.log(typeof name, typeof age, typeof student);

let arr = [1, "hi", true, null, undefined, {a:1}];

arr.forEach(v => console.log(v, "->", typeof v));