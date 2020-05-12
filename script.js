let firstNumber = null;
let secondNumber = null;
let currentNumber = null;
let operator = null;

const calculatorButtons = document.querySelectorAll('.calculator-button');
calculatorButtons.forEach(button => {
    button.addEventListener('click', e => {
        if (operator === null) {
            firstNumber = setNumber(firstNumber, e.target.textContent);
            setScreen(firstNumber);
        } else {
            secondNumber = setNumber(secondNumber, e.target.textContent);
            setScreen(secondNumber);
        }
    });
});

const clearButton = document.getElementById('ac-button');
clearButton.addEventListener('click', function (e) {
    firstNumber = null;
    secondNumber = null;
    operator = null;
    setScreen('0');
});

const dotButton = document.getElementById('dot-button');
dotButton.addEventListener('click', function (e) {
    if (operator === null) {
        firstNumber = addDecimal(firstNumber);
        setScreen(firstNumber);
    } else {
        secondNumber = addDecimal(secondNumber);
        setScreen(secondNumber);
    }
});

const operatorButtons = document.querySelectorAll('.operator-button');
operatorButtons.forEach(button => {
    button.addEventListener('click', e => {
          if (operator !== null) {
            let result = performArithmetic();
            setScreen(result);
            operator = e.target.textContent;
            firstNumber = result;
            secondNumber = null;
        }
        operator = e.target.textContent;
    });
});

const equalsButton = document.getElementById('equals-button');
equalsButton.addEventListener('click', function (e) {
    setScreen(performArithmetic());
})

function setScreen(value) {
    const screen = document.getElementById('calculator-screen');
    screen.value = value;
}

const performArithmetic = () => {
    switch (operator) {
        case '+':
            return parseFloat(firstNumber) + parseFloat(secondNumber);
        case '-':
            return parseFloat(firstNumber) - parseFloat(secondNumber);
        case '/':
            return parseFloat(firstNumber) / parseFloat(secondNumber);
        case '*':
            return parseFloat(firstNumber) * parseFloat(secondNumber);
        default:
            console.log('No operator');
    }
}

function setNumber(numberToModify, number) {
    if (numberToModify === null) {
        return number;
    } else {
        return numberToModify + number;
    }
}

function addDecimal(number) {
    if (number.includes('.')) {
        return number
    }
    if (number !== null) {
        return number + '.'
    } else {
        return '.';
    }
}