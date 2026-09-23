// let promise = new Promise(function(resolve, reject) {
//     resolve("Step 1 complete");

// });
// promise
//     .then(function(message) {
//         console.log(message);
//         return "Step 2 complete";

//     })
//     .then(function(message) {
//         console.log(message);
//         return "Step 3 complete";

//     })
//     .then(function(message) {
//         console.log(message);

//     }); 




// ___________Practice sttart____________

// function orderFood () {
//     return Promise.resolve("order placed");
// }
// function payment(message) {
//     console.log(message);
//     return Promise.resolve("payment successful");
// }

// function prepareFood(message) {
//     console.log(message);
//     return Promise.resolve("Food prepared");
// }

// function delivery(message) {
//     console.log(message);
// }
// orderFood()
//     .then(payment)
//     .then(prepareFood)
//     .then(delivery);




// function orderFood () {
//     return new Promise(function(resolve, reject) {
//         console.log("order processing...");
//         setTimeout(function() {
//             console.log("order placed");
//             resolve("order placed");
//         }, 2000);
//     });
// }

// function payment() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             console.log("payment successful");
//             resolve("payment successful");
//         }, 3000);
//     });
// }

// function preparedFood(){
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             console.log("Food delivered!");
//             resolve("Food delivered!");
//         }, 2000);
//     });
// }

// function delivery(message) {

//     console.log(message);
//     console.log("Delivery started...");

//     return new Promise(function(resolve, reject) {

//         setTimeout(function() {
//             console.log("Food delivered!");
//             resolve("Food delivered!");
//         }, 2000);

//     });
// }

// orderFood()
//     .then(payment)
//     .then(preparedFood)
//     .then(delivery)
//     .then(function(message) {
//         console.log("✅", message);
//     })
//     .catch(function(error) {
//         console.log("❌", error);
//     });