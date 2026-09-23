const guessInput = document.querySelector("#guessInput");
const guessBtn = document.querySelector("#guessBtn");

const message = document.querySelector("#message");
const attemptsText = document.querySelector("#attempts");

const resetBtn = document.querySelector("#resetBtn");


let randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

let gameOver = false;


guessBtn.addEventListener("click", function () {

    if (gameOver) {
        message.textContent = "Game over! Start a new game.";
        return;
    }

    const guess = Number(guessInput.value);

    if (guess < 1 || guess > 100) {

        message.textContent = "Please enter a number between 1 and 100.";

        return;
    }


    attempts++;

    attemptsText.textContent = attempts;


    if (guess === randomNumber) {

        message.textContent =
            `🎉 Correct! The number was ${randomNumber}.`;

        gameOver = true;

    } else if (guess < randomNumber) {

        message.textContent = "Too low! Try a bigger number.";

    } else {

        message.textContent = "Too high! Try a smaller number.";

    }


    guessInput.value = "";

});


resetBtn.addEventListener("click", function () {

    randomNumber = Math.floor(Math.random() * 100) + 1;

    attempts = 0;

    gameOver = false;

    attemptsText.textContent = "0";

    message.textContent = "Start guessing...";

    guessInput.value = "";

});