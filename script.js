const screen = document.getElementById('calculator-screen');

let firstNumber = null;
let secondNumber = null;
let operator = null;

function calcText(value) {
    screen.value = value;
}

const calculatorButtons = document.querySelectorAll('.calculator-button');
calculatorButtons.forEach(button => {
    button.addEventListener('click', e => {
        if (firstNumber != null) {
            firstNumber += e.target.value;
        } else {
            firstNumber = e.target.value;
        }
        calcText(firstNumber);

        //So I'm trying to make it so when one of the operator buttons
        // is clicked that it starts to store the numbers in the
        //secondNumber variable
        if (operator != null) {
            secondNumber=== e.target.value;
        }

        if (secondNumber != null) {
            secondNumber += e.target.value;
        } else {
            secondNumber = e.target.value;
        }
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


const equalsButton = document.getElementById('equals-button');
equalsButton.addEventListener('click', function (e) {
var add = document.getElementById('plus-button');
    add.addEventListener('click', function(e) {
        var sum = firstNumber + secondNumber;
        return sum;
        calcText(sum);
    })
})