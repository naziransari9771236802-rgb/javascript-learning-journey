// for loop

// for (initialization; condition; update) {
//     // code
// }


// 1-10
// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

// 10-1
// for (let i = 10; i >= 1; i--){
//     console.log(i);
// }

// even number
// for (let i = 2; i <= 10; i += 2 ){
//     console.log(i);
// }

// odd number
// for (let i = 3; i <= 10; i += 3){
//     console.log(i);
// }

// multiplication table
// let n = 5;
// for (let i = 1; i <= n; i++) {
//     console.log(`${n} * ${i} = ${n*i}`);
// }


// factorial
// let n = 5; 
// fact = 1;
// for (let i = 1; i <= n; i++){
//     fact *= i;
//     console.log(fact);
// }


// fibonacci  
// let n = 10;
// let a = 0;
// let b = 1;
// for (let i = 1; i < n; i++){
//     console.log(a);
//     [a, b] = [b, a + b];
// }


// prime
// function isPrime(n){
//     if(n < 2) return false;
//     for(let i = 2; i < n; i++){
//         if (n % i === 0){
//              return false;
//     }
// }
//     return true;
// }
// console.log(isPrime(17));


// Armstrong
// let n = 153;
// sum = 0;
// temp = n;
// while (temp > 0) {
//     let d = temp % 10;
//     sum += d ** 3;
//     temp = Math.floor(temp / 10);
// }
// console.log(sum === n ? "Armstrong" : "Not Armstrong");


// let n = 153;
// sum = 0;
// temp = n;
// while( temp > 0){
//     let d = temp % 10;
//     sum += d ** 3
//     temp = Math.floor(temp / 10);
// }
// console.log(sum === n ? "Armstrong" : "not Armstrong");


// Palindrome
// let str = "madam";
// let rev = str.split("").reverse().join("");
// console.log(str === rev ? "palindrome" : "Not palindrome");


// Reverse Number
// let n = 1234;
// rev = 0;
// while (n > 0) {
//     rev = rev * 10 + (n % 10);
//     n = Math.floor(n / 10);
// }
// console.log(rev);


// Digit count 
// let n = 12345;
// count = 0;
// while (n > 0) {
//     count++;
//     n = Math.floor(n/10);
// }
// console.log(count);


// Digit sum
// let n = 12345;
// sum = 0;
// while (n > 0){
//     sum += n % 10;
//     n = Math.floor(n / 10);
// }
// console.log(sum);


// Power

