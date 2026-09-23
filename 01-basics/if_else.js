//  vote eligible
// let age = 18;
// if(age >= 18){
//     console.log("Vote eligible");
// } else {
//     console.log("Abhi eligible nhi h")
// }


//  Even/Odd
// const n = 7;
// if(n % 2 === 0 ){
//     console.log("Even");
// } else {
//     console.log("Odd")
// }


// const n = 8;
// if(n % 2 === 0 ){
//     console.log("Even");
// } else {
//     console.log("Odd")
// }


// Positive/negetive
// const n = -4;
// if(n >= 0){
//     console.log("Positive")
// } else{
//     console.log("Negetive")
// }


// const n = 4;
// if(n >= 0){
//     console.log("Positive")
// } else{
//     console.log("Negetive")
// }


// Largest of 2
// let a = 20;
// let b = 12;
// if(a >= b){
//     console.log("Largest number: a")
// } else {
//     conswole.log("Smnallest number: b")
// }


// Largest of 3

// let a = 10;
// let b = 20;
// let c = 30;
// if(a >= b && b >= c){
//     console.log(a);
// } else if(b >= a && a >= c){
//     console.log(b);
// } else {
//     console.log(c);
// }


// Grade system___
// let marks = 72;
// if(marks >= 90){
//     console.log("A");
// } else if(marks >= 80){
//     console.log("B");
// } else if(marks >= 60){
//     console.log("C");
// } else {
//     console.log("D")
// }


// Pass/Fail
// let marks  = 45;
// if(marks >= 30){
//     console.log("Pass");
// } else {
//     console.log("Fail")
// }


// Leap year
// let year = 2024;
// if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
//     console.log("Leap year")
// } else {
//     console.log("Not leap year");
// }


// Divisiopn by 5
// let num = 25;
// if(num % 5 === 0){
//     console.log("Division by 5");
// } else {
//     console.log("Not division by 5")
// }


// Division by 7
// let n = 21;
// if(n % 7 === 0){
//     console.log("division by 7")
// } else {
//     console.log("Not division by 7")
// }


// age catergory

// let age = 22;
// if(age < 13){
//     console.log("Child")
// } else if(age < 20){
//     console.log("Teenager");
// } else if(age > 20){
//     console.log("Adult");
// } else {
//     console.log("Senior citizen");
// }


// Login Validation
// let user = "admin";
// let pass = "1234";
// let inputUser = "admin";
// let inputPass = "1234";
// if(inputUser === user && inputPass === pass){
//     console.log("Valid Login")
// } else {
//     console.log("Not Valid")
// }



//  Temperature check
// let temp = 45;
// if(temp > 40){
//     console.log("Bahut garmi hai");
// } else if(temp > 30){
//     console.log("kam garmi h");
// } else {
//     console.log("thandi h")
// }


// Trafic signal
// let signal = "red";
// if(signal === "red"){
//     console.log("Ruko");
// } else if(signal === "yellow"){
//     console.log("wait kro");
// } else {
//     console.log("chalo")
// }


// Electricity bill
// let units = 250;
// let bill;

// if (units <= 100) {
//     bill = units * 5;
// } else if (units <= 200) {
//     bill = (100 * 5) + ((units - 100) * 7);
// } else if (units <= 300) {
//     bill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
// } else {
//     bill = (100 * 5) + (100 * 7) + (100 * 10) + ((units - 300) * 12);
// }
// console.log("Electricity Bill =", bill);



// discount
// let amount = 2000;
// let discount = 0; m 
// // Discount = Amount × Percentage / 100   - formula h.
// // Final Amount = Original Amount - Discount    - final amount ka formula h.
// if (amount < 1000) {
//     discount = amount * 5 / 100;
// } else if (amount <= 5000) {
//     discount = amount * 10 / 100;
// } else {
//     discount = amount * 20 / 100;
// }

// let finalAmount = amount - discount;
// console.log("Discount =", discount);
// console.log("Final Amount =", finalAmount);


// BMI 
// let weight = 65;
// let height = 1.7;
// let bmi = weight / (height * height);
// if(bmi < 18.5){
//     console.log("Underweight");
// } else if (bmi < 25){
//     console.log("Normal");
// } else {
//     console.log("Overweight");
// }


// Invalid Validation
// let month = 13;
// if(month >= 1 && month <= 12){
//     console.log("Valid Month");
// } else {
//     console.log("Invalid Month");
// }


// Weekday
// let day = 6;
// if(day === 1){
//     console.log("Monday");
// } else if(day <= 5){
//     console.log("Weekday");
// } else {
//     console.log("Weekend");
// }



// Character check
// let ch = "a";
// if (ch >= "a" && ch <= "z"){
//     console.log("Lowercase letter");
// }


// Uppercase & LowerCase 
// let ch = "A";
// if(ch === ch.toUpperCase()){
//     console.log("Uppercase")
// } else {
//     console.log("Lowercase");
// }



// Vowel

// let ch = "e";
// if("aeiouAEIOU".includes(ch)){
//     console.log("Vowel");
// } else {
//     console.log("Consonant");
// }



// consonant
// let ch = "b";
// if(!"aeiouAEIOU".includes(ch)){
//     console.log("Consonant");
// } else {
//     console.log("Vowel");
// }



// Nested if
// let age = 20;
// let hasId = true;
// if(age >= 18) {
//     if(hasId){
//         console.log("Entry Allowed");
//     } else  {
//         console.log("ID chahiye");
//     } 
//     } else {
//         console.log("underage");
//     }
