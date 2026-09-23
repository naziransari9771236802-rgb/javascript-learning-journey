// singlton pattern
// object.create
// object l/iterals

// const JsUser = {
//     name: "Nazir",
//     age: 22,
//     location: "Lucknow",
//     email: "naz@google.com",
//     isLoggedIn: true
// }
// console.log(JsUser.email);
// console.log(JsUser["email"]);


// JsUser.greeting = function(){
//     console.log("Hello Js User");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello Js User ${this.name}`);
// }
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo()); 




// const tinderUser = new object() - non singlton pttern

// const tinderUser = {}
// tinderUser.id = "123abc"
// tinderUser.name = "sammy"
// tinderUser.isLoggedIn = false
// console.log(tinderUser);


// const regularUSer = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "Nazir",
//             lastname: "Ansari"
//         }
//     }
// }
// console.log(regularUSer.fullname.userfullname.firstname);




// _______________________PRACTICE QUESTION__________________________-----------
// CREATE OBJECT_______________
// const student = {
//     name: "Nazir",
//     age: 21,
//     course: "BCA"
// }
// console.log(student);


// Access Property________
// const student = {
//     name: "Nazir",
//     age: 21,
//     course: "BCA"
// }
// console.log(student.name)
// console.log(student["name"]);


// Update property_______
// let student = {name: "Nazir"};
// student.name = "Ali";
// console.log(student);


// Delete Property_______
// let student = {name: "Nazir",age: 21};
// delete student.age;
// console.log(student);


// nested object________
// let student = {name: "Nazir",Address: {city: "Lucknow", pin: "226001"}};
// console.log(student.Address.city);


// Loop object_______
// let obj = {a: 1, b: 2, c: 3};
// for (let key in obj){
//     console.log(key, obj[key]);
// }



// Object.keys()________
// let obj = {a: 1, b: 2};
// console.log(Object.keys(obj));


// object.values()___________
// let obj = {a: 1, b: 2};
// console.log(Object.values(obj));


// object.enties()_________object ko array of key-value pairs me convert karta hai.
// let obj = {a: 1, b: 2, c: 3};
// console.log(Object.entries(obj));



// merge object_____________
// let obj1 = {
//     name: "Nazir",
//     age: 21
// };
// let obj2 = {
//     course: "BCA",
//     city: "Lucknow",
// };
// let result = {...obj1,...obj2};
// console.log(result);



// clone object____________Object Clone ka matlab hota hai kisi existing object ki copy banana, taaki original object ko directly change na karna pade.
// let student = {
//     name: "Nazir",
//     age: 22,
//     course: "BCA"
// }
// let clone = {...student};
// console.log(clone);


// freeze object___________
// let obj = Object.freeze({ a: 1});
// obj.a = 100;
// console.log(obj.a);



// let student = {
//     name: "Nazir",
//     age: 21
// };
// Object.freeze(student);
// student.name = "Rahul";
// console.log(student);


// seal object___________update ho jayega pr add nhi hoga/ Object.seal() ko freeze() se compare karke samjho, tab ekdum clear ho jayega.
// let student = {
//     name: "Nazir",
//     age: 21,
// };
// Object.seal(student);
// student.age = 23;
// student.city = "lucknow";
// delete student.name;
// console.log(student);


// student object___________
// let student = {name: "Nazir", course: "BCA", marks: 85};
// console.log(`${student.name} scored ${student.marks} in ${student.course}`);


// Employee object__________
// let employee = {
//     name: "Nazir",
//     age: 21,
//     position: "Web developer",
//     salary: 30000,
//     city: "Lucknow",
//     cpmpany: "ABC Technologies"
// };
// console.log(employee);



// Book object_____________
// let book = {title: "JS Guide", author: "Nazir",  price: 250};
// console.log(book);


// product object___________
// let product = {
//     name: "Laptop", 
//     price: 50000,
//     inStock: true
// };
// console.log(product);



// shopping cart____
// let cart = [
//     {
//     name: "Laptop",
//     price: 50000,
//     quantity: 1
//     },
//     {
//         name: "Mouse",
//         price: 50000,
//         quantity: 2
//     },
//     {
//         name: "Keyboard",
//         price: 1000,
//         quantity: 1
//     }
// ];
// console.log(cart);



// JSON conversion_________
// let student = {
//     name: "Nazir",
//     age: 21
// };
// // object -> JSON
// let jsonData = JSON.stringify(student);  // sabko tod k string me convert krta h.
// console.log(jsonData);

// // JSON -> object
// let newStudent = JSON.parse(jsonData);
// console.log(newStudent);



// Practicce__________
// let obj = {name: "Nazir", skills: ["JS", "HTML", "CSS"]};
// console.log(obj.skills.join(" , "));