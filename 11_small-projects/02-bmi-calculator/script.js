const weightInput = document.querySelector("#weight");
const heightInput = document.querySelector("#height");
const calculateBtn = document.querySelector("#calculateBtn");

const bmiValue = document.querySelector("#bmiValue");
const bmiCategory = document.querySelector("#bmiCategory");


calculateBtn.addEventListener("click", function () {

    const weight = Number(weightInput.value);
    const heightCm = Number(heightInput.value);

    if (weight <= 0 || heightCm <= 0) {
        bmiValue.textContent = "--";
        bmiCategory.textContent = "Please enter valid values.";
        return;
    }

    const heightMeter = heightCm / 100;

    const bmi = weight / (heightMeter * heightMeter);

    bmiValue.textContent = bmi.toFixed(2);


    if (bmi < 18.5) {

        bmiCategory.textContent = "Underweight";

    } else if (bmi < 25) {

        bmiCategory.textContent = "Normal Weight";

    } else if (bmi < 30) {

        bmiCategory.textContent = "Overweight";

    } else {

        bmiCategory.textContent = "Obese";

    }

});