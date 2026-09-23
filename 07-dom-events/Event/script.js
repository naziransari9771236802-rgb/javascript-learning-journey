// click Event__________-
// let btn = document.querySelector("#btn");
// btn.addEventListener("click", function(){
//     console.log("Button Clicked");
// });

// ________click Event
// let likeBtn = document.querySelector("#likeBtn");
// let likes = document.querySelector("#likes");

// let count = 0;

// likeBtn = addEventListener("click", function() {
//     count++;
//     likes.textContent = count;
// });


// db click ____________
// let photo = document.querySelector("#photo");
// let message = document.querySelector("#message");

// photo.addEventListener("dblclick", function() {
//     message.textContent = "Liked ❤️";
// });



// ________mouseover____________

// let product = document.querySelector("#product");
// let message = document.querySelector("#message");

// product.addEventListener("mouseover", function() {
//     message.textContent = "product dekha ja rha h 👀";
//     product.style.backgroundColor = "yellow";
// });



// _______________mouseenter__________
// let product = document.querySelector("#product");
// product.addEventListener("mouseenter", function() {
//     product.style.backgroundColor = "lightblue";
// });



// ______________mouseleave__________
// let product = document.querySelector("#product");
// product.addEventListener("mouseenter", function() {
//     product.style.backgroundColor = "lightblue";
// });

// product.addEventListener("mouseleave", function() {
//     product.style.backgroundColor = "white";
// });



// __________mousemove_________
// let box = document.querySelector("#box");
// box.addEventListener("mousemove", function() {
//     console.log("Mouse move ho rha h👋");
// });



// __________keydown________
// let search = document.querySelector("#search");
// search.addEventListener("keydown", function(event) {

//     if (event.key === "Enter") {
//         console.log("Search hoo rha h");
//     }
// });



// ______keyup___________
// let inputBox = document.querySelector("#inputBox");
// inputBox.addEventListener("keyup", function(){
//     console.log("key chod di");
// });


// _____________input____________
// let searchBox = document.querySelector("#searchBox");
// searchBox.addEventListener("input", function() {
//     console.log("input change hua");
// });



// ____________change___________
// let city = document.querySelector("#city");
// city.addEventListener("change", function(){
//     console.log("city change hua");
// });


// _________COLOR CHANGE KRNA TAP KRNE PAR__________
// let button = document.querySelector("#colorBtn");

// let colors = ["red", "blue", "green", "yellow", "purple", "pink"];

// let index = 0;

// button.addEventListener("click", function() {

//     document.body.style.backgroundColor = colors[index];

//     index++;
    
//     if (index === colors.length) {
//         index = 0;

//     }
// });



// _______________Submit______________
// let form = document.querySelector("#myForm");
// form.addEventListener("submit", function(event) {

//     event.preventDefault();

//     let name = document.querySelector("#name").value;
//     let email = document.querySelector("#email").value;
//     console.log(name);
//     console.log(email);
// });




// _________________preventDefault________________
// let form = document.querySelector("#myForm");
// form.addEventListener("submit",  function(event) {
//     event.preventDefault();

//     let name = document.querySelector("#name").value;
//     console.log(name);
// });




// ______________stopPropagation________________
// let parent = document.querySelector("#parent");
// let child = document.querySelector("#child");

// parent.addEventListener("click", function() {
//     console.log("parent clicked");
// });

// child.addEventListener("click", function(event) {
//     event.stopPropagation();
//     console.log("Button clicked");
// });



// ______________Event bubling___________________
// let parent = document.querySelector("#parent");
// let child = document.querySelector("#child");

// parent.addEventListener("click", function() {
//     console.log("parent");
// });

// child.addEventListener("click", function(event) {
//     event.stopPropagation();
//     console.log("child");
// });




// ____________Event Delegatin_____________
// let products = document.querySelector("#products");
// products.addEventListener("click", function(event) {
//     console.log(event.target.textContent);
// });


// _________event.target____________
// let list = document.querySelector("#list");
// list.addEventListener("click", function(event) {
//     console.log(event.target);
// });



// ________________keyboard event_____________
// let input = document.querySelector("#name");
// let result = document.querySelector("#result");

// input.addEventListener("keydown", function(event) {
//     result.textContent = "Aapne press kiya" + event.key;
// });



// ______________drag event____________
// let box = document.querySelector("#box");
// box.addEventListener("dragstart", function() {
//     console.log("Dragging Start");
// });
// box.addEventListener("drag", function() {
//     console.log("Dragging...");
// });
// box.addEventListener("dragend",function() {
//     console.log("Dragging End");
// });



// ____________scroll event____________
// window.addEventListener("scroll", function() {
//     console.log("page Scroll ho rahi hai");
// });


// window.addEventListener("scroll", function() {
//     console.log(window.scrollY);
// });

// let result = document.querySelector("#result");
// window.addEventListener("scroll", function() {
//     result.textContent = "Scroll Position: " + window.scrollY;
// });





// ______resize event_________
// let resulr = document.querySelector("#result");
// window.addEventListener("resize", function() {
//     console.log("Window Resize Hui");
// });


let result = document.querySelector("#result");
window.addEventListener("resize", function() {
    result.textContent = 
    "width: " + window.innerWidth + 
    " | Height: " + window.innerHeight; 
});