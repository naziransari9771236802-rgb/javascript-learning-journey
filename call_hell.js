// function login(callback) {
//     console.log("Login successful");
//     callback();
// }

// function getProfile(callback) {
//     console.log("Profile loaded");
//     callback();
// }

// function dashboard() {
//     console.log("Dashboard opened");
// }

// // Yahan Callback Hell banao 👇

// login(function () {
//     getProfile(function() {
//         dashboard();
//         });
//     });




// function placeholder(callback) {
//     console.log("order placed");
//     callback();
// }
// function payment(callback) {
//     console.log("payment successful");
//     callback();
// }
// function packing(callback) {
//     console.log("order packed");
//     callback();
// }
// function delivery() {
//     console.log("order delivery");
// }
// // ______ise callback helll bnao_________
// placeholder(function() {
//     payment(function() {
//         packing(function() {
//             delivery();
//         });
//     });
// });



// function orderFood(callback){
//     setTimeout(function () {
//         console.log("1. order placed");
//         callback();
//     }, 2000);
// }
// function payment(callback){
//     setTimeout(function () {
//         console.log("2. payment succcesful");
//         callback();
//     }, 2000);
// }
// function delivery() {
//     setTimeout(function () {
//         console.log("4. Food delivered");
//     }, 2000);
// }
// // ________calback hell banao_________
// orderFood(function () {
//     payment(function () {
//         prepareFood(function () {
//             delivery();
//         });
//     });
// });