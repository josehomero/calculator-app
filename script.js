const screen = document.getElementById('calculator-screen');

let firstNumber = null;
let secondNumber = null;
let operator = null;
let answer = null;

function calcText(value) {
    screen.value = value;
}

const calculatorButtons = document.querySelectorAll('.calculator-button');
calculatorButtons.forEach(button => {
    button.addEventListener('click', e => {   
//! makes firstNumber false so secondNumber can be declared
        if(firstNumber=== null) {
            firstNumber = e.target.valu;
        } if else (firstNumber !== null) {
            secondNumber = e.target.value;
        }
        calcText(firstNumber);
        calcText(secondNumber);

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
        calcText(e.target.textContent);
    }
});

const operatorButtons = document.querySelectorAll('.operator-button');
operatorButtons.forEach(button => {
    button.addEventListener('click', e => {
        operator = e.target.value;
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
}


const equalsButton = document.getElementById('equals-button');
equalsButton.addEventListener('click', function (e) {
var add = document.getElementById('plus-button');
    add.addEventListener('click', function(e) {

    })
})