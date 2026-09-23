// fetch() ka use kisi API/server se data mangne ke liye hota hai.
// API = ek messenger/doorway jo aapki website ko kisi server ke data se connect karta hai.


// Practise fetch api______________
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(function(response) {
//     console.log(response);
// });



// fetch(url)
// .then(function(response) {
//     console.log(response);
// });
// jb hme yek sath kai user ko leke chalte hain to rsoponse.json used krte hain.


// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//     });
// response.json ne server ke response body ko JSON data se JavaScript object/array mein convert karne ke liye parse kiya.



// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data[0].name);
//     });

// fetch() → request karta hai
// पहला .then() → response ko handle karta hai
// response.json() → actual data nikalta hai
// दूसरा .then() → us actual data par kaam karta hai.


// used foreach\--------------
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         data.forEach(function(user) {
//             console.log(user.name);
//         });
//     });




// map used__________________________map() ka use hota hai har item se naya data banane ke liye.
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         let username = data.map(function(user) {
//             return user.name;
//         });
//         console.log(username);
//     });




// filter used____________________
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         let users = data.filter(function(users) {
//             return users.id < 5;
//         });
//         console.log(users);
//     });



// filter + map used ________________
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         let names = data.filter(function(user) {
//             return user.id > 5;
//         })
//         .map(function(user) {
//             return user.name;
//         });
//         console.log(names);
//     });