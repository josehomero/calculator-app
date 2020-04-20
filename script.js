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

        if(operator === null) {
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
        screen.value = '';
    }
});

const dotButton = document.getElementById('dot-button');
dotButton.addEventListener('click', function (e) {
    if (screen.value.includes('.') === false) {
        calcText(e.target.value);
    }
});

const operatorButtons = document.querySelectorAll('.operator-button');
operatorButtons.forEach(button => {
    button.addEventListener('click', e => {
        if ( firstNumber !== null) {
            operator = e.target.value;
            console.log(operator);
            secondNumber = currentNumber;
        }
        currentNumber = null;
    });
});

const arithmatic = (num1, num2) => {
    switch(operator){
        case '+':
            answer = parseInt(firstNumber) + parseInt(secondNumber);
            break;
        case '-':
            answer = parseInt(firstNumber) - parseInt(secondNumber);
            break;
        case '/':
            answer = parseInt(firstNumber) / parseInt(secondNumber);
            break;
        case '*':
            answer = parseInt(firstNumber) * parseInt(secondNumber);    
    }
    return answer;
}


const equalsButton = document.getElementById('equals-button');
equalsButton.addEventListener('click', function (e) {
const result = arithmatic(firstNumber, secondNumber)
calcText(result);
})