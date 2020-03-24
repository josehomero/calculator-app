const screen = document.getElementById('calculator-screen');

function calcText(value) {
    screen.value = value + screen.value;
}

const calculatorButtons = document.querySelectorAll('.calculator-button');
calculatorButtons.forEach(button => {
    button.addEventListener('click', e => {
        calcText(e.target.value);
    });
});

const clearButton = document.getElementById('ac-button');
clearButton.addEventListener('click', function(e) {
if(e.target.className === 'clear-button') {
    screen.value = '';
}
});

const dotButton = document.getElementById('dot-button');
dotButton.addEventListener('click', function(e) {
    if(screen.value.includes('.') === false) {
        calcText(e.target.textContent);
    }
});

const plusButton = document.getElementById('plus-button');
const minusButton = document.getElementById('minus-button');
const timesButton = document.getElementById('times-button');
const divideButton = document.getElementById('divide-button');


const equalsButton = document.getElementById('equals-button');
equalsButton.addEventListener('click', function(e) {

})