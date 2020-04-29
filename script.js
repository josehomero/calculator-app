const screen = document.getElementById('calculator-screen');

let firstNumber = null;
let secondNumber = null;
let currentNumber = null;
let operator = null;
let answer = null;

function calcText(value) {
    screen.value = value;
}

const calculatorButtons = document.querySelectorAll('.calculator-button');
calculatorButtons.forEach(button => {
    button.addEventListener('click', e => {
        if (currentNumber === null) {
            currentNumber = e.target.value;
        } else {
            currentNumber += e.target.value;
        }

        if (operator === null) {
            firstNumber = currentNumber;
        } else {
            secondNumber = currentNumber;
        }

        calcText(currentNumber);
    });
});

const clearButton = document.getElementById('ac-button');
clearButton.addEventListener('click', function (e) {
    if (e.target.className === 'clear-button') {
        while (currentNumber > 0) {
            currentNumber--;
        }
        currentNumber = null;
        calcText(currentNumber);
    }
});

const dotButton = document.getElementById('dot-button');
dotButton.addEventListener('click', function (e) {
    let dot = e.target.value;
    console.log(firstNumber);

    if (currentNumber.includes(dot)) {
        dot = '';
    }

    if (operator === null) {
        if (currentNumber !== null) {
            currentNumber += dot;
            firstNumber = currentNumber;
            calcText(firstNumber);
        } else {
            currentNumber = '.';
            firstNumber = currentNumber;
            calcText(firstNumber);
        }
    } else {
        if (currentNumber !== null) {
            currentNumber += dot;
            secondNumber = currentNumber;
            calcText(secondNumber);
        } else {
            currentNumber = '.';
            secondNumber = currentNumber;
            calcText(secondNumber);
        }
    }
});

const operatorButtons = document.querySelectorAll('.operator-button');
operatorButtons.forEach(button => {
    button.addEventListener('click', e => {
        if (operator === null) {
            operator = e.target.value;
        } else if (operator !== null) {
            let result = arithmatic();
            calcText(result);
            operator = e.target.value;
            firstNumber = result;
        }

        currentNumber = null;
    });
});

const arithmatic = () => {
    switch (operator) {
        case '+':
            answer = parseFloat(firstNumber) + parseFloat(secondNumber);
            break;
        case '-':
            answer = parseFloat(firstNumber) - parseFloat(secondNumber);
            break;
        case '/':
            answer = parseFloat(firstNumber) / parseFloat(secondNumber);
            break;
        case '*':
            answer = parseFloat(firstNumber) * parseFloat(secondNumber);
            break;
        default:
            console.log('No operator');
    }
    return answer;
}


const equalsButton = document.getElementById('equals-button');
equalsButton.addEventListener('click', function (e) {
    const result = arithmatic()
    calcText(result);
})