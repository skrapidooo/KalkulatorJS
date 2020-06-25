const btns = document.querySelectorAll('div[data-key]');
const display = document.querySelector(".dislayScreen");
let currentNumber = "";
let result = "";

const getNumbers = function (cyfra) {
    // if (result === "") {
    if (currentNumber.length === 0 && cyfra === 0) {
        return
    } else if (currentNumber.length === 10) return
    currentNumber += cyfra
    // result = currentNumber * 1;

    // } else {
    //     if (currentNumber.length === 0 && cyfra === 0) {
    //         return
    //     } else if (currentNumber.length === 10) return
    //     currentNumber += cyfra
    //     result = currentNumber * 1;
    // }
    display.textContent = currentNumber;
    return currentNumber;
}

const operacjeArytmetyczne = function (liczba, dzialanie) {
    if (result === "") {
        result = liczba * 1
        currentNumber = ""
        return
    } else {


        if (dzialanie === "+") {
            result += liczba * 1;
            display.textContent = result;
            currentNumber = ""
            return result;
        } else if (dzialanie === "-") {
            result -= liczba * 1;
            display.textContent = result;
            currentNumber = ""
            return result;
        } else if (dzialanie === "*") {
            result *= liczba * 1;
            display.textContent = result;
            currentNumber = ""
            return result;
        } else if (dzialanie === "*") {
            result *= (liczba * 1);
            display.textContent = result;
            currentNumber = ""
            return result;
        }
    }
}

btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        if (typeof (this.dataset.key * 1) === "number" && (this.dataset.key * 1) >= 0) {
            return getNumbers(this.dataset.key * 1);
        } else if (this.dataset.key === "+") {
            return operacjeArytmetyczne(currentNumber, "+")
        } else if (this.dataset.key === "-") {
            return operacjeArytmetyczne(currentNumber, "-")
        } else if (this.dataset.key === "*") {
            return operacjeArytmetyczne(currentNumber, "*")
        } else if (this.dataset.key === "/") {
            return operacjeArytmetyczne(currentNumber, "/")
        }
    })
})