// _____________basic example__________
// let p1 = Promise.resolve("Profile loaded");
// let p2 = Promise.resolve("photo loaded");
// let p3 = Promise.resolve("orders loaded");

// Promise.all([p1, p2, p3])
// .then(function(result) {
//     console.log(result);
// });



// setTimeout bhi add krte hain __________
// let p1 = new Promise(function(resolve){
//     setTimeout(function() {
//         resolve("Profile loaded");
//     }, 2000);
// });

// let p2 = new Promise(function(resolve) {
//     setTimeout(function(){
//         resolve("Profile laoded");
//     }, 3000);
// });

// let p3 = new Promise(function(resolve){
//     setTimeout(function() {
//         resolve("orders loaded");
//     }, 1000);
// });

// Promise.all([p1, p2, p3])
// .then(function(result) {
//     console.log(result);
// });
    


// __________reject used based code_____________
// let p1 = Promise.resolve("profile loaded");
// let p2 = Promise.reject("photo failed");
// let p3 = Promise.resolve("orders loaded");

// Promise.all([p1, p2, p3])
// .then(function(result) {
//     console.log(result);
// })
// .catch(function(error){
//     console.log(error);
// });



// ______________Promise.allSettled______________
// Promise.allSettled() sabhi Promises ka result aane tak wait karta hai — chahe Promise successful ho ya fail.
// __________________________________________________
// ___________________________________________________________

// let p1 = Promise.resolve("order successful");
// let p2 = Promise.reject("Payment failed");
// let p3 = Promise.resolve("Delivery successful");
// Promise.allSettled([p1, p2, p3])
// .then(function(result){
//     console.log(result);
// });


// let p1 = new Promise(function(resolve) {
//     setTimeout(function() {
//         resolve("Profile loaded");
//     }, 8000);
// });

// let p2 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         reject("Payment failed");
//     }, 3000);
// });

// let p3 = new Promise(function(resolve) {
//     setTimeout(function() {
//         resolve("Order loaded");
//     }, 1000);
// });

// Promise.allSettled([p1, p2, p3])
// .then(function(result) {
//     console.log(result);
// });



// _________________Promise.race_______________________
// Multiple Promises mein jo sabse pehle settle (resolve ya reject) hota hai, Promise.race() usi ka result deta hai.
//______________________________________________________________

// let p1 = new Promise(function(resolve,) {
//     setTimeout(function() {
//         resolve("Promise 1");
//     }, 2000);
// });

// let p2 = new Promise(function(resolve) {
//     setTimeout(function() {
//         resolve("Promise 2");
//     }, 1000);
// });

// let p3 = new Promise(function(resolve) {
//     setTimeout(function() {
//         resolve("Promise 3");
//     }, 3000);
// });

// Promise.race([p1, p2, p3])
// .then(function(result) {
//     console.log(result);
// });



// let p1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve("successful");
//     }, 2000);
// });

// let p2 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         reject("Failed");
//     }, 1000);
// });

// Promise.race([p1, p2])
// .then(function(result) {
//     console.log(result);
// })
// .catch(function(error) {
//     console.log(error);
// })



// _______________Promise.any_________________
// Multiple Promises mein jo sabse pehle successfully resolve() hoga, Promise.any() uska result dega.
// ________________________________________________

// let p1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         reject("Promise 1 failed");
//     }, 1000);

// });

// let p2 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve("Promise 2 successful");
//     }, 3000);
// });

// let p3 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve("Promise 3 successful");
//     }, 2000);
// });

// Promise.any([p1, p2, p3])
//     .then(function(result) {
//         console.log(result);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });




// _____________________Finally _____________________
// .finally() wala code Promise successful ho ya fail — dono situations mein chalega.
// _______________________________________________________
// // Ex- success___________
//  let order = Promise.resolve("order successful");
 
//  order
//      .then(function(message) {
//         console.log(message);
//      })
//      .catch(function(error) {
//         console.log(error);
//      })
//      .finally(function(){
//         console.log("Loading stopped");
//      });



// Ex- Failed|________________
// let order = Promise.reject("order failed");

// order
//     .then(function(message) {
//         console.log(message);
//     })
//     .catch(function(error) {
//         console.log(error);
//     })
//     .finally(function() {
//         console.log("Loading stopped");
//     });



// function downloadFile() {
//     return new Promise(function(resolve, reject) {
//         console.log("Downloading...");
//         setTimeout(function() {
//             let success = true;
//             if(success) {
//                 resolve("Download complete!");
//             } else {
//                 reject("Download failed!");
//             }
//         }, 3000);
//     });
// }
// downloadFile()
//     .then(function(message){
//         console.log(message);
//     })
//     .catch(function(error) {
//         console.log(error);
//     })
//     .finally(function() {
//         console.log("Download process finished...");
//     });