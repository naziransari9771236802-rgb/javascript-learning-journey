// async/await Promise ko likhne aur samajhne ka cleaner tareeka hai.


// _____Promise ko yese likhte they _________
// downloadFile()
//     .then(function(message) {
//         console.log(message);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });


// same iske jaise hi async, await me likhte hain
// async function startDownload() {
//     let message = await downloadFile();
//     console.log(message);
// }
// startDownload(); 



// Await_____________
// Promise ka result aane ka wait karo, phir next line par jao.
// async function startDownload() {
//     let message = await downloadFile();
//     console.log(message);
// }



// function downloadFile() {
//     return new Promise(function(resolve, reject) {
//         console.log("Downloading...");
//         setTimeout(function() {
//             let success = true;
//             if(success) {
//                 resolve("Download complete!");
//             } else {
//                 reject("Download failed");
//             }
//         }, 3000);
//     });
// }
// async function startDownload() {
//     let message = await downloadFile();
//     console.log(message);
// }
// startDownload();




// function loginUser() {
//     return new Promise(function(resolve) {
//         console.log("login ho rha h");
//     setTimeout(function() {
//         let success = true;
//         if(success) {
//             resolve("Login Successful!");
//         }
//     }, 2000);
//     });
// }
// async function login() {
//     let message = await loginUser();
//         console.log(message)
//     };
//     login();





// function getProfile() {
//     return new Promise(function(resolve) {
//         console.log("Loading profile...");
//         setTimeout(function() {
//             // Yahan aapko resolve karna hai
//             let success = true;
//             if(success) {
//                 resolve("Loding Profile");
//             }
//         }, 3000);
//     });
// }
// async function showProfile() {
//     // Yahan await use karna hai
//     let message = await getProfile();
//     console.log("Profile loaded successful!");
// }
// showProfile();



