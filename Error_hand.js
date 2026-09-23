// Program me agar kuch galat ho jaye, to program ko properly handle karna:
// "Error aa gaya to ab kya karna hai?"


// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(function(respond){
//         return respond.json();
//     }) 
//     .then(function(data){
//         console.log(data);
//     })
//     .catch(function(error){
//         console.log("something went wrong:", error);
//     });



// fetch("https://jsonplaceholder.typicode.com/abc")
//    .then(function(response){
//        return response.json();
//    })
//    .then(function(data) {
//     console.log(data);
//    })
//    .catch(function(error) {
//     console.log("Something went wrong:", error);
//    });



// fetch("https://jsonplaceholder.typicode.com/abc")
//     .then(function(response) {
         
//         if(!response.ok) {
//             throw new Error("Something went wrong");
//         }
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(function(error){
//         console.log(error.message);
//     });




// fetch("https://jsonplaceholder.typicode.com/abc")
//     .then(function(response) {
         
//         if(!response.ok) {
//             throw new Error("Users data could not be loaded");
//         }
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(function(error){
//         console.log("Error:", error.message);
//     });
