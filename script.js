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

const operatorButtons= document.querySelectorAll('.operator-button');
operatorButtons.forEach(button => {
    button.addEventListener('click', e => {
        calcText(e.target.value);
    });
});


const equalsButton = document.getElementById('equals-button');
equalsButton.addEventListener('click', function(e) {
var num1 = screen.value[0];
var num2 =screen.value[2];
    var sum = num1 + num2;
    return sum;
    console.log(sum);
})