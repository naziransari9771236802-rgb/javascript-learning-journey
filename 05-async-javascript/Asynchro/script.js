// console.log("Hello");
// setTimeout(function() {
//     console.log("2 second baad");
// }, 2000);
// console.log("World");


// console.log("1");
// setTimeout(() => {
//     console.log("2");
// }, 3000);
// console.log("3");

// __________html ke sath wala h_________
// let button = document.querySelector("#btn");
// let message = document.querySelector("#message");
// button.addEventListener("click", function(){
//      setTimeout(() => {
//         // console.log("3 secont baad print krega");
//         message.innerText = "3 second baad print krega";
//      }, 3000);
//     //  console.log("3");
// });




// setenterval__________
// setevterval(() => {
//     console.log("Hello");
// }, 2000);


// _html ke sath setenterval_____________
// let count = document.querySelector("#count");
// let startBtn = document.querySelector("#startBtn");
// let stopBtn = document.querySelector("#stopBtn");
// let number = 0;
// let interval;
// startBtn.addEventListener("click", function() {
//     interval = setInterval(function() {
//         number++;
//         count.innerText = number;
//     }, 1000);
// });
// stopBtn.addEventListener("click", function() {
//     clearInterval(interval);
// });



// ___________clearTimeout____________
// let message = document.querySelector("#message");
// let startBtn = document.querySelector("#startBtn");
// let cancelBtn = document.querySelector("#cancelBtn");
// let timer;
// startBtn.addEventListener("click", function() {
//     timer = setTimeout(function() {
//         message.innerText =  "Hello Nazir 😘";       
//     }, 5000);
// });
// cancelBtn.addEventListener("click", function() {
//     clearTimeout(timer);;
//     message.innerText = "Timer cancelled (❁´◡`❁)"
//     });
  


