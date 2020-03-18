const button = document.querySelector('button');
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
if(e.target.className === 'calculator-button') {
    screen.value = '';
}
});

const dotButton = document.getElementById('dot-button');
dotButton.addEventListener('click', function(e) {
    if(e.target.textContent.includes('.')) {
        console.log(dotButton);
    }
});