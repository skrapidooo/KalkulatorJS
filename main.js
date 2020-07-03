const btns = document.querySelectorAll('div[data-key]');
const display = document.querySelector(".dislayScreen");
const memoryButtons = document.querySelectorAll(".memoryKey");

let displayNumber = "";
let temp1 = 0;
let temp2 = 0;
let result = 0;
let operationDone = false;
//let typeOfOperation = "";
let operationNumber = 0;
let tempOperator = "";
let datasetTem = "";

let memoryResult = 0;
let memoryActive = false;


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

//specjalne dzialania
const specjalneDzialanie = function (key) {
    // PROCENT
    if (key === "%") {
        //oblicznie % dla pierwszej wpisanej liczby
        if (operationNumber === 0 && datasetTem !== "=") {
            temp1 = temp1 * 0.01;
            console.log(temp1);
            displayNumber = "";
            display.textContent = temp1;
            // obliczanie procentu dla kolejnej wpisanej liczby lub liczby w działaniu
        } else if (operationNumber !== 0 && datasetTem !== "=") {
            temp2 = temp2 * 0.01;
            console.log(temp2);
            displayNumber = "";
            display.textContent = temp2;
            // obliczanie procentu dla wyliczonej wartości
        } else if (operationNumber !== 0 && datasetTem === "=") {
            console.log(result);
            result = result * 0.01;
            temp1 = result;
            console.log(result);
            display.textContent = result;
        }
    }
    // odwaracanie liczby
    else if (key === "1/") {
        //odwracanie pierwszej wpisanej liczby
        if (operationNumber === 0 && datasetTem !== "=") {
            temp1 = Math.round((1 / temp1) * 100000000) / 100000000;
            if (temp1 >= (1 / 100000000)) {
                displayNumber = "";
                display.textContent = temp1;
            } else {
                displayNumber = "";
                display.textContent = "0";
            }
            // obliczanie odwróconej liczby dla kolejnej wpisanej liczby lub liczby w działaniu
        } else if (operationNumber !== 0 && datasetTem !== "=") {
            temp2 = Math.round((1 / temp2) * 100000000) / 100000000;
            if (temp2 >= (1 / 100000000)) {
                displayNumber = "";
                display.textContent = temp2;
            } else {
                displayNumber = "";
                display.textContent = "0";
            }
            // obliczanie odwróconej liczby dla wyliczonej wartości
        } else if (operationNumber !== 0 && datasetTem === "=") {
            result = Math.round((1 / result) * 100000000) / 100000000;
            if (result >= (1 / 100000000)) {
                displayNumber = "";
                display.textContent = result;
                temp1 = result;
            } else {
                temp1 = result;
                displayNumber = "";
                display.textContent = "0";
            }
        }
    }
    // DO KWADRATU
    else if (key === "Math.pow(") {
        // do kwadratu dla pierwszej wpisanej liczby
        if (operationNumber === 0 && datasetTem !== "=") {
            temp1 = temp1 * temp1;
            console.log(temp1);
            displayNumber = "";
            display.textContent = temp1;
            // do kwadratu dla kolejnej wpisanej liczby lub liczby w działaniu
        } else if (operationNumber !== 0 && datasetTem !== "=") {
            temp2 = temp2 * temp2;
            console.log(temp2);
            displayNumber = "";
            display.textContent = temp2;
            // do kwadratu dla wyliczonej wartości
        } else if (operationNumber !== 0 && datasetTem === "=") {
            console.log(result);
            result = result * result;
            temp1 = result;
            console.log(result);
            display.textContent = result;
        }
    }
    // PIERWIASTEK
    else if (key === "Math.sqrt(") {
        // pierwiastek dla pierwszej wpisanej liczby
        if (operationNumber === 0 && datasetTem !== "=") {
            temp1 = Math.sqrt(temp1);
            console.log(temp1);
            displayNumber = "";
            display.textContent = temp1;
            // pierwiastek dla kolejnej wpisanej liczby lub liczby w działaniu
        } else if (operationNumber !== 0 && datasetTem !== "=") {
            temp2 = Math.sqrt(temp2);
            console.log(temp2);
            displayNumber = "";
            display.textContent = temp2;
            // pierwiastek dla wyliczonej wartości
        } else if (operationNumber !== 0 && datasetTem === "=") {
            console.log(result);
            result = Math.sqrt(result);
            temp1 = result;
            console.log(result);
            display.textContent = result;
        }
    }
}

const znakiSpecjalne = function (key) {
    //zmiana znaku
    if (key === "-1") {
        //zmiana znaku dla pierwszej liczby
        if (operationNumber === 0) {
            temp1 = temp1 * (-1);
            displayNumber = temp1 + ""
            display.textContent = displayNumber;
            // zmiana znaku dla kolejnej liczby
        } else if (operationNumber !== 0) {
            displayNumber = "";
            temp2 = temp2 * (-1);
            displayNumber = temp2 + ""
            display.textContent = displayNumber;
        }
    }
    //dodanie przecinka
    if (key === "." && !(displayNumber.includes("."))) {
        displayNumber = displayNumber + "."
        display.textContent = displayNumber;
    }
}

//klawisze MEMORY
const działaniaMemory = function (key) {
    if (key === 0 && memoryActive) {
        memoryResult = 0;
        display.textContent = "0"
        displayNumber = "";
        memoryActive = false;
    } else if (key === 1 && memoryActive) {
        temp1 = memoryResult;
        temp2 = memoryResult;
        operationNumber++;
        console.log(memoryResult);
        display.textContent = memoryResult
    } else if (key === 2) {
        memoryResult += display.textContent * 1;
        displayNumber = "";
        memoryActive = true;
    } else if (key === 3) {
        memoryOperator = "-";
        memoryResult -= display.textContent * 1;;
        displayNumber = "";
        memoryActive = true;
    } else if (key === 4) {
        memoryResult = display.textContent * 1;
        memoryActive = true;
    }
}


btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        if ((this.dataset.key * 1) >= 0 || this.dataset.key === "+" || this.dataset.key === "-" || this.dataset.key === "*" || this.dataset.key === "/" || this.dataset.key === "=") {
            działanie(this.dataset.key);
        } else if (this.dataset.key === "CE" || this.dataset.key === "backslash" || this.dataset.key === "C") {
            czyszczenie(this.dataset.key);
        } else if (this.dataset.key === "%" || this.dataset.key === "1/" || this.dataset.key === 'Math.pow(' || this.dataset.key === "Math.sqrt(") {
            specjalneDzialanie(this.dataset.key)
        } else if (this.dataset.key === "-1" || this.dataset.key === ".") {
            znakiSpecjalne(this.dataset.key)
        }
    })
})

memoryButtons.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
        if (index >= 2) {
            memoryButtons[0].classList.add('active');
            memoryButtons[1].classList.add('active');
            działaniaMemory(index);
        } else if (index === 0) {
            memoryButtons[0].classList.remove('active');
            memoryButtons[1].classList.remove('active');
            działaniaMemory(index);
        } else if (index === 1) {
            działaniaMemory(index);
        }

    })
})