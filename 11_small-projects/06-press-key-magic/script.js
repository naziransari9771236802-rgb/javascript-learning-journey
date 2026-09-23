const keyDisplay = document.querySelector("#keyDisplay");

const keyName = document.querySelector("#keyName");
const keyCode = document.querySelector("#keyCode");
const keyWhich = document.querySelector("#keyWhich");


document.addEventListener("keydown", function (event) {

    keyDisplay.textContent = event.key;

    keyName.textContent = event.key;

    keyCode.textContent = event.code;

    keyWhich.textContent = event.which;


    keyDisplay.classList.add("active");


    setTimeout(function () {

        keyDisplay.classList.remove("active");

    }, 150);

});