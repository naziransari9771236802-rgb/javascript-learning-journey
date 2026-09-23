// basic promise_____________
// let promise = new Promise(function(resolve, reject) {
//     let success = true;

//     if(success) {
//         resolve("Order successful"); // yha resolve ka matlab kaam successful ho gya !
//     } else {
//         reject("Order failed"); // yha reject ka matlab kaan fail ho gya!
//     }
// });





// ____________basic knowledge______________
// resolve()  → Success
// reject()   → Failure

// .then()    → Success handle karta hai
// .catch()   → Failure/Error handle karta hai


// function orderFood() {
//     return new Promise(function(resolve, reject) {
//         let foodReady = true;
//         if(foodReady) {
//             resolve("food is ready");
//         } else {
//             reject("food id not ready");
//         }
//     });
// }

// orderFood()
// .then(function(message) {
//     console.log(message);
// })
// .catch(function(error) {
//     console.log(error);
// });





// pract___________settimeout ke sath_______
// function orderFoof() {
//     return new Promise(function(resolve, reject) {
//         console.log("order processing");
        
//         setTimeout(function() {
//             console.log("Food ready!");
//             resolve("success");
    
//         }, 3000);
//     });
// }
// orderFoof()
// .then(function(message) {
//     console.log(message);
// });


// function downloadFile() {
//     return new Promise(function(resolve, reject) {
//         console.log("Downloading file...");
//         setTimeout(function() {
//             resolve("Download complete!");
//         }, 5000);
//     });
// }
// downloadFile()
// .then(function(message) {
//     console.log(message);
// });



// function makePayment() {
//     return new Promise(function(resolve, reject) {
//         console.log("payment processing...!");
//         setTimeout(function() {
//             let paymentSuccess = true;
//             if (paymentSuccess) {
//                 resolve("Payment sucessful");
//             } else {
//                 reject("payment failed!");
//             }
//         }, 4000);
//     });
// }
// makePayment()
// .then(function(message) {
//     console.log(message);
// })
// .catch(function(error) {
//     console.log(error);
// });




// function sendMessage(){
//     return new Promise(function(resolve, reject) {
//         console.log("Sending message...");
//         setTimeout(function(){
//             let sendSuccessful = true;
//             if (sendSuccessful) {
//                 resolve ("send message successful");
//             } else {
//                 reject ("not sending message!");
//             }
//         }, 3000);
//     })
// }
// sendMessage()
// .then(function(message) {
//     console.log(message);
// })
// .catch(function(message) {
//     console.log(message);
// });