// Accessing the input tags
const weightInputEl = document.querySelector("#weight");
const heightInputEl = document.querySelector("#height");

// Accessing the select options
const weightUnitsEl = document.querySelector("#weight-units");
const heightUnitsEl = document.querySelector("#height-units");

// Showing result
const showResultEl = document.querySelector("#show-result");

// Clear button
const clearBtnEl = document.querySelector("#clear");

//change opacity
const obese=document.getElementById("obese")
const overweight=document.getElementById("overweight")
const normal=document.getElementById("normal")
const underweight=document.getElementById("underweight")

// Handling click event on clear button
// as we click on the clear button it will remove the data on input tags
clearBtnEl.addEventListener("click", () => {
    weightInputEl.value = "";
    heightInputEl.value = "";
    showResultEl.innerHTML = "00.0";
});

// Getting the calculate button
const resultBtnEl = document.querySelector("#result");

// Handling click event on result button
resultBtnEl.addEventListener("click", () => {
    // Taking the weight and height value from user
    let weightValue = parseFloat(weightInputEl.value);
    let heightValue = parseFloat(heightInputEl.value);

    // Check the units of weight and height
    const weightUnit = weightUnitsEl.value;
    const heightUnit = heightUnitsEl.value;

    if (weightUnit === 'pounds') {
        // Convert into kg
        // 1 pound = 0.453592 kg
        weightValue = weightValue * 0.453592;
    }

    if (heightUnit === 'centimeter') {
        // Convert centimeter into meter
        heightValue = heightValue / 100;
    } else if (heightUnit === 'inches') {
        // Convert inches into meter
        heightValue = heightValue * 0.0254;
    } else if (heightUnit === 'feet') {
        // Convert feet into meter
        heightValue = heightValue * 0.3048;
    }

    // Calculating the BMI of the person
    if (weightValue > 0 && heightValue > 0) {
        const bmi = weightValue / (heightValue * heightValue);
        const response = document.querySelector('.response a');
        const response2 = document.querySelector('.response');
        if (bmi>=30){
            obese.style.opacity=1
            underweight.style.opacity=0.2
            normal.style.opacity=0.2
            overweight.style.opacity=0.2
            response.href = "Obese.html";
        }
        else if(bmi >=25 ){
            obese.style.opacity=0.2
            underweight.style.opacity=0.2
            normal.style.opacity=0.2
            overweight.style.opacity=1
            response.href = "overweight.html";
        }
        else if(bmi >=18.5 ){
            obese.style.opacity=0.2
            underweight.style.opacity=0.2
            normal.style.opacity=1
            overweight.style.opacity=0.2
            response2.innerHTML = "Congratulations"
        }
        else{
            obese.style.opacity=0.2
            underweight.style.opacity=1
            normal.style.opacity=0.2
            overweight.style.opacity=0.2
            response.href = "underweight.html";
        }
        showResultEl.innerHTML = bmi.toFixed(2);
    } else {
        showResultEl.innerHTML = "Invalid input";
    }
});
