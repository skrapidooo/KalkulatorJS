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

//funkcja obsługująca przyciski CE , C , BCK
const czyszczenie = function (key) {
    //obsługa klawisza CE
    if (key === "CE") {
        displayNumber = "";
        temp1 = 0;
        temp2 = 0;
        result = 0;
        operationDone = false;
        operationNumber = 0;
        tempOperator = "";
        datasetTem = "";
        display.textContent = "0";
        // usuwanie ostanitej cyfry
    } else if (key === "backslash") {
        // usuwanie ostatniej cyfry z pierwszej wpisanej liczby
        if (operationNumber === 0 && displayNumber) {
            // console.log("test backslash");
            displayNumber = displayNumber.slice(0, -1);
            if (displayNumber.length > 0) {
                temp1 = displayNumber * 1;
                display.textContent = displayNumber;
            } else {
                temp1 = 0;
                display.textContent = "0"
            }
            // usuwanie ostaniej cyfry z każdej kolejnej wpisanej liczby
        } else if (operationNumber !== 0 && displayNumber) {
            displayNumber = displayNumber.slice(0, -1);
            temp2 = displayNumber * 1;
            if (displayNumber.length > 0) {
                temp2 = displayNumber * 1;
                display.textContent = displayNumber;
            } else {
                temp2 = 0;
                display.textContent = "0"
            }
        }
    } else if (key === "C") {
        // usuwanie tego co jest na ekranie dla pierwszej liczby
        if (operationNumber === 0 && displayNumber) {
            displayNumber = "";
            temp1 = 0;
            temp2 = 0;
            result = 0;
            operationDone = false;
            operationNumber = 0;
            tempOperator = "";
            datasetTem = "";
            display.textContent = "0";
            // usuwanie ostaniej cyfry z każdej kolejnej wpisanej liczby
        } else if (operationNumber !== 0 && displayNumber) {
            displayNumber = "";
            temp2 = 0;
            display.textContent = "0"
        }
    }
}

btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        if ((this.dataset.key * 1) >= 0 || this.dataset.key === "+" || this.dataset.key === "-" || this.dataset.key === "*" || this.dataset.key === "/" || this.dataset.key === "=") {
            działanie(this.dataset.key);
        } else if (this.dataset.key === "CE" || this.dataset.key === "backslash" || this.dataset.key === "C") {
            czyszczenie(this.dataset.key);
        }
    })
})