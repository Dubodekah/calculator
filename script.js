function add(firstNum, secondNum) { // addition function
    return firstNum + secondNum;
}

function subtract(firstNum, secondNum) { // subtraction function
    return firstNum - secondNum;
}

function multiply(firstNum, secondNum) { // multiplication function
    return firstNum * secondNum;
}

function divide(firstNum, secondNum) { // division function
    if (secondNum === 0) {
        alert("You cannot divide by zero.");
    } else {
        return firstNum / secondNum;
    }
}

function operate(operator, first, second) {
    if (operator == "+") {
        return add(first, second);
    }

    if (operator == "-") {
        return subtract(first, second);
    }

    if (operator == "*") {
        return multiply(first, second);
    }

    if (operator == "/") {
        return divide(first, second);
    }
}

let numOne = "";
let numTwo = "";
let operand = "";
let answer = "";

function populateDisplay(value) {
    if (isNaN(value)) {
        document.getElementById("screenTop").textContent += value;
    } else {
        document.getElementById("screenTop").textContent += value.toString();
    }
}

zeroBtn.addEventListener("click", (e) => {
    if (document.getElementById("screenTop").textContent.length < 24) {
        populateDisplay(0);

        if (operand === "") {
            if (numOne === "") {
                numOne = "0";
            } else {
                numOne = numOne + "0";
            }
        } else if (operand != "") {
            if (numTwo === "") {
                numTwo = "0";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            } else if (numTwo != "" && answer === "") {
                numTwo = numTwo + "0";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            } else if (numTwo === "" && answer != "") {
                numTwo = "0";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            } else {
                numTwo = numTwo + "0";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            }
        }
    }
})

oneBtn.addEventListener("click", (e) => {
    if (document.getElementById("screenTop").textContent.length < 24) {
        if (answer != "") {
            if (document.getElementById("screenBottom").textContent == answer) {
                document.getElementById("screenTop").textContent = "";
                document.getElementById("screenBottom").textContent = "";
                numOne = "";
                numTwo = "";
                operand = "";
                answer = "";
            }
        }

        populateDisplay(1);

        if (operand === "") {
            if (numOne === "") {
                numOne = "1";
            } else {
                numOne = numOne + "1";
            }
        } else if (operand != "") {
            if (numTwo === "") {
                numTwo = "1";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            } else if (numTwo != "" && answer === "") {
                numTwo = numTwo + "1";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            } else if (numTwo === "" && answer != "") {
                numTwo = "1";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            } else {
                numTwo = numTwo + "1";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            }
        }
    }
})


twoBtn.addEventListener("click", (e) => {
    if (document.getElementById("screenTop").textContent.length < 24) {
        if (answer != "") {
            if (document.getElementById("screenBottom").textContent == answer) {
                document.getElementById("screenTop").textContent = "";
                document.getElementById("screenBottom").textContent = "";
                numOne = "";
                numTwo = "";
                operand = "";
                answer = "";
            }
        }

        populateDisplay(2);

        if (operand === "") {
            if (numOne === "") {
                numOne = "2";
            } else {
                numOne = numOne + "2";
            }
        } else if (operand != "") {
            if (numTwo === "") {
                numTwo = "2";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            } else if (numTwo != "" && answer === "") {
                numTwo = numTwo + "2";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            } else if (numTwo === "" && answer != "") {
                numTwo = "2";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            } else {
                numTwo = numTwo + "2";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            }
        }
    }
})

threeBtn.addEventListener("click", (e) => {
    if (document.getElementById("screenTop").textContent.length < 24) {
        if (answer != "") {
            if (document.getElementById("screenBottom").textContent == answer) {
                document.getElementById("screenTop").textContent = "";
                document.getElementById("screenBottom").textContent = "";
                numOne = "";
                numTwo = "";
                operand = "";
                answer = "";
            }
        }

        populateDisplay(3);

        if (operand === "") {
            if (numOne === "") {
                numOne = "3";
            } else {
                numOne = numOne + "3";
            }
        } else if (operand != "") {
            if (numTwo === "") {
                numTwo = "3";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            } else if (numTwo != "" && answer === "") {
                numTwo = numTwo + "3";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            } else if (numTwo === "" && answer != "") {
                numTwo = "3";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            } else {
                numTwo = numTwo + "3";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            }
        }
    }
})

fourBtn.addEventListener("click", (e) => {
    if (document.getElementById("screenTop").textContent.length < 24) {
        if (answer != "") {
            if (document.getElementById("screenBottom").textContent == answer) {
                document.getElementById("screenTop").textContent = "";
                document.getElementById("screenBottom").textContent = "";
                numOne = "";
                numTwo = "";
                operand = "";
                answer = "";
            }
        }

        populateDisplay(4);

        if (operand === "") {
            if (numOne === "") {
                numOne = "4";
            } else {
                numOne = numOne + "4";
            }
        } else if (operand != "") {
            if (numTwo === "") {
                numTwo = "4";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            } else if (numTwo != "" && answer === "") {
                numTwo = numTwo + "4";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            } else if (numTwo === "" && answer != "") {
                numTwo = "4";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            } else {
                numTwo = numTwo + "4";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            }
        }
    }
})

fiveBtn.addEventListener("click", (e) => {
    if (document.getElementById("screenTop").textContent.length < 24) {
        if (answer != "") {
            if (document.getElementById("screenBottom").textContent == answer) {
                document.getElementById("screenTop").textContent = "";
                document.getElementById("screenBottom").textContent = "";
                numOne = "";
                numTwo = "";
                operand = "";
                answer = "";
            }
        }

        populateDisplay(5);

        if (operand === "") {
            if (numOne === "") {
                numOne = "5";
            } else {
                numOne = numOne + "5";
            }
        } else if (operand != "") {
            if (numTwo === "") {
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
                numTwo = "5";
            } else if (numTwo != "" && answer === "") {
                numTwo = numTwo + "5";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            } else if (numTwo === "" && answer != "") {
                numTwo = "5";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            } else {
                numTwo = numTwo + "5";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            }
        }
    }
})

sixBtn.addEventListener("click", (e) => {
    if (document.getElementById("screenTop").textContent.length < 24) {
        if (answer != "") {
            if (document.getElementById("screenBottom").textContent == answer) {
                document.getElementById("screenTop").textContent = "";
                document.getElementById("screenBottom").textContent = "";
                numOne = "";
                numTwo = "";
                operand = "";
                answer = "";
            }
        }

        populateDisplay(6);

        if (operand === "") {
            if (numOne === "") {
                numOne = "6";
            } else {
                numOne = numOne + "6";
            }
        } else if (operand != "") {
            if (numTwo === "") {
                numTwo = "6";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            } else if (numTwo != "" && answer === "") {
                numTwo = numTwo + "6";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            } else if (numTwo === "" && answer != "") {
                numTwo = "6";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            } else {
                numTwo = numTwo + "6";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            }
        }
    }
})

sevenBtn.addEventListener("click", (e) => {
    if (document.getElementById("screenTop").textContent.length < 24) {
        if (answer != "") {
            if (document.getElementById("screenBottom").textContent == answer) {
                document.getElementById("screenTop").textContent = "";
                document.getElementById("screenBottom").textContent = "";
                numOne = "";
                numTwo = "";
                operand = "";
                answer = "";
            }
        }

        populateDisplay(7);

        if (operand === "") {
            if (numOne === "") {
                numOne = "7";
            } else {
                numOne = numOne + "7";
            }
        } else if (operand != "") {
            if (numTwo === "") {
                numTwo = "7";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            } else if (numTwo != "" && answer === "") {
                numTwo = numTwo + "7";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            } else if (numTwo === "" && answer != "") {
                numTwo = "7";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            } else {
                numTwo = numTwo + "7";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            }
        }
    }
})

eightBtn.addEventListener("click", (e) => {
    if (document.getElementById("screenTop").textContent.length < 24) {
        if (answer != "") {
            if (document.getElementById("screenBottom").textContent == answer) {
                document.getElementById("screenTop").textContent = "";
                document.getElementById("screenBottom").textContent = "";
                numOne = "";
                numTwo = "";
                operand = "";
                answer = "";
            }
        }

        populateDisplay(8);

        if (operand === "") {
            if (numOne === "") {
                numOne = "8";
            } else {
                numOne = numOne + "8";
            }
        } else if (operand != "") {
            if (numTwo === "") {
                numTwo = "8";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            } else if (numTwo != "" && answer === "") {
                numTwo = numTwo + "8";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            } else if (numTwo === "" && answer != "") {
                numTwo = "8";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            } else {
                numTwo = numTwo + "8";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            }
        }
    }
})

nineBtn.addEventListener("click", (e) => {
    if (document.getElementById("screenTop").textContent.length < 24) {
        if (answer != "") {
            if (document.getElementById("screenBottom").textContent == answer) {
                document.getElementById("screenTop").textContent = "";
                document.getElementById("screenBottom").textContent = "";
                numOne = "";
                numTwo = "";
                operand = "";
                answer = "";
            }
        }

        populateDisplay(9);

        if (operand === "") {
            if (numOne === "") {
                numOne = "9";
            } else {
                numOne = numOne + "9";
            }
        } else {
            if (numTwo === "" && answer === "") {
                numTwo = "9";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            } else if (numTwo != "" && answer === "") {
                numTwo = numTwo + "9";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            } else if (numTwo === "" && answer != "") {
                numTwo = "9";
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
            } else {
                numTwo = numTwo + "9";
                answer = (operand, parseFloat(numOne), parseFloat(numTwo));
            }
        }
    }
})

addBtn.addEventListener("click", (e) => {
    if (document.getElementById("screenTop").textContent.length < 24) {
        if (!isNaN(document.getElementById("screenTop").textContent.charAt(document.getElementById("screenTop").textContent.length - 1))) {
            if (document.getElementById("screenTop").textContent != "" && answer === "") {
                populateDisplay("+");
                operand = "+";
            }

            if (answer != "") {
                if (document.getElementById("screenBottom").textContent == answer) {
                    document.getElementById("screenTop").textContent = "";
                    document.getElementById("screenBottom").textContent = "";
                    populateDisplay(answer);
                    populateDisplay("+");
                    numOne = answer;
                    operand = "+";
                    numTwo = "";
                }
            }

            if (numOne != "" && operand != "" && numTwo != "") {
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
                document.getElementById("screenTop").textContent = "";
                populateDisplay(answer);
                populateDisplay("+");
                numOne = answer;
                operand = "+";
                numTwo = "";
            }
        }
    }
})


subtractBtn.addEventListener("click", (e) => {
    if (document.getElementById("screenTop").textContent.length < 24) {
        if (!isNaN(document.getElementById("screenTop").textContent.charAt(document.getElementById("screenTop").textContent.length - 1))) {
            if (document.getElementById("screenTop").textContent != "" && answer === "") {
                populateDisplay("-");
                operand = "-";
            }

            if (answer != "") {
                if (document.getElementById("screenBottom").textContent == answer) {
                    document.getElementById("screenTop").textContent = "";
                    document.getElementById("screenBottom").textContent = "";
                    populateDisplay(answer);
                    populateDisplay("-");
                    numOne = answer;
                    operand = "-";
                    numTwo = "";
                }
            }

            if (numOne != "" && operand != "" && numTwo != "") {
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
                document.getElementById("screenTop").textContent = "";
                populateDisplay(answer);
                populateDisplay("-");
                numOne = answer;
                operand = "-";
                numTwo = "";
            }
        }
    }
})

multiplyBtn.addEventListener("click", (e) => {
    if (document.getElementById("screenTop").textContent.length < 24) {
        if (!isNaN(document.getElementById("screenTop").textContent.charAt(document.getElementById("screenTop").textContent.length - 1))) {
            if (document.getElementById("screenTop").textContent != "" && answer === "") {
                populateDisplay("*");
                operand = "*";
            }
            if (answer != "") {
                if (document.getElementById("screenBottom").textContent == answer) {
                    document.getElementById("screenTop").textContent = "";
                    document.getElementById("screenBottom").textContent = "";
                    populateDisplay(answer);
                    populateDisplay("*");
                    numOne = answer;
                    operand = "*";
                    numTwo = "";
                }
            }

            if (numOne != "" && operand != "" && numTwo != "") {
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
                document.getElementById("screenTop").textContent = "";
                populateDisplay(answer);
                populateDisplay("*");
                numOne = answer;
                operand = "*";
                numTwo = "";
            }
        }
    }
})

divideBtn.addEventListener("click", (e) => {
    if (document.getElementById("screenTop").textContent.length < 24) {
        if (!isNaN(document.getElementById("screenTop").textContent.charAt(document.getElementById("screenTop").textContent.length - 1))) {
            if (document.getElementById("screenTop").textContent != "" && answer === "") {
                populateDisplay("/");
                operand = "/";
            }

            if (answer != "") {
                if (document.getElementById("screenBottom").textContent == answer) {
                    document.getElementById("screenTop").textContent = "";
                    document.getElementById("screenBottom").textContent = "";
                    populateDisplay(answer);
                    populateDisplay("/");
                    numOne = answer;
                    operand = "/";
                    numTwo = "";
                }
            }

            if (numOne != "" && operand != "" && numTwo != "") {
                answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
                document.getElementById("screenTop").textContent = "";
                populateDisplay(answer);
                populateDisplay("/");
                numOne = answer;
                operand = "/";
                numTwo = "";
            }
        }
    }
})

decimalBtn.addEventListener("click", (e) => {
    if (document.getElementById("screenTop").textContent.length < 24) {
        if (!isNaN(document.getElementById("screenTop").textContent.charAt(document.getElementById("screenTop").textContent.length - 1)) && document.getElementById("screenTop").textContent != "") {
            if (operand === "" && numOne.includes(".") == false) {
                numOne = numOne + ".";
                populateDisplay(".");
            } else if (operand != "" && numTwo.includes(".") == false) {
                numTwo = numTwo + ".";
                populateDisplay(".");
            }
        }
    }
})

equalsBtn.addEventListener("click", (e) => {
    if (numOne != "" && numTwo != "" && operand != "") {
        answer = operate(operand, parseFloat(numOne), parseFloat(numTwo));
        let splitAnswer = answer.toString().split(".");
        document.getElementById("screenBottom").textContent = answer;
    }
})

clearBtn.addEventListener("click", (e) => {
    document.getElementById("screenTop").textContent = "";
    document.getElementById("screenBottom").textContent = "";
    numOne = "";
    numTwo = "";
    operand = "";
    answer = "";
})

deleteBtn.addEventListener("click", (e) => {
    if (document.getElementById("screenBottom").textContent === "") {
        let newDisplay = document.getElementById("screenTop").textContent.substr(0, document.getElementById("screenTop").textContent.length - 1);
        document.getElementById("screenTop").textContent = newDisplay;
    } else {
        let newDisplay = document.getElementById("screenBottom").textContent.substr(0, document.getElementById("screenBottom").textContent.length - 1);
        document.getElementById("screenBottom").textContent = newDisplay;
    }
})

negativeBtn.addEventListener("click", (e) => {
    if (operand === "") {
        numOne = numOne - numOne * 2;
        document.getElementById("screenTop").textContent = numOne;
    } else if (operand != "" && numTwo != "") {
        numTwo = numTwo - numTwo * 2;
        document.getElementById("screenTop").textContent = numOne + operand + numTwo;
    }
})

