document.addEventListener("DOMContentLoaded", function() {

    const electricButton = document.getElementById("electricBill");
    const incomeButton = document.getElementById("incomeProof");

    electricButton.addEventListener("click", function () {
        processHPACalculator(1);
    })

    incomeButton.addEventListener("click", function () {
        processHPACalculator(2);
    })

    baseModel.clearButton.addEventListener("click", function () {
        clearText();
    })
});

function processHPACalculator(processType) {
    const input = document.getElementById("input").value;
    console.log("process type: " + processType);
    if(processType === 1) {
        electricHPA(input);
    } else {
        incomeHPA(input);
    }
}

function electricHPA(input) {
    const electricCriterias = [
        { min: 0, max: 599, message: "Electric Bill amount didn't meet the minimum HPA" },
        { min: 600, max: 999, message: "290 1 BOX" },
        { min: 1000, max: 1299, message: "520 1 BOX / 290 2 BOXES" },
        { min: 1300, max: 1399, message: "720, 520 1 BOX / 290 2 BOXES" },
        { min: 1400, max: 1499, message: "720 1 BOX / 520, 290 2 BOXES" },
        { min: 1500, max: 1699, message: "720 1 BOX / 520 2 BOXES / 290 3 BOXES" },
        { min: 1700, max: 1999, message: "720, 520 2 BOXES / 290 3 BOXES" },
        { min: 2000, max: 2199, message: "1050 1 BOX / 720 2 BOXES / 520, 290 3 BOXES" },
        { min: 2200, max: 2499, message: "1050 1 BOX / 720, 520, 290 3 BOXES" },
        { min: 2500, max: 2599, message: "1050 2 BOXES / 720, 520, 290 3 BOXES" },
        { min: 2600, max: 2899, message: "1350 1 BOX / 1050 2 BOXES / 720, 520, 290 3 BOXES" },
        { min: 2900, max: 2999, message: "1350 1 BOX / 1050, 720, 520, 290 3 BOXES" },
        { min: 3000, max: 3199, message: "1350 2 BOXES / 1050, 720, 520, 290 3 BOXES" },
        { min: 3200, max: 3499, message: "1990, 1650 1 BOX / 1350 2 BOXES / 1050, 720, 520, 290 3 BOXES" },
        { min: 3500, max: 3699, message: "1990, 1650 1 BOX / 1350, 1050, 720, 520, 290 3 BOXES" },
        { min: 3700, max: 4099, message: "1990, 1650 2 BOXES / 1350, 1050, 720, 520, 290 3 BOXES " },
        { min: 4100, max: 4599, message: "1990, 1650, 1350, 1050, 720, 520, 290 3 BOXES" },
        { min: 4600, max: Infinity, message: "1990 4 BOXES" }
    ];

        electricResult = processCalculatorValidation(input,electricCriterias);

        document.getElementById("resultHPA").value = electricResult;
}

function incomeHPA(input) { 
    const incomeCriterias = [
        { min: 0, max: 9699, message: "Income amount didn't meet the minimum HPA" },
        { min: 9700, max: 16299, message: "290 1 BOX" },
        { min: 16300, max: 17299, message: "520, 290 1 BOX" },
        { min: 17300, max: 20999, message: "520 1 BOX / 290 2 BOXES" },
        { min: 21000, max: 23999, message: "720, 520 1 BOX / 290 2 BOXES" },
        { min: 24000, max: 24999, message: "720 1 BOX / 520, 290 2 BOXES" },
        { min: 24000, max: 28699, message: "720 1 BOX / 520 2 BOXES / 290 3 BOXES" },
        { min: 28700, max: 31699, message: "720, 520 2 BOXES / 290 3 BOXES" },
        { min: 31700, max: 32999, message: "720 2 BOXES / 520, 290 3 BOXES" },
        { min: 33000, max: 36299, message: "1050 1 BOX / 720 2 BOXES / 520, 290 3 BOXES" },
        { min: 36300, max: 40699, message: "1050 1 BOX / 720, 520, 290 3 BOXES" },
        { min: 40700, max: 42999, message: "1050 2 BOXES / 720, 520, 290 3 BOXES" },
        { min: 43000, max: 48299, message: "1350 1 BOX / 1050 2 BOXES / 720, 520, 420 3 BOXES" },
        { min: 48300, max: 50699, message: "1350 1 BOX / 1050, 720, 520, 290 3 BOXES" },
        { min: 50700, max: 52999, message: "1350 2 BOXES / 1050, 720, 520, 290 3 BOXES" },
        { min: 53000, max: 58299, message: "1990, 1650 1 BOX / 1350 2 BOXES / 1050, 720, 520, 290 3 BOXES" },
        { min: 58300, max: 60699, message: "1990, 1650 1 BOX / 1350, 1050, 720, 520, 290 3 BOXES" },
        { min: 60700, max: 68299, message: "1990, 1650 2 BOXES / 1350, 1050, 720, 520, 290 3 BOXES" },
        { min: 68300, max: 75999, message: "1990, 1650, 1350, 1050, 720, 520, 290 3 BOXES" },
        { min: 76000, max: Infinity, message: "1990 4 BOXES" }
    ];

    incomeResult = processCalculatorValidation(input,incomeCriterias);

    document.getElementById("resultHPA").value = incomeResult;
}

function clearText() {
    document.getElementById("input").value = "";
    document.getElementById("resultHPA").value = "";
}

function processCalculatorValidation(input,data) {

    if(input === '') {
        return "Please enter any amount!"
    }

    // is a Number
    if (isNaN(input)) {       
        return "Invalid input! Please enter a number format.";
    } 

    // find matched criteria
    const criteriaResult = data.find(criteria => input >= criteria.min && input <= criteria.max);
    console.log(criteriaResult);
    return criteriaResult.message ?? "Invalid result"; 
}