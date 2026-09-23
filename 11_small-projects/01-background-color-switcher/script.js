const buttons = document.querySelectorAll(".color-btn");
const currentColor = document.querySelector("#currentColor");

buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        const color = button.dataset.color;

        document.body.style.backgroundColor = color;

        currentColor.textContent = color;

    });

});