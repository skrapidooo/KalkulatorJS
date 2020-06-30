const btns = document.querySelectorAll('div[data-key]');
const display = document.querySelector(".dislayScreen");
let displayNumber = "";
let temp1 = 0;
let temp2 = 0;
let result = 0;
let operationDone = false;
//let typeOfOperation = "";
let operationNumber = 0;
let tempOperator = "";
let datasetTem = "";

const czyszczenie = (type) => {
    if (type === "CE") {
        display.textContent = "0";
        displayNumber = "";
        temp = 0;
        result = 0;
        operator = "";
    }
}
const oblicz = function (string) {
    if (operationNumber !== 0 && string === "+") {
        console.log("test2")
        result = temp1 + temp2;
        temp1 = result;
        display.textContent = result
    } else if (operationNumber !== 0 && string === "-") {
        result = temp1 - temp2;
        temp1 = result;
        display.textContent = result
    } else if (operationNumber !== 0 && string === "*") {
        result = temp1 * temp2;
        temp1 = result;
        display.textContent = result
    } else if (operationNumber !== 0 && string === "/") {
        result = temp1 / temp2;
        temp1 = result;
        display.textContent = result
    } else {
        return
    }

}
// funkcja wykonująca działania matematyczne
const działanie = function (dataset) {
    // odczytywanie pierwszej liczby w działaniu
    if ((dataset * 1) >= 0 && operationNumber === 0) {
        displayNumber += dataset;
        temp1 = displayNumber * 1;
        display.textContent = displayNumber;
        operationDone = true;
        // odczytywanie drugiej liczby w działaniu
    } else if ((dataset * 1) >= 0 && operationNumber !== 0) {
        display.textContent = "0";
        displayNumber += dataset;
        temp2 = displayNumber * 1;
        display.textContent = displayNumber
        operationDone = true;
        datasetTem = "";
        // wykonywnie działania na ostatniej i przedostaniej/wyniku 
    } else if (dataset === "+") {
        // wykonywanie działania jezeli operator = nie był uprzednio wciśnięty i była wpisana druga liczba
        if (datasetTem !== "=" && operationDone) {
            oblicz(tempOperator);
            operationNumber++;
            displayNumber = "";
            tempOperator = "+";
            operationDone = false;
            console.log("t1");
            // zmiana operacji matematycznej 
        } else if (datasetTem !== "=" && operationDone === false) {
            console.log("t2");
            tempOperator = "+";
            //wykonanie kolejnego działania po sumie i podaniu nowej liczby
        } else if (datasetTem === "=" && operationDone) {
            operationNumber++;
            displayNumber = "";
            tempOperator = "+";
            console.log("t3");
            return
            // zmiana operacji matematycznej po wcześniejszym sumowaniu
        } else if (datasetTem === "=" && operationDone === false) {
            tempOperator = "+";
            console.log("t4");
        }
    } else if (dataset === "-") {
        if (datasetTem !== "=" && operationDone) {
            oblicz(tempOperator);
            operationNumber++;
            displayNumber = "";
            tempOperator = "-";
            operationDone = false;
        } else if (datasetTem !== "=" && operationDone === false) {
            tempOperator = "-";
        } else if (datasetTem === "=" && operationDone) {
            operationNumber++;
            displayNumber = "";
            tempOperator = "-";
            return
        } else if (datasetTem === "=" && operationDone === false) {
            tempOperator = "-";
        }
    } else if (dataset === "*") {
        if (datasetTem !== "=" && operationDone) {
            oblicz(tempOperator);
            operationNumber++;
            displayNumber = "";
            tempOperator = "*";
            operationDone = false;
        } else if (datasetTem !== "=" && operationDone === false) {
            tempOperator = "*";
        } else if (datasetTem === "=" && operationDone === false) {
            tempOperator = "*";
        } else if (datasetTem === "=" && operationDone) {
            operationNumber++;
            displayNumber = "";
            tempOperator = "*";
            return
        }
    } else if (dataset === "/") {
        if (datasetTem !== "=" && operationDone) {
            oblicz(tempOperator);
            operationNumber++;
            displayNumber = "";
            tempOperator = "/";
            operationDone = false;
        } else if (datasetTem !== "=" && operationDone === false) {
            tempOperator = "/";
        } else if (datasetTem === "=" && operationDone === false) {
            tempOperator = "/";
        } else if (datasetTem === "=" && operationDone) {
            operationNumber++;
            displayNumber = "";
            tempOperator = "/";
            return
        }
    }
    // suma nowy kod
    else if (dataset === "=") {
        oblicz(tempOperator);
        operationNumber++;
        displayNumber = "";
        datasetTem = "=";
    }
}

btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        if ((this.dataset.key * 1) >= 0 || this.dataset.key === "+" || this.dataset.key === "-" || this.dataset.key === "*" || this.dataset.key === "/" || this.dataset.key === "=") {
            działanie(this.dataset.key);
        }
    })
})