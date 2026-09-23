// Ye modern JavaScript me API calls ke liye bahut commonly use hota hai.
// try ke andar hum wo code rakhte hain jisme error aa sakta hai.
// Agar try ke andar error aata hai, control catch me chala jata hai.


// try {
//     console.log("Hello");
// } catch(error) {
//     console.log("Error aaa gya");
// };



// async function getUsers() {
//     try{
//         let response = await fetch("https://jsonplaceholder.typicode.com/users");

//         if(!response.ok) {
//             throw new Error("Users data could not be loaded");
//         }
//         let data = await response.json();
//         console.log(data);
//     }
//     catch(error) {
//         console.log("Error:", error.message);
//     }
// }
// getUsers();


// async function getUsers() {
//     try{
//         let response = await fetch("https://jsonplaceholder.typicode.com/users");

//         if(!response.ok) {
//             throw new Error("Users data could not loaded!");
//         }
//         let data = await response.json();
//         console.log(data);
//     }
//     catch(error) {
//         console.log("Error:", error.message);
//     }
// }
// getUsers();