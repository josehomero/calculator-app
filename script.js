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
        currentNumber = null;
        secondNumber = null;
    }
});

const dotButton = document.getElementById('dot-button');
dotButton.addEventListener('click', function (e) {
    if (firstNumber === null || secondNumber === null) {
        firstNumber = '.';
        //secondNumber = '.';
        calcText(firstNumber);
        console.log(firstNumber);

    }
});

const operatorButtons = document.querySelectorAll('.operator-button');
operatorButtons.forEach(button => {
    button.addEventListener('click', e => {
        if ( operator === null) {
            operator = e.target.value;
            console.log(operator);
        } else if(operator !== null) {
            let result = arithmatic();
            calcText(result);
            operator = e.target.value;
            firstNumber = result;
        }

        currentNumber = null;
    });
});

const arithmatic = () => {
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
            break;
        default:
            console    
    }
    return answer;
}


const equalsButton = document.getElementById('equals-button');
equalsButton.addEventListener('click', function (e) {
const result = arithmatic()
calcText(result);
})