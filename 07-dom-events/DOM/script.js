let count = 0;

// HTML ellement ko selct kiy GYA.
let countText = document.querySelector("#count");
let increase = document.querySelector("#increase");
let decrease = document.querySelector("#decrease");
let reset = document.querySelector("#reset");

// ___________+button____
increase.addEventListener("click", function() {
    count++;
    countText.textContent = count;
});

// _____________-button____________
decrease.addEventListener("click", function() {
    count--;
    countText.textContent = count;
});

// ____________Reset button__________
reset.addEventListener("click", function() {
    count = 0;
    countText.textContent = count;
});