const screen = document.getElementById('calculator-screen');

const button = document.querySelector('button');

const button1 = document.getElementById('number-button');

const calculatorButtons = document.querySelectorAll('.calculator-button');
for(const buttons of calculatorButtons) {
    buttons.addEventListener('click', function(e) {
        console.log(e.target.textContent);
    });
}


