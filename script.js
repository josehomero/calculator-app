const button = document.querySelector('button');

function calcText(value) {
    const screen = document.getElementById('calculator-screen');
    screen.value = value + screen.value;
}

const calculatorButtons = document.querySelectorAll('.calculator-button');
calculatorButtons.forEach(button => {
    button.addEventListener('click', e => {
        calcText(e.target.value);
    });
});
