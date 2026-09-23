const colorBox = document.querySelector("#colorBox");
const colorCode = document.querySelector("#colorCode");
const changeColorBtn = document.querySelector("#changeColorBtn");


function generateRandomColor() {

    const letters = "0123456789ABCDEF";

    let color = "#";

    for (let i = 0; i < 6; i++) {

        const randomIndex =
            Math.floor(Math.random() * 16);

        color += letters[randomIndex];
    }

    return color;
}


changeColorBtn.addEventListener("click", function () {

    const newColor = generateRandomColor();

    colorBox.style.backgroundColor = newColor;

    colorCode.textContent = newColor;

});