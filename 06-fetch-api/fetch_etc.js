//POST Request________________________

// GET aap kar chuke ho, ab seekhenge ki API ko data bhejte kaise hain.

// fetch("https://jsonplaceholder.typicode.com/users",{
//     method: "POST",
//     headers: {
//         "Content-type": "application/json"
//     },
//     body: JSON.stringify({
//         name: "Nazir",
//         username: "nazir123",
//         email: "nazir@exapmle.com"
//     })
// })
// .then(function(response) {
//     return response.json();
// })
// .then(function(data) {
//     console.log(data);
// })
// .catch(function(error){
//     console.log("Error:", error.message);
// });



// fetch("https://jsonplaceholder.typicode.com/posts", {

//     // 1. Method yahan likho
//     method: "POST",
//     // 2. Headers yahan likho
//     headers: {
//         "Content-type": "application/json"
//     },

//     // 3. Body yahan likho
//     body: JSON.stringify({
//         title: "Javascript learning",
//         body: "I am leaarning Fetch API",
//         userId: 1
//     })
// })
// .then(function(response) {
//     // response ko JSON me convert karo
//     return response.json();

// })
// .then(function(data) {
//     // server se jo data aaye use console me print karo
//      console.log(data)
// })
// .catch(function(error) {
//     // error print karo
//     console.log("Error:", error.message);

// });




// PUT_________________data update krna_____________
// GET     → data lena
// POST    → naya data banana
// PUT     → existing data update karna


// fetch("https://jsonplaceholder.typicode.com/users/5", {
//     method: "PUT",

//     header: {
//         "Content-type": "application/json"
//     },

//     body: JSON.stringify({
//         name: "Nazir Ansari",
//         username: "nazir123",
//         email: "nazir@example.com"
//     })
// })
// .then(function(response){
//     return response.json();
// })
// .then(function(data) {
//     console.log(data);
// })
// .catch(function(error) {
//     console.log("Error:", error.message);
// });




// fetch("https://jsonplaceholder.typicode.com/users/2", {
//     method: "PUT",

//     header: {
//         "Content-type": "application/json"
//     },

//     body: JSON.stringify({
//         name: "Nazir Ansari",
//         username: "nazir123",
//         email: "nazir@example.com"
//     })
// })
// .then(function(response){
//     return response.json();
// })
// .then(function(data) {
//     console.log(data);
// })
// .catch(function(error) {
//     console.log("Error:", error.message);
// });



// ____________PATCH____________________________
// PUT
// → existing resource ko generally complete/replace update

// PATCH
// → resource ka sirf specific part update


// fetch("https://jsonplaceholder.typicode.com/users/5", {
//     method: "PATCH",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         email: "new@gmail.com"
//     })
// })
// .then(function(response) {
//     return response.json();
// })
// .then(function(data) {
//     console.log(data);
// })
// .catch(function(error) {
//     console.log("Error:", error.message);
// });




// ____________DELETE______________________
// Server se existing data/resource ko delete karna.
// Example: API me user ID 5 hai aur hume us user ko delete karna hai.

// fetch("https://jsonplaceholder.typicode.com/users/5", {
//     method: "DELETE"
// })
// .then(function(response) {
//     return response.json();
// })
// .then(function(data) {
//     console.log(data);
// })
// .catch(function(error) {
//     console.log("Error:", error.message);
// });


// __________better version____________
// fetch("https://jsonplaceholder.typicode.com/users/5", {
//     method: "DELETE"
// })
// .then(function(response) {
//     if(!response.ok) {
//         throw new Error("user could not be deleted");
//     }
//     console.log("user deleted successfully");
// })
// .catch(function(error) {
//     console.log("Error:", error.message);
// });




// ___________________STATUS CODE _______________________GET     → data lena
// POST    → data banana
// PUT     → pura update
// PATCH   → partial update
// DELETE  → delete

// 200 → OK
// 201 → Created
// 204 → No Content

// 400 → Bad Request
// 401 → Unauthorized
// 403 → Forbidden
// 404 → Not Found

// 500 → Server Error



// ___________LOding state__________________
// bina loading ke___________ 
// fetch("https://jsonplaceholder.typicode.com/users")
//    .then(response => response.json())
//    .then(data => {
//     console.log(data);
//    });



//    fetch ke sath_____________
// let isLoading = true;
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(data => {
//         isLoading = false;
//         console.log(data);
//     });



let isLoading = true;
async function fetchData() {
    isLoading = true;
    let res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let data = await res.json();
    isLoading = false;
    console.log(data);
}
fetchData();