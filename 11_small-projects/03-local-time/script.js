const clock = document.querySelector("#clock");
const date = document.querySelector("#date");


function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");


    clock.textContent = `${hours}:${minutes}:${seconds}`;


    const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    date.textContent = now.toLocaleDateString(
        "en-IN",
        dateOptions
    );
}


updateClock();

setInterval(updateClock, 1000);