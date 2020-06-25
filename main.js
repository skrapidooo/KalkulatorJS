const btns = document.querySelectorAll('div[data-key]');
const display = document.querySelector(".dislayScreen");
let displayNumber = "";
let temp = 0;
let result = 0;
let operator = "";

const getNumbers = function (cyfra) {
    displayNumber += cyfra;
    if (displayNumber[0] === "0") {
        return displayNumber = ""
    } else if (Math.floor(displayNumber * 1) > 1000000000) return

    display.textContent = displayNumber;
    return displayNumber;
}

const operacjeArytmetyczne = function (liczba, dzialanie) {
    if (operator === "") {
        temp = liczba * 1;
        operator = dzialanie;
        displayNumber = "";
        return
    } else if (operator === "+") {
        result = (temp + liczba * 1);
        temp = result;
        display.textContent = result;
        operator = dzialanie;
        displayNumber = "";
        return
    } else if (operator === "-") {
        result = (temp - liczba * 1);
        temp = result;
        display.textContent = result;
        operator = dzialanie;
        displayNumber = "";
        return
    } else if (operator === "*") {
        result = (temp * (liczba * 1));
        temp = result;
        display.textContent = result;
        operator = dzialanie;
        displayNumber = "";
        return
    } else if (operator === "/") {
        result = (temp / (liczba * 1));
        temp = result;
        display.textContent = result;
        operator = dzialanie;
        displayNumber = "";
        return
    }
    // else if (dzialanie === "=") {
    //     result = temp + operator + liczba;
    //     temp = result;
    //     display.textContent = result;
    //     operator = dzialanie;
    //     displayNumber = "";
    //     return
    // }


}

const czyszczenie = (type) => {
    if (type === "CE") {
        display.textContent = "0";
        displayNumber = "";
        temp = 0;
        result = 0;
        operator = "";
    }
}

btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        if (typeof (this.dataset.key * 1) === "number" && (this.dataset.key * 1) >= 0) {
            return getNumbers(this.dataset.key * 1);
        } else if (this.dataset.key === "+") {
            return operacjeArytmetyczne(displayNumber, "+")
        } else if (this.dataset.key === "-") {
            return operacjeArytmetyczne(displayNumber, "-");
        } else if (this.dataset.key === "*") {
            return operacjeArytmetyczne(displayNumber, "*")
        } else if (this.dataset.key === "/") {
            return operacjeArytmetyczne(displayNumber, "/")
        } else if (this.dataset.key === "CE") {
            return czyszczenie("CE");
        }
    })
})